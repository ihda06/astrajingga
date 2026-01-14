import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full pt-16 lg:pt-0">{children}</div>;
}
