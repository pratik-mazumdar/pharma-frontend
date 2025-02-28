import { useState } from "react";
import { User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import SettingSection from "./SettingSection";
import Button from "../common/Button";
import LogoutModal from "../common/LogoutModal";
import { logout } from "../../Redux/Reducers/Authslice"; 
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const token = useSelector((state) => state.auth.token);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await dispatch(logout(token));
      console.log("User logged out");
      setShowLogoutModal(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
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
