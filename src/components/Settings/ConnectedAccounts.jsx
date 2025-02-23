import { useState } from "react"
import SettingSection from "./SettingSection"
import { HelpCircle } from "lucide-react"

const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id:1,
            name:"Whatsapp",
            connected: true,
            icon:"/WhatsApp.svg"
        },
    ])
  return (
    <SettingSection icon={HelpCircle} title ={"Connected Accounts"}>
        {connectedAccounts.map((account) => (
            <div 
            key={account.id}
            className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex gap-1">
                    <img src={account.icon} alt="social img" className="size-6 object-cover rounded-full mr-2" />
                    <span className="text-gray-600 pb-4">{account.name}</span>
                </div>
                <button
                    className={`px-3 py-1 rounded ${
                        account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 hover:bg-gray-500"
                    } transition duration-200`}
                    onClick={() =>  setConnectedAccounts(
                        connectedAccounts.map((acc)=>{
                            if(acc.id ===account.id) {
                                return{
                                    ...acc,
                                    connected: !acc.connected,
                                }
                            }
                            return acc
                        })
                    )}
                >
                    {account.connected ? "Connected" : "Connect"}
                </button>
            </div>
        ))}
        
    </SettingSection>
  )
}

export default ConnectedAccounts