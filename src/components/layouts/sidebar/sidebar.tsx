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
import { motion } from "motion/react";

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
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed left-0 top-0 z-30 w-full flex justify-between backdrop-blur-md bg-linear-to-br from-emerald-50/40 via-sky-50/20 to-white py-3 px-4 items-center border-b border-gray-200/50 shadow-sm"
      >
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTitle hidden>Navigation Menu</SheetTitle>
          <SheetTrigger
            asChild
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <motion.button
              type="button"
              className="p-2 rounded-lg hover:bg-emerald-100/50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bars3Icon className="size-6 text-gray-700" aria-hidden="true" />
            </motion.button>
          </SheetTrigger>
          <SheetContent
            id="mobile-navigation"
            side={"left"}
            autoFocus={false}
            className="bg-linear-to-br from-emerald-50/50 via-sky-50/30 to-white backdrop-blur-sm border-r border-gray-200/30 rounded-r-2xl"
            aria-label="Navigation menu"
          >
            <nav className="w-full h-full" aria-label="Main navigation">
              <SidebarContent onClickMenu={() => setIsOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      </motion.div>
    );
  }

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-10 h-screen w-2/12 sticky top-0 max-h-screen overflow-y-auto overflow-x-hidden lg:block hidden bg-linear-to-br from-emerald-50/40 via-sky-50/20 to-white backdrop-blur-sm border-r border-gray-200/30 rounded-r-2xl"
      aria-label="Sidebar navigation"
    >
      <div className="pb-10 px-10 w-52 h-full flex flex-col">
        <SidebarContent onClickMenu={() => setIsOpen(false)} />
      </div>
    </motion.aside>
  );
}
