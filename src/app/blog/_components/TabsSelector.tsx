"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const tabs = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Machine Learning",
    value: "machine-learning",
  },
];

export default function TabsSelector() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "all";

  const router = useRouter();

  const handleTabClick = (tab: string) => {
    router.push(`/blog?tab=${tab}`);
  };

  return (
    <div className="flex ">
      <div className="flex gap-2 items-center justify-center px-2 py-2 border-b border-gray-200 bg-gray-700 rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={cn(
              "px-4 py-1 rounded-full duration-300 text-white cursor-pointer",
              activeTab === tab.value && "bg-white text-gray-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
