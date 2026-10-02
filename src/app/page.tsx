import { Button } from "@/components/Button";
import { CrowdSilhouette } from "@/components/CrowdSilhouette";
import { Logo } from "@/components/Logo";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <header className="relative z-10 flex items-center justify-between px-5 py-6 sm:px-10">
        <Logo />
        <Button href="/home" variant="secondary" className="hidden sm:inline-flex">
          Explore Stampd
        </Button>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl flex-col justify-end px-5 pb-16 sm:px-10 lg:justify-center">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blush">
            Concert passport
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-soft sm:text-7xl lg:text-8xl">
            YOUR LIFE.
            <br />
            YOUR CONCERTS.
            <br />
            YOUR PASSPORT.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted sm:text-xl">
            Collect the nights you&apos;ll never forget.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/home">Start Your Passport</Button>
            <Button href="/passport" variant="secondary">
              Explore Stampd
            </Button>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-blush/30 blur-[90px] sm:h-[28rem] sm:w-[28rem]" />
        <CrowdSilhouette className="absolute inset-x-0 bottom-0 h-[48vh] w-full opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />
      </div>
    </div>
  );
}
