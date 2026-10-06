import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  showArrow = false,
  size = 'md',
  href,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'py-2 px-4 text-xs',
    md: 'py-3.5 px-7 text-xs sm:text-sm',
    lg: 'py-4 px-9 text-sm font-medium',
  };

  const variantClasses = {
    primary:
      'bg-[#171717] text-[#F7F4EF] hover:bg-[#2A2A2A] border border-[#171717] shadow-sm',
    secondary:
      'bg-[#7A2032] text-[#F7F4EF] hover:bg-[#5C1927] border border-[#7A2032]',
    outline:
      'bg-transparent text-[#171717] border border-[#171717] hover:bg-[#171717] hover:text-[#F7F4EF]',
    text:
      'bg-transparent text-[#171717] hover:text-[#7A2032] p-0 border-none font-medium',
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 tracking-[0.14em] uppercase font-sans whitespace-nowrap transition-all duration-300 cursor-pointer select-none ${
    variant !== 'text' ? sizeClasses[size] : ''
  } ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        <span>{children}</span>
        {showArrow && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
};
