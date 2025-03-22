import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductSummary } from "../../Redux/Reducers/Productslice";

import Header from "../common/Header";
import InventoryStatCard from "../Inventory/InventoryStatCard";
import InventoryTable from "../Inventory/InventoryTable";

const Inventory = () => {
  const dispatch = useDispatch();

  // Get product summary from Redux store
  const { count, lowStock, expired } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductSummary()); // Fetch product summary when component mounts
  }, [dispatch]);

  const OverallInventoryStats = [
    { title: "Total Product", value1: count || "0", label1: "Last 7 Days" },
    { title: "Expired", value1: expired || "0", label1: "In last 7 Days" },
    { title: "Low Stock", value1: lowStock || "0", label1: "Ordered" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header title="Inventory" />

      <main className="flex-1 overflow-auto max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          {OverallInventoryStats.map((stat, index) => (
            <InventoryStatCard
              key={index}
              cardTitle={stat.title}
              stats={[stat]}
            />
          ))}
        </motion.div>

        {/* Scrollable Table */}
        <div className="overflow-auto mt-4">
          <InventoryTable />
        </div>
      </main>
    </div>
  );
};

export default Inventory;
