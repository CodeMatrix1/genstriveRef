import React from "react";
import Everything from "../components/Everything";
import Testimonials from "../components/Testimonials";
import LaunchPage from "../components/LaunchPage";
import Navbar from "../components/Navbar";
import Steps from "../components/Steps";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px]">
        <Navbar />
        <LaunchPage />
        <Everything />
        <Steps />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage; 