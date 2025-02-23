import Header from "../components/common/Header"
import Profile from "../components/Settings/Profile"
import Notifications from "../components/Settings/Notifications"
import ConnectedAccounts from "../components/Settings/ConnectedAccounts"

const Settings = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-white">
        <Header title="Settings"/>
        <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
            <Profile/>
            <Notifications/>
            <ConnectedAccounts/>
        </main>

    </div>
  )
}

export default Settings