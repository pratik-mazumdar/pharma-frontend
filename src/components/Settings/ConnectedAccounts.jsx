import { useState } from "react"
import SettingSection from "./SettingSection"
import { HelpCircle } from "lucide-react"

const ConnectedAccounts = () => {
    const [accounts, setAccounts] = useState([
        {
            id:1,
            name:"Whatsapp",
            connected: true,
            icon:"/WhatsApp.svg"
        },
    ])
    const handleToggle = (id) => {
        setAccounts((prevAccounts) =>
          prevAccounts.map((acc) =>
            acc.id === id ? { ...acc, connected: !acc.connected } : acc
          )
        );
      };
    
      return (
        <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
          {accounts.map((account) => (
            <div
              key={account.id}
              className="flex flex-col sm:flex-row items-center justify-between py-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={account.icon}
                  alt={`${account.name} logo`}
                  className="w-6 h-6 object-cover rounded-full"
                />
                <span className="text-gray-600">{account.name}</span>
              </div>
              <button
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                  account.connected ? "bg-blue-500" : "bg-gray-600"
                }`}
                onClick={() => handleToggle(account.id)}
              >
                <span
                  className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                    account.connected ? "translate-x-6" : "translate-x-1"
                  }`}
                ></span>
              </button>
            </div>
          ))}
        </SettingSection>
      );
    };
    
    export default ConnectedAccounts;