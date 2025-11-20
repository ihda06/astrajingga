"use client";

import { useMediaQuery } from "usehooks-ts";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import SidebarContent from "./SidebarContent";

export default function Sidebar({}) {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsClient(true);
    }, 100);
  }, []);

  if (isMobile && isClient) {
    return (
      <div className="fixed left-0 top-0 z-30 w-full flex justify-between backdrop-blur py-3 px-3 items-center border-b">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTitle hidden>Navigation Menu</SheetTitle>
          <SheetTrigger
            asChild
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <button type="button" className="p-2">
              <Bars3Icon className="size-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent
            id="mobile-navigation"
            side={"left"}
            autoFocus={false}
            className="bg-white"
            aria-label="Navigation menu"
          >
            <nav className="w-full" aria-label="Main navigation">
              <SidebarContent onClickMenu={() => setIsOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <aside
      className="py-10 h-screen w-2/12 sticky top-0 divide-y max-h-screen overflow-y-auto overflow-x-hidden lg:block hidden"
      aria-label="Sidebar navigation"
    >
      <div className="pb-10 px-10 w-52">
        <SidebarContent onClickMenu={() => setIsOpen(false)} />
      </div>
    </aside>
  );
}
