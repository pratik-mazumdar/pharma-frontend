import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart } from "recharts";
import { motion } from "framer-motion";

const orderData = [
  { name: "Jan", Ordered: 4000, Delivered: 3200 },
  { name: "Feb", Ordered: 2000, Delivered: 3500 },
  { name: "Mar", Ordered: 2500, Delivered: 3300 },
  { name: "Apr", Ordered: 1800, Delivered: 3100 },
  { name: "May", Ordered: 2200, Delivered: 3600 },
];

const OrderSummaryChart = () => {
  return (
    <motion.div
      className="bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg border border-gray-400 rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-900">Order Summary</h2>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={orderData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{
                backgroundColor: "white",
                borderColor: "#D1D5DB",
                color: "#374151",
              }}
              itemStyle={{ color: "#374151" }}
            />
            <Legend iconType="circle" />

            <Line
              type="monotone"
              dataKey="Ordered"
              stroke="#22C55E"
              fill="#FEF3C7"
              strokeWidth={2}
              dot={{ fill: "#22C55E", r: 3 }}
            />

            <Line
              type="monotone"
              dataKey="Delivered"
              stroke="#2b7fff"
              strokeWidth={2}
              dot={{ fill: "#2b7fff", r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default OrderSummaryChart;
