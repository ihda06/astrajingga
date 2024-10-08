"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import BreadCrumbs from "../ui/breadcrumbs";

export default function Header() {
  const router = useRouter();

  return (
    <div className="sticky top-6 z-40 w-full rounded-full shadow-md px-4 py-2 bg-white border grid grid-cols-3">
      <div className="flex">
        <div
          onClick={() => {
            router.back();
          }}
          className="p-2 rounded-full cursor-pointer hover:bg-slate-100 duration-300 "
        >
          <ArrowLeftIcon className="size-6" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <BreadCrumbs />
      </div>
    </div>
  );
}
