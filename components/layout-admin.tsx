"use client";

import { LayoutProps } from "@/types/layout.types";
import {
  MoveLeft,
  MoveRight,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const sideWidth = 280;

export default function LayoutAdmin({ children }: LayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState(sideWidth);

  const handleSidebar = () => {
    if (sidebarWidth > 0) setSidebarWidth(0);
    else setSidebarWidth(sideWidth);
  };
  return (
    <main>
      <Sidebar
        sideWidth={sideWidth}
        sidebarWidth={sidebarWidth}
        handleSidebar={handleSidebar}
      />
      <div className="bg-background min-h-screen transition-all duration-500 ease-out">
        <Header sidebarWidth={sidebarWidth} handleSidebar={handleSidebar} />
        <div
          className="pt-16 transition-all duration-500 ease-out"
          style={{ paddingLeft: sidebarWidth }}
        >
          <div className="p-8">{children}</div>
        </div>
      </div>
    </main>
  );
}
