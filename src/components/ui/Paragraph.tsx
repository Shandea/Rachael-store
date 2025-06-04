import React from "react";

export type ParagraphVariant = "body" | "small" | "caption";

interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
  variant?: ParagraphVariant;
  as?: React.ElementType;
  children: React.ReactNode;
}

const variantStyles: Record<ParagraphVariant, string> = {
  body: "text-[14px] leading-[1.5] font-normal text-sky-700",
  small: "text-[12px] leading-[1.5] font-normal text-sky-500",
  caption: "text-[10px] leading-[1.5] font-normal text-sky-300",
};

const Paragraph: React.FC<ParagraphProps> = ({
  variant = "body",
  as: Component = "p",
  className = "",
  children,
  ...props
}) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  )
}

export default Paragraph