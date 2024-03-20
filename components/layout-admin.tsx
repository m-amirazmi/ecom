"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import { Button } from "./ui/button";
import { LayoutProps } from "@/types/layout.types";

const sideWidth = 280;

export default function LayoutAdmin({ children }: LayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState(sideWidth);

  const handleSidebar = () => {
    if (sidebarWidth > 0) setSidebarWidth(0);
    else setSidebarWidth(sideWidth);
  };
  return (
    <main>
      <Sidebar sideWidth={sideWidth} sidebarWidth={sidebarWidth} />
      <div
        className="bg-accent min-h-screen w-full transition-all duration-500 ease-out"
        style={{ paddingLeft: sidebarWidth + 24 }}
      >
        <Button onClick={handleSidebar}>Hide</Button>
        {children}
      </div>
    </main>
  );
}
