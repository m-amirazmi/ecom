import { cn } from "@/lib/utils";
import { HeaderProps } from "@/types/header.types";
import { ArrowRightFromLine } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header({ sidebarWidth, handleSidebar }: HeaderProps) {
  return (
    <div
      className="fixed h-16 bg-background border-b border-border/40 w-full transition-all duration-500 ease-out"
      style={{ paddingLeft: sidebarWidth }}
    >
      <div className="flex items-center h-full px-6">
        <Button
          variant="ghost"
          size="icon"
          className={cn(sidebarWidth === 0 ? "opacity-100" : "opacity-0")}
          onClick={handleSidebar}
        >
          {sidebarWidth === 0 && <ArrowRightFromLine size={18} />}
        </Button>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
