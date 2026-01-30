"use client";

import ProfileHeader from "../components/ProfileHeader";
import ProfileTabBar from "../components/ProfileTabBar";

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <div>Profile Section</div>
      <div>Story Highlights</div>
      <ProfileTabBar />
    </div>
  );
}
