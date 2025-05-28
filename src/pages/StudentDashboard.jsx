import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';


const StudentDashboard = () => {
  const [name, setName] = useState("John Doe"); // Initialize with default name

  // Function to update the name
  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar2 />
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar />
        <MainContent name={name} onNameChange={updateName} />
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
