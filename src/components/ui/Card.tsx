import React from "react";



type CardProps = {

  title: string;

  children: React.ReactNode;

  icon?: React.ReactNode;

  iconPosition?: "top" | "left";

  className?: string;

};



const Card: React.FC<CardProps> = ({

  title,

  children,

  icon,

  iconPosition = "top",

  className = "",

}) => {

  const baseClasses =

    "bg-white border border-[#E2E8F0] p-6 rounded-[12px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-shadow duration-300";



  const layoutClasses =

    icon && iconPosition === "left"

      ? "flex items-start gap-4"

      : "flex flex-col items-start";



  return (

    <div className={`${baseClasses} ${layoutClasses} ${className}`}>

      {icon && iconPosition === "top" && <div className="mb-4 self-center">{icon}</div>}

      {icon && iconPosition === "left" && (

        <div className="flex-shrink-0">{icon}</div>

      )}

      <div>

        <h3 className="text-[0] font-semibold mb-2">{title}</h3>

        <div className="text-[16px] font-normal">{children}</div>

      </div>

    </div>

  );

};



export default Card;