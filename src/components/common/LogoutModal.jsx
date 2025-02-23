import { motion } from "framer-motion";

const LogoutModal = ({ onClose, onLogout }) => {
  const handleYesLogout = () => {
    // Perform your logout logic here (e.g., clear tokens, redirect, etc.)
    console.log("User logged out");
    // Then close the modal
    onLogout();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(156, 163, 175, 0.5)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Confirm Logout</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-700 mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            No
          </button>
          <button
            onClick={handleYesLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Yes
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogoutModal;
