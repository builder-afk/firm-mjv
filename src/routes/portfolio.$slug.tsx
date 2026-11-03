import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { companies } from "@/lib/portfolio-data";
import { getMilestoneDate } from "@/lib/utils";
import mdWatermark from "@/assets/md-watermark.png";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Building2,
  Calendar,
  Award,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const company = companies.find((c) => c.slug === params.slug);
    if (!company) throw notFound();
    return { company };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
        { title: `${loaderData.company.name} | Archival Dossier | MJV` },
        { name: "description", content: loaderData.company.oneLiner },
        { property: "og:title", content: `${loaderData.company.name} | Mount Judi Ventures` },
        { property: "og:description", content: loaderData.company.oneLiner },
        { property: "og:image", content: loaderData.company.image },
        { property: "og:type", content: "article" },
      ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-tight py-32 text-center bg-[var(--paper)]">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider mb-4">
        404 Not Found
      </div>
      <h1 className="font-display text-4xl font-extrabold uppercase">
        Record Missing from Registry
      </h1>
      <Link
        to="/portfolio"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider font-semibold"
      >
        Return to Portfolio
      </Link>
    </div>
  ),
  component: CompanyPage,
});

function CompanyPage() {
  const { company: c } = Route.useLoaderData();

  return (
    <article className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      {/* ── 1. ARCHIVAL HERO & METADATA SPREAD ── */}
      <section className="border-b border-black/15 pt-14 pb-0 md:pt-20 bg-white relative overflow-hidden">
        {/* Mountain watermark */}
        <div className="absolute -top-12 -right-10 w-[540px] h-[640px] pointer-events-none hidden md:block opacity-[0.25]">
          <img
            src={mdWatermark}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain object-right-top"
          />
        </div>

        <div className="container-tight pb-12 md:pb-16 relative z-10">

          <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-10 items-end">
            <div>
              {/* Thesis · Sector · Vintage Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 text-white font-mono text-[11px] uppercase tracking-wider font-bold shadow-xs">
                  {c.thesis}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border-2 border-neutral-950 text-neutral-950 font-mono text-[11px] uppercase tracking-wider font-bold shadow-xs">
                  {c.sector}
                </span>
                {c.vintage && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-800 font-mono text-[11px] uppercase tracking-wider font-bold">
                    VINTAGE {c.vintage}
                  </span>
                )}
              </div>

              {/* Stage Progression Pills */}
              {c.stages && c.stages.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold mr-1">Stages:</span>
                  {c.stages.map((s, i) => (
                    <span key={i} className="inline-flex items-center gap-1">
                      {i > 0 && <span className="text-neutral-400 font-mono text-[10px]">→</span>}
                      <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-bold ${i === c.stages.length - 1
                        ? "bg-neutral-950 text-white"
                        : "bg-neutral-100 text-neutral-700 border border-neutral-200"
                        }`}>
                        {s}
                      </span>
                    </span>
                  ))}
                </div>
              )}
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] uppercase leading-[0.94] text-neutral-950">
                {c.name}
              </h1>
              <p className="mt-5 font-serif italic text-xl sm:text-2xl md:text-3xl text-neutral-800 max-w-3xl leading-snug">
                &ldquo;{c.tagline}&rdquo;
              </p>

              {/* Quick Social & Web Links */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border-2 border-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-bold shadow-2xs group"
                  >
                    <Globe className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors" />
                    <span>{c.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-70" />
                  </a>
                )}
                {c.socials?.instagram && (
                  <a
                    href={c.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-950/20 hover:border-neutral-950 text-neutral-900 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group"
                  >
                    <Instagram className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors" />
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                )}
                {c.socials?.youtube && (
                  <a
                    href={c.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-950/20 hover:border-neutral-950 text-neutral-900 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group"
                  >
                    <Youtube className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors" />
                    <span>YouTube</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                )}
                {c.socials?.linkedin && (
                  <a
                    href={c.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-950/20 hover:border-neutral-950 text-neutral-900 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                )}
                {c.socials?.twitter && (
                  <a
                    href={c.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-950/20 hover:border-neutral-950 text-neutral-900 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group"
                  >
                    <Twitter className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors" />
                    <span>X</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                )}
                {c.socials?.facebook && (
                  <a
                    href={c.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-950/20 hover:border-neutral-950 text-neutral-900 hover:bg-neutral-950 hover:text-white transition-all font-mono text-xs font-semibold shadow-2xs group"
                  >
                    <Facebook className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white transition-colors" />
                    <span>Facebook</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                )}
              </div>
            </div>

            {/* Architectural Logo Badge */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-neutral-950 bg-white p-6 sm:p-8 flex items-center justify-center h-32 shadow-sm">
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Minimalist Sub-Bar Divider */}
        <div className="w-full border-t border-black/10 bg-neutral-100/70 text-neutral-900 px-6 sm:px-10 py-3.5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-900" />
            <span>{c.thesis} · {c.sector}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-neutral-600">
            <span>Stage: {c.stages.join(" → ")}</span>
            <span>·</span>
            {c.vintage && <><span>Vintage: {c.vintage}</span><span>·</span></>}
            <span>
              Vehicle:{" "}
              {c.fund === "Both"
                ? "MJIMF & MJIGF"
                : c.fund === "Growth Fund"
                  ? "MJIGF"
                  : c.fund === "Micro Fund"
                    ? "MJIMF"
                    : (c.fund ?? "MJIGF")}
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. CORE DOSSIER & OPERATIONAL SPREAD ── */}
      <section className="container-tight py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image Section & Technical Ledger */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Operational Field Deployment Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-neutral-950 shadow-sm bg-neutral-950">
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full object-cover"
                width={1200}
                height={900}
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider border border-white/20 font-bold">
                  {c.name.toUpperCase()} · FIELD DEPLOYMENT
                </div>
              </div>
            </div>

            {/* Technical Attributes Bento Grid */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-neutral-950 bg-white p-3 shadow-xs">
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="p-4 rounded-xl bg-neutral-950 text-white border border-neutral-950 col-span-2">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                    Thesis Pillar
                  </div>
                  <div className="mt-1.5 font-bold text-sm sm:text-base text-white">
                    {c.thesis}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50/90 border border-black/5">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Sector
                  </div>
                  <div className="mt-1.5 font-bold text-xs sm:text-sm text-neutral-950 truncate">
                    {c.sector}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50/90 border border-black/5">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Current Stage
                  </div>
                  <div className="mt-1.5 font-bold text-xs sm:text-sm text-neutral-950 truncate">
                    {c.stage}
                  </div>
                </div>
                {/* Stage Progression (full width) */}
                {c.stages.length > 1 && (
                  <div className="p-4 rounded-xl bg-neutral-50/90 border border-black/5 col-span-2">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2">
                      Stage Progression
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {c.stages.map((s, i) => (
                        <span key={i} className="inline-flex items-center gap-1">
                          {i > 0 && <span className="text-neutral-400 text-[10px]">→</span>}
                          <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold ${i === c.stages.length - 1
                            ? "bg-neutral-950 text-white"
                            : "bg-neutral-200 text-neutral-700"
                            }`}>
                            {s}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="p-4 rounded-xl bg-neutral-50/90 border border-black/5">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Vintage
                  </div>
                  <div className="mt-1.5 font-bold text-xs sm:text-sm text-neutral-950">
                    {c.vintage || `FY${String(c.year).slice(-2)}`}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50/90 border border-black/5">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Status
                  </div>
                  <div className="mt-1.5 font-bold text-xs sm:text-sm text-neutral-950 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.status === "Active" ? "bg-emerald-500" :
                      c.status === "Acquired" ? "bg-blue-500" :
                        c.status === "Partially Exited" ? "bg-amber-500" :
                          "bg-neutral-900"
                      }`} />
                    {c.status}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50/90 border border-black/5">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Fund Vehicle
                  </div>
                  <div className="mt-1.5 font-bold text-xs sm:text-sm text-neutral-950">
                    {c.fund === "Both"
                      ? "MJIMF & MJIGF"
                      : c.fund === "Growth Fund"
                        ? "MJIGF"
                        : c.fund === "Micro Fund"
                          ? "MJIMF"
                          : (c.fund ?? "MJIGF")}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50/90 border border-black/5">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Direct Domain
                  </div>
                  <div className="mt-1.5 font-bold text-xs sm:text-sm truncate">
                    {c.website ? (
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-950 hover:text-neutral-600 underline font-bold inline-flex items-center gap-0.5"
                      >
                        {c.website.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Starts with Overview! */}
          <div className="lg:col-span-7 space-y-12">
            {/* 01 // OVERVIEW */}
            {c.description && (
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 text-white font-mono text-[11px] uppercase tracking-wider font-bold mb-5 shadow-xs">
                  <span> OVERVIEW </span>
                </div>
                <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-800 space-y-4">
                  {c.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Why We Invested Memorandum */}
            {c.whyInvested && (
              <div className="rounded-2xl sm:rounded-3xl border-2 border-neutral-950 bg-white p-8 md:p-10 shadow-xs">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 text-white font-mono text-xs uppercase tracking-wider font-bold mb-5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span> WHY WE INVESTED </span>
                </div>
                <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-900 space-y-4">
                  {c.whyInvested.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Growth Since Investment */}
            {c.growthSinceInvestment && (
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 text-white font-mono text-[11px] uppercase tracking-wider font-bold mb-5 shadow-xs">
                  <span> SCALE & TRACTION </span>
                </div>
                <div className="font-sans text-sm sm:text-base leading-relaxed text-neutral-800 space-y-4">
                  {c.growthSinceInvestment.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Key Achievements */}
            {(() => {
              const points = c.keyAchievements ?? c.convictionPoints;
              if (!points || points.length === 0) return null;
              return (
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 text-white font-mono text-[11px] uppercase tracking-wider font-bold mb-5 shadow-xs">
                    <span>
                      {c.keyAchievements ? " KEY ACHIEVEMENTS " : " CONVICTION POINTS "}
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {points.map((p: string, i: number) => (
                      <li key={p} className="rounded-2xl border-2 border-neutral-950 bg-white p-5 shadow-xs">
                        <div className="flex items-start gap-3.5">
                          <span className="w-5 h-5 rounded-full bg-neutral-950 text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-800">
                            {p}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* Founders */}
            {(() => {
              const raw = c.founders ?? "";
              if (!raw || /^founding\b/i.test(raw.trim())) return null;
              const names = raw
                .split("·")
                .map((n: string) => n.replace(/\(.*?\)/g, "").trim())
                .filter(Boolean);
              if (names.length === 0) return null;
              return (
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 text-white font-mono text-[11px] uppercase tracking-wider font-bold mb-5 shadow-xs">
                    <span> LEADERSHIP </span>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {names.map((name: string) => {
                      const direct = c.founderLinkedins?.[name];
                      const q = encodeURIComponent(`${name} ${c.name}`);
                      const href = direct || `https://www.linkedin.com/search/results/people/?keywords=${q}`;
                      return (
                        <li key={name}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 rounded-2xl border-2 border-neutral-950 bg-white p-4 hover:bg-neutral-50 transition shadow-xs"
                          >
                            <span className="font-display text-sm sm:text-base font-bold text-neutral-950 truncate">
                              {name}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-neutral-100 font-mono text-[10px] uppercase tracking-wider text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-all inline-flex items-center gap-1 font-bold shrink-0 border border-neutral-950/15">
                              LinkedIn <ArrowUpRight className="h-3 w-3" />
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })()}

            {/* Press & Citations */}
            {c.milestones && c.milestones.length > 0 && (
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 text-white font-mono text-[11px] uppercase tracking-wider font-bold mb-5 shadow-xs">
                  <span> MEDIA COVERAGE </span>
                </div>
                <div className="space-y-3">
                  {c.milestones.map((m: { title: string; url: string; image?: string; date?: string }) => {
                    const articleDate = getMilestoneDate(m, c.year);
                    return (
                      <a
                        key={m.title}
                        href={m.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 sm:p-5 rounded-2xl border-2 border-neutral-950 bg-white flex items-center justify-between font-mono text-xs hover:bg-neutral-50 transition shadow-xs group gap-3"
                      >
                        <span className="font-bold text-neutral-950 flex items-center gap-2 min-w-0">
                          <span className="text-neutral-950 font-bold shrink-0">→</span>
                          <span className="truncate">{m.title}</span>
                        </span>
                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 font-mono text-[10px] text-neutral-700 font-bold tracking-wider uppercase border border-neutral-950/15">
                            {articleDate}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Founder Testimonial */}
            {c.testimonial && (
              <div className="rounded-2xl sm:rounded-3xl border-2 border-neutral-950 bg-white p-8 md:p-10 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950 text-white font-mono text-[11px] uppercase tracking-wider font-bold mb-5 shadow-xs">
                  <span> FOUNDER TESTIMONIAL </span>
                </div>
                <blockquote className="font-serif italic text-xl md:text-2xl text-neutral-950 leading-snug">
                  &ldquo;{c.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-5 font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold">
                  — {c.testimonial.author}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Intake Banner */}
        <div className="mt-16 md:mt-20 rounded-2xl sm:rounded-3xl border-2 border-neutral-950 bg-neutral-950 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs  tracking-wider font-semibold mb-2">
              BUILDING IN {c.sector.toUpperCase()}?
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white ">
              Building wealth through symbiotic growth
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans max-w-md">
              Initial cheques of ₹2 Cr to ₹25 Cr. Direct review by General Partners.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md shrink-0"
          >
            <span>Submit Your Deck</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
