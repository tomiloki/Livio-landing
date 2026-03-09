interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-accent-light text-accent border border-accent/20",
    primary: "bg-gradient-to-r from-accent/10 to-primary/10 text-primary border border-primary/20",
    success: "bg-green-50 text-green-700 border border-green-200"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
