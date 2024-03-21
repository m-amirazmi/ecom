import { sidebarLinks } from "@/lib/sidebar-links-list";
import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types/sidebar.types";
import { ArrowLeftFromLine, Bell, Settings } from "lucide-react";
import SidebarLinks from "./sidebar-links";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";

export default function Sidebar({
  sideWidth,
  sidebarWidth,
  handleSidebar,
}: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed h-screen border-r border-border/40 bg-background top-0 transition-transform duration-500 ease-out z-10",
        sidebarWidth > 0 ? "translate-x-0" : "-translate-x-full"
      )}
      style={{ width: sideWidth }}
    >
      <div className="h-16 border-b border-border/40 flex items-center pl-6 md:pr-4">
        <div className="text-2xl">NextJS Ecom</div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "ml-auto md:flex hidden",
            sidebarWidth > 0 ? "opacity-100" : "opacity-0"
          )}
          onClick={handleSidebar}
        >
          {sidebarWidth > 0 && <ArrowLeftFromLine size={18} />}
        </Button>
      </div>
      <div className="pt-2 pr-2 pb-2 pl-2 md:pt-6 md:pr-6 md:pb-6 md:pl-6">
        <div className="flex flex-col gap-2">
          <SidebarLinks links={sidebarLinks} handleSidebar={handleSidebar} />
        </div>
      </div>
      <Separator className="bg-border/40" />
      <div className="px-4 md:px-8 py-4 flex items-center ">
        <Button size="icon" variant="ghost">
          <Settings size={18} />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell size={18} />
        </Button>
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "ml-auto flex md:hidden",
            sidebarWidth > 0 ? "opacity-100" : "opacity-0"
          )}
          onClick={handleSidebar}
        >
          {sidebarWidth > 0 && <ArrowLeftFromLine size={18} />}
        </Button>
      </div>
    </div>
  );
}
