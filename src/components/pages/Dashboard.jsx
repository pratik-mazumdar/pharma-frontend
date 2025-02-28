import { BookX, Clipboard, CircleUserRound, Undo2, Percent, BarChart, LineChart, IndianRupee, Package2, MapPinHouse,  ShoppingBasket} from "lucide-react";
import { motion } from "framer-motion";

import Header from "../common/Header";
import OverViewStatCard from "../Dashboard/OverViewStatCard";
import OverviewBarChart from "../Dashboard/OverviewBarChart";
import OverviewLineChart from "../Dashboard/OverviewLineChart";

const Dashboard = () => {

  const SalesOverviewStats = [
    { icon: Percent, label: "Sales", value: "832", currency: true },
    { icon: BarChart, label: "Revenue", value: "18,300", currency: true },
    { icon: LineChart, label: "Profit", value: "868", currency: true },
    { icon: IndianRupee, label: "Cost", value: "17,432", currency: true },
  ];

  const InventoryStats = [
    { icon: Package2, label: "Quantity in Hand", value: "868", currency: false },
    { icon: MapPinHouse, label: "To be received", value: "200", currency: false },
    ];

    const PurchaseOverviewStats = [
      { icon: ShoppingBasket, label: "Purchase", value: "82", currency:false },
      { icon: IndianRupee, label: "Cost", value: "13570", currency: true },
      { icon: BookX, label: "Cancel", value: "5", currency: false },
      { icon: Undo2, label: "Return", value: "7,432", currency: true },
    ];
  
    const ProductStats = [
      { icon: CircleUserRound, label: "Number of Suppliers", value: "31", currency: false },
      { icon: Clipboard, label: "Number of Categories", value: "21", currency: false },
      ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Dashboard"/>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-10 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <div className="col-span-7 h-full">
            <OverViewStatCard title="Sales Overview" stats={SalesOverviewStats} />
          </div>
          <div className="col-span-3 h-full">
            <OverViewStatCard title="Inventory Summary" stats={InventoryStats} />
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-10 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <div className="col-span-7 h-full mt-6">
            <OverViewStatCard title="Purchase Overview" stats={PurchaseOverviewStats} />
          </div>
          <div className="col-span-3 h-full mt-6">
            <OverViewStatCard title="Product Summary" stats={ProductStats} />
          </div>
        </motion.div>

        {/* CHARTS*/}
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-12">
          <div className="col-span-7 h-full mt-2">
          <OverviewBarChart/>
          </div>
          <div className="col-span-3 h-full mt-2">
          <OverviewLineChart/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard