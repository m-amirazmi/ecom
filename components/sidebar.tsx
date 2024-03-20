import { cn } from "@/lib/utils";
import { SidebarProps } from "@/types/sidebar.types";

export default function Sidebar({ sideWidth, sidebarWidth }: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed h-screen shadow-xl bg-white top-0 transition-transform duration-500 ease-out",
        sidebarWidth > 0 ? "translate-x-0" : "-translate-x-full"
      )}
      style={{ width: sideWidth }}
    >
      Sidebar
    </div>
  );
}
