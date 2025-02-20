import { motion } from "framer-motion";

const OverViewStatCard = ({ title, stats }) => {
  return (
    <motion.div
      className="bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-400 p-6 h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)" }}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className={`grid ${stats.length === 2 ? "grid-cols-2" : "grid-cols-4"} gap-6 flex-grow`}>
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            <stat.icon size={25} style={{ color: "#2b7fff" }} />
            <div className={`text-gray-900 mt-2 ${stats.length === 4 ? "flex gap-2 items-center" : "flex flex-col"}`}>
            <p className="text-xl">
              {stat.currency ? `₹ ${stat.value}` : stat.value}
            </p>
              <p className="text-sm">{stat.label}</p>
            </div>
            {index !== stats.length - 1 && (
              <div className="absolute top-2 bottom-2 right-0 w-px bg-gray-500 hidden md:block"></div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OverViewStatCard;
