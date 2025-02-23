import { BarChart, Bar, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const salesData = [
    {name: "Jan", Purchase: 55000, Sale:50000},
    {name: "Feb", Purchase: 69000, Sale:49000},
    {name: "Mar", Purchase: 45000, Sale:53000},
    {name: "Apr", Purchase: 38000, Sale:43000},
    {name: "May", Purchase: 43000, Sale:47000},
    {name: "Jun", Purchase: 29000, Sale:41000},
    {name: "Jul", Purchase: 55000, Sale:49000},
    {name: "Aug", Purchase: 45000, Sale:42000},
    {name: "Sep", Purchase: 45000, Sale:43000},
    {name: "Oct", Purchase: 38000, Sale:43000},
];

const OverviewChart = () => {
  return (
    <motion.div
    className="bg-gray-100 bg-opacity-50 backdrop-blur-md shadow-lg border border-gray-400 rounded-lg p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-900">Sales & Purchase</h2>
        <div className="h-60">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart data={salesData} barSize={15}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
                    <XAxis dataKey={"name"}/>
                    <YAxis stroke="#9ca3af"/>
                    <Tooltip 
                        contentStyle={{
                        backgroundColor: "white",
                        borderColor: "#D1D5DB",
                        color: "#374151",
                        }}
                        itemStyle={{ color: "#374151" }}
                    />
                    <Legend verticalAlign="bottom" align="center" iconType="circle"/>
                    <Bar dataKey="Purchase" fill="#2b7fff" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Sale" fill="#22C55E" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default OverviewChart;