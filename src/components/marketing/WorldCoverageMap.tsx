import Image from "next/image";

type Hub = {
  id: number;
  label: string;
  left: string;
  top: string;
  tone?: "dark" | "accent";
};

const hubs: Hub[] = [
  { id: 1, label: "Toronto", left: "19.5%", top: "33.5%", tone: "dark" },
  { id: 2, label: "Sydney", left: "84.2%", top: "75.8%", tone: "dark" },
  { id: 3, label: "Houston", left: "22%", top: "45.5%", tone: "dark" },
  { id: 4, label: "Sao Paulo", left: "35.8%", top: "69.5%", tone: "dark" },
  { id: 5, label: "Warsaw", left: "54.2%", top: "33.4%", tone: "accent" },
];

export function WorldCoverageMap() {
  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_91%,white_9%)] p-5 sm:p-6">
      <div className="relative h-[17rem] overflow-hidden rounded-2xl border border-black/8 bg-[#e7e7e4] sm:h-[21rem]">
        <Image
          src="/maps/world.svg"
          alt="World coverage map"
          fill
          className="object-cover object-center opacity-[0.88] [filter:grayscale(0.95)_contrast(0.85)_brightness(1.04)]"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_44%,rgba(244,255,174,0.4)_0%,rgba(244,255,174,0)_44%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[35%] w-[22%] bg-[repeating-linear-gradient(-45deg,rgba(80,80,80,0.2),rgba(80,80,80,0.2)_2px,transparent_2px,transparent_7px)] opacity-45" />
        <svg
          viewBox="0 0 1000 520"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M 542 163 C 470 145, 330 142, 195 176"
            fill="none"
            stroke="#a9a9a4"
            strokeOpacity="0.45"
            strokeWidth="2.2"
            strokeDasharray="5 7"
          />
          <path
            d="M 542 163 C 635 205, 728 317, 848 394"
            fill="none"
            stroke="#a9a9a4"
            strokeOpacity="0.4"
            strokeWidth="2.2"
            strokeDasharray="5 7"
          />
          <path
            d="M 542 163 C 516 228, 447 307, 386 374"
            fill="none"
            stroke="#a9a9a4"
            strokeOpacity="0.4"
            strokeWidth="2.2"
            strokeDasharray="5 7"
          />
          <path
            d="M 542 163 C 448 165, 316 214, 220 237"
            fill="none"
            stroke="#a9a9a4"
            strokeOpacity="0.38"
            strokeWidth="2.2"
            strokeDasharray="5 7"
          />
        </svg>

        {hubs.map((hub, index) => (
          <div
            key={hub.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: hub.left, top: hub.top }}
            aria-label={hub.label}
          >
            <span
              className={[
                "absolute -inset-3 rounded-full",
                hub.tone === "accent" ? "bg-[#f4cf4e]/18" : "bg-[#2b1b1b]/12",
              ].join(" ")}
            />
            <span
              className={[
                "absolute inset-0 rounded-full animate-ping",
                hub.tone === "accent" ? "bg-[#f4cf4e]/45" : "bg-[#2b1b1b]/24",
              ].join(" ")}
              style={{ animationDelay: `${index * 180}ms`, animationDuration: "2.3s" }}
            />
            <span
              className={[
                "relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold leading-none tabular-nums shadow-[0_6px_14px_-8px_rgba(0,0,0,0.55)]",
                hub.tone === "accent"
                  ? "border-[#e0bc48] bg-[#f4cf4e] text-[#302100]"
                  : "border-[#392525] bg-[#2b1b1b] text-[#ffe07a]",
              ].join(" ")}
            >
              {hub.id}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <p className="rounded-xl border border-black/10 bg-white/55 px-3 py-2 text-sm text-foreground/75">
          17 active regions across Poland and CEE
        </p>
        <p className="rounded-xl border border-black/10 bg-white/55 px-3 py-2 text-sm text-foreground/75">
          24/7 response coverage for urgent staffing requests
        </p>
      </div>
    </div>
  );
}
