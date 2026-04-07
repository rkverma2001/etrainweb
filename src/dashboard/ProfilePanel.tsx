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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-2xl">
            {profile.name[0]}
          </div>
          <div>
            <div className="font-semibold">{profile.name}</div>
            <div className="text-sm text-gray-500">{profile.email}</div>
            <div className="text-sm text-gray-500">{profile.phone}</div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm text-gray-500">About</h4>
          <p className="text-sm mt-2 text-gray-600">
            You are enrolled in {Math.floor(Math.random() * 10) + 5} courses and
            have earned {Math.floor(Math.random() * 6) + 1} certificates.
          </p>
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="col-span-2 bg-white rounded-lg p-6 shadow-sm">
        <h4 className="font-semibold">Billing & Orders</h4>
        <div className="mt-3 text-sm text-gray-600">
          View invoices, manage payment methods and download receipts for your
          orders.
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded bg-gray-50">
            <div className="text-sm text-gray-500">Saved payment</div>
            <div className="font-medium mt-1">Visa •••• 4242</div>
          </div>

          <div className="p-4 rounded bg-gray-50">
            <div className="text-sm text-gray-500">Subscriptions</div>
            <div className="font-medium mt-1">No active subscriptions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
