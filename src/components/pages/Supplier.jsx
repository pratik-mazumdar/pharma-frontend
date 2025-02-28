import Header from "../common/Header";
import SupplierTable from "../Supplier/SupplierTable";

const Supplier = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview Suppliers"/>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      <SupplierTable/>
        </main>  
    </div>
  )
}

export default Supplier