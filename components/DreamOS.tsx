"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { dreamOSMarkup } from "@/content/dreamos-markup";

/**
 * Original desktop is a fixed 1050px x 800px design. Keep the original
 * HTML/CSS/JS unchanged for pixel fidelity, and scale the entire canvas
 * to fit the viewport when the browser is narrower.
 *
 * The original vanilla-JS window manager, player, pet, gallery, etc.
 * are initialized AFTER React has mounted the original HTML nodes.
 */
const CANVAS_WIDTH = 1054; // original 1050px content + 2px border on each side
const CANVAS_HEIGHT = 850; // desktop + creator credit

export default function DreamOS() {
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const recalculate = () => {
      const availableWidth = Math.max(0, window.innerWidth - 24);
      setScale(Math.min(1, availableWidth / CANVAS_WIDTH));
    };
    recalculate();
    window.addEventListener("resize", recalculate);
    return () => window.removeEventListener("resize", recalculate);
  }, []);

  return (
    <main className="dreamos-page">
      <div
        className="dreamos-stage"
        style={{ width: CANVAS_WIDTH * scale, height: CANVAS_HEIGHT * scale }}
      >
        <div
          className="dreamos-canvas"
          style={{ transform: `scale(${scale})` }}
          // This content is bundled from the user's own CodePen HTML, not untrusted input.
          dangerouslySetInnerHTML={{ __html: dreamOSMarkup }}
        />
      </div>
      {mounted && <Script src="/dreamos/runtime.js" strategy="afterInteractive" />}
    </main>
  );
}
