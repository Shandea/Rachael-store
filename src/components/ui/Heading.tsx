import React from "react";

export type HeaderLevel = "h1" | "h2" | "h3" | "h4";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeaderLevel;
  children: React.ReactNode;
  className?: string;
}

const headerStyles: Record<HeaderLevel, string> = {
  h1: "text-4xl sm:text-5xl font-bold leading-tight text-slate-800",   // 48px desktop / 32px mobile
  h2: "text-3xl sm:text-4xl font-bold leading-snug text-slate-800",    // 36px / 28px
  h3: "text-xl sm:text-3xl font-semibold leading-relaxed text-slate-800", // 24px / 20px
  h4: "text-lg sm:text-xl font-semibold leading-loose text-slate-800",   // 20px / 18px
};

const Heading: React.FC<HeaderProps> = ({
  level = "h1",
  children,
  className = "",
  ...props
}) => {
  const Component = level;
  const baseClasses = headerStyles[level];
  const combinedClassName = `${baseClasses} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Heading;