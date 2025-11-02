import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lg:px-24 px-4 w-full">{children}</div>;
}
