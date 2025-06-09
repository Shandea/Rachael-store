
import { type ElementType, type FC, type JSX } from 'react';

interface HeadingProps {
  
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

const baseStyles: Record<HeadingProps['level'], string> = {
  1: 'text-4xl font-bold mb-4',
  2: 'text-3xl font-semibold mb-3',
  3: 'text-2xl font-medium mb-2.5',
  4: 'text-xl font-medium mb-2',
  5: 'text-lg font-normal mb-1.5',
  6: 'text-base font-normal mb-1',
};

const Heading: FC<HeadingProps> = ({ level, className = '', children }) => {
  const tagName = `h${level}` as keyof JSX.IntrinsicElements;
  const Tag = tagName as ElementType;
  const combinedClassName = `${baseStyles[level]} ${className}`.trim();

  return <Tag className={combinedClassName}>{children}</Tag>;
};


export default Heading;
