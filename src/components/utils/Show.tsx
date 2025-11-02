import React from "react";

export default function Show({
  children,
  when,
  fallback,
}: {
  children: React.ReactNode;
  when: boolean;
  fallback?: React.ReactNode;
}) {
  return when ? children : fallback || null;
}
