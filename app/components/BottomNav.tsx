"use client";

import { Clapperboard, Home, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: "home" | "search" | "reels" | "shop" | "profile";
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/search", label: "Search", icon: "search" },
  { href: "/reels", label: "Reels", icon: "reels" },
  { href: "/shop", label: "Shop", icon: "shop" },
  { href: "/profile", label: "Profile", icon: "profile" },
];

const iconMap = {
  home: Home,
  search: Search,
  reels: Clapperboard,
  shop: ShoppingBag,
  profile: User,
};

const NavIcon = ({
  icon,
  active,
}: {
  icon: NavItem["icon"];
  active: boolean;
}) => {
  const Icon = iconMap[icon];
  if (icon === "profile") {
    return (
      <div
        className={`h-6 w-6 overflow-hidden rounded-full border ${
          active ? "border-black" : "border-zinc-300"
        } `}
      >
        <Icon size={22} />;
      </div>
    );
  }

  const className = active ? "h-6 w-6 text-black" : "h-6 w-6 text-zinc-500";

  return <Icon className={className} size={24} />;
};

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around border-t border-zinc-200 bg-white py-2">
      {navItems.map(({ href, label, icon }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className="p-2" aria-label={label}>
            <NavIcon icon={icon} active={active} />
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
