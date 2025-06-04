import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "link";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  let baseClasses = "rounded-lg font-medium text-[16px] transition-colors duration-200";
  
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = disabled 
      ? "bg-[#0D9488]/50 text-white"
      : "bg-[#0D9488] text-white hover:bg-[#0C827A]";
  } else if (variant === "link") {
    variantClasses = disabled 
      ? "text-[#0D9488]/50 underline"
      : "text-[#0D9488] underline hover:text-[#0C827A]";
  }

  let sizeClasses = "";
  if (size === "sm") sizeClasses = "px-4 py-2";
  else if (size === "md") sizeClasses = "px-5 py-3";
  else if (size === "lg") sizeClasses = "px-6 py-4";

  const finalClassName = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {children}
    </button>
  );
};

export default Button;
