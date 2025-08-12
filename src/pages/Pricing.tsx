import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <main className="container px-6 py-16">
      <Helmet>
        <title>Pricing — CopyTrade Syndicate</title>
        <meta name="description" content="Free tier for testing and a Pro plan with full features." />
        <link rel="canonical" href="/pricing" />
      </Helmet>

      <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-2">Free</h2>
          <p className="text-sm text-muted-foreground mb-4">Demo feed, limited history.</p>
          <Button variant="outline">Start Free</Button>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-[var(--shadow-elevate)]">
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p className="text-sm text-muted-foreground mb-4">Full live feed, priority updates, and broker linking.</p>
          <Button variant="hero">Subscribe</Button>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
