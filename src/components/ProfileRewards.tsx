import { BadgeCard } from "@/components/BadgeCard";
import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { badges, currentUser } from "@/data/sample";

export function ProfileRewards() {
  const progress = ((8 - currentUser.concertsToNextLevel) / 8) * 100;

  return (
    <div className="space-y-8">
      <section className="flex flex-col items-center text-center">
        <div className="rounded-full bg-linear-to-br from-blush via-soft to-burgundy p-[3px] shadow-[0_0_40px_rgba(168,50,82,0.55)]">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-wine font-display text-3xl font-extrabold text-soft">
            {currentUser.name.slice(0, 1)}
          </div>
        </div>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-soft">
          {currentUser.username}
        </h1>
        <p className="mt-2 rounded-full border border-blush/40 bg-burgundy/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-blush">
          {currentUser.persona}
        </p>
      </section>

      <section className="grid grid-cols-3 gap-3">
        <StatCard value={currentUser.stats.concerts} label="Concerts" />
        <StatCard value={currentUser.stats.cities} label="Cities" />
        <StatCard value={currentUser.stats.badges} label="Badges" />
      </section>

      <GlassCard className="p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Fan level
            </p>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-soft">
              LEVEL {currentUser.fanLevel}
            </h2>
          </div>
          <p className="text-sm text-muted">
            {currentUser.concertsToNextLevel} concerts until Level{" "}
            {currentUser.fanLevel + 1}
          </p>
        </div>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-linear-to-r from-wine via-burgundy to-blush"
            style={{ width: `${progress}%` }}
          />
        </div>
      </GlassCard>

      <section>
        <h2 className="font-display text-2xl font-bold text-soft">Badges</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </section>
    </div>
  );
}
