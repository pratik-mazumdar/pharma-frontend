import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, fetchProducts, fetchProductCount} from "../../Redux/Reducers/Productslice";

const AddProductModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [stock, setStock] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [drug, setDrug] = useState("");
  
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      manufacturingDate,
      expiryDate,
      buyingPrice: parseFloat(buyingPrice),
      sellingPrice: parseFloat(sellingPrice),
      isLowStock: parseInt(stock) <= 10,
      stock: parseInt(stock),
      supplier,
      drug,
    };

    try {
      // Dispatch API call to create a product
      await dispatch(createProduct(newProduct)).unwrap();
      await dispatch(fetchProducts());
      await dispatch(fetchProductCount());
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">&times;</button>
        </div>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required className="w-full border p-2 rounded" />
          <input type="date" placeholder="Manufacturing Date" value={manufacturingDate} onChange={(e) => setManufacturingDate(e.target.value)} className="w-full border p-2 rounded" />
          <input type="date" placeholder="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="w-full border p-2 rounded" />
          <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required className="w-full border p-2 rounded" />
          <input type="number" step="0.01" placeholder="Buying Price" value={buyingPrice} onChange={(e) => setBuyingPrice(e.target.value)} required className="w-full border p-2 rounded" />
          <input type="number" step="0.01" placeholder="Selling Price" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} required className="w-full border p-2 rounded" />
          <input type="text" placeholder="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required className="w-full border p-2 rounded" />
          <input type="text" placeholder="Drug" value={drug} onChange={(e) => setDrug(e.target.value)} required className="w-full border p-2 rounded" />
          
          <div className="flex justify-end space-x-4 mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-200">Discard</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add Product</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AddProductModal;
