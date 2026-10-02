"use client";

import { useState } from "react";
import { ArtistVisualFrame } from "@/components/ArtistVisual";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";
import type { Concert } from "@/types";

type ConcertCardProps = {
  concert: Concert;
};

export function ConcertCard({ concert }: ConcertCardProps) {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <GlassCard className="p-3 sm:p-4">
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <ArtistVisualFrame
          visual={concert.visual}
          artist={concert.artist}
          className="h-56 rounded-[1.5rem] sm:h-72"
        />
        <div className="flex flex-col justify-center px-2 pb-3 sm:px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blush">
            Upcoming Concert
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-soft">
            {concert.artist}
          </h2>
          <p className="mt-1 text-sm text-muted">{concert.concert}</p>
          <div className="mt-5 space-y-1.5 text-sm text-soft/90">
            <p>{concert.date}</p>
            <p>{concert.venue}</p>
            <p className="text-muted">{concert.city}</p>
          </div>
          <Button
            className="mt-6 w-full sm:w-auto"
            variant={checkedIn ? "secondary" : "primary"}
            onClick={() => setCheckedIn(true)}
          >
            {checkedIn ? "You're in" : "Check In"}
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
