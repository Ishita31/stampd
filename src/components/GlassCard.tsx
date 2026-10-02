import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-burgundy/10" />
      <div className="relative">{children}</div>
    </div>
  );
}
