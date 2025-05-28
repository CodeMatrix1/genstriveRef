import React from "react";
import  LandingPage  from "./pages/LandingPage.jsx";
import  StudentDashboard  from "./pages/StudentDashboard.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import ResultPage from "./pages/ResultPage.jsx";



function App() {
  return (
    <div>
      <LandingPage />
      <StudentDashboard /> 
      <AdminPanel />
      <ResultPage />
    </div>
  );
}

export default App; 