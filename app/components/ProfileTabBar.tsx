"use client";

import { LayoutGrid, LucideIcon, User } from "lucide-react";
import { useState } from "react";
import ProfilePostsGrid from "./ProfilePostsGrid";

type Tab = "posts" | "tagged";

const TABS: { id: Tab; icon: LucideIcon }[] = [
  { id: "posts", icon: LayoutGrid },
  { id: "tagged", icon: User },
];

const ProfileTabBar = () => {
  const [activeTab, setActiveTab] = useState<Tab>("posts");

  return (
    <>
      <div className="flex border-b border-zinc-200">
        {TABS.map(({ id, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveTab(id)}
            className={`flex flex-1 items-center justify-center border-b-2 py-3 ${
              activeTab === id
                ? "border-black text-black"
                : "border-transparent text-zinc-400"
            }`}
          >
            <Icon className="h-6 w-6" />
          </button>
        ))}
      </div>
      {activeTab === "posts" ? <ProfilePostsGrid /> : <div>Tagged</div>}
    </>
  );
};

export default ProfileTabBar;
