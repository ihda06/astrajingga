"use client";

import Divider from "@/components/ui/Divider";
import ResumeLink from "../resume-link";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarContent({
  onClickMenu,
}: {
  onClickMenu: () => void;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname?.startsWith("/blog");

  return (
    <nav className="space-y-5" aria-label="Main navigation">
      <Image
        src="/logominiblack.png"
        width={40}
        height={40}
        sizes="40px"
        alt="Ihda Anwari logo"
      />
      <div className="space-y-2">
        <Link
          href="/"
          className="font-bold text-lg"
          onClick={onClickMenu}
          aria-current={isHome ? "page" : undefined}
        >
          About
        </Link>
        <ResumeLink />
      </div>
      <Divider />
      <div className="space-y-2">
        <Link
          href="/blog"
          className="font-bold text-lg"
          onClick={onClickMenu}
          aria-current={isBlog ? "page" : undefined}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
