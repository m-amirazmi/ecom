import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types/sidebar.types";
import { ArrowLeftFromLine } from "lucide-react";

export default function Sidebar({
  sideWidth,
  sidebarWidth,
  handleSidebar,
}: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed h-screen shadow-lg bg-background dark:bg-accent top-0 transition-transform duration-500 ease-out z-10",
        sidebarWidth > 0 ? "translate-x-0" : "-translate-x-full"
      )}
      style={{ width: sideWidth }}
    >
      <div className="h-16 border-b border-b-gray-500/20 flex items-center px-6 ">
        <div className="text-2xl">NextJS Ecom</div>
        <button
          className="ml-auto text-slate-300 hover:text-primary transition-colors ease-out "
          onClick={handleSidebar}
        >
          {sidebarWidth > 0 && <ArrowLeftFromLine />}
        </button>
      </div>
    </div>
  );
}
