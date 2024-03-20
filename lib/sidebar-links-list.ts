import { SidebarLink } from "@/types/sidebar.types";
import {
  Box,
  Images,
  Layers,
  LayoutDashboard,
  NotebookText,
  ScrollText,
  ShoppingCart,
  User,
} from "lucide-react";

export const sidebarLinks: SidebarLink[] = [
  { name: "Dashboard", link: "/admin", icon: LayoutDashboard },
  { name: "Products", link: "/admin/products", icon: ShoppingCart },
  { name: "Categories", link: "/admin/categories", icon: Layers },
  { name: "Attributes", link: "/admin/attributes", icon: Box },
  { name: "Orders", link: "/admin/orders", icon: NotebookText },
  { name: "Reports", link: "/admin/reports", icon: ScrollText },
  { name: "Gallery", link: "/admin/gallery", icon: Images },
  { name: "Users", link: "/admin/users", icon: User },
];
