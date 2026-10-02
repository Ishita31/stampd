import { cn } from "@/lib/cn";
import { GlassCard } from "@/components/GlassCard";

type StatCardProps = {
  value: string | number;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <GlassCard className={cn("px-5 py-6 text-center", className)}>
      <p className="font-display text-3xl font-bold tracking-tight text-soft sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
    </GlassCard>
  );
}
