import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Reducers/Productslice";

import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import Button from "../common/Button";

const InventoryTable = () => {
  const dispatch = useDispatch();
  const { data: productList = [], meta = {} } =
    useSelector((state) => state.products.products) || {};
  const { currentPage = 1, lastPage: totalPages = 1 } = meta;
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(page)).then((res) =>
      console.log("Fetched Products Response:", res)
    );
  }, [dispatch, page]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setPage(1);
  };

  const filteredProducts = productList.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm)
  );

  const getAvailabilityLabel = (stock) => {
    if (stock === 0)
      return <span className="text-red-600 font-semibold">Out of Stock</span>;
    if (stock < 20)
      return <span className="text-yellow-600 font-semibold">Low Stock</span>;
    return <span className="text-green-600 font-semibold">In Stock</span>;
  };

  return (
    <>
      {showAddModal && (
        <AddProductModal onClose={() => setShowAddModal(false)} />
      )}
      {showEditModal && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setShowEditModal(false)}
        />
      )}

      <motion.div
        className="bg-gray-100 mt-5 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-400 p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Products</h2>
          <Button
            variant="primary"
            label="Add Product"
            onClick={() => setShowAddModal(true)}
          />
        </div>

        <div className="relative w-full mb-4">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full bg-gray-100 text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {loading ? (
          <p className="text-center text-gray-700">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : productList.length === 0 ? (
          <p className="text-center text-gray-700">No products available.</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-400">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Manufacturing Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Expiry Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Buying Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Selling Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Availability
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-400">
                {filteredProducts.map((product) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-500 whitespace-nowrap">
                      {product.manufacturingDate}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-500 whitespace-nowrap">
                      {product.expiryDate}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-500 whitespace-nowrap">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-500 whitespace-nowrap">
                      {product.buyingPrice}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-500 whitespace-nowrap">
                      {product.sellingPrice}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      {getAvailabilityLabel(product.stock)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <Button
                        variant="outline"
                        label="Edit"
                        onClick={() => {
                          setSelectedProduct(product);
                          setShowEditModal(true);
                        }}
                      />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default InventoryTable;
