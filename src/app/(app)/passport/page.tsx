import { PassportCard } from "@/components/PassportCard";
import { concerts } from "@/data/sample";

export default function PassportPage() {
  return (
    <div>
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blush">
          Collection
        </p>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-soft">
          YOUR PASSPORT
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted">
          Every night gets a stamp. Keep collecting the rooms that changed you.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {concerts.map((concert, index) => (
          <PassportCard
            key={concert.id}
            concert={concert}
            className={index % 2 === 0 ? "-rotate-1" : "rotate-1"}
          />
        ))}
      </div>
    </div>
  );
}
