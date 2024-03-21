"use client";

import { LayoutProps } from "@/types/layout.types";
import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";
import Header from "./header";
import Sidebar from "./sidebar";
import { cn } from "@/lib/utils";

const sideWidth = 280;

export default function LayoutAdmin({ children }: LayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const [width] = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    if (isMobile) setSidebarWidth(0);
    else setSidebarWidth(sideWidth);
  }, [isMobile]);

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
          "relative block bg-background min-h-screen transition-all duration-500 ease-out md:blur-none",
          sidebarWidth > 0 ? "blur-sm" : "blur-none"
        )}
        onClick={isMobile && sidebarWidth > 0 ? handleSidebar : () => {}}
      >
        <Header sidebarWidth={sidebarWidth} handleSidebar={handleSidebar} />
        <div
          className="transition-all duration-500 ease-out"
          style={{ paddingLeft: !isMobile ? sidebarWidth : 0 }}
        >
          <div className="p-4 md:p-8">{children}</div>
        </div>
      </div>
    </>
  );
}
