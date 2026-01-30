import type { ReactNode } from "react";

type ProfileSectionProps = {
  displayName?: string;
  postsCount?: string;
  followersCount?: string;
  followingCount?: string;
  bio?: ReactNode;
  link?: { href?: string; label?: string };
};

const ProfileSection = ({
  displayName = "Username",
  postsCount = "0,000",
  followersCount = "0,000",
  followingCount = "0,000",
  bio = (
    <>
      Lorem ipsum dolor <span className="text-blue-500">#hashtag</span>
    </>
  ),
  link = { href: "https://nummunoil.github.io", label: "Link goes here" },
}: ProfileSectionProps) => {
  return (
    <section className="px-4 py-4">
      <div className="flex gap-6">
        <div className="shrink-0">
          <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-zinc-200 bg-linear-to-br from-amber-200 to-orange-300" />
        </div>
        <div className="flex flex-1 items-center justify-around text-center">
          {[
            { value: postsCount, label: "Posts" },
            { value: followersCount, label: "Followers" },
            { value: followingCount, label: "Following" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-base font-semibold text-black">{value}</div>
              <div className="text-sm text-zinc-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-black">{displayName}</p>
        <p className="mt-1 text-sm text-black">{bio}</p>
        <a
          href={link.href}
          className="mt-1 block text-sm font-medium text-blue-500"
        >
          {link.label}
        </a>
        <button
          type="button"
          className="mt-3 w-full rounded-lg border border-zinc-300 py-2 text-sm font-semibold text-black"
        >
          Edit Profile
        </button>
      </div>
    </section>
  );
};

export default ProfileSection;
