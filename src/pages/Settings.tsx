import { Helmet } from "react-helmet-async";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const Settings = () => {
  return (
    <main className="container px-6 py-10 max-w-2xl">
      <Helmet>
        <title>Settings — CopyTrade Syndicate</title>
        <meta name="description" content="Adjust risk multiplier and auto-copy preferences." />
        <link rel="canonical" href="/settings" />
      </Helmet>

      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>
      <div className="rounded-lg border bg-card p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label>Auto-copy</Label>
            <p className="text-sm text-muted-foreground">Automatically follow master signals.</p>
          </div>
          <Switch />
        </div>
        <div>
          <Label>Risk Multiplier</Label>
          <p className="text-sm text-muted-foreground mb-3">Scale trade sizes between 0.1x and 2x.</p>
          <Slider defaultValue={[100]} min={10} max={200} step={10} />
        </div>
      </div>
    </main>
  );
};

export default Settings;
