import { motion } from "framer-motion";
import { useState } from "react";

const AddSupplierModal = ({ onClose }) => {
  // Form state
  const [supplierName, setSupplierName] = useState("");
  const [product, setProduct] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [returnStatus, setReturnStatus] = useState(false);
  const [orders, setOrders] = useState("");

  const handleAddSupplier = (e) => {
    e.preventDefault();
    // Construct new supplier object
    const newSupplier = {
      supplier_name: supplierName,
      product,
      contact_number: contactNumber,
      email,
      return_status: returnStatus,
      orders: parseInt(orders),
      // id can be generated or handled externally
    };

    console.log("New supplier added:", newSupplier);
    // TODO: Update supplier list (state or API call)
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(156, 163, 175, 0.5)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-100 rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Add Supplier</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleAddSupplier} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Supplier Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter supplier name"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Product</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Contact Number</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-3">
            <label className="block text-sm text-gray-600 mb-1">Return Status</label>
            <select
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={returnStatus ? "true" : "false"}
              onChange={(e) => setReturnStatus(e.target.value === "true")}
            >
              <option value="true">Taking Return</option>
              <option value="false">Not Taking Return</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Orders</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter orders count"
              value={orders}
              onChange={(e) => setOrders(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 px-4 py-2 rounded-md border border-gray-400 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Supplier
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddSupplierModal;
