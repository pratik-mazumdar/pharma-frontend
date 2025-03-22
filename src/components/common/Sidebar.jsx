import { Package, ClipboardList, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Inventory", icon: ClipboardList, color: "#2b7fff", href: "/" },
  { name: "Orders", icon: Package, color: "#2b7fff", href: "/orders" },
  { name: "Settings", icon: Settings, color: "#2b7fff", href: "/settings" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Always Visible) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded-full shadow-lg lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar for Large Screens */}
      <motion.div
        className={`hidden lg:flex h-full transition-all duration-300 ease-in-out flex-shrink-0`}
        animate={{ width: isSidebarOpen ? 220 : 60 }}
      >
        <div className="h-full bg-gray-100 bg-opacity-50 backdrop-blur-md p-2 flex flex-col border-r border-gray-400 w-220">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-300 transition-colors max-w-fit"
          >
            <Menu size={24} />
          </motion.button>
          <nav className="mt-8 flex-grow">
            {SIDEBAR_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                <motion.div className="flex items-center p-2 pb-4 pt-4 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors mb-2">
                  <item.icon
                    size={20}
                    style={{ color: item.color, minWidth: "20px" }}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Sidebar for Mobile (Full Screen Overlay) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col p-6 text-grey-700 z-50 lg:hidden w-50%"
            style={{ backgroundColor: "rgba(156, 163, 175, 0.9)" }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="self-end mb-4 p-2 rounded-full bg-gray-400"
            >
              <X size={24} />
            </button>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-4">
              {SIDEBAR_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-3 p-3 text-lg bg-gray-300 rounded-lg"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
