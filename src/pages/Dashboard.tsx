import { Helmet } from "react-helmet-async";
import { useSignals } from "@/context/SignalsContext";
import { SignalCard } from "@/components/SignalCard";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { signals, killSwitch, setKillSwitch, clearSignals } = useSignals();

  return (
    <main className="container px-6 py-10">
      <Helmet>
        <title>Dashboard — CopyTrade Syndicate</title>
        <meta name="description" content="Live signal feed and quick stats." />
        <link rel="canonical" href="/dashboard" />
      </Helmet>

      <section className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Live Signals</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Kill switch</span>
            <Switch checked={killSwitch} onCheckedChange={setKillSwitch} />
          </div>
          <Button variant="outline" onClick={clearSignals}>Clear</Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((s) => (
          <SignalCard key={s.id} signal={s} />
        ))}
        {signals.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">
            No signals yet. Waiting for the engine to emit...
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
