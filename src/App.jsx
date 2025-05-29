import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  LandingPage  from "./pages/LandingPage.jsx";
import  StudentDashboard  from "./pages/StudentDashboard.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Support from "./pages/Support.jsx";
import Legal from "./pages/Legal.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import TwoFactorSignup from "./pages/TwoFactorSignUp.jsx";
import TwoFactorForgotPassword from "./pages/TwoFactorForgotPassword.jsx";
import GenerateTest from "./pages/GenerateTest.jsx";
import TestPreview from "./pages/TestPreview.jsx";
import TestResult from "./pages/TestResult.jsx";




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/two-factor-signup" element={<TwoFactorSignup />} />
        <Route path="/two-factor-forgot-password" element={<TwoFactorForgotPassword />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/support" element={<Support />} />
        <Route path="/generate-test" element={<GenerateTest />} />
        <Route path="/test-preview" element={<TestPreview />} />
        <Route path="/test-result" element={<TestResult />} />
      </Routes>
    </Router>
  );
}

export default App; 