"use client";

import React from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface WalletConnectionCardProps {
  name: string;
  network: string;
  icon: React.ReactNode;
  iconBg: string;
  status: "connected" | "disconnected" | "loading";
  address?: string | null;
  onConnect: () => void;
}

export const WalletConnectionCard: React.FC<WalletConnectionCardProps> = ({
  name,
  network,
  icon,
  iconBg,
  status,
  address,
  onConnect,
}) => {
  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-[var(--card-background)] border border-[var(--border-color)] transition-all duration-300 hover:bg-[var(--card-background-elevated)] hover:border-[var(--brand-primary)]/30">
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-inner"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold text-base">{name}</h3>
            {status === "connected" && (
              <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                <Check size={10} strokeWidth={3} />
                Linked
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--muted-text)] text-xs font-medium uppercase tracking-tight">
              {network}
            </span>
            {status === "connected" && address && (
              <>
                <span className="text-[var(--muted-text)]/40 text-[10px]">•</span>
                <span className="text-[var(--muted-text)]/70 text-xs font-mono">
                  {shortenAddress(address)}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        {status === "loading" ? (
          <Button variant="outline" disabled className="h-9 px-4 text-xs opacity-70">
            <Loader2 className="w-3.5 h-3.5 animate-spin mr-2" />
            Connecting
          </Button>
        ) : status === "connected" ? (
          <Button 
            variant="outline" 
            className="h-9 px-4 text-xs border-[var(--border-color)] text-[var(--muted-text)] hover:text-white hover:border-white/20"
            onClick={onConnect}
          >
            Connected
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="h-9 px-4 text-xs border-[var(--brand-primary)]/30 text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-black hover:border-[var(--brand-primary)]"
            onClick={onConnect}
          >
            Connect {name}
          </Button>
        )}
      </div>
    </div>
  );
};
