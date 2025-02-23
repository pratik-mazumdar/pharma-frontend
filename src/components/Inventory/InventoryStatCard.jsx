import { motion } from "framer-motion";

const InventoryStatCard = ({ cardTitle, stats }) => {
  return (
    <motion.div
    className="bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-400 p-6 h-full flex flex-col"
    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)" }}
    >
      <h2 className="text-lg font-semibold mb-4">
        {cardTitle}
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="relative flex flex-col">
            <h3 className="text-md font-bold mb-4" style={{ color: "#2b7fff" }}>
              {stat.title}
            </h3>
            <div className="flex justify-between items-center gap-8 mb-2">
              <div className="flex flex-col items-center ">
                <p className="text-2xl font-medium text-gray-900">
                  {stat.value1}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {stat.label1 || ""}
                </p>
              </div>
              <div className="flex flex-col items-center pr-2">
                <p className="text-2xl font-medium text-gray-900">
                  {stat.currency ? `₹ ${stat.value2}` : stat.value2}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {stat.label2 || ""}
                </p>
              </div>
            </div>
            {index !== stats.length - 1 && (
              <div className="absolute top-2 bottom-2 right-0 w-px bg-gray-300 hidden md:block"></div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InventoryStatCard;
