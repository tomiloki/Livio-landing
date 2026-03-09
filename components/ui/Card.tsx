interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({ children, className = "", hover = true, gradient = false }: CardProps) {
  const baseClasses = "bg-background-surface border border-border rounded-xl p-6 transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30" : "";
  const gradientClasses = gradient ? "bg-gradient-to-br from-background-surface to-accent-light/20" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {children}
    </div>
  );
}
