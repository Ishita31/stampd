"use client";

import { useState } from "react";
import { ArtistVisualFrame } from "@/components/ArtistVisual";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import { cn } from "@/lib/cn";
import type { Concert } from "@/types";

type MemoryCardProps = {
  concert: Concert;
};

export function MemoryCard({ concert }: MemoryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className={cn(
          "origin-center transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]",
        )}
        style={{ transform: `rotate(${concert.rotation ?? 0}deg)` }}
      >
        <GlassCard className="border-white/12 p-3">
          <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-ink shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <ArtistVisualFrame
              visual={concert.visual}
              artist={concert.artist}
              className="h-52"
            />
            <div className="px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blush">
                {concert.venue}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-soft">
                {concert.artist}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {concert.city} · {concert.date}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {concert.reactions?.map((reaction) => (
                  <span
                    key={reaction.emoji}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
                  >
                    {reaction.emoji} {reaction.count}
                  </span>
                ))}
              </div>
              <Button
                className="mt-4 w-full"
                variant="secondary"
                onClick={() => setOpen(true)}
              >
                View Memory
              </Button>
            </div>
          </div>
        </GlassCard>
      </article>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-4 backdrop-blur-sm sm:items-center">
          <GlassCard className="w-full max-w-md p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
              Memory
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-soft">
              {concert.artist}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {concert.venue} · {concert.city}
            </p>
            <p className="mt-5 text-base leading-relaxed text-soft/90">
              {concert.memory}
            </p>
            <Button className="mt-6 w-full" onClick={() => setOpen(false)}>
              Close
            </Button>
          </GlassCard>
        </div>
      ) : null}
    </>
  );
}
