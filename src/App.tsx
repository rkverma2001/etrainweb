import { lazy, Suspense, useState } from "react";
import Homepage from "./pages/Homepage";
const Apple = lazy(() => import("./components/courseCategory/Apple"));
const Autodesk = lazy(() => import("./components/courseCategory/Autodesk"));
const Ccs = lazy(() => import("./components/courseCategory/Ccs"));
const Cisco = lazy(() => import("./components/courseCategory/Cisco"));
const Ic3 = lazy(() => import("./components/courseCategory/Ic3"));
const Intuit = lazy(() => import("./components/courseCategory/Intuit"));
const ItSpecialist = lazy(() => import("./components/courseCategory/ItSpecialist"));
const Mcf = lazy(() => import("./components/courseCategory/Mcf"));
const Mos = lazy(() => import("./components/courseCategory/Mos"));
const Unity = lazy(() => import("./components/courseCategory/Unity"));
const CourseCategory = lazy(() => import("./pages/CourseCategory"));
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AdobeAbrocat = lazy(() => import("./pages/Productpage/AdobeAbrocat"));
const CartPage = lazy(() => import("./pages/CartPage"));
import Navbar from "./components/navbar/Navbar";
import AuthCard from "./components/auth/AuthCard";
import { useAuth } from "./components/auth/AuthContext";
import NotFound from "./pages/NotFound";
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Ibm = lazy(() => import("./components/courseCategory/Ibm"));
const PartnerWithUs = lazy(() => import("./pages/PartnerWithUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndContidions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const PaymentVerification = lazy(() => import("./pages/PaymentVerification"));
import ScrollToTop from "./components/ScrollToTop";
const Aiibm = lazy(() => import("./pages/Productpage/Ibm/Aiibm"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const DataScience = lazy(() => import("./pages/Productpage/Ibm/DataScience"));
const CourseDetails = lazy(() => import("./pages/Productpage/Ibm/CourseDetails"));
const Rolebased = lazy(() => import("./pages/RoleBased/Rolebased"));
const Mcp = lazy(() => import("./components/courseCategory/Mcp"));
const Aws = lazy(() => import("./components/courseCategory/Aws"));
const TallyPage = lazy(() => import("./pages/Productpage/Tally/TallyPage"));
const Tally = lazy(() => import("./components/courseCategory/Tally"));
const BoaPage = lazy(() => import("./pages/BoaPage"));
const PurchaseReport = lazy(() => import("./pages/PurchaseReport"));

const App = () => {
  const { isAuthOpen } = useAuth();
  const [showOffer, setShowOffer] = useState(true);
  return (
    <div>
      <Router>
      <Navbar
        showOffer={showOffer}
        setShowOffer={setShowOffer}
      />


  <ScrollToTop />

  <main
        className={`
          transition-[padding] duration-300
          ${showOffer ? "pt-12" : "pt-0"}
        `}
      >
    <Suspense fallback={<div className="min-h-[60vh]" />}>
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
      <Route path="/:courseId" element={<AdobeAbrocat />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/partnerwithus" element={<PartnerWithUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/refundpolicy" element={<RefundPolicy />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/paymentVerification" element={<PaymentVerification />} />
      <Route path="/ai" element={<Aiibm />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/datascience" element={<DataScience />} />
      <Route path="/ibm/:slug" element={<CourseDetails />} />
      <Route path="/rolebased/:courseId" element={<Rolebased />} />
      <Route path="/mcp" element={<Mcp />} />
      <Route path="/aws" element={<Aws />} />
      <Route path="/tally" element={<Tally />} />
      <Route path="/tally/:slug" element={<TallyPage />} />
      <Route path="/globalcertifications" element={<BoaPage />} />
      <Route
        path="/adminetrainusersonly"
        element={<PurchaseReport />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  </main>

  {isAuthOpen && (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-4 overflow-y-auto">
      <AuthCard />
    </div>
  )}
</Router>
    </div>
  );
};

export default App;
