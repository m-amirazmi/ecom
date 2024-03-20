import { sidebarLinks } from "@/lib/sidebar-links-list";
import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types/sidebar.types";
import { ArrowLeftFromLine } from "lucide-react";
import SidebarLinks from "./sidebar-links";
import { Button } from "./ui/button";

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
      <div className="h-16 border-b border-border/40 flex items-center pl-6 pr-4">
        <div className="text-2xl">NextJS Ecom</div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "ml-auto",
            sidebarWidth > 0 ? "opacity-100" : "opacity-0"
          )}
          onClick={handleSidebar}
        >
          {sidebarWidth > 0 && <ArrowLeftFromLine size={18} />}
        </Button>
      </div>
      <div className="pt-6 pr-6 pb-6 pl-6">
        <div className="flex flex-col gap-2">
          <SidebarLinks links={sidebarLinks} />
        </div>
      </div>
    </div>
  );
}
