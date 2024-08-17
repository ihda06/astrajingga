import Image from "next/image";

import ResumeLink from "./resume-link";

export default function Sidebar({}) {
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
      {/* <div className="p-10 space-y-3">
        <dl>
          <dt className="text-gray-400 text-xs uppercase tracking-[.1em]">
            Experiences
          </dt>
        </dl>
        <ol className="text-xs font-medium tracking-wide cursor-pointer hover:text-gray-500 space-y-1">
          <li>Internship #1</li>
        </ol>
      </div>
      <div className="p-10 space-y-3">
        <dl>
          <dt className="text-gray-400 text-xs uppercase tracking-[.1em]">
            Project
          </dt>
        </dl>
        <ol className="text-xs font-medium space-y-1">
          <li>Internship #1</li>
        </ol>
      </div> */}
    </aside>
  );
}
