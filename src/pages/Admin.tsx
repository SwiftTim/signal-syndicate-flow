import { Helmet } from "react-helmet-async";
import { useSignals } from "@/context/SignalsContext";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Admin = () => {
  const { emitDemoSignal, killSwitch, setKillSwitch } = useSignals();

  return (
    <main className="container px-6 py-10">
      <Helmet>
        <title>Admin — CopyTrade Syndicate</title>
        <meta name="description" content="Emit demo signal and control the system kill-switch." />
        <link rel="canonical" href="/admin" />
      </Helmet>

      <section className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Admin Controls</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Kill switch</span>
            <Switch checked={killSwitch} onCheckedChange={setKillSwitch} />
          </div>
        </div>
      </section>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="font-semibold mb-2">Signal Engine</h2>
        <p className="text-sm text-muted-foreground mb-4">Emit a deterministic demo signal to the live feed for testing.</p>
        <Button variant="hero" onClick={emitDemoSignal}>Emit Demo Signal</Button>
      </div>
    </main>
  );
};

export default Admin;
