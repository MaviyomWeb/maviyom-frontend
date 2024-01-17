"use client";

import { useState } from "react";
import Content from "./components/Content";
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

// Main Page component
const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative isolate z-0pb-10 md:pb-20 mt-[62.5px] md:mt-[73px]">
      {/* Header */}
      <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
        <Logo isSidebarOpen={isSidebarOpen} />
        {/* SPACER */}
        <div className="grow h-full flex items-center justify-center"></div>
        <Profile />
      </div>

      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Content */}
      <Content isSidebarOpen={isSidebarOpen}></Content>
    </div>
  );
};

export default Page;
