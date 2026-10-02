import { MemoryCard } from "@/components/MemoryCard";
import { stampedConcerts } from "@/data/sample";

export default function HistoryPage() {
  return (
    <div>
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blush">
          Memories
        </p>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-soft">
          Concert History
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted">
          A scrapbook of the nights you actually lived.
        </p>
      </header>

      <div className="mx-auto flex max-w-xl flex-col gap-8">
        {stampedConcerts.map((concert) => (
          <MemoryCard key={concert.id} concert={concert} />
        ))}
      </div>
    </div>
  );
}
