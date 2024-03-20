import { LucideIcon } from "lucide-react";

export interface SidebarProps {
  sideWidth: number;
  sidebarWidth: number;
  handleSidebar: () => void;
}

export interface SidebarLink {
  icon?: LucideIcon;
  link: string;
  name: string;
}

export interface SidebarLinksProp {
  links: SidebarLink[];
}
