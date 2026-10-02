"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";

const items = [
  { href: "/home", label: "Home", icon: HomeIcon },
  { href: "/passport", label: "Passport", icon: PassportIcon },
  { href: "/history", label: "History", icon: HistoryIcon },
  { href: "/rewards", label: "Rewards", icon: RewardsIcon },
  { href: "/profile", label: "Profile", icon: ProfileIcon },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-white/8 bg-ink/80 px-5 py-8 backdrop-blur-xl lg:flex">
        <Logo />
        <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted">
          Concert passport
        </p>
        <nav className="mt-10 flex flex-col gap-2">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition-colors duration-200",
                  active
                    ? "bg-burgundy text-soft shadow-[0_8px_24px_rgba(122,30,58,0.4)]"
                    : "text-muted hover:bg-white/5 hover:text-soft",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between rounded-full border border-white/10 bg-ink/85 px-2 py-2 shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:hidden">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center gap-1 rounded-full px-1 py-2 text-[10px] font-semibold tracking-wide",
                active ? "bg-burgundy text-soft" : "text-muted",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PassportIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="11" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 17.5h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 12a7 7 0 1 0 2-4.95"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M5 5v4h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 8.5V12l2.5 1.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function RewardsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 9h10v3a5 5 0 0 1-10 0z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M7 9 5 4h4l3 5 3-5h4l-2 5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 20h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 19c1.4-3.2 3.7-4.8 6.5-4.8S16.6 15.8 18.5 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
