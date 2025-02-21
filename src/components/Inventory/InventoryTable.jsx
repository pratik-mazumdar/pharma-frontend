import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import Button from "../common/Button";
import { INVENTORY_DATA } from "../data/INVENTORY_DATA";

const InventoryTable = () => {

  const [showAddModal, setShowAddModal] = useState(false);
  const handleOpenAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(INVENTORY_DATA);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOpenEditModal = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setSelectedProduct(null);
    setShowEditModal(false);
  };


  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = INVENTORY_DATA.filter(
      product =>
        product.name.toLowerCase().includes(term) ||
        product.product_code.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };
  

  const getAvailabilityLabel = (stock, totalStock = 100) => {
      if (stock === 0) {
         return <span className="text-red-600 font-semibold">Out of Stock</span>;
       } else if (stock < 0.2 * totalStock) {
         return <span className="text-yellow-600 font-semibold">Low Stock</span>;
       }
      return <span className="text-green-600 font-semibold">In Stock</span>;
  };

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
    
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };
    
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };
        

  return (
    <>
      {showAddModal && <AddProductModal onClose={handleCloseAddModal} />}
      {showEditModal && selectedProduct && (
        <EditProductModal product={selectedProduct} onClose={handleCloseEditModal} />
      )}
    <motion.div
  className="bg-gray-100 mt-5 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-400 p-6 mb-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <div className="flex flex-col mb-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-700">Products</h2>
      <div className="flex items-center space-x-2">
        <Button
          variant="primary"
          label="Add Product"
          onClick={handleOpenAddModal}
        />
        <Button
          variant="outline"
          label="Filters"
          onClick={() => console.log("Filter clicked!")}
        />
      </div>
    </div>

    <div className="relative w-full">
      <input 
        type="text"
        placeholder="Search Products"
        className="w-full bg-gray-100 text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleSearch}
        value={searchTerm}
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
    </div>
  </div>

  {/* Table area */}
  <div className="overflow-x-auto mt-6">
    <table className="min-w-full divide-y divide-gray-400">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Manufacturing Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Expiry Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Stock
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Buying Price
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Selling Price
          </th>          
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Availability
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
                  Actions
                </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-400">
        {currentItems.map(product =>(
            <motion.tr 
            key={product.id}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:  0.3 }}
            >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 ">
                    {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {product.manufacturing_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {product.expiry_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {product.buying_price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {product.selling_price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {getAvailabilityLabel(product.stock, 100)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button
                      variant="outline"
                      label="Edit"
                      onClick={() => handleOpenEditModal(product)}
                    />
                  </td>
            </motion.tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex justify-between items-center mt-6">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
  </div>
</motion.div>
</>
  )
}

export default InventoryTable