import { cn } from "@/lib/utils";
import { HeaderProps } from "@/types/header.types";
import { ArrowRightFromLine } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Header({ sidebarWidth, handleSidebar }: HeaderProps) {
  return (
    <div
      className="fixed h-16 bg-background dark:bg-accent shadow w-full transition-all duration-500 ease-out"
      style={{ paddingLeft: sidebarWidth }}
    >
      <div className="flex items-center h-full px-6">
        <button
          className={cn(
            "transition-all  duration-500 text-slate-300 hover:text-primary ease-out",
            sidebarWidth === 0 ? "opacity-100" : "opacity-0"
          )}
          onClick={handleSidebar}
        >
          {sidebarWidth === 0 && <ArrowRightFromLine />}
        </button>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
