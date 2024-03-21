"use client";

import { LayoutProps } from "@/types/layout.types";
import { useState } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";
import Header from "./header";
import Sidebar from "./sidebar";
import { cn } from "@/lib/utils";

const sideWidth = 280;

export default function LayoutAdmin({ children }: LayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const [width] = useWindowSize();
  const isMobile = width < 768;

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
      <div
        className={cn(
          "block bg-background min-h-screen transition-all duration-500 ease-out md:blur-none",
          sidebarWidth > 0 ? "blur-sm" : "blur-none"
        )}
        onClick={sidebarWidth > 0 ? handleSidebar : () => {}}
      >
        <Header sidebarWidth={sidebarWidth} handleSidebar={handleSidebar} />
        <div
          className="pt-16 transition-all duration-500 ease-out"
          style={{ paddingLeft: !isMobile ? sidebarWidth : 0 }}
        >
          <div className="p-8">{children}</div>
        </div>
      </div>
    </>
  );
}
