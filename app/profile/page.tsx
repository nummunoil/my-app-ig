"use client";

import ProfileHeader from "../components/ProfileHeader";
import ProfileSection from "../components/ProfileSection";
import ProfileStoryHighlights from "../components/ProfileStoryHighlights";
import ProfileTabBar from "../components/ProfileTabBar";

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <ProfileSection />
      <ProfileStoryHighlights />
      <ProfileTabBar />
    </div>
  );
}
