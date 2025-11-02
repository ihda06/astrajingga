import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full lg:px-24 px-4 pt-24 space-y-6">{children}</div>;
}
