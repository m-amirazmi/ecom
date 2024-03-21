"use client";

import { LayoutProps } from "@/types/layout.types";
import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const sideWidth = 280;

export default function LayoutAdmin({ children }: LayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const handleSidebar = () => {
    if (sidebarWidth > 0) setSidebarWidth(0);
    else setSidebarWidth(sideWidth);
  };
  return (
    <>
      <Sidebar
        sideWidth={sideWidth}
        sidebarWidth={sidebarWidth}
        handleSidebar={handleSidebar}
      />
      <div className="hidden md:block bg-background min-h-screen transition-all duration-500 ease-out">
        <Header sidebarWidth={sidebarWidth} handleSidebar={handleSidebar} />
        <div
          className="pt-16 transition-all duration-500 ease-out"
          style={{ paddingLeft: sidebarWidth }}
        >
          <div className="p-8">{children}</div>
        </div>
      </div>
      <div className="md:hidden h-screen w-full flex items-center justify-center">
        <p className="text-2xl">Mobile View WIP</p>
      </div>
    </>
  );
}
