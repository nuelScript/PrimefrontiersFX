"use client";

import { Button } from "@/components/ui/button";
import { Clock, Home, Hourglass } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_3a234") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          withdateranges: true,
          container_id: "tradingview_3a234",
        });
      }
    }
  }, []);

  return (
    <div className="flex h-screen w-full max-w-screen-md md:max-w-screen-xl">
      <div className="flex flex-col space-y-10 w-1/2">
        <Link href="/dashboard" className="hover:bg-opacity-50">
          <Button className="flex space-x-2 w-40" variant="secondary">
            <Home className="w-4 h-4" /> <span>Home</span>
          </Button>
        </Link>
        <Link
          href="/dashboard/trading/binary-options"
          className="hover:bg-opacity-50"
        >
          <Button className="flex space-x-2 w-40" variant="secondary">
            <Clock className="h-4 w-4" /> <span>Binary Options</span>
          </Button>
        </Link>
        <Link
          href="/dashboard/trading/trade-room"
          className="hover:bg-opacity-50"
        >
          <Button className="flex space-x-2 flex-1 w-40" variant="secondary">
            <Hourglass className="h-4 w-4" />
            <span>Open Trades</span>
          </Button>
        </Link>
        <Link
          href="/dashboard/trading/trade-room"
          className="hover:bg-opacity-50"
        >
          <Button className="flex space-x-2 flex-1 w-40" variant="secondary">
            <Hourglass className="h-4 w-4" />
            <span>Closed Trades</span>
          </Button>
        </Link>
      </div>
      <div id="tradingview_3a234" className="w-full" />
    </div>
  );
}
