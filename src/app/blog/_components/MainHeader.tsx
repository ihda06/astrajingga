import dynamic from "next/dynamic";

const TabsSelector = dynamic(() => import("./TabsSelector"), {
  loading: () => (
    <div className="flex ">
      <div className="flex gap-2 items-center justify-center px-2 py-2 border-b border-gray-200 bg-gray-700 rounded-full">
        {[1, 2].map((index) => (
          <div
            key={index}
            className="px-4 py-1 rounded-full bg-gray-600 animate-pulse"
          >
            <div className="h-4 w-16 bg-gray-500 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  ),
});

export default function MainHeader() {
  return (
    <>
      <h1 className="text-4xl font-bold">Blog</h1>
      <TabsSelector />
    </>
  );
}
