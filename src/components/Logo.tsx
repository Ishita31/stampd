import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-display text-xl font-extrabold tracking-[0.22em] text-soft",
        className,
      )}
    >
      STAMPD
    </Link>
  );
}
