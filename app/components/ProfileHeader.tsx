import { ChevronDown, Menu, Plus } from "lucide-react";

const ProfileHeader = ({ username = "username" }: { username?: string }) => {
  const iconClass = "h-6 w-6 text-black";
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 ">
      <div className="flex items-center gap-1">
        <span className="text-lg font-semibold text-black">{username}</span>
        <ChevronDown className="h-5 w-5 text-black" size={20} />
      </div>
      <div className="flex items-center gap-4">
        <Plus className={iconClass} size={24} />
        <Menu className={iconClass} size={24} />
      </div>
    </header>
  );
};

export default ProfileHeader;
