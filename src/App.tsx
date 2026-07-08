import Homepage from "./pages/Homepage";
import Apple from "./components/courseCategory/Apple";
import Autodesk from "./components/courseCategory/Autodesk";
import Ccs from "./components/courseCategory/Ccs";
import Cisco from "./components/courseCategory/Cisco";
import Ic3 from "./components/courseCategory/Ic3";
import Intuit from "./components/courseCategory/Intuit";
import ItSpecialist from "./components/courseCategory/ItSpecialist";
import Mcf from "./components/courseCategory/Mcf";
import Mos from "./components/courseCategory/Mos";
import Unity from "./components/courseCategory/Unity";
import CourseCategory from "./pages/CourseCategory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdobeAbrocat from "./pages/Productpage/AdobeAbrocat";
import CartPage from "./pages/CartPage";
import Navbar from "./components/navbar/Navbar";
import AuthCard from "./components/auth/AuthCard";
import { useAuth } from "./components/auth/AuthContext";
import StateCityCard from "./components/cart/StateCityCard";
import Dashboard from "./dashboard/Dashboard";
import Ibm from "./components/courseCategory/Ibm";
import PartnerWithUs from "./pages/PartnerWithUs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndContidions";
import RefundPolicy from "./pages/RefundPolicy";
import SearchPage from "./pages/SearchPage";
import PaymentVerification from "./pages/PaymentVerification";
import ScrollToTop from "./components/ScrollToTop";
import Aiibm from "./pages/Productpage/Ibm/Aiibm";
import CertificationsPage from "./pages/CertificationsPage";
import CoursesPage from "./pages/CoursesPage";
import DataScience from "./pages/Productpage/Ibm/DataScience";
import CourseDetails from "./pages/Productpage/Ibm/CourseDetails";
import Rolebased from "./pages/RoleBased/Rolebased";
import Mcp from "./components/courseCategory/Mcp";

const App = () => {
  const { isAuthOpen } = useAuth();
  return (
    <div>
      <Router>
          <Navbar />

          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/adobe" element={<CourseCategory />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/autodesk" element={<Autodesk />} />
          <Route path="/cisco" element={<Cisco />} />
          <Route path="/criticalcareerskills" element={<Ccs />} />
          <Route path="/ic3" element={<Ic3 />} />
          <Route path="/itspecialist" element={<ItSpecialist />} />
          <Route path="/intuit" element={<Intuit />} />
          <Route path="/ibm" element={<Ibm />} />
          <Route path="/mcf" element={<Mcf />} />
          <Route path="/mos" element={<Mos />} />
          <Route path="/unity" element={<Unity />} />
          <Route path="/:courseId" element={<AdobeAbrocat/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/state" element={<StateCityCard />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/partnerwithus" element={<PartnerWithUs/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsandconditions" element={<TermsAndConditions/>} />
          <Route path="/refundpolicy" element={<RefundPolicy/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/paymentVerification" element={<PaymentVerification/>} />
          <Route path="/ai" element={<Aiibm/>} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/datascience" element={<DataScience/>} />
          <Route path="/ibm/:slug" element={<CourseDetails />} />
          <Route path="/rolebased/:courseId" element={<Rolebased />} />
          <Route path="/mcp" element={<Mcp />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          {/* Add more routes as needed */}
        </Routes>
        {isAuthOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <AuthCard />
        </div>
      )}
      </Router>
    </div>
  );
};

export default App;
