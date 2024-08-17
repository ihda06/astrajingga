import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

export default function SlideShow({ src }: { src: string }) {
  return (
    <div className="w-full h-[720px] bg-gray-200 rounded-xl shadow-inner">
      <Image src={src} alt="slide" className="w-full h-full object-fit" />
      <button className="p-3 bg-slate-200">
        <ArrowUturnRightIcon className="w-8 h-8 text-white" />
      </button>
      <button className="p-3 bg-slate-200">
        <ArrowUturnLeftIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
