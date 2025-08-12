import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BrokerLink = () => {
  return (
    <main className="container px-6 py-10 max-w-2xl">
      <Helmet>
        <title>Broker Link — CopyTrade Syndicate</title>
        <meta name="description" content="Link a demo broker with trade-only keys." />
        <link rel="canonical" href="/broker-link" />
      </Helmet>

      <h1 className="text-2xl font-semibold mb-6">Link Broker Account</h1>
      <div className="rounded-lg border bg-card p-6 space-y-5">
        <div className="grid gap-2">
          <Label>Broker</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select broker" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mock">MockBroker (Sandbox)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label>Trade-only API Key</Label>
          <Input type="password" placeholder="••••••••••" />
          <p className="text-xs text-muted-foreground">We never request withdrawal-enabled keys.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Test Connection</Button>
          <Button variant="hero">Save</Button>
        </div>
      </div>
    </main>
  );
};

export default BrokerLink;
