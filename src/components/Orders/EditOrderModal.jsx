import { motion } from "framer-motion";
import { useState } from "react";

const EditOrderModal = ({ product, onClose }) => {
  // Pre-fill form state with product values
  const [productName, setProductName] = useState(product.name);
  const [manufacturingDate, setManufacturingDate] = useState(product.manufacturing_date);
  const [expiryDate, setExpiryDate] = useState(product.expiry_date);
  const [stock, setStock] = useState(product.stock);
  const [buyingPrice, setBuyingPrice] = useState(product.buying_price);
  const [sellingPrice, setSellingPrice] = useState(product.selling_price);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    // Construct updated product object
    const updatedProduct = {
      ...product,
      name: productName,
      manufacturing_date: manufacturingDate,
      expiry_date: expiryDate,
      stock: parseInt(stock),
      buying_price: parseFloat(buyingPrice),
      selling_price: parseFloat(sellingPrice),
    };

    console.log("Updated product:", updatedProduct);
    // TODO: Update the product in your inventory data (state or API call)
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
        className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Edit Product</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <form onSubmit={handleUpdateProduct} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Manufacturing Date</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YYYY"
              value={manufacturingDate}
              onChange={(e) => setManufacturingDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YYYY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Stock</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter stock quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Buying Price</label>
            <input
              type="number"
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter buying price"
              value={buyingPrice}
              onChange={(e) => setBuyingPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Selling Price</label>
            <input
              type="number"
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter selling price"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Update Product
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditOrderModal;
