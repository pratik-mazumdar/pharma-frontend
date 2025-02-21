import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

import AddSupplierModal from "./AddSupplierModal";
import EditSupplierModal from "./EditSupplierModal";
import Button from "../common/Button";
import { SUPPLIER_DATA } from "../data/SUPPLIER_DATA";

const SupplierTable = () => {

  const [showAddModal, setShowAddModal] = useState(false);
  const handleOpenAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSupplier, setFilteredSupplier] = useState(SUPPLIER_DATA);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const handleOpenEditModal = (supplier) => {
    setSelectedSupplier(supplier);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setSelectedSupplier(null);
    setShowEditModal(false);
  };


  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = SUPPLIER_DATA.filter(
      supplier =>
        supplier.name.toLowerCase().includes(term) ||
        supplier.product.toLowerCase().includes(term)
    );
    setFilteredSupplier(filtered);
    setCurrentPage(1);
  };
  

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredSupplier.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredSupplier.slice(
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
      {showAddModal && <AddSupplierModal onClose={handleCloseAddModal} />}
      {showEditModal && selectedSupplier && (
        <EditSupplierModal supplier={selectedSupplier} onClose={handleCloseEditModal} />
      )}
    <motion.div
  className="bg-gray-100 mt-5 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-400 p-6 mb-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <div className="flex flex-col mb-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-700">Supplier</h2>
      <div className="flex items-center space-x-2">
        <Button
          variant="primary"
          label="Add Supplier"
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
            Product
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Contact Number
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Return Status
          </th>          
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Orders
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-400">
        {currentItems.map(supplier =>(
            <motion.tr 
            key={supplier.id}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:  0.3 }}
            >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 ">
                    {supplier.supplier_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {supplier.product}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {supplier.contact_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {supplier.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {supplier.return_status ? (
                    <span className="text-green-600">Taking Return</span>
                    ) : (
                    <span className="text-red-600">Not Taking Return</span>
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 ">
                    {supplier.orders}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button
                      variant="outline"
                      label="Edit"
                      onClick={() => handleOpenEditModal(supplier)}
                    />
                  </td>
            </motion.tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="disabled:opacity-50"
          >
            Previous
          </Button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className=" disabled:opacity-50"
          >
            Next
          </Button>
  </div>
</motion.div>
</>
  )
}

export default SupplierTable;