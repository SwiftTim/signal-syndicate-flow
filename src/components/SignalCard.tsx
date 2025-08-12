import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import type { Signal } from "@/context/SignalsContext";

const formatTimeLeft = (expiresAt: string) => {
  const ms = new Date(expiresAt).getTime() - Date.now();
  if (ms <= 0) return "expired";
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export const SignalCard = ({ signal }: { signal: Signal }) => {
  const [left, setLeft] = useState(formatTimeLeft(signal.expires_at));
  useEffect(() => {
    const t = setInterval(() => setLeft(formatTimeLeft(signal.expires_at)), 1000);
    return () => clearInterval(t);
  }, [signal.expires_at]);

  return (
    <Card className="hover:shadow-[var(--shadow-elevate)] transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">{signal.symbol}</CardTitle>
        <Badge variant={signal.side === "BUY" ? "default" : "secondary"}>{signal.side}</Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="text-muted-foreground">Price</div>
          <div className="text-right">{signal.price.toFixed(2)}</div>
          <div className="text-muted-foreground">Size reco</div>
          <div className="text-right">{signal.size_reco}x</div>
          <div className="text-muted-foreground">Confidence</div>
          <div className="text-right">{(signal.confidence * 100).toFixed(0)}%</div>
          <div className="text-muted-foreground">Expires</div>
          <div className="text-right">{left}</div>
        </div>
      </CardContent>
    </Card>
  );
};
