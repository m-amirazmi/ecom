import { cn } from "@/lib/utils";
import { HeaderProps } from "@/types/header.types";
import { ArrowRightFromLine, Bell, Settings } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size/throttled";

export default function Header({ sidebarWidth, handleSidebar }: HeaderProps) {
  const [width] = useWindowSize();
  const isMobile = width < 768;
  return (
    <div
      className="fixed h-16 bg-background border-b border-border/40 w-full transition-all duration-500 ease-out"
      style={{ paddingLeft: !isMobile ? sidebarWidth : 0 }}
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
        <div className="ml-auto items-center flex">
          <div className="hidden md:block">
            <ThemeToggle />
            <Button size="icon" variant="ghost">
              <Bell size={18} />
            </Button>
            <Button size="icon" variant="ghost">
              <Settings size={18} />
            </Button>
          </div>
          <Button variant="ghost" className="flex items-center gap-2">
            <div className="cursor-pointer">
              <Image
                src="/images/avatar.webp"
                alt="avatar"
                width={22}
                height={22}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-md">Muhamad Amir</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
