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



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App; 