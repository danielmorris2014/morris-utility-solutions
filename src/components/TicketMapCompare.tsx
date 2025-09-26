"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  /** Left (static) ticket screenshot */
  ticketSrc: string;
  /** Right map before image (base) */
  mapBeforeSrc: string;
  /** Right map after image (revealed via slider) */
  mapAfterSrc: string;
  /** Width of the left ticket pane, in px */
  leftWidthPx?: number;
  /** Height of the whole window, in px */
  mapHeightPx?: number;
  /** Labels */
  beforeLabel?: string;
  afterLabel?: string;
  /** Initial reveal of AFTER (% across the map pane) */
  initial?: number;
};

export default function TicketMapCompare({
  ticketSrc,
  mapBeforeSrc,
  mapAfterSrc,
  leftWidthPx = 740,
  mapHeightPx = 520,
  beforeLabel = "Before",
  afterLabel = "After",
  initial = 50,
}: Props) {
  // slider = % across the MAP area (0=all before, 100=all after)
  const [sliderPct, setSliderPct] = useState(Math.max(0, Math.min(100, initial)));
  const mapWrapRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);

  const moveTo = (clientX: number) => {
    const el = mapWrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setSliderPct(Math.max(0, Math.min(100, pct)));
  };

  useEffect(() => {
    const onMouse = (e: MouseEvent) => dragging && moveTo(e.clientX);
    const onTouch = (e: TouchEvent) => {
      if (!dragging || e.touches.length === 0) return;
      moveTo(e.touches[0].clientX);
    };
    const stop = () => setDragging(false);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    window.addEventListener("touchcancel", stop);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch as any);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
      window.removeEventListener("touchcancel", stop);
    };
  }, [dragging]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setSliderPct((v) => Math.max(0, v - 2));
    if (e.key === "ArrowRight") setSliderPct((v) => Math.min(100, v + 2));
    if (e.key === "Home") setSliderPct(0);
    if (e.key === "End") setSliderPct(100);
  };

  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
      {/* header bar */}
      <div className="h-10 flex items-center justify-between px-3 border-b bg-gray-50">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 font-medium text-gray-700">Facility Type</span>
        </div>
        <div className="text-xs text-gray-500">Morris Utility Solutions — Ticket View</div>
      </div>

      {/* window body */}
      <div
        className="relative bg-white grid"
        style={{
          gridTemplateColumns: `${leftWidthPx}px 1fr`,
          height: mapHeightPx, // <— the whole frame height
        }}
      >
        {/* LEFT: ticket */}
        <div className="relative border-r border-gray-200 bg-white overflow-hidden">
          <img
            src={ticketSrc}
            alt="Ticket details"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          {/* faux scrollbar hint */}
          <div className="absolute top-2 right-1 h-24 w-1 rounded bg-gray-200/70" />
        </div>

        {/* RIGHT: map with seamless slider */}
        <div className="relative bg-gray-200 overflow-hidden">
          {/* map wrap for bounds */}
          <div
            ref={mapWrapRef}
            className="absolute inset-0 select-none cursor-col-resize"
            onMouseDown={(e) => {
              setDragging(true);
              moveTo(e.clientX);
            }}
            onTouchStart={(e) => {
              setDragging(true);
              if (e.touches.length) moveTo(e.touches[0].clientX);
            }}
          >
            {/* base (before) fills entire pane */}
            <img
              src={mapBeforeSrc}
              alt={`${beforeLabel} map`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            {/* top (after) also full-size; clipped by slider */}
            <img
              src={mapAfterSrc}
              alt={`${afterLabel} map`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPct}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPct}% 0 0)`,
              }}
              draggable={false}
            />

            {/* divider at seam */}
            <div
              className="absolute top-0 h-full"
              style={{
                left: `calc(${sliderPct}% - 1px)`,
                width: 2,
                background: "rgba(0,51,102,0.9)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.75)",
              }}
            />

            {/* handle */}
            <button
              role="slider"
              aria-label="Comparison handle"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Number(sliderPct.toFixed(0))}
              onKeyDown={onKey}
              onMouseDown={() => setDragging(true)}
              onTouchStart={() => setDragging(true)}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border bg-white/95 px-3 py-1 text-xs font-medium text-[#003366] shadow focus:outline-none focus:ring"
              style={{ left: `${sliderPct}%` }}
            >
              ⇆ Drag
            </button>

            {/* labels */}
            <div className="absolute left-2 top-2 text-xs px-2 py-1 rounded bg-red-600 text-white shadow">
              {beforeLabel}
            </div>
            <div className="absolute right-2 top-2 text-xs px-2 py-1 rounded bg-emerald-600 text-white shadow">
              {afterLabel}
            </div>

            {/* small scalebar hint (optional) */}
            <div className="absolute left-4 bottom-4 text-[10px] px-2 py-1 rounded bg-white/90 border border-gray-300 text-gray-700 shadow-sm">
              200 m | 500 ft
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
