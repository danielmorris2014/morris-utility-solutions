"use client";
import { useEffect, useMemo, useRef, useState } from "react";

/** Path under /public, e.g. /videos/legacy-kmz.mp4 or /images/legacy.png */
type Source = {
  src?: string;
  caption?: string;
  /** If true, treat as image instead of video */
  image?: boolean;
  /** Optional poster shown before play (videos only) */
  poster?: string;
};

export default function VideoCompare({
  left,
  right,
  title = "See the difference",
  subtitle,
  bullets = [],
  aspect = "16/9",
}: {
  left: Source;
  right: Source;
  title?: string;
  subtitle?: string;
  bullets?: string[];
  /** aspect ratio string "16/9" | "4/3" | "1/1" */
  aspect?: "16/9" | "4/3" | "1/1";
}) {
  const leftRef = useRef<HTMLVideoElement | null>(null);
  const rightRef = useRef<HTMLVideoElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);

  const isVideo = useMemo(
    () => ({ left: !!left.src && !left.image, right: !!right.src && !right.image }),
    [left.src, left.image, right.src, right.image]
  );

  const ratioClass =
    aspect === "4/3" ? "aspect-[4/3]" : aspect === "1/1" ? "aspect-square" : "aspect-video";

  // keep videos in sync
  useEffect(() => {
    if (!isVideo.left || !isVideo.right) return;
    const L = leftRef.current;
    const R = rightRef.current;
    if (!L || !R) return;

    const onTime = () => {
      setTime(L.currentTime);
      if (Math.abs(L.currentTime - R.currentTime) > 0.15) R.currentTime = L.currentTime;
    };
    L.addEventListener("timeupdate", onTime);
    return () => L.removeEventListener("timeupdate", onTime);
  }, [isVideo.left, isVideo.right]);

  // apply speed/mute to both
  useEffect(() => {
    [leftRef.current, rightRef.current].forEach((v) => {
      if (!v) return;
      v.playbackRate = speed;
      v.muted = muted;
    });
  }, [speed, muted]);

  // compute max duration for scrubber
  useEffect(() => {
    if (!isVideo.left && !isVideo.right) return;
    const L = leftRef.current;
    const R = rightRef.current;

    const updateDur = () => {
      const d = Math.max(L?.duration || 0, R?.duration || 0);
      if (isFinite(d)) setDur(d);
    };

    L?.addEventListener("loadedmetadata", updateDur);
    R?.addEventListener("loadedmetadata", updateDur);
    updateDur();

    return () => {
      L?.removeEventListener("loadedmetadata", updateDur);
      R?.removeEventListener("loadedmetadata", updateDur);
    };
  }, [isVideo.left, isVideo.right]);

  const togglePlay = async () => {
    if (!(isVideo.left || isVideo.right)) return;
    const vids = [leftRef.current, rightRef.current].filter(Boolean) as HTMLVideoElement[];
    if (playing) {
      vids.forEach((v) => v.pause());
      setPlaying(false);
    } else {
      if (vids.length === 2 && Math.abs(vids[0].currentTime - vids[1].currentTime) > 0.1) {
        vids[1].currentTime = vids[0].currentTime;
      }
      await Promise.allSettled(vids.map((v) => v.play()));
      setPlaying(true);
    }
  };

  const handleScrub = (t: number) => {
    [leftRef.current, rightRef.current].forEach((v) => {
      if (v) v.currentTime = t;
    });
    setTime(t);
  };

  const reset = () => {
    [leftRef.current, rightRef.current].forEach((v) => {
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });
    setPlaying(false);
    setTime(0);
  };

  const MediaFrame = ({
    source,
    side,
  }: {
    source: Source;
    side: "left" | "right";
  }) => {
    const empty = !source?.src;
    return (
      <figure className="rounded-2xl border border-[#e6eef6] bg-white shadow-sm overflow-hidden ring-1 ring-[#dbe7f3]">
        <div
          className={`relative ${ratioClass}`}
          style={{
            background:
              "radial-gradient(1200px 600px at -10% -20%, rgba(0,51,102,0.06), transparent 50%), #f3f7fb",
          }}
        >
          {/* empty state */}
          {empty && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="animate-pulse h-9 w-1/2 rounded-lg bg-white/60 shadow-inner" />
            </div>
          )}

          {/* image */}
          {source.image && source.src && (
            <img
              src={source.src}
              alt={source.caption || (side === "left" ? "Before" : "After")}
              className="absolute inset-0 h-full w-full object-contain"
              draggable={false}
            />
          )}

          {/* video */}
          {!source.image && source.src && (
            <>
              <video
                ref={side === "left" ? leftRef : rightRef}
                src={source.src}
                className="absolute inset-0 h-full w-full"
                playsInline
                muted={muted}
                preload="metadata"
                poster={source.poster}
              />
              {!playing && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 grid place-items-center"
                  aria-label="Play"
                >
                  <span className="rounded-full border border-[#003366]/20 bg-white/95 px-5 py-2 text-sm font-medium text-[#003366] shadow">
                    ▶ Play
                  </span>
                </button>
              )}
            </>
          )}
        </div>

        {/* caption strip */}
        <figcaption
          className="px-4 py-2 text-sm border-t"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,51,102,0.06), rgba(0,51,102,0.02))",
            borderColor: "#e3edf7",
            color: "#0d355a",
          }}
        >
          <span className="font-semibold">
            {side === "left" ? "Before:" : "After:"}
          </span>{" "}
          {source.caption || (side === "left" ? "Legacy workflow" : "Optimized M.U.S print")}
        </figcaption>
      </figure>
    );
  };

  return (
    <div
      className="rounded-3xl p-6 md:p-8 shadow-sm border"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,51,102,0.03), rgba(0,51,102,0.02))",
        borderColor: "#dbe7f3",
      }}
    >
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: "#003366" }}>
          {title}
        </h3>
        {subtitle && <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      {/* side-by-side media */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <MediaFrame source={left} side="left" />
        <MediaFrame source={right} side="right" />
      </div>

      {/* controls */}
      {(isVideo.left || isVideo.right) && (
        <div className="mt-6 flex flex-col gap-3">
          <div
            className="mx-auto flex items-center gap-2 rounded-2xl border px-3 py-2"
            style={{ borderColor: "#dbe7f3", background: "rgba(255,255,255,0.8)" }}
          >
            <button
              onClick={togglePlay}
              className="btn"
              style={{ borderColor: "#003366", color: "#003366" }}
            >
              {playing ? "Pause both" : "Play both"}
            </button>
            <button onClick={() => setMuted((m) => !m)} className="btn text-gray-700">
              {muted ? "Unmute" : "Mute"}
            </button>
            <label className="text-sm text-gray-700 flex items-center gap-2">
              Speed
              <select
                className="rounded-lg border px-2 py-1"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              >
                {[0.5, 1, 1.5, 2].map((s) => (
                  <option key={s} value={s}>
                    {s}x
                  </option>
                ))}
              </select>
            </label>
            <button onClick={reset} className="btn text-gray-700">
              Restart
            </button>
          </div>

          {isFinite(dur) && dur > 0 && (
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={dur}
                step={0.05}
                value={time}
                onChange={(e) => handleScrub(Number(e.target.value))}
                className="w-full accent-[#2ecc71]"
              />
              <span className="text-xs text-gray-600 w-16 text-right">
                {formatTime(time)} / {formatTime(dur)}
              </span>
            </div>
          )}
        </div>
      )}

      {/* bullets */}
      {bullets.length > 0 && (
        <ul className="mt-6 grid md:grid-cols-2 gap-2 text-sm text-gray-700">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="mt-1 inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: "#2ecc71" }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function formatTime(t: number) {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
