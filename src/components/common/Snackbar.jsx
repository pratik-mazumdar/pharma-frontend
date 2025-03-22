import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../../Redux/Reducers/snackbarSlice";
import { motion } from "framer-motion";

const Snackbar = () => {
  const dispatch = useDispatch();
  const { message, type, open } = useSelector((state) => state.snackbar);

  if (!open) return null;

  return (
    <motion.div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white z-50 ${
        type === "error"
          ? "bg-red-500"
          : type === "success"
          ? "bg-green-500"
          : "bg-blue-500"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className="flex items-center space-x-3">
        <span>{message}</span>
        <button
          onClick={() => dispatch(hideSnackbar())}
          className="text-white text-lg font-bold"
        >
          &times;
        </button>
      </div>
    </motion.div>
  );
};

export default Snackbar;
