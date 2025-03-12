import { GET_PROFILE } from "../_actions/get-profile";
import ProfileCard from "./profile-card";

const ProfileWrapper = async () => {
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

export default ProfileWrapper;
