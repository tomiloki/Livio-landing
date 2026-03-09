import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export default function Button({ 
  children, 
  href, 
  variant = "primary",
  onClick,
  type = "button",
  size = "md",
  disabled = false
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    primary: "bg-gradient-to-r from-accent to-accent/90 text-white hover:from-accent/90 hover:to-accent hover:shadow-lg hover:shadow-accent/30 hover:scale-105 focus:ring-accent",
    secondary: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20 hover:scale-105 focus:ring-accent",
    tertiary: "bg-background-alt text-text-primary hover:bg-accent/10 hover:text-accent hover:shadow-md focus:ring-accent/50"
  };

  const className = `${baseStyles} ${sizes[size]} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
