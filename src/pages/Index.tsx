import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Helmet>
        <title>CopyTrade Syndicate — Signals & Copy Trading</title>
        <meta name="description" content="Live trading signals, copy trading, onboarding, and dashboards." />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="absolute inset-0 -z-10 bg-soft-gradient opacity-80" />
      <div className="absolute -z-10 w-[60vmax] h-[60vmax] rounded-full blur-3xl bg-hero-gradient opacity-30 translate-y-[-20%]" />

      <section className="container px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">CopyTrade Syndicate</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Live trading signals, real-time dashboards, and safe copy trading. Built for speed and transparency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button variant="hero" size="lg">View Live Signals</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" size="lg">Get Started</Button>
          </Link>
        </div>
      </section>

      <section className="container px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-2">Mock Signal Engine</h3>
          <p className="text-sm text-muted-foreground">Deterministic demo signals power the live feed for MVP verification.</p>
        </article>
        <article className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-2">Broker Link (Trade-only)</h3>
          <p className="text-sm text-muted-foreground">Connect demo accounts with trade-only keys. No withdrawals, ever.</p>
        </article>
        <article className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-2">Admin Kill-Switch</h3>
          <p className="text-sm text-muted-foreground">Emergency stop for copy execution accessible from the Admin panel.</p>
        </article>
      </section>
    </main>
  );
};

export default Index;
