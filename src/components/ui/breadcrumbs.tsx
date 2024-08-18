"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export type Crumbs = {
  name: string;
  href: string;
};

export default function BreadCrumbs({ crumbs }: { crumbs?: Crumbs[] }) {
  const pathName = usePathname();
  const innerCrumbs = useMemo(() => {
    if (crumbs) return crumbs;
    const segments = pathName.split("/");
    // Menginisialisasi hasil breadcrumb array
    const breadcrumbs = segments.map((segment, index) => {
      if (index === 0)
        return {
          name: "Home",
          href: "/",
        };
      // Menggabungkan bagian path menjadi href sesuai urutan
      const href = segments.slice(0, index + 1).join("/");

      return {
        name: segment,
        href: href,
      };
    });
    return breadcrumbs;
  }, [pathName, crumbs]);
  return (
    <div className="flex items-center space-x-1 px-4">
      {innerCrumbs.map((crumb, index) => (
        <Link
          key={index}
          href={crumb.href}
          className={
            "capitalize text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 duration-300" +
            (index === innerCrumbs.length - 1 && " font-bold")
          }
        >
          {index !== 0 && "/"}&nbsp;
          {crumb.name}
        </Link>
      ))}
    </div>
  );
}
