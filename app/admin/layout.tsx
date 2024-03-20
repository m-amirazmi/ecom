import LayoutAdmin from "@/components/layout-admin";
import { LayoutProps } from "@/types/layout.types";

export default function AdminLayout({ children }: Readonly<LayoutProps>) {
  return <LayoutAdmin>{children}</LayoutAdmin>;
}
