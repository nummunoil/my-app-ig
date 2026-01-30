"use client";

import BottomNav from "./BottomNav";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      {children}
      <BottomNav />
    </div>
  );
}
