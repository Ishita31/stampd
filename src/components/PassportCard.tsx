import { ArtistVisualFrame } from "@/components/ArtistVisual";
import { cn } from "@/lib/cn";
import type { Concert } from "@/types";

type PassportCardProps = {
  concert: Concert;
  className?: string;
};

export function PassportCard({ concert, className }: PassportCardProps) {
  const stamped = concert.status === "stamped";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#141010] shadow-[0_18px_40px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0",
        className,
      )}
    >
      <div className="absolute inset-y-0 left-[38%] z-10 hidden w-px border-l border-dashed border-white/20 sm:block" />
      <ArtistVisualFrame
        visual={concert.visual}
        artist={concert.artist}
        compact
        className="h-44"
      />
      <div className="relative px-4 pb-5 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blush">
              {concert.concert}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold text-soft">
              {concert.artist}
            </h3>
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
              stamped
                ? "bg-burgundy text-soft shadow-[0_0_18px_rgba(168,50,82,0.55)]"
                : "border border-white/15 text-muted",
            )}
          >
            {stamped ? "Stamped" : "Upcoming"}
          </span>
        </div>
        <div className="mt-4 flex items-end justify-between text-sm">
          <div>
            <p className="text-soft">{concert.city}</p>
            <p className="text-xs text-muted">{concert.dateShort}</p>
          </div>
          {stamped ? (
            <div className="flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-blush/70 text-[9px] font-extrabold uppercase tracking-[0.12em] text-blush shadow-[0_0_16px_rgba(168,50,82,0.45)]">
              Stampd
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
