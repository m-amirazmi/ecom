"use client";

import { SidebarLinksProp } from "@/types/sidebar.types";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarLinks({ links }: SidebarLinksProp) {
  const pathname = usePathname();

  return links.map(({ icon: Icon, ...i }) => {
    let isCurrentPage = false;
    if (pathname === "/admin" && i.link === "/admin") isCurrentPage = true;
    if (i.link !== "/admin" && pathname.includes(i.link)) isCurrentPage = true;
    return (
      <Button
        key={i.name}
        variant="ghost"
        asChild
        className={cn(
          "flex items-center gap-2 justify-start",
          isCurrentPage && "bg-accent"
        )}
      >
        <Link href={i.link}>
          {Icon && <Icon size={18} />}
          <span className="text-base font-normal">{i.name}</span>
        </Link>
      </Button>
    );
  });
}
