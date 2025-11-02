import Divider from "@/components/ui/Divider";
import ResumeLink from "../resume-link";
import Image from "next/image";
import Link from "next/link";

export default function SidebarContent() {
  return (
    <div className="space-y-5">
      <Image
        src="/logominiblack.png"
        width={40}
        height={40}
        sizes="40px"
        alt="logo"
      />
      <div className="space-y-2">
        <Link href="/" className="font-bold text-lg">
          About
        </Link>
        <ResumeLink />
      </div>
      <Divider />
      <div className="space-y-2">
        <Link href="/blog" className="font-bold text-lg">
          Blog
        </Link>
      </div>
    </div>
  );
}
