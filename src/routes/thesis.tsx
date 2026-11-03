import { createFileRoute, Link } from "@tanstack/react-router";
import { companies, type Company } from "@/lib/portfolio-data";
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { CompassRoseEngraving } from "@/components/editorial-engravings";

export const Route = createFileRoute("/thesis")({
  head: () => ({
    meta: [
      { title: "Investment Thesis | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "MJV deploys across three foundational pillars: Consumer Brands, Supply Chain Rails, and Disruptive Tech. Disciplined unit economics, operator backing, and patient reserves.",
      },
      { property: "og:title", content: "Investment Thesis | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "MJV invests across Consumer Brands, Supply Chain Rails, and Disruptive Tech. Guided by where enterprise and economic value settles in India over the next decade.",
      },
      { property: "og:url", content: "/thesis" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/thesis" }],
  }),
  component: Thesis,
});

type Theme = {
  number: string;
  name: string;
  anchor: string;
  accentBg: string;
  accentText: string;
  tagline: string;
  paragraphs: React.ReactNode[];
  portfolio: string[];
  pinColor: "gold" | "blue" | "orange" | "purple";
  badge: string;
  innerBg: string;
  innerBorder: string;
  numberColor: string;
  tiltClass: string;
};

const themes: Theme[] = [
  {
    number: "01",
    name: "Consumer Brands",
    anchor: "consumer",
    accentBg: "bg-neutral-900",
    accentText: "text-white",
    pinColor: "gold",
    badge: "THEME 01 // CATEGORY FOCUS",
    innerBg: "bg-[#C78D1E]/10",
    innerBorder: "border-[#C78D1E]/30",
    numberColor: "text-[#C78D1E]",
    tiltClass: "lg:-rotate-2 lg:mr-auto lg:ml-2 xl:ml-6",
    tagline: "Brands engineered with deep operational discipline, not subsidized vanity metrics.",
    paragraphs: [
      <>
        The consumer enterprises we back take a non-negotiable everyday habit and build an enduring
        institution around doing it properly across nutrition, culinary infrastructure, and
        lifestyle. The demand is rarely in question. What is perpetually absent in contemporary
        venture is a brand built from{" "}
        <strong className="text-neutral-900 font-semibold">first principles</strong>, backed by the
        operational grit to control sourcing, cold chains, and direct customer intimacy.
      </>,
      <>
        That is where our partners spend operating hours with founders. Early on, the questions are
        about category positioning; later, they turn{" "}
        <strong className="text-neutral-900 font-semibold">relentlessly operational</strong>. In our
        experience, this is where high-growth consumer ventures quietly unravel. We stay closely
        embedded to ensure unit economics stay cash-generative.
      </>,
      <>
        A brand that masters sourcing and authentic customer trust builds an enduring{" "}
        <strong className="text-neutral-900 font-semibold">economic moat</strong>. Customers return
        without discounts attached, and gross margins compound as distribution scales.
      </>,
    ],
    portfolio: [
      "FreshToHome",
      "DIL Foods",
      "Protein Chef",
      "Boingg",
      "Freshleaf Tea",
      "Sandowitch",
      "Flawsome",
      "Thimblerr",
      "SP Robotic Works",
      "Internshala",
      "upGrad",
    ],
  },
  {
    number: "02",
    name: "Consumer Enablers",
    anchor: "consumer-enablers",
    accentBg: "bg-neutral-700",
    accentText: "text-white",
    pinColor: "blue",
    badge: "THEME 02 // INDUSTRIAL INFRASTRUCTURE",
    innerBg: "bg-[#036089]/10",
    innerBorder: "border-[#036089]/30",
    numberColor: "text-[#036089]",
    tiltClass: "lg:rotate-2 lg:ml-auto lg:mr-2 xl:mr-6",
    tagline: "Empowering the next generation of consumer brands with cutting-edge technology and infrastructure.",
    paragraphs: [
      <>
        Behind every consumer titan sits an unsung network of industrial enablers: multi-channel
        warehousing, automated middle-mile logistics, drone freight corridors, and the
        reconciliation data layers that prevent inventory leakage. A massive proportion of
        enterprise margin in India is destroyed here. We believe that margin is actively being
        recaptured.
      </>,
      <>
        Our portfolio anchors today in{" "}
        <strong className="text-neutral-900 font-semibold">
          supply chain automation, cold chain orchestration, and aerial logistics
        </strong>
        . The identical logic applies to agritech, climate manufacturing, and enterprise
        procurement.
      </>,
      <>
        These are heavy, deliberate enterprises. Institutional buyers take quarters to audit and
        decades to displace, producing{" "}
        <strong className="text-neutral-900 font-semibold">
          extraordinary retention and enterprise cashflows
        </strong>
        . We provide the enterprise boardroom access, B2B procurement introductions, and patient
        reserves that do not force founders into unnatural growth cycles.
      </>,
    ],
    portfolio: ["Hexalog", "Skye Air", "Wiffy"],
  },
  {
    number: "03",
    name: "Disruptive Tech",
    anchor: "disruptive-tech",
    accentBg: "bg-neutral-900",
    accentText: "text-white",
    pinColor: "blue",
    badge: "THEME 03 // HARD ENGINEERING & IP",
    innerBg: "bg-[#036089]/10",
    innerBorder: "border-[#036089]/30",
    numberColor: "text-[#036089]",
    tiltClass: "lg:-rotate-1.5 lg:mr-auto lg:ml-6 xl:ml-12",
    tagline: "Proprietary IP, verified datasets, and hard engineering that cannot be copied.",
    paragraphs: [
      <>
        We back companies whose core defensibility sits in a{" "}
        <strong className="text-neutral-900 font-semibold">
          defensible patent, an authoritative biological or vision dataset, or deep engineering
          moats
        </strong>{" "}
        that took years of relentless focus to synthesize. Today, this manifests across precision
        oncology, medical robotics, and specialized cognitive architectures.
      </>,
      <>
        The risk profile here is distinctive. Commercial failure is rarely about market size; it is
        about clinical validation, scientific rigor, and navigating regulatory approvals. Our
        diligence engages clinicians, researchers, and patent attorneys who have taken frontier
        products through CE, FDA, and CDSCO approvals.
      </>,
      <>
        When validated, the defensive fortress is{" "}
        <strong className="text-neutral-900 font-semibold">virtually impregnable</strong>. A
        well-capitalized competitor cannot buy clinical trials, longitudinal patient cohorts, or
        patent exclusivity in a six-month sprint.
      </>,
    ],
    portfolio: [
      "4baseCare",
      "InnAccel",
      "ConveGenius",
      "Staqu",
      "Rubick.ai",
      "ExtraMile",
      "Gooru",
    ],
  },
];

function findCompany(displayName: string): Company | undefined {
  const normalized = displayName.toLowerCase().replace(/[^a-z0-9]/g, "");
  return companies.find((c) => {
    const companyNormalized = c.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const slugNormalized = c.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      companyNormalized === normalized ||
      companyNormalized.includes(normalized) ||
      normalized.includes(companyNormalized) ||
      slugNormalized === normalized ||
      normalized.includes(slugNormalized)
    );
  });
}

function PushPin({ color = "blue" }: { color?: "gold" | "blue" | "orange" | "purple" }) {
  const configs = {
    gold: {
      headId: "pin-grad-gold",
      baseId: "pin-base-gold",
      glowColor: "rgba(199, 141, 30, 0.45)",
      primary: "#C78D1E",
      highlight: "#fef3c7",
      dark: "#8c600f",
      bodyStart: "#d99e28",
      ringColor: "#8c600f",
    },
    blue: {
      headId: "pin-grad-blue",
      baseId: "pin-base-blue",
      glowColor: "rgba(3, 96, 137, 0.45)",
      primary: "#036089",
      highlight: "#bae6fd",
      dark: "#024360",
      bodyStart: "#0478a8",
      ringColor: "#024360",
    },
    orange: {
      headId: "pin-grad-orange",
      baseId: "pin-base-orange",
      glowColor: "rgba(249, 115, 22, 0.45)",
      primary: "#ea580c",
      highlight: "#fed7aa",
      dark: "#9a3412",
      bodyStart: "#fb923c",
      ringColor: "#c2410c",
    },
    purple: {
      headId: "pin-grad-purple",
      baseId: "pin-base-purple",
      glowColor: "rgba(147, 51, 234, 0.45)",
      primary: "#9333ea",
      highlight: "#e9d5ff",
      dark: "#581c87",
      bodyStart: "#c084fc",
      ringColor: "#7e22ce",
    },
  }[color];

  return (
    <div
      className="relative flex items-center justify-center pointer-events-none select-none z-20"
      style={{
        filter: `drop-shadow(0 10px 14px ${configs.glowColor}) drop-shadow(0 3px 5px rgba(0,0,0,0.18))`,
      }}
    >
      <svg width="44" height="50" viewBox="0 0 44 50" fill="none">
        <defs>
          <radialGradient
            id={configs.headId}
            cx="36%"
            cy="30%"
            r="68%"
            fx="30%"
            fy="24%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="35%" stopColor={configs.bodyStart} stopOpacity="0.95" />
            <stop offset="75%" stopColor={configs.primary} />
            <stop offset="100%" stopColor={configs.dark} />
          </radialGradient>

          <linearGradient id={configs.baseId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={configs.dark} stopOpacity="0.85" />
            <stop offset="30%" stopColor={configs.highlight} stopOpacity="0.95" />
            <stop offset="70%" stopColor={configs.primary} />
            <stop offset="100%" stopColor={configs.dark} />
          </linearGradient>
        </defs>

        {/* Paper contact shadow */}
        <ellipse cx="22" cy="45" rx="15" ry="4" fill="rgba(0, 0, 0, 0.22)" />
        <ellipse cx="22" cy="44" rx="8" ry="2.5" fill="rgba(0, 0, 0, 0.35)" />

        {/* Circular Bottom Flange / Rim */}
        <ellipse cx="22" cy="39" rx="14" ry="4.5" fill={configs.ringColor} />
        <ellipse cx="22" cy="38" rx="13" ry="4" fill={`url(#${configs.headId})`} />

        {/* Waist / Stalk */}
        <path
          d="M 16 23 C 16 30, 14 35, 12 38 C 17 39.5, 27 39.5, 32 38 C 30 35, 28 30, 28 23 Z"
          fill={`url(#${configs.baseId})`}
        />

        {/* Spherical Head / Dome */}
        <circle cx="22" cy="18" r="14" fill={`url(#${configs.headId})`} />

        {/* Translucent rim light */}
        <circle cx="22" cy="18" r="13.2" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />

        {/* Specular curved reflection glint */}
        <ellipse
          cx="18"
          cy="13"
          rx="5"
          ry="2.8"
          fill="#ffffff"
          opacity="0.85"
          transform="rotate(-25 18 13)"
        />
        <circle cx="25" cy="22" r="1.5" fill="#ffffff" opacity="0.6" />
      </svg>
    </div>
  );
}

function Thesis() {

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">

      {/* ── 2. THE THREE FOUNDATIONAL PILLARS (HORIZONTAL FLOW PIPELINE) ── */}
      <section className="border-b-2 border-neutral-950 bg-white py-14 md:py-20">
        <div className="container-tight">
          {/* Top Intro Section: Headline + Stat Card */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#036089] font-bold mb-3">
                MJV thesis
              </div>
              <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[0.95]">
                Where India&rsquo;s Value Settles.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-neutral-700 leading-relaxed font-sans font-medium">
                Rather than spreading capital across hundreds of speculative experiments, Mount Judi
                Ventures deploys into three enduring economic moats where enterprise cashflows
                compound over decades.
              </p>
            </div>

            {/* Warm Anchor Stat Card (#C78D1E) */}
            <div className="shrink-0 lg:max-w-xs rounded-2xl bg-[#C78D1E] border-2 border-neutral-950 p-5 sm:p-6 shadow-xs text-neutral-950">
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-950/80">
                <span>Portfolio Strategy</span>
                <span className="text-neutral-950 font-black">₹150+ CR</span>
              </div>
              <div className="mt-2 font-display text-2xl sm:text-3xl font-black tracking-tight text-neutral-950">
                14+ Category Leaders
              </div>
              <p className="mt-2 text-xs text-neutral-950 font-sans leading-snug font-medium">
                Zero subsidized vanity metrics. 100% focused on gross margins and defensible IP.
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-950/20 flex items-center justify-between">
                <a
                  href="#consumer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 hover:text-white transition-colors"
                >
                  <span>Explore Monograph</span>
                  <span>↘</span>
                </a>
              </div>
            </div>
          </div>

          {/* Horizontal Flow Pipeline (Borderless Canvas, Static Layout) */}
          <div className="relative px-2 sm:px-4 py-6 md:py-12">
            {/* Subtle Millimeter Blueprint Grid Texture (borderless background) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-40 rounded-2xl"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />

            {/* Continuous Wire Track SVG across the 3 horizontal cards */}
            <svg
              aria-hidden="true"
              viewBox="0 0 1200 620"
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
              preserveAspectRatio="none"
            >
              {/* Parallel Dashed Guideline */}
              <path
                d="M 75 48 C 45 123, 45 213, 55 283 C 65 363, 110 533, 250 533 C 370 533, 415 383, 425 273 C 435 153, 480 33, 600 33 C 720 33, 765 153, 775 273 C 785 383, 830 533, 950 533 C 1090 533, 1135 363, 1135 283 C 1135 203, 1135 133, 1125 98"
                fill="none"
                stroke="rgba(0,0,0,0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Main Curving Wire Rail */}
              <path
                d="M 75 55 C 45 130, 45 220, 55 290 C 65 370, 110 540, 250 540 C 370 540, 415 390, 425 280 C 435 160, 480 40, 600 40 C 720 40, 765 160, 775 280 C 785 390, 830 540, 950 540 C 1090 540, 1135 370, 1135 290 C 1135 210, 1135 140, 1125 105"
                fill="none"
                stroke="#171717"
                strokeWidth="2.75"
                strokeLinecap="round"
              />

              {/* Top-Left Entry Portal */}
              <ellipse cx="75" cy="55" rx="42" ry="13" fill="#171717" stroke="#171717" strokeWidth="2" />
              <ellipse cx="75" cy="55" rx="50" ry="16" fill="none" stroke="#171717" strokeWidth="1.5" />
              <text x="75" y="28" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#525252" letterSpacing="1.5">
                DEALFLOW INGESTION
              </text>

              {/* Top-Right Exit Portal */}
              <ellipse cx="1125" cy="105" rx="42" ry="13" fill="#171717" stroke="#171717" strokeWidth="2" />
              <ellipse cx="1125" cy="105" rx="50" ry="16" fill="none" stroke="#171717" strokeWidth="1.5" />
              <text x="1125" y="78" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="bold" fill="#525252" letterSpacing="1.5">
                ENTERPRISE SCALE
              </text>

              {/* Rolling Spheres / Value Nodes positioned precisely in open channels */}
              {/* Sphere on left margin */}
              <circle cx="55" cy="290" r="14" fill="#ffffff" stroke="#171717" strokeWidth="2.5" />
              <path d="M 49 282 A 7 7 0 0 1 57 278" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />

              {/* Sphere 1 in Gap 1 (between Card 1 and 2) */}
              <circle cx="425" cy="280" r="15" fill="#ffffff" stroke="#171717" strokeWidth="2.5" />
              <path d="M 418 273 A 7 7 0 0 1 426 268" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" />
              <circle cx="425" cy="280" r="3.5" fill="#C78D1E" />

              {/* Sphere 2 in Gap 2 (between Card 2 and 3) */}
              <circle cx="775" cy="280" r="15" fill="#ffffff" stroke="#171717" strokeWidth="2.5" />
              <path d="M 768 273 A 7 7 0 0 1 776 268" stroke="#171717" strokeWidth="1.75" strokeLinecap="round" />
              <circle cx="775" cy="280" r="3.5" fill="#036089" />

              {/* Sphere on right margin */}
              <circle cx="1135" cy="290" r="14" fill="#ffffff" stroke="#171717" strokeWidth="2.5" />
              <path d="M 1129 282 A 7 7 0 0 1 1137 278" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* 3 Horizontal Staggered Thesis Cards (Static, No Hover Movement) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start my-6 md:my-10">
              {themes.map((t, idx) => {
                // Vertical wave stagger to open up paths for wire lines
                const verticalStagger =
                  idx === 0
                    ? "md:translate-y-6"
                    : idx === 1
                      ? "md:-translate-y-6"
                      : "md:translate-y-6";

                return (
                  <div
                    key={t.number}
                    className={`rounded-2xl border-2 border-neutral-950 bg-[#036089] p-6 sm:p-7 shadow-xs flex flex-col justify-between min-h-[380px] ${verticalStagger} text-white`}
                  >
                    <div>
                      {/* Card Header Row */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs font-black uppercase tracking-wider text-white bg-white/15 px-2.5 py-0.5 rounded-full border border-white/25">
                          THESIS {t.number}
                        </span>
                        <a
                          href={`#${t.anchor}`}
                          className="w-8 h-8 rounded-full border-2 border-white/40 bg-white hover:bg-[#C78D1E] hover:border-[#C78D1E] hover:text-white text-[#036089] flex items-center justify-center text-xs font-black transition-colors"
                          aria-label={`Jump to ${t.name}`}
                        >
                          ↘
                        </a>
                      </div>

                      <h3 className="mt-4 font-display text-2xl lg:text-[26px] font-black uppercase tracking-tight text-white leading-tight">
                        {t.number}. {t.name}
                      </h3>

                      <p className="mt-3 text-xs sm:text-[13px] text-white/85 leading-relaxed font-sans font-medium">
                        {t.tagline}
                      </p>
                    </div>

                    {/* Portfolio Enterprises Chips */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-white/60 font-bold mb-2.5">
                        PORTFOLIO LEADERS
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {t.portfolio.map((cName) => {
                          const c = findCompany(cName);
                          return c ? (
                            <Link
                              key={cName}
                              to="/portfolio/$slug"
                              params={{ slug: c.slug }}
                              className="px-2.5 py-1 rounded-full bg-white hover:bg-[#C78D1E] hover:text-white border border-black/10 text-neutral-950 transition-colors font-mono text-[11px] sm:text-xs flex items-center gap-1 font-bold shadow-2xs"
                            >
                              <span>{cName}</span>
                              <span className="text-[10px] opacity-60">↗</span>
                            </Link>
                          ) : (
                            <span
                              key={cName}
                              className="px-2.5 py-1 rounded-full bg-white/20 text-white border border-white/20 font-mono text-[11px] sm:text-xs font-semibold"
                            >
                              {cName}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DEEP MONOGRAPH CHAPTERS (PINNED MEMO BOARD & NOTEBOOK CANVAS) ── */}
      <section className="relative border-b-2 border-neutral-950 bg-white pt-8 pb-20 sm:pt-10 md:pt-12 md:pb-28 overflow-hidden">
        {/* Subtle Horizontal Ruled Notebook Lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent 35px,
              rgba(0, 0, 0, 0.05) 35px,
              rgba(0, 0, 0, 0.05) 36px
            )`,
          }}
        />

        {/* Connecting Dashed Trajectory Trail across the 3 pinned cards (Desktop) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 1800"
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
          preserveAspectRatio="none"
        >
          <path
            d="M 360 120 C 650 260, 800 620, 720 840 C 640 1060, 260 1200, 360 1460"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="container-tight relative z-10">
          {/* Staggered Pinned Cards */}
          <div className="space-y-20 md:space-y-28">
            {themes.map((theme) => {
              const pinColor = theme.pinColor || "orange";
              const innerBg = theme.innerBg || "bg-[#fff7ed]";
              const innerBorder = theme.innerBorder || "border-orange-200/70";
              const numberColor = theme.numberColor || "text-orange-600";
              const tiltClass = theme.tiltClass || "";

              return (
                <article
                  key={theme.number}
                  id={theme.anchor}
                  className={`relative scroll-mt-28 rounded-[32px] sm:rounded-[38px] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.12),0_10px_26px_-6px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] border border-neutral-950/10 ${tiltClass}`}
                >
                  {/* Translucent 3D Pushpin on Top Edge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                    <PushPin color={pinColor} />
                  </div>

                  {/* Inner Inset with Soft Pastel Wash */}
                  <div className={`rounded-[24px] sm:rounded-[28px] ${innerBg} border ${innerBorder} p-6 sm:p-8 lg:p-10`}>
                    {/* Top Inset Header Row: Stylized Number + Badge + Anchor */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/[0.08]">
                      <div className="flex items-center gap-4">
                        {/* Handwritten / Stylized Number */}
                        <span className={`font-serif italic font-black text-3xl sm:text-4xl lg:text-5xl ${numberColor} tracking-tight select-none`}>
                          {theme.number}
                        </span>
                        <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-800 bg-white/80 px-3 py-1 rounded-full border border-black/10 shadow-2xs">
                          {theme.badge || `THEME ${theme.number}`}
                        </span>
                      </div>
                      <a
                        href={`#${theme.anchor}`}
                        className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-950 flex items-center gap-1 transition-colors"
                      >
                        <span>Direct Link</span>
                        <span>#</span>
                      </a>
                    </div>

                    {/* Title & Tagline Quote */}
                    <div className="mt-6 sm:mt-7">
                      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-[1.05]">
                        {theme.number}. {theme.name}
                      </h2>
                      <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-white/80 border border-black/[0.07] shadow-2xs">
                        <p className="font-mono text-xs sm:text-[13px] text-neutral-800 leading-relaxed font-semibold">
                          &ldquo;{theme.tagline}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Main Content: Deployed Assets (Left) + Doctrine Narrative (Right) */}
                    <div className="mt-8 pt-8 border-t border-black/[0.08] grid gap-8 lg:gap-12 lg:grid-cols-[310px_minmax(0,1fr)] items-start">
                      {/* Left: Deployed Assets Brand Logos */}
                      <div>
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-3.5">
                          <span>DEPLOYED ASSETS</span>
                          <span className="text-[10px] text-neutral-400 font-normal">PORTFOLIO</span>
                        </div>
                        <div className="flex flex-col gap-2.5">
                          {theme.portfolio.map((cName) => {
                            const c = findCompany(cName);
                            return c ? (
                              <Link
                                key={cName}
                                to="/portfolio/$slug"
                                params={{ slug: c.slug }}
                                title={c.name}
                                aria-label={`View ${c.name} portfolio profile`}
                                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white hover:bg-neutral-950 text-neutral-900 hover:text-white border border-neutral-950/15 text-left transition-all duration-200 group h-14 shadow-2xs"
                              >
                                <div className="relative flex items-center h-full max-w-[190px]">
                                  {c.logo ? (
                                    <>
                                      <img
                                        src={c.logo}
                                        alt={`${c.name} logo`}
                                        className={`h-7 max-h-7 sm:h-8 sm:max-h-8 w-auto max-w-[160px] object-contain object-left transition-opacity duration-200 ${c.whiteLogo ? "group-hover:opacity-0" : "group-hover:brightness-0 group-hover:invert"
                                          }`}
                                      />
                                      {c.whiteLogo && (
                                        <img
                                          src={c.whiteLogo}
                                          alt={`${c.name} white logo`}
                                          aria-hidden="true"
                                          className="absolute left-0 top-1/2 -translate-y-1/2 h-7 max-h-7 sm:h-8 sm:max-h-8 w-auto max-w-[160px] object-contain object-left opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                                        />
                                      )}
                                    </>
                                  ) : (
                                    <span className="font-mono text-xs font-semibold">
                                      {c.name}
                                    </span>
                                  )}
                                </div>
                                <span className="w-6 h-6 rounded-full bg-neutral-100 group-hover:bg-white text-neutral-900 flex items-center justify-center text-[10px] font-bold transition-colors shadow-2xs shrink-0 ml-3">
                                  ↗
                                </span>
                              </Link>
                            ) : (
                              <div
                                key={cName}
                                className="px-4 py-3 rounded-xl bg-white border border-neutral-950/15 font-mono text-xs text-neutral-500 h-14 flex items-center"
                              >
                                {cName}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right: Narrative Monograph Doctrine */}
                      <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-neutral-800 leading-relaxed font-sans">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
                          <span>INVESTMENT DOCTRINE & OPERATING PATTERNS</span>
                        </div>
                        {theme.paragraphs.map((para, i) => (
                          <div
                            key={i}
                            className="leading-relaxed bg-white/75 p-4 sm:p-5 rounded-2xl border border-black/[0.06] shadow-2xs"
                          >
                            {para}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. BOTTOM ALLOCATION TERMINAL ── */}
      <section className="container-tight pb-20 md:pb-28">
        <div className="rounded-[36px] bg-neutral-950 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider font-semibold mb-4 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>BUILD WITH MOUNT JUDI VENTURES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                Are You Building in One of These Pillars?
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                We write initial checks from ₹2 Cr to ₹25 Cr between Seed and Series A. Pitch
                directly to partners with a guaranteed 14-day turnaround.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-neutral-200 text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Pitch Your Company</span>
                <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs">
                  →
                </span>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all border border-white/15"
              >
                <span>View Full Portfolio</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
