"use client";
import { useState } from "react";
import { HiHome, HiChartSquareBar } from "react-icons/hi"; // Import icons from react-icons library

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-1">
      {/* Main content */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4">
          {/* Icon-only mode */}
          <button
            className="bg-gray-600 text-white p-2 rounded-full"
            onClick={toggleSidebar}
          >
            <HiHome className="text-2xl" />
          </button>
        </div>
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
  );
};

export default Sidebar;
