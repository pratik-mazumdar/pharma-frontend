import { motion } from "framer-motion";
import { useState } from "react";

const AddOrderModal = ({ onClose }) => {
  // Local state for form inputs
  const [productName, setProductName] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [stock, setStock] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [drug, setDrug] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Construct product object
    const newProduct = {
      name: productName,
      manufacturing_date: manufacturingDate,
      expiry_date: expiryDate,
      stock: parseInt(stock),
      buying_price: parseFloat(buyingPrice),
      selling_price: parseFloat(sellingPrice),
      // ... other fields as needed
    };
    console.log("New product:", newProduct);
    // TODO: Add to your inventory data
    onClose(); // close modal
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
        className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Add Product</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Product Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Manufacturing Date
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YYYY"
              value={manufacturingDate}
              onChange={(e) => setManufacturingDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YYYY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Stock</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter stock quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Buying Price
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter buying price"
              value={buyingPrice}
              onChange={(e) => setBuyingPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Selling Price
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter selling price"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
            Supplier
            </label>
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
            <label className="block text-sm text-gray-600 mb-1">
            Drug
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter drug name"
              value={drug}
              onChange={(e) => setDrug(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-200"
            >
              Discard
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Product
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddOrderModal;
