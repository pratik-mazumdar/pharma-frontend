import { useState } from "react";
import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import Button from "../common/Button";
import LogoutModal from "../common/LogoutModal"; 

const Profile = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    console.log("User logged out");
    // Perform logout logic (clear tokens, redirect, etc.)
    setShowLogoutModal(false);
  };

  return (
    <>
      <SettingSection icon={User} title={"Profile"}>
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <img
            src="/Morgan_Blackhand_Solo_of_Fortune1.jpg"
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-700 ml-2 mb-2">
              Admin
            </h3>
            <Button
              variant="danger"
              label="Log out"
              onClick={handleLogoutClick}
            />
          </div>
        </div>
      </SettingSection>

      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal
          onClose={handleCloseLogoutModal}
          onLogout={handleConfirmLogout}
        />
      )}
    </>
  );
};

export default Profile;
