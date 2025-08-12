import React, { createContext, useContext, useMemo, useRef, useState, useEffect } from "react";

export type Signal = {
  id: string;
  symbol: string;
  side: "BUY" | "SELL";
  price: number;
  size_reco: number;
  confidence: number; // 0-1
  timestamp: string; // ISO
  expires_at: string; // ISO
};

interface SignalsContextValue {
  signals: Signal[];
  emitDemoSignal: () => void;
  clearSignals: () => void;
  killSwitch: boolean;
  setKillSwitch: (on: boolean) => void;
}

const SignalsContext = createContext<SignalsContextValue | undefined>(undefined);

const SYMBOLS = ["BTCUSD", "ETHUSD", "SOLUSD", "AAPL", "MSFT", "NVDA"];

const nextId = (() => {
  let n = 1;
  return () => `${n++}`;
})();

function makeSignal(seed = Math.random()): Signal {
  const now = Date.now();
  const expires = now + 1000 * (30 + Math.floor(seed * 90)); // 30-120s
  const symbol = SYMBOLS[Math.floor(seed * SYMBOLS.length) % SYMBOLS.length];
  const side = seed > 0.5 ? "BUY" : "SELL";
  const priceBase = 100 + Math.floor(seed * 1000);
  const price = Number((priceBase + (seed - 0.5) * 10).toFixed(2));
  const size_reco = Number((0.1 + seed * 1.9).toFixed(2));
  const confidence = Number((0.5 + (seed % 0.5)).toFixed(2));
  return {
    id: nextId(),
    symbol,
    side,
    price,
    size_reco,
    confidence,
    timestamp: new Date(now).toISOString(),
    expires_at: new Date(expires).toISOString(),
  };
}

export const SignalsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [killSwitch, setKillSwitch] = useState(false);
  const ticker = useRef<number | null>(null);

  const emitDemoSignal = () => {
    const s = makeSignal(Math.random());
    setSignals((prev) => [s, ...prev].slice(0, 50));
  };

  const clearSignals = () => setSignals([]);

  useEffect(() => {
    // auto-emitter every 6 seconds when killSwitch is off
    if (killSwitch) {
      if (ticker.current) window.clearInterval(ticker.current);
      ticker.current = null;
      return;
    }
    ticker.current = window.setInterval(() => emitDemoSignal(), 6000);
    return () => {
      if (ticker.current) window.clearInterval(ticker.current);
      ticker.current = null;
    };
  }, [killSwitch]);

  const value = useMemo(() => ({ signals, emitDemoSignal, clearSignals, killSwitch, setKillSwitch }), [signals, killSwitch]);

  return <SignalsContext.Provider value={value}>{children}</SignalsContext.Provider>;
};

export const useSignals = () => {
  const ctx = useContext(SignalsContext);
  if (!ctx) throw new Error("useSignals must be used within SignalsProvider");
  return ctx;
};
