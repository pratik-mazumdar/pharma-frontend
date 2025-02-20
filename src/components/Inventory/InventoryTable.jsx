import { motion } from "framer-motion";

import Button from "../common/Button";
import { Search } from "lucide-react";

const INVENTORY_DATA = [
    {
      name: "Paracetamol 500 mg",
      manufacturing_date: "01/2023",
      expiry_date: "12/2025",
      drug: "Paracetamol",
      company: "MediCorp Pharma",
      offers: "10% off",
      buying_price: 0.50,
      selling_price: 1.00,
      supplier: "ABC Distributors",
      stock: 150,
      batch_number: "PC500A-2023",
      product_code: "RX001"
    },
    {
      name: "Ibuprofen 200 mg",
      manufacturing_date: "03/2023",
      expiry_date: "09/2025",
      drug: "Ibuprofen",
      company: "HealWell Pharmaceuticals",
      offers: "5% off",
      buying_price: 0.75,
      selling_price: 1.50,
      supplier: "Global Meds Ltd.",
      stock: 120,
      batch_number: "IB200B-2023",
      product_code: "RX002"
    },
    {
      name: "Metformin 500 mg",
      manufacturing_date: "02/2023",
      expiry_date: "05/2026",
      drug: "Metformin Hydrochloride",
      company: "HealthCorp Pharma",
      offers: "",
      buying_price: 1.00,
      selling_price: 2.00,
      supplier: "Prime Pharma Distributors",
      stock: 90,
      batch_number: "MT500C-2023",
      product_code: "RX003"
    },
    {
      name: "Amoxicillin 500 mg",
      manufacturing_date: "04/2023",
      expiry_date: "11/2025",
      drug: "Amoxicillin",
      company: "MediPlus Labs",
      offers: "Buy 1 Get 10% Off",
      buying_price: 1.20,
      selling_price: 2.50,
      supplier: "ABC Distributors",
      stock: 80,
      batch_number: "AM500D-2023",
      product_code: "RX004"
    },
    {
      name: "Cetirizine 10 mg",
      manufacturing_date: "05/2023",
      expiry_date: "07/2026",
      drug: "Cetirizine Hydrochloride",
      company: "AllergyMed Inc.",
      offers: "",
      buying_price: 0.60,
      selling_price: 1.20,
      supplier: "MediCorp Pharma",
      stock: 70,
      batch_number: "CT10E-2023",
      product_code: "RX005"
    },
    {
      name: "Cough Syrup 100 ml",
      manufacturing_date: "06/2023",
      expiry_date: "03/2025",
      drug: "Dextromethorphan",
      company: "Healthex Distributors",
      offers: "15% off",
      buying_price: 3.50,
      selling_price: 5.50,
      supplier: "Global Meds Ltd.",
      stock: 60,
      batch_number: "CS100F-2023",
      product_code: "RX006"
    },
    {
      name: "Vitamin C 500 mg",
      manufacturing_date: "01/2023",
      expiry_date: "12/2026",
      drug: "Ascorbic Acid",
      company: "NutriWell Pharma",
      offers: "",
      buying_price: 0.40,
      selling_price: 0.80,
      supplier: "Prime Pharma Distributors",
      stock: 200,
      batch_number: "VC500G-2023",
      product_code: "RX007"
    },
    {
      name: "Aspirin 300 mg",
      manufacturing_date: "03/2023",
      expiry_date: "06/2025",
      drug: "Acetylsalicylic Acid",
      company: "PainRelief Pharma",
      offers: "",
      buying_price: 0.90,
      selling_price: 1.80,
      supplier: "ABC Distributors",
      stock: 130,
      batch_number: "AS300H-2023",
      product_code: "RX008"
    },
    {
      name: "Loratadine 10 mg",
      manufacturing_date: "04/2023",
      expiry_date: "10/2026",
      drug: "Loratadine",
      company: "AllergyCare Meds",
      offers: "5% off",
      buying_price: 0.70,
      selling_price: 1.40,
      supplier: "Global Meds Ltd.",
      stock: 50,
      batch_number: "LR10I-2023",
      product_code: "RX009"
    },
    {
      name: "Omeprazole 20 mg",
      manufacturing_date: "02/2023",
      expiry_date: "08/2025",
      drug: "Omeprazole",
      company: "GastroCare Pharma",
      offers: "",
      buying_price: 1.80,
      selling_price: 3.00,
      supplier: "Prime Pharma Distributors",
      stock: 95,
      batch_number: "OM20J-2023",
      product_code: "RX010"
    },
    {
      name: "Ranitidine 150 mg",
      manufacturing_date: "05/2023",
      expiry_date: "04/2026",
      drug: "Ranitidine",
      company: "DigestiveHealth Labs",
      offers: "",
      buying_price: 1.50,
      selling_price: 2.80,
      supplier: "MediPlus Labs",
      stock: 110,
      batch_number: "RN150K-2023",
      product_code: "RX011"
    },
    {
      name: "Insulin 10 ml",
      manufacturing_date: "01/2023",
      expiry_date: "09/2024",
      drug: "Insulin",
      company: "DiabetesCare Ltd.",
      offers: "",
      buying_price: 25.00,
      selling_price: 40.00,
      supplier: "Healthex Distributors",
      stock: 30,
      batch_number: "IN10L-2023",
      product_code: "RX012"
    },
    {
      name: "Ciprofloxacin 250 mg",
      manufacturing_date: "03/2023",
      expiry_date: "11/2025",
      drug: "Ciprofloxacin",
      company: "InfectoSafe Pharma",
      offers: "10% off",
      buying_price: 2.50,
      selling_price: 4.00,
      supplier: "Global Meds Ltd.",
      stock: 85,
      batch_number: "CP250M-2023",
      product_code: "RX013"
    },
    {
      name: "Azithromycin 500 mg",
      manufacturing_date: "04/2023",
      expiry_date: "01/2027",
      drug: "Azithromycin",
      company: "BroadSpectrum Meds",
      offers: "",
      buying_price: 3.50,
      selling_price: 6.00,
      supplier: "Prime Pharma Distributors",
      stock: 70,
      batch_number: "AZ500N-2023",
      product_code: "RX014"
    },
    {
      name: "Salbutamol Inhaler",
      manufacturing_date: "05/2023",
      expiry_date: "05/2026",
      drug: "Salbutamol",
      company: "RespiraPharm",
      offers: "",
      buying_price: 10.00,
      selling_price: 18.00,
      supplier: "ABC Distributors",
      stock: 40,
      batch_number: "SBI-2023",
      product_code: "RX015"
    },
    {
      name: "Warfarin 5 mg",
      manufacturing_date: "06/2023",
      expiry_date: "07/2026",
      drug: "Warfarin",
      company: "CardioSafe Meds",
      offers: "5% off",
      buying_price: 2.00,
      selling_price: 3.50,
      supplier: "MediCorp Pharma",
      stock: 45,
      batch_number: "WF5O-2023",
      product_code: "RX016"
    },
    {
      name: "Losartan 50 mg",
      manufacturing_date: "02/2023",
      expiry_date: "03/2027",
      drug: "Losartan",
      company: "BloodPressure Labs",
      offers: "",
      buying_price: 1.80,
      selling_price: 3.00,
      supplier: "Global Meds Ltd.",
      stock: 100,
      batch_number: "LS50P-2023",
      product_code: "RX017"
    },
    {
      name: "Prednisolone 10 mg",
      manufacturing_date: "04/2023",
      expiry_date: "08/2025",
      drug: "Prednisolone",
      company: "SteroidMeds Ltd.",
      offers: "10% off",
      buying_price: 1.00,
      selling_price: 2.00,
      supplier: "Prime Pharma Distributors",
      stock: 75,
      batch_number: "PD10Q-2023",
      product_code: "RX018"
    },
    {
      name: "Multivitamin Tablets",
      manufacturing_date: "01/2023",
      expiry_date: "12/2026",
      drug: "Multivitamins",
      company: "NutriHealth Pharma",
      offers: "",
      buying_price: 0.80,
      selling_price: 1.50,
      supplier: "MediPlus Labs",
      stock: 180,
      batch_number: "MVTabR-2023",
      product_code: "RX019"
    },
    {
      name: "Folic Acid 5 mg",
      manufacturing_date: "03/2023",
      expiry_date: "10/2026",
      drug: "Folic Acid",
      company: "WellnessPharm",
      offers: "",
      buying_price: 0.90,
      selling_price: 1.80,
      supplier: "ABC Distributors",
      stock: 140,
      batch_number: "FA5S-2023",
      product_code: "RX020"
    }
  ]
  
const InventoryTable = () => {
  return (
    <motion.div
          className="bg-gray-100 mt-5 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl border border-gray-400 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay:0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">Products</h2>
                <div className="relative flex">
                    <Button
                    variant="primary"
                    label="Add Product"
                    onClick={() => console.log("Add product clicked!")}
                    />
                    <Button
                    variant="outline"
                    label="Filters"
                    onClick={() => console.log("Filter clicked!")}
                    />
                    <div>
                    <input 
                        type="text"
                        placeholder="Search Products"
                        className="bg-gray-100 text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute left-60 top-2.5  text-gray-400" size={18}/>
                    </div>
                </div>

            </div>
    </motion.div>
  )
}

export default InventoryTable