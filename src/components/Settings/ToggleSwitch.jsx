const ToggleSwitch = ({lable,isOn,OnToggle}) => {
  return (
    <div className="flex items-center justify-between py-3">
        <span className="text-gray-500">{lable}</span>
        <button
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none 
            ${isOn ? 'bg-blue-500' : 'bg-gray-600'}`}
        onClick={OnToggle}
        >
            <span 
            className={`inline-block size-4 transform transition-transform bg-white rounded-full
                ${isOn ? "translate-x-6" : "translate-x-1"}
                `}
            >
            </span>
        </button>
    </div>
  )
}

export default ToggleSwitch