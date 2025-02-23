import { motion } from "framer-motion" 

const SettingSection = ({ icon: Icon, title, children }) => {
  return (
    <motion.div
        className="bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg rounded-xl border border-gray-400 p-6 mb-8"
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1,y:0 }}
        transition={{duration:0.5}}
    >
        <div className="flex items-center mb-4">
            <Icon className="text-blue-500 mr-4" size="24"/>
            <h2 className="text-xl font-semibold text-gray-700">
                {title}
            </h2>
        </div>
        {children}
    </motion.div>
  )
}

export default SettingSection