import type { ArtistVisual } from "@/types";
import { CrowdSilhouette } from "@/components/CrowdSilhouette";
import { cn } from "@/lib/cn";

type ArtistVisualFrameProps = {
  visual: ArtistVisual;
  artist: string;
  className?: string;
  compact?: boolean;
};

export function ArtistVisualFrame({
  visual,
  artist,
  className,
  compact = false,
}: ArtistVisualFrameProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        background: `linear-gradient(145deg, ${visual.from} 0%, ${visual.via} 48%, ${visual.to} 100%)`,
      }}
    >
      <div
        className="absolute -right-8 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: visual.accent, opacity: 0.35 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_42%)]" />
      <CrowdSilhouette className="absolute inset-x-[-8%] bottom-[-6%] h-[62%] opacity-80" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
      <p
        className={cn(
          "absolute bottom-3 left-4 right-4 font-display font-extrabold uppercase leading-[0.9] tracking-tight text-soft drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]",
          compact ? "text-lg" : "text-2xl sm:text-3xl",
        )}
      >
        {artist}
      </p>
    </div>
  );
}
