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
          <SheetTitle hidden>Sidebar</SheetTitle>
          <SheetTrigger asChild>
            <Bars3Icon className="size-6" />
          </SheetTrigger>
          <SheetContent side={"left"} autoFocus={false} className="bg-white">
            <div className="w-full">
              <SidebarContent onClickMenu={() => setIsOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <aside className="py-10 h-screen w-2/12 sticky top-0 divide-y max-h-screen overflow-y-auto overflow-x-hidden lg:block hidden">
      <div className="pb-10 px-10  w-52">
        <SidebarContent onClickMenu={() => setIsOpen(false)} />
      </div>
    </aside>
  );
}
