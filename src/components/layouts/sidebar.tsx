"use client";
import Image from "next/image";

import ResumeLink from "./resume-link";
import { useMediaQuery } from "usehooks-ts";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Sidebar({}) {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isMobile && isClient) {
    return (
      <div className="fixed left-0 top-0 z-30 w-full flex justify-between backdrop-blur py-3 px-3 items-center border-b-1">
        <Sheet>
          <SheetTrigger asChild>
            <Bars3Icon className="size-6" />
          </SheetTrigger>
          <SheetContent side={"left"} autoFocus={false}>
            <div className="space-y-5 w-52">
              <Image
                src="/logominiblack.png"
                width={40}
                height={40}
                sizes="40px"
                alt="logo"
              />
              <div className="space-y-2">
                <h1 className="font-bold text-lg">About</h1>
                <ResumeLink />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <aside className="py-10 h-screen w-2/12 sticky top-0 divide-y max-h-screen overflow-y-auto overflow-x-hidden lg:block hidden">
      <div className="pb-10 px-10 space-y-5 w-52">
        <Image
          src="/logominiblack.png"
          width={40}
          height={40}
          sizes="40px"
          alt="logo"
        />
        <div className="space-y-2">
          <h1 className="font-bold text-lg">About</h1>
          <ResumeLink />
        </div>
      </div>
    </aside>
  );
}
