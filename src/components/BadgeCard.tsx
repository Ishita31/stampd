import { cn } from "@/lib/cn";
import type { Badge } from "@/types";

type BadgeCardProps = {
  badge: Badge;
  className?: string;
};

export function BadgeCard({ badge, className }: BadgeCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center rounded-[1.75rem] border px-4 py-6 text-center transition-transform duration-300 hover:-translate-y-1",
        badge.unlocked
          ? "border-blush/30 bg-linear-to-b from-blush/20 to-white/5 shadow-[0_12px_40px_rgba(122,30,58,0.25)]"
          : "border-white/8 bg-white/4 opacity-55",
        className,
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/50 text-3xl shadow-[inset_0_0_20px_rgba(168,50,82,0.35)]">
        {badge.emoji}
      </div>
      <h3 className="mt-4 font-display text-sm font-bold tracking-wide text-soft">
        {badge.name}
      </h3>
      <p className="mt-1 text-xs leading-relaxed text-muted">{badge.description}</p>
    </article>
  );
}
