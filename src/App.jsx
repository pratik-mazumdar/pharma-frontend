import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

// import Dashboard from "./components/pages/Dashboard";
import Inventory from "./components/pages/Inventory";
// import Supplier from "./components/pages/Supplier";
import Sidebar from "./components/common/Sidebar";
import { Loading } from "./components/pages/Loading";
import Orders from "./components/pages/Orders";
import Settings from "./components/pages/Settings";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Snackbar from "./components/common/Snackbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Control sidebar state
  const snackbar = useSelector((state) => state.snackbar);

  const handleLoadingComplete = () => {
    console.log("Loading complete!");
    setIsLoaded(true);
  };

  return (
    <div className="flex h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Loading */}
      {!isLoaded && <Loading onComplete={handleLoadingComplete} />}

      <div
        className={`flex h-full w-full transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          open={snackbar.open}
        />
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected Route */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                {/* Move the backdrop here */}
                <div className="fixed inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 opacity-80" />
                  <div className="absolute inset-0 backdrop-blur-sm" />
                </div>

                {/* Sidebar with dynamic spacing */}
                <Sidebar
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />

                <div
                  className={`flex-grow transition-all duration-300 ${
                    isSidebarOpen ? "ml-[220px]" : "ml-0"
                  }`}
                >
                  <Routes>
                    <Route path="/" element={<Inventory />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
