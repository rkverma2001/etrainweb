import React from "react";

interface Profile {
  name: string;
  email: string;
  phone: string;
}

interface ProfilePanelProps {
  profile: Profile;
}

const ProfilePanel: React.FC<ProfilePanelProps> = ({ profile }) => {
  return (
    <div className="w-full">
      <div
        className="
          bg-white
          rounded-xl
          p-4
          sm:p-6
          shadow-sm
          border
        "
      >
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            sm:items-start
            gap-4
          "
        >
          {/* Avatar */}
          <div
            className="
              w-20
              h-20
              rounded-full
              bg-green-600
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-3xl
              shrink-0
            "
          >
            {profile?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          {/* User Info */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-semibold text-gray-900">
              {profile.name}
            </h2>

            <p className="text-sm text-gray-500 mt-2 break-all">
              {profile.email || "No Email"}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {profile.phone || "No Mobile Number"}
            </p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="text-xs text-gray-500">Full Name</p>
            <p className="font-medium text-gray-800 mt-1">
              {profile.name}
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-xs text-gray-500">Email Address</p>
            <p className="font-medium text-gray-800 mt-1 break-all">
              {profile.email}
            </p>
          </div>

          <div className="border rounded-lg p-4 md:col-span-2">
            <p className="text-xs text-gray-500">Mobile Number</p>
            <p className="font-medium text-gray-800 mt-1">
              {profile.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;