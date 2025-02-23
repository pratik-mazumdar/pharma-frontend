import { useState } from "react"
import SettingSection from "./SettingSection"
import { Bell } from "lucide-react"
import ToggleSwitch from "./ToggleSwitch"

const Notifications = () => {
    const [notifications, setNotifications] = useState({
        push:true,
        email:false,
        sms:true,
    })

  return (
    <SettingSection icon={Bell} title={"Notifications"}>
        <ToggleSwitch
        lable={"Push Notifications"}
        isOn={notifications.push}
        OnToggle={ () => setNotifications({...notifications, push:!notifications.push})}
        />
        <ToggleSwitch
        lable={"Email Notifications"}
        isOn={notifications.email}
        OnToggle={ () => setNotifications({...notifications, email:!notifications.email})}
        />
        <ToggleSwitch
        lable={"Sms Notifications"}
        isOn={notifications.sms}
        OnToggle={ () => setNotifications({...notifications, sms:!notifications.sms})}
        />
    </SettingSection>
  )
}

export default Notifications