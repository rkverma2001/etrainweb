import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-slate-100 pt-10">
      
      {/* Logo + Social */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-10">
        
        {/* LOGO */}
        <div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-4">
            <img
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/logo.webp"  // Change if path differs
              alt="EtrainIndia Logo"
              className="h-12 object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter X" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-md bg-gray-700 flex items-center justify-center hover:bg-emerald-500/20 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="max-w-md">
          <h3 className="text-lg font-semibold">Best Kept Secrets ✨</h3>
          <p className="text-sm text-slate-300 mt-2">
            Be the first to know about programs, certifications and exclusive career updates.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-700 border border-slate-700 rounded-lg py-3 px-4 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 mt-10 rounded-t-2xl" />

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        <div>
          <h4 className="font-semibold mb-3">Popular Programs</h4>
          <ul className="space-y-2 text-slate-300">
            <li>IBM Certified Data Analyst</li>
            <li>Data Science & AI</li>
            <li>Cloud & DevOps</li>
            <li>Full Stack Development</li>
            <li>Cyber Security</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Certifications</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/mos">Microsoft Office Specialist</Link></li>
            <li><Link to="/autodesk">Autodesk Certified User</Link></li>
            <li><Link to="/adobe">Adobe Certified Professional</Link></li>
            <li><Link to="/ibm">IBM Certifications</Link></li>
            <li><Link to="/aws">AWS Cloud Certifications</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/refundpolicy">Refund Policy</Link></li>
            <li><Link to="/termsandconditions">Terms & Conditions</Link></li>
            <li><Link to="/partnerwithus">Partner with Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between">
          <p>© 2026 EtrainIndia Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacypolicy">Privacy Policy</Link>
            <Link to="/refundpolicy">Refund Policy</Link>
            <Link to="/termsandconditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
