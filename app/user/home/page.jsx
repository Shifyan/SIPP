"use client";
import { useState } from "react";
import { HiHome, HiChartSquareBar } from "react-icons/hi"; // Import icons from react-icons library
import SideBar from "@/app/components/sidebar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <SideBar isOpen={isOpen}></SideBar>
      <div className="flex-1">
        {/* Main content */}
        {!isOpen && (
          <button
            className="bg-gray-600 text-white p-2 m-4 rounded-md"
            onClick={toggleSidebar}
          >
            Open Sidebar
          </button>
        )}
        {isOpen && (
          <button
            className="bg-gray-600 text-white p-2 m-4 rounded-md"
            onClick={toggleSidebar}
          >
            Close Sidebar
          </button>
        )}
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Main Content</h1>
          <p className="mt-4">This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
