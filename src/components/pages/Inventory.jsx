import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductCount } from "../../Redux/Reducers/Productslice"; 

import Header from "../common/Header";
import InventoryStatCard from "../Inventory/InventoryStatCard";
import InventoryTable from "../Inventory/InventoryTable";

const Inventory = () => {
  const dispatch = useDispatch();

  // Get product count from Redux store
  const productCount = useSelector((state) => state.products.productCount);

  useEffect(() => {
    // Fetch product count when component mounts
    dispatch(fetchProductCount());
  }, [dispatch]);

  const OverallInventoryStats = [
    {
      title: "Categories",
      value1: "14",
      label1: "Last 7 Days",
      value2: "",
      label2: "",
      currency: false,
    },
    {
      title: "Total Product",
      value1: productCount || "0", // Dynamically set product count
      label1: "Last 7 Days",
      value2: "25000",
      label2: "Revenue",
      currency: true,
    },
    {
      title: "Expired",
      value1: "2",
      label1: "In last 7 Days",
      value2: "",
      label2: "",
      currency: false,
    },
    {
      title: "Low Stock",
      value1: "12",
      label1: "Ordered",
      value2: "2",
      label2: "Last 7 Days",
      currency: false,
    },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Inventory" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-10 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <div className="col-span-10 h-full">
            <InventoryStatCard cardTitle="Overall Inventory" stats={OverallInventoryStats} />
          </div>
        </motion.div>

        <InventoryTable />
      </main>
    </div>
  );
};

export default Inventory;
