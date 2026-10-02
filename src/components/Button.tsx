import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-burgundy text-soft shadow-[0_12px_40px_rgba(122,30,58,0.45)] hover:bg-blush hover:shadow-[0_16px_50px_rgba(168,50,82,0.55)]",
  secondary:
    "border border-white/15 bg-white/5 text-soft backdrop-blur-md hover:border-blush/50 hover:bg-white/10",
  ghost: "text-soft hover:bg-white/5",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
