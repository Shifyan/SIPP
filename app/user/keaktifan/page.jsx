"use client";
import { useState } from "react";
import SideBar from "@/app/components/sidebar";
import UserHeader from "@/app/components/userHeader";
const Keaktifan = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <SideBar isOpen={isOpen}></SideBar>
      <div className="flex-1">
        <UserHeader isOpen={isOpen} toggleSidebar={toggleSidebar}></UserHeader>
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Main Content</h1>
          <p className="mt-4">This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default Keaktifan;
