import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import {
  ArrowUpRight,
  Search,
  ArrowLeft,
  ArrowRight,
  Grid3X3,
  Table2,
  X,
  Building2,
} from "lucide-react";
import { useState, useMemo, useRef } from "react";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio | Mount Judi Ventures" },
      {
        name: "description",
        content:
          "Seventeen founders. One long conviction. Mount Judi backs mission-led category leaders across healthcare, AI, consumer, logistics, and enterprise in India.",
      },
      { property: "og:title", content: "Portfolio | Mount Judi Ventures" },
      {
        property: "og:description",
        content:
          "Category leaders across healthcare, AI, consumer, logistics, and enterprise in India.",
      },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioIndex,
});

type FundFilter = "ALL" | "MJIGF" | "MJIMF";
type Company = (typeof companies)[number];

function getFundBadge(fund?: "Growth Fund" | "Micro Fund" | "Both"): string {
  if (fund === "Both") return "MJIMF & MJIGF";
  if (fund === "Growth Fund") return "MJIGF";
  if (fund === "Micro Fund") return "MJIMF";
  return "MJIGF";
}

const FUND_META: Record<
  FundFilter,
  {
    code: FundFilter;
    badge: string;
    name: string;
    blurb: string;
    checkSize: string;
    stage: string;
    corpus: string;
  }
> = {
  ALL: {
    code: "ALL",
    badge: "All Vehicles",
    name: "Complete Conviction Portfolio",
    blurb:
      "All active & exited investments across Mount Judi India Growth Fund (MJIGF) and Mount Judi India Micro Fund (MJIMF).",
    checkSize: "₹2 Cr – ₹25 Cr Initial Cheques",
    stage: "Seed to Growth Stage",
    corpus: "Two SEBI AIFs",
  },
  MJIGF: {
    code: "MJIGF",
    badge: "Growth Fund",
    name: "Mount Judi India Growth Fund",
    blurb:
      "Growth-stage conviction bets across healthcare, deep-tech AI, consumer brands, and logistics leaders in India.",
    checkSize: "₹10 Cr – ₹25 Cr Check Sizes",
    stage: "Series A to Growth",
    corpus: "INR 100 Cr Corpus · Cat II AIF",
  },
  MJIMF: {
    code: "MJIMF",
    badge: "Micro Fund",
    name: "Mount Judi India Micro Fund",
    blurb:
      "Early conviction cheques into visionary founders building at the edge of emerging tech and new consumer markets.",
    checkSize: "₹2 Cr – ₹10 Cr Check Sizes",
    stage: "Seed to Pre-Series A",
    corpus: "Cat I AIF Angel Vehicle",
  },
};

function matchesFund(c: Company, filter: FundFilter): boolean {
  if (filter === "ALL") return true;
  if (filter === "MJIGF") return c.fund === "Growth Fund" || c.fund === "Both";
  if (filter === "MJIMF") return c.fund === "Micro Fund" || c.fund === "Both";
  return true;
}

export default function PortfolioIndex() {
  const navigate = useNavigate();
  const [activeFund, setActiveFund] = useState<FundFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "ledger">("grid");

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 380;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Fund counts
  const allCount = companies.length;
  const growthCount = useMemo(
    () => companies.filter((c) => c.fund === "Growth Fund" || c.fund === "Both").length,
    []
  );
  const microCount = useMemo(
    () => companies.filter((c) => c.fund === "Micro Fund" || c.fund === "Both").length,
    []
  );

  const fundCounts: Record<FundFilter, number> = {
    ALL: allCount,
    MJIGF: growthCount,
    MJIMF: microCount,
  };

  // Distinct sectors
  const sectors = useMemo(() => {
    const set = new Set<string>();
    companies.forEach((c) => {
      if (c.sector) set.add(c.sector);
    });
    return Array.from(set).sort();
  }, []);

  // Filtered companies
  const filteredCompanies = useMemo(() => {
    return companies.filter((c) => {
      if (!matchesFund(c, activeFund)) return false;
      if (selectedSector !== "ALL" && c.sector !== selectedSector) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesSector = c.sector?.toLowerCase().includes(q);
        const matchesThesis = c.thesis?.toLowerCase().includes(q);
        const matchesStage =
          c.stages?.some((s) => s.toLowerCase().includes(q)) || c.stage?.toLowerCase().includes(q);
        const matchesVintage = c.vintage?.toLowerCase().includes(q);
        const matchesOneLiner = c.oneLiner?.toLowerCase().includes(q);
        const matchesTagline = c.tagline?.toLowerCase().includes(q);
        const matchesFounders = c.founders?.toLowerCase().includes(q);
        if (
          !matchesName &&
          !matchesSector &&
          !matchesThesis &&
          !matchesStage &&
          !matchesVintage &&
          !matchesOneLiner &&
          !matchesTagline &&
          !matchesFounders
        ) {
          return false;
        }
      }
      return true;
    });
  }, [activeFund, selectedSector, searchQuery]);

  const currentMeta = FUND_META[activeFund];

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] min-h-screen selection:bg-neutral-900 selection:text-white">

      {/* ── 2. FEATURED BRAND RAIL / CAROUSEL (DIRECTLY INSPIRED BY SPRING SCREENSHOT 2) ── */}
      <section className="py-14 sm:py-20 border-b border-black/10 bg-white">
        <div className="container-tight mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950">
              All companies we have invested in
            </h2>
          </div>

          {/* Carousel Arrows (←) (→) */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border-2 border-neutral-900 bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all shadow-2xs active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border-2 border-neutral-900 bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all shadow-2xs active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto px-4 sm:px-8 lg:px-12 pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {/* Featured Company Cards (Square / Framed with Rich Product Images) */}
          {companies.map((company) => {
            const fundBadge = getFundBadge(company.fund);

            return (
              <Link
                key={`carousel-${company.slug}`}
                to="/portfolio/$slug"
                params={{ slug: company.slug }}
                className="group min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] aspect-square rounded-2xl border-2 border-neutral-950 bg-white flex flex-col justify-between shrink-0 snap-start overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* 1. Large Crisp Brand/Product Visual (70% Height) */}
                <div className="relative h-[68%] w-full overflow-hidden bg-neutral-100">
                  {company.image ? (
                    <img
                      src={company.image}
                      alt={`${company.name} product`}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-neutral-900">
                      <img
                        src={company.whiteLogo || company.logo}
                        alt={`${company.name} logo`}
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                  )}

                  {/* Top Badges */}
                  <div className="absolute inset-x-0 top-0 p-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="inline-flex items-center rounded-full bg-neutral-950/85 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider text-white border border-white/20">
                      {fundBadge}
                    </span>

                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-neutral-950 flex items-center justify-center shadow-xs group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Subtle Gradient Over Product */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* 2. Brand Card Bottom Area (Exact Match to Spring: Bold Name + Invested in Year ■ Fund) */}
                <div className="h-[32%] p-5 sm:p-5.5 flex flex-col justify-between bg-white border-t border-neutral-900/10">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 truncate group-hover:text-neutral-700 transition-colors">
                      {company.name}
                    </h4>

                    {company.logo && (
                      <img
                        src={company.logo}
                        alt=""
                        className="h-5 w-auto max-w-[80px] object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>

                  {/* Metadata: Vintage [FYxx] ■ [Fund] */}
                  <div className="font-mono text-[11px] sm:text-xs text-neutral-600 font-bold flex items-center gap-2 tracking-wide">
                    <span>{company.vintage ? `Vintage ${company.vintage}` : `Invested in ${company.year}`}</span>
                    <span className="text-[8px] text-neutral-950">■</span>
                    <span className="text-neutral-950 truncate">{fundBadge}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Scroll Helper Hint */}
      </section>

      {/* ── 3. MODERN BRAND-FIRST CORPORATE UI: COMPLETE DIRECTORY & FILTER ENGINE ── */}
      <section id="portfolio-directory" className="py-14 sm:py-20 md:py-24 bg-[var(--paper)]">
        <div className="container-tight">
          {/* Section Header */}
          <div className="pb-8 border-b-2 border-neutral-900/15">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-950">
                  Portfolio Directory
                </h2>
                <p className="mt-3 font-sans text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
                  Institutional access to Mount Judi&apos;s active and realized portfolio companies
                  across healthcare, AI deep-tech, consumer, logistics, and enterprise in India.
                </p>
              </div>

              {/* Fund Vehicle Tabs */}
              <div
                role="tablist"
                aria-label="Filter companies by fund vehicle"
                className="inline-flex flex-wrap items-center gap-1.5 self-start lg:self-end rounded-full border-2 border-neutral-900 bg-white p-1.5 shadow-2xs"
              >
                {(["ALL", "MJIGF", "MJIMF"] as FundFilter[]).map((tab) => {
                  const active = tab === activeFund;
                  const count = fundCounts[tab];
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFund(tab)}
                      className={`relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 font-mono text-xs uppercase tracking-wider font-black transition-all duration-200 ${active
                        ? "bg-neutral-950 text-white shadow-xs"
                        : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100"
                        }`}
                    >
                      <span>{tab === "ALL" ? "All Vehicles" : tab}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono leading-none font-bold ${active ? "bg-white text-neutral-950" : "bg-neutral-200 text-neutral-800"
                          }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Fund Meta Banner & Quick Controls */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl border-2 border-neutral-900 bg-neutral-50/70 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-display font-black text-lg uppercase tracking-tight text-neutral-950">
                  {currentMeta.name}
                </span>
                <span className="text-neutral-300">·</span>
                <span className="font-mono text-xs bg-neutral-900 text-white px-2.5 py-0.5 rounded-full font-bold">
                  {currentMeta.corpus}
                </span>
                <span className="font-mono text-xs text-neutral-700 bg-white border border-neutral-300 px-2.5 py-0.5 rounded-full font-bold">
                  {filteredCompanies.length} {filteredCompanies.length === 1 ? "Company" : "Companies"}
                </span>
              </div>
              <p className="mt-1.5 font-sans text-xs sm:text-sm text-neutral-600 max-w-2xl">
                {currentMeta.blurb}
              </p>
              <div className="mt-2.5 font-mono text-[11px] text-neutral-900 font-bold flex items-center gap-2">
                <span className="text-neutral-400">CHECK SIZE:</span>
                <span>{currentMeta.checkSize}</span>
              </div>
            </div>

            {/* Search Box + View Switcher */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search brands, founders, sector..."
                  className="w-full pl-9.5 pr-8 py-2.5 rounded-full border-2 border-neutral-900 bg-white text-xs font-sans placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950 font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-950"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="inline-flex items-center rounded-full border-2 border-neutral-900 bg-white p-1 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-neutral-950 text-white" : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  title="Brand Cards Grid"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("ledger")}
                  aria-label="Table view"
                  className={`p-2 rounded-full transition-colors ${viewMode === "ledger" ? "bg-neutral-950 text-white" : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  title="Corporate Ledger View"
                >
                  <Table2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sector Filter Chips */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedSector("ALL")}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase font-bold transition-all ${selectedSector === "ALL"
                ? "bg-neutral-950 text-white shadow-2xs"
                : "bg-white border-2 border-neutral-900/15 text-neutral-700 hover:border-neutral-950 hover:text-neutral-950"
                }`}
            >
              All Sectors ({companies.length})
            </button>
            {sectors.map((sec) => {
              const count = companies.filter((c) => c.sector === sec).length;
              const active = selectedSector === sec;
              return (
                <button
                  key={sec}
                  type="button"
                  onClick={() => setSelectedSector(active ? "ALL" : sec)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase font-bold transition-all ${active
                    ? "bg-neutral-950 text-white shadow-2xs"
                    : "bg-white border-2 border-neutral-900/15 text-neutral-700 hover:border-neutral-950 hover:text-neutral-950"
                    }`}
                >
                  {sec} ({count})
                </button>
              );
            })}
          </div>

          {/* ── 4A. VIEW MODE: BRAND CARDS GRID ── */}
          {viewMode === "grid" && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredCompanies.map((company) => {
                const isExited = company.slug === "internshala" || company.status === "Exited";
                const fundBadge = getFundBadge(company.fund);

                return (
                  <Link
                    key={company.slug}
                    to="/portfolio/$slug"
                    params={{ slug: company.slug }}
                    className="group relative flex flex-col rounded-2xl border-2 border-neutral-900/15 hover:border-neutral-950 bg-white overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300"
                  >
                    {/* Upper Product/Brand Image (Editorial Frame) */}
                    <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-neutral-100">
                      {company.image ? (
                        <img
                          src={company.image}
                          alt={`${company.name} photography`}
                          loading="lazy"
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-neutral-900">
                          <img
                            src={company.whiteLogo || company.logo}
                            alt=""
                            className="max-h-12 w-auto object-contain"
                          />
                        </div>
                      )}

                      {/* Dark Gradient Overlay for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:from-black/75 transition-colors" />

                      {/* Top Badges */}
                      <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between z-10 pointer-events-none">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="inline-flex items-center rounded-full bg-neutral-950/85 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider text-white border border-white/20">
                            {fundBadge}
                          </span>
                          {isExited && (
                            <span className="inline-flex items-center rounded-full bg-neutral-900/90 backdrop-blur-md px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider text-white border border-white/20">
                              M&amp;A Exit
                            </span>
                          )}
                        </div>

                        <span className="w-8 h-8 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-neutral-950 group-hover:text-white transition-all">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>

                      {/* Floating Brand Logo in Corner */}
                      <div className="absolute bottom-3 left-4 z-10">
                        <div className="px-3 py-1.5 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 inline-flex items-center">
                          <img
                            src={company.whiteLogo || company.logo}
                            alt={`${company.name} logo`}
                            className="h-5 sm:h-6 w-auto max-w-[120px] object-contain brightness-110"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Lower Editorial Information Area */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                      <div>
                        {/* Thesis & Sector Header */}
                        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider mb-2">
                          <span className="text-[#036089] font-black">{company.thesis}</span>
                          <span className="text-neutral-500 font-bold">{company.sector}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                          {company.name}
                        </h3>

                        {/* Stage Progression Badges */}
                        {company.stages && company.stages.length > 0 && (
                          <div className="mt-2.5 flex flex-wrap items-center gap-1">
                            {company.stages.map((st, i) => (
                              <span key={i} className="inline-flex items-center gap-1">
                                {i > 0 && <span className="text-neutral-400 font-mono text-[10px]">→</span>}
                                <span
                                  className={`px-2 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-bold ${i === company.stages.length - 1
                                    ? "bg-neutral-950 text-white"
                                    : "bg-neutral-100 text-neutral-600 border border-neutral-200"
                                    }`}
                                >
                                  {st}
                                </span>
                              </span>
                            ))}
                          </div>
                        )}

                        {/* One-Liner */}
                        <p className="mt-3 font-sans text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                          {company.oneLiner || company.tagline}
                        </p>
                      </div>

                      {/* Footer Row: Founders & Vintage */}
                      <div className="mt-5 pt-4 border-t border-black/10 flex flex-col gap-2">
                        {company.founders && (
                          <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider truncate">
                            <span className="font-bold text-neutral-700">FOUNDERS:</span> {company.founders}
                          </div>
                        )}

                        <div className="flex items-center justify-between font-mono text-[11px] font-bold text-neutral-900 pt-1">
                          <div className="flex items-center gap-1.5">
                            <span>{company.vintage ? `Vintage ${company.vintage}` : `Invested in ${company.year}`}</span>
                            <span className="text-[7px]">■</span>
                            <span className="text-neutral-700">{fundBadge}</span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs group-hover:translate-x-1 transition-transform font-bold">
                            Info →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* ── 4B. VIEW MODE: CORPORATE LEDGER TABLE ── */}
          {viewMode === "ledger" && (
            <div className="mt-10 overflow-hidden rounded-2xl border-2 border-neutral-900 bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-neutral-900 bg-neutral-50 font-mono text-xs tracking-wider text-neutral-600 font-bold">
                      <th className="py-4 px-6">Company</th>
                      <th className="py-4 px-6">Thesis</th>
                      <th className="py-4 px-6">Sector</th>
                      <th className="py-4 px-6">Fund Vehicle</th>
                      <th className="py-4 px-6">Stages Backed</th>
                      <th className="py-4 px-6">Vintage</th>
                      <th className="py-4 px-6">Founders</th>
                      <th className="py-4 px-6 text-right">Info</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 font-sans text-xs">
                    {filteredCompanies.map((c) => {
                      const fundBadge = getFundBadge(c.fund);
                      return (
                        <tr
                          key={c.slug}
                          onClick={() => navigate({ to: "/portfolio/$slug", params: { slug: c.slug } })}
                          className="hover:bg-neutral-50/80 cursor-pointer transition-colors group"
                        >
                          <td className="py-4 px-6 font-display font-black text-sm uppercase tracking-tight text-neutral-950 flex items-center gap-3">
                            {c.logo && (
                              <img
                                src={c.logo}
                                alt=""
                                className="h-5 w-auto max-w-[60px] object-contain opacity-80"
                              />
                            )}
                            <span className="group-hover:text-neutral-700 transition-colors">
                              {c.name}
                            </span>
                          </td>
                          <td className="py-4 px-6 font-mono text-neutral-900 font-black uppercase text-[11px]">
                            {c.thesis}
                          </td>
                          <td className="py-4 px-6 font-mono text-neutral-600 font-bold uppercase text-[11px]">
                            {c.sector}
                          </td>
                          <td className="py-4 px-6 font-mono font-bold">
                            <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-300 whitespace-nowrap">
                              {fundBadge}
                            </span>
                          </td>
                          <td className="py-4 px-6 font-mono text-neutral-700">
                            <div className="flex flex-wrap items-center gap-1">
                              {c.stages.map((st, i) => (
                                <span key={i} className="inline-flex items-center gap-1">
                                  {i > 0 && <span className="text-neutral-400 text-[10px]">→</span>}
                                  <span
                                    className={`px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap ${i === c.stages.length - 1
                                      ? "bg-neutral-950 text-white"
                                      : "bg-neutral-100 text-neutral-600 border border-neutral-200"
                                      }`}
                                  >
                                    {st}
                                  </span>
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-4 px-6 font-mono text-neutral-900 font-bold whitespace-nowrap">
                            {c.vintage || c.year}
                          </td>
                          <td className="py-4 px-6 font-sans text-neutral-600 max-w-xs truncate">
                            {c.founders ?? "Founding Team"}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-neutral-900 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                              View →
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty Search Result State */}
          {filteredCompanies.length === 0 && (
            <div className="py-24 text-center border-2 border-dashed border-neutral-300 rounded-2xl bg-neutral-50/50 mt-10">
              <Building2 className="w-10 h-10 mx-auto text-neutral-400 mb-3" />
              <p className="font-display font-bold text-lg text-neutral-900">
                No portfolio companies match your criteria
              </p>
              <p className="mt-1 font-mono text-xs text-neutral-500">
                Try searching another sector, company name, or founder.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSector("ALL");
                  setActiveFund("ALL");
                }}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. CORPORATE TELEMETRY & FOUNDER VOICES STRIP ── */}
      <section className="py-14 sm:py-18 border-y-2 border-neutral-900 bg-neutral-950 text-white">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">{companies.length}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Category Leaders Backed
              </div>
            </div>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">2</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                SEBI-Registered AIFs
              </div>
            </div>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">₹2-25 Cr</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Institutional Cheques
              </div>
            </div>
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white">100%</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold">
                Direct Partner Lead
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. NEXT STEPS (FOR FOUNDERS & INVESTORS) ── */}
      <section className="container-tight py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Callout Card: Pitch Us */}
          <div
            onClick={() => navigate({ to: "/contact" })}
            role="button"
            tabIndex={0}
            className="group relative h-72 sm:h-80 rounded-[28px] border-2 border-neutral-950 bg-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer hover:bg-neutral-50 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-950 text-white font-bold">
                [18 // NEXT]
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-950 text-white font-bold">
                ● ACTIVE INTAKE
              </span>
            </div>
            <div className="my-auto text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">
                FOR FOUNDERS
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-neutral-950">
                Pitch Your Startup
              </h4>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Seed to Series A checks from ₹2 Cr to ₹25 Cr. Direct partner evaluation within 14
                days.
              </p>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-neutral-950 font-bold flex items-center justify-between pt-4 border-t border-black/10">
              <span>Submit Pitch Deck</span>
              <span className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform font-bold">
                →
              </span>
            </div>
          </div>

          {/* Callout Card: Funds & LPs */}
          <div
            onClick={() => navigate({ to: "/funds" })}
            role="button"
            tabIndex={0}
            className="group relative h-72 sm:h-80 rounded-[28px] border-2 border-neutral-950 bg-neutral-950 text-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer hover:bg-neutral-900 transition-all shadow-md hover:shadow-xl"
          >
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">
                [19 // ALLOCATION]
              </span>
              <span className="text-white/60 font-semibold">SEBI AIFs</span>
            </div>
            <div className="my-auto text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                FOR INVESTORS
              </div>
              <h4 className="font-display text-3xl font-black uppercase tracking-tight text-white">
                Funds &amp; LPs
              </h4>
              <p className="mt-2 font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                Institutional LP access, co-investment rights, and audited fiduciary governance.
              </p>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center justify-between pt-4 border-t border-white/15">
              <span>Explore Vehicles</span>
              <span className="w-7 h-7 rounded-full bg-white text-neutral-950 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform font-bold">
                →
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


