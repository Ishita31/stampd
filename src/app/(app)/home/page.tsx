import { ConcertCard } from "@/components/ConcertCard";
import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { currentUser, latestBadge, upcomingConcert } from "@/data/sample";
import { Greeting } from "@/components/Greeting";

export default function HomeDashboard() {
  return (
    <div className="space-y-6">
      <header>
        <Greeting name={currentUser.name} />
        <p className="mt-2 text-sm text-muted">
          Your next night out is waiting.
        </p>
      </header>

      <ConcertCard concert={upcomingConcert} />

      <section className="grid grid-cols-3 gap-3">
        <StatCard value={currentUser.stats.concerts} label="Concerts Attended" />
        <StatCard value={currentUser.stats.cities} label="Cities" />
        <StatCard value={`Level ${currentUser.fanLevel}`} label="Fan Level" />
      </section>

      <GlassCard className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Latest Badge
        </p>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-burgundy text-3xl shadow-[0_0_30px_rgba(168,50,82,0.45)]">
            {latestBadge.emoji}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-soft">
              {latestBadge.emoji} {latestBadge.name}
            </h2>
            <p className="mt-1 text-sm text-muted">{latestBadge.description}</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
