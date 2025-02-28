import classNames from "classnames";

const Button = ({
  variant = "primary",
  label,
  onClick,
  type = "button",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg focus:outline-none transition-colors duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const buttonClasses = classNames(baseClasses, variants[variant], className);

  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...props}>
      {children || label}
    </button>
  );
};

export default Button;
