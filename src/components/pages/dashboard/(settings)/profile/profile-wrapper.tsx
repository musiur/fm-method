import { GET_PROFILE } from "@/api/profile/get-profile";
import ProfileCard from "./profile-card";

export const ProfileWrapper = async () => {
  const user = await GET_PROFILE();
  return (
    <div>
      <ProfileCard
        name={user?.name || "N/A"}
        email={user?.email || "N/A"}
        phone={user?.phone || "N/A"}
        avatarUrl={user?.avatar || "N/A"}
      />
    </div>
  );
};
