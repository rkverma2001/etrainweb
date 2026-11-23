import { useEffect, useRef, useState } from "react";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useCart } from "../cart/CartContext";
import DropdownWrapper from "./coursedropdown/DropdownWrapper";
import SuggestionDropdown from "./search/SuggestionDropdown";
import api from "@/services/api";
import MobileCourseDropdown from "./coursedropdown/MobileCourseDropdown";
import TopOfferBar from "./popup/TopOfferBar";

interface NavbarProps {
  showOffer: boolean;
  setShowOffer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  showOffer,
  setShowOffer,
}) => {
  const { openAuth, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Search states
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setIsCoursesOpen(false);
    }
  }, [location]);

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setSuggestions([]);
      setIsSuggestionsOpen(false);
      return;
    }

    // debounce
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      fetchSuggestions(query);
    }, 250); // 250ms debounce
  }, [query]);

  const fetchSuggestions = async (q: string) => {
    try {
      const { data } = await api.get("/course/search", {
        params: {
          q,
        },
      });

      const items = data.map((course: any) => ({
        id: course._id,
        title: course.courseName || course.tabData?.Bundle?.title || "",
        code: course.courseCode,
        image:
          course.tabData?.Bundle?.image ||
          course.tabData?.Courseware?.image ||
          undefined,
      }));

      setSuggestions(items);
      setIsSuggestionsOpen(items.length > 0);
    } catch (err) {
      console.error("suggestion fetch error", err);
      setSuggestions([]);
      setIsSuggestionsOpen(false);
    }
  };

  const onSubmitSearch = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    const q = query.trim();
    if (!q) return;
    setIsSuggestionsOpen(false);
    // navigate to search page with query param
    navigate(`/search?q=${encodeURIComponent(q)}`);
    // optional: reset search input or keep it as-is
    // setQuery("");
  };

  const onSuggestionClick = (value: string) => {
    setQuery(value);
    setIsSuggestionsOpen(false);
    navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      {showOffer && (
        <div className="fixed top-0 left-0 w-full z-[60]">
          <TopOfferBar onClose={() => setShowOffer(false)} />
        </div>
      )}
      <nav
        className={`
        w-full
        bg-white
        fixed
        left-0
        z-50
        h-20
        px-4
        sm:px-6
        md:px-10
        transition-all
        duration-300
        ${showOffer ? "top-[44px]" : "top-0"}
      `}
      >
        <div className="h-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="h-full flex items-center">
            <img
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/logo.gif"
              alt="EtrainIndia"
              className="h-12 sm:h-14 object-contain"
            />
          </Link>

          {/* Courses Dropdown */}
          <div
            className="relative group hidden lg:block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="px-3 xl:px-4 py-2 whitespace-nowrap font-medium rounded-md border border-transparent hover:border-[#008641] hover:text-[#008641] transition duration-200">
              Courses | Certifications
            </button>
            {isDropdownOpen && <DropdownWrapper />}
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex gap-2 xl:gap-4 items-center">
            <form
              onSubmit={onSubmitSearch}
              className="flex flex-row relative gap-2 xl:gap-4"
            >
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() =>
                  query.length >= 2 &&
                  setIsSuggestionsOpen(suggestions.length > 0)
                }
                onBlur={() => {
                  // delay closing to allow click
                  setTimeout(() => setIsSuggestionsOpen(false), 150);
                }}
                type="text"
                placeholder="Search Courses..."
                className="w-40 xl:w-56 border rounded-md p-2 hover:ring-2 hover:ring-[#008641] focus:ring-2 focus:ring-[#008641] focus:outline-none transition duration-200"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                onClick={() => onSubmitSearch()}
                className="hover:ring-2 hover:ring-[#008641] focus:ring-2 focus:ring-[#008641] focus:outline-none transition duration-200 hover:bg-transparent"
              >
                <Search className="h-6 w-6" />
              </Button>

              {isSuggestionsOpen && (
                <SuggestionDropdown
                  items={suggestions}
                  onSelect={(val) => onSuggestionClick(val)}
                />
              )}
            </form>
          </div>

          {/* Right-side */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              to="/"
              className="hidden lg:flex whitespace-nowrap text-sm xl:text-base font-medium hover:text-[#008641]"
            >
              Home
            </Link>
            <Link
              to="/partnerwithus"
              className="hidden lg:flex whitespace-nowrap text-sm xl:text-base font-medium hover:text-[#008641]"
            >
              Partner with Us
            </Link>

            <Link
              to="/cart"
              aria-label={cartCount > 0 ? `Cart, ${cartCount} item${cartCount > 1 ? "s" : ""}` : "Cart"}
              className="relative"
            >
              <Button
                variant="ghost"
                size="icon"
                tabIndex={-1}
                className="hover:ring-2 hover:ring-[#008641] focus:ring-2 focus:ring-[#008641] focus:outline-none transition duration-200 hover:bg-transparent cursor-pointer"
              >
                <ShoppingCart className="h-6 w-6" />
              </Button>
              {cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#008641] text-white text-[11px] font-semibold leading-5 text-center ring-2 ring-white pointer-events-none"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Profile Dropdown (on hover) */}
            {isAuthenticated ? (
              <div
                className="relative"
                onMouseEnter={() => setIsProfileDropdownOpen(true)}
                onMouseLeave={() => setIsProfileDropdownOpen(false)}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:ring-2 hover:ring-[#008641] focus:ring-2 cursor-pointer focus:ring-[#008641] hover:bg-transparent"
                >
                  <User className="h-6 w-6 text-[#008641]" />
                </Button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 w-40 bg-white mt-[1px] rounded-lg shadow-lg border border-gray-100 p-2 flex flex-col z-50">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-sm justify-start cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        navigate("/dashboard");
                        setIsProfileDropdownOpen(false);
                      }}
                    >
                      <LayoutDashboard className="h-4 w-4" /> Dashboard
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-sm justify-start hover:bg-gray-100 cursor-pointer text-red-600"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={openAuth}
                variant="outline"
                className="hidden lg:flex whitespace-nowrap items-center gap-2 hover:ring-2 hover:ring-[#008641] focus:ring-2 focus:ring-[#008641] focus:outline-none transition duration-200 hover:bg-transparent hover:text-inherit border-[#e5e7eb] cursor-pointer"
              >
                <User className="h-5 w-5" /> Login / Signup
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-md shadow-md px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/partnerwithus"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium"
            >
              Partner with Us
            </Link>
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="w-full flex items-center justify-between text-base font-medium"
              >
                <span>Courses | Certifications</span>

                <svg
                  className={`w-4 h-4 transition-transform ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCoursesOpen && (
                <div className="mt-3 ml-2 border-l-2 border-[#008641] pl-3">
                  <MobileCourseDropdown />
                </div>
              )}
            </div>
            <Link
              to="/contactus"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium"
            >
              Contact Us
            </Link>
            <div className="relative w-full">
              <form
                onSubmit={onSubmitSearch}
                className="flex items-center gap-2"
              >
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() =>
                    query.length >= 2 &&
                    setIsSuggestionsOpen(suggestions.length > 0)
                  }
                  onBlur={() => {
                    setTimeout(() => setIsSuggestionsOpen(false), 150);
                  }}
                  type="text"
                  placeholder="Search Courses..."
                  className="w-full border rounded-md p-2 hover:ring-2 hover:ring-[#008641] focus:ring-2 focus:ring-[#008641] focus:outline-none transition duration-200"
                />

                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  onClick={() => onSubmitSearch()}
                  className="hover:ring-2 hover:ring-[#008641] focus:ring-2 focus:ring-[#008641] focus:outline-none transition duration-200 hover:bg-transparent"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </form>

              {isSuggestionsOpen && (
                <SuggestionDropdown
                  items={suggestions}
                  onSelect={(val) => onSuggestionClick(val)}
                />
              )}
            </div>
            {isAuthenticated ? (
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/dashboard");
                  }}
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LayoutDashboard className="h-5 w-5" /> Dashboard
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 cursor-pointer text-red-600"
                >
                  <LogOut className="h-5 w-5" /> Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openAuth();
                }}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 cursor-pointer"
              >
                <User className="h-5 w-5" /> Login / Signup
              </Button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
