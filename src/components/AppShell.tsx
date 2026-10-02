import { Navigation } from "@/components/Navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="lg:pl-60">
        <main className="mx-auto w-full max-w-5xl px-4 pb-28 pt-8 sm:px-8 lg:pb-12 lg:pt-10">
          {children}
        </main>
      </div>
    </div>
  );
}
