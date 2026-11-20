import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import press_4basecare from "@/assets/press/economictimes-8fd6fc5066.webp";
import press_skyeair from "@/assets/press/yourstory-7485048f98.webp";
import press_staqu from "@/assets/press/india-781d36f6ad.webp";
import press_dilfoods from "@/assets/press/dil-foods-et-funding.webp";
import press_internshala from "@/assets/press/fortuneindia-ac5d9ed415.webp";
import press_convegenius from "@/assets/press/yourstory-85bf159e82.webp";
import press_innaccel from "@/assets/press/yourstory-9a3c8304ea.webp";
import press_hexalog from "@/assets/press/inc42-42ca269a87.webp";
import press_freshtohome from "@/assets/press/techcrunch-9328f8a3a8.webp";
import press_proteinchef from "@/assets/press/yourstory-57a8c7fb65.webp";
import press_sprw from "@/assets/press/edtechreview-9e3707b291.webp";
import press_thimblerr from "@/assets/press/indianstartuptimes-6a8ea4a2e7.webp";
import press_freshleaf from "@/assets/portfolio/FreshleafProfileFeatureImage-1717987632067.avif";

import basecareLogo from "@/assets/logos/4basecare.webp";
import skyeAirLogo from "@/assets/logos/skye-air.webp";
import staquLogo from "@/assets/logos/staqu.webp";
import dilFoodsLogo from "@/assets/logos/dil-foods.webp";
import internshalaLogo from "@/assets/logos/internshala-new.webp";
import convegeniusLogo from "@/assets/logos/convegenius.webp";
import innaccelLogo from "@/assets/logos/innaccel.webp";
import hexalogLogo from "@/assets/logos/hexalog.webp";
import freshtohomeLogo from "@/assets/logos/freshtohome.webp";
import loFoodsLogo from "@/assets/logos/lo-foods.webp";
import sprwLogo from "@/assets/logos/sprw.webp";
import thimblerrLogo from "@/assets/logos/thimblerr.webp";
import freshleafLogo from "@/assets/logos/freshleaf.png";

export interface PortfolioNewsItem {
  id: string;
  company: string;
  slug: string;
  category: string;
  stat: string;
  statLabel: string;
  date: string;
  source: string;
  url: string;
  headline: string;
  summary: string;
  quote?: string;
  founder?: string;
  image: string;
  logo: string;
}

export const portfolioNewsData: PortfolioNewsItem[] = [
  {
    id: "4basecare",
    company: "4baseCare",
    slug: "4basecare",
    category: "Precision Oncology",
    stat: "₹128 Cr",
    statLabel: "Series B Led by Infosys Trust",
    date: "August 2026",
    source: "The Economic Times",
    url: "https://economictimes.indiatimes.com/tech/funding/infosys-backed-4basecare-raises-rs-128-crore-plans-to-take-its-cancer-testing-platform-global/articleshow/131638999.cms",
    headline: "4baseCare Secures ₹128 Cr Series B to Scale Indigenous Precision Oncology Globally",
    summary:
      "Backed by Infosys Technology Trust, 4baseCare is scaling indigenous Asian population genomic profiling across 100+ cancer hospitals, partnering with Cancer Institute (WIA) Adyar to democratize Comprehensive Genomic Profiling (CGP).",
    quote:
      "Our mission is to bring tailored, genomic-backed cancer treatments to every patient in India and Southeast Asia at a fraction of global costs.",
    founder: "Hitesh Goswami & Kshitij Rishi",
    image: press_4basecare,
    logo: basecareLogo,
  },
  {
    id: "skye-air",
    company: "Skye Air Mobility",
    slug: "skye-air",
    category: "Autonomous Drone Logistics",
    stat: "$9M Series B",
    statLabel: "DGCA BVLOS Air Corridors",
    date: "October 2026",
    source: "ANI & Civil Aviation Ministry",
    url: "https://yourstory.com/2026/03/drone-skye-air-9-million-funding-ian-alpha-fund",
    headline: "Skye Air Activates Doorstep Drone Corridors & Named Global Winner at Ericsson Challenge",
    summary:
      "Pioneering commercial beyond-visual-line-of-sight drone distribution corridors under DGCA air rails. Named among 6 global winners of the Ericsson Innovation Challenge 2026, recognized by Union Minister Jyotiraditya Scindia at IMC.",
    quote:
      "We've proven that autonomous drones cut healthcare cold-chain logistics from hours to minutes, unlocking last-mile delivery that was previously impossible.",
    founder: "Ankit Kumar",
    image: press_skyeair,
    logo: skyeAirLogo,
  },
  {
    id: "staqu",
    company: "Staqu Technologies",
    slug: "staqu",
    category: "AI Video Intelligence",
    stat: "12+ States",
    statLabel: "Police Forces & Critical Infra",
    date: "August 2026",
    source: "Entrepreneur India",
    url: "https://india.entrepreneur.com/news-and-trends/staqu-raises-inr-11-crore-in-pre-series-a-funding-led-by/425700",
    headline: "Staqu's JARVIS AI Platform Deployed Across 12+ State Police Forces & National Infrastructure",
    summary:
      "Securing critical national venues including the Ayodhya Ram Mandir and G20 Delhi summit. Armed with 4 patents and 25 research papers, turning legacy CCTV cameras into real-time threat intelligence and automated forensic analysis.",
    quote:
      "JARVIS transforms conventional video infrastructure into an intelligent nervous system for law enforcement, retail safety, and sovereign security.",
    founder: "Atul Rai",
    image: press_staqu,
    logo: staquLogo,
  },
  {
    id: "dil-foods",
    company: "Dil Foods",
    slug: "dil-foods",
    category: "Food Infrastructure",
    stat: "$7.5M",
    statLabel: "Series A & Shark Tank All-Shark Deal",
    date: "July 2026",
    source: "The Economic Times",
    url: "https://economictimes.indiatimes.com/tech/funding/restaurant-enablement-startup-dil-foods-raises-7-5-million-in-funding/articleshow/131043529.cms",
    headline: "Dil Foods Activates 100+ Restaurant Kitchens with Turnkey Virtual Food Brands",
    summary:
      "Empowering local restaurant operators to double gross margins through 8 high-demand virtual food brands. Closed a rare all-shark offer on Shark Tank India at ₹75 Cr valuation, scaling follow-on capital across 15+ metro cities.",
    quote:
      "We turn underutilized commercial kitchen capacity into profitable revenue streams without requiring restaurateurs to invest in additional real estate.",
    founder: "Arpita Aditi",
    image: press_dilfoods,
    logo: dilFoodsLogo,
  },
  {
    id: "internshala",
    company: "Internshala",
    slug: "internshala",
    category: "Strategic Liquidity Exit",
    stat: "90% Stake",
    statLabel: "Acquired by upGrad",
    date: "February 2026",
    source: "Business Wire & Fortune India",
    url: "https://www.businesswire.com/news/home/20260227180660/en/upGrad-Acquires-Worlds-Largest-Internship-Platform-Internshala",
    headline: "upGrad Completes Strategic 90% Acquisition of MJV-Backed Internshala",
    summary:
      "Connecting 20M+ registered students with 300,000+ corporate employers. UpGrad acquired a 90% majority stake to integrate world-class internships with higher education degrees, delivering extraordinary cash returns and liquidity to early MJV LPs.",
    quote:
      "Mount Judi stood with us when our thesis of connecting India's student talent directly to internships was unproven. Their conviction enabled this market-defining outcome.",
    founder: "Sarvesh Agrawal",
    image: press_internshala,
    logo: internshalaLogo,
  },
  {
    id: "convegenius",
    company: "ConveGenius",
    slug: "convegenius",
    category: "Conversational EdTech",
    stat: "100M+",
    statLabel: "Students on WhatsApp AI",
    date: "May 2026",
    source: "YourStory & Dell Foundation",
    url: "https://yourstory.com/2021/03/edtech-bharat-dell-foundation-startup-convegenius-whatsapp-learning",
    headline: "ConveGenius Reaches 100M+ Public School Students via WhatsApp AI Tutoring",
    summary:
      "Deploying conversational AI bots that diagnose learning gaps and deliver personalized vernacular curricula across 9 state government school systems in India directly over WhatsApp without requiring new devices.",
    quote:
      "By utilizing WhatsApp, we eliminate digital divide barriers and bring world-class adaptive AI tutoring to every child in India, regardless of geography or household income.",
    founder: "Jairaj Bhattacharya & Shashank Pandey",
    image: press_convegenius,
    logo: convegeniusLogo,
  },
  {
    id: "innaccel",
    company: "InnAccel Technologies",
    slug: "innaccel",
    category: "Critical Care MedTech",
    stat: "100+ Patents",
    statLabel: "Stanford Biodesign Medical Devices",
    date: "October 2020",
    source: "YourStory",
    url: "https://yourstory.com/2020/10/funding-alert-medtech-startup-innaccel-mount-judi-ventures",
    headline: "InnAccel's Stanford Biodesign Medical Devices Scale to Global Hospitals",
    summary:
      "Incubated from Stanford India Biodesign, manufacturing life-saving neonatal resuscitation, infant CPAP, and respiratory infection systems that reduce hospital-acquired pneumonia by 40% at 50% lower capital cost than Western imported alternatives.",
    quote:
      "We design medical devices engineered specifically for the clinical constraints of emerging markets, achieving global FDA/CE standards at prices public hospitals can afford.",
    founder: "Siraj Dhanani",
    image: press_innaccel,
    logo: innaccelLogo,
  },
  {
    id: "hexalog",
    company: "Hexalog Systems",
    slug: "hexalog",
    category: "Cross-Border Logistics",
    stat: "$4 Mn",
    statLabel: "Seed / Series A Round",
    date: "February 2026",
    source: "Inc42",
    url: "https://inc42.com/buzz/hexalog-secures-4-mn-funding-to-digitise-cross-border-supply-chains/",
    headline: "Hexalog Secures $4M to Digitize Cross-Border Supply Chains & Documentation",
    summary:
      "Engineering cloud operating software for chemical, pharma, and industrial exporters, digitizing automated bills of lading, customs compliance, and real-time container telemetry across 40+ maritime trade routes.",
    quote:
      "Cross-border trade from India has long been crippled by paper bureaucracy. Hexalog provides the single digital rail that makes export compliance instantaneous and audit-proof.",
    founder: "Vivek Kele",
    image: press_hexalog,
    logo: hexalogLogo,
  },
  {
    id: "freshtohome",
    company: "FreshToHome",
    slug: "freshtohome",
    category: "AgriTech & Fresh Food",
    stat: "$104M",
    statLabel: "Series D Led by Amazon Smbhav",
    date: "February 2023",
    source: "TechCrunch",
    url: "https://techcrunch.com/2023/02/21/amazon-backs-indian-meat-startup-freshtohome-in-104-million-funding/",
    headline: "Amazon Backs FreshToHome in $104M Round to Deepen Cold-Chain Infrastructure",
    summary:
      "Operating direct farm-to-door fresh fish and meat logistics across 160+ cities in India and the GCC. Amazon Smbhav Venture Fund led the $104M round alongside sovereign wealth funds to scale AI-driven commodity procurement directly from 4,000+ local fishermen.",
    quote:
      "Our direct sourcing eliminates intermediate auction houses, ensuring zero chemicals, guaranteed freshness, and 20% higher earnings for traditional fishermen.",
    founder: "Shan Kadavil & Matthew Joseph",
    image: press_freshtohome,
    logo: freshtohomeLogo,
  },
  {
    id: "protein-chef",
    company: "Protein Chef",
    slug: "protein-chef",
    category: "Functional Nutrition",
    stat: "₹100 Cr",
    statLabel: "Annual Run Rate Scaled",
    date: "January 2024",
    source: "YourStory & Inc42",
    url: "https://yourstory.com/2025/07/lo-foods-nears-rs-100-cr-arr-3m-funding-protein-chef",
    headline: "Protein Chef Nears ₹100 Cr ARR with High-Protein & Low-Carb Nutrition Line",
    summary:
      "Formulating clinical low-carb, keto-friendly, and diabetic-safe food staples to tackle India's metabolic lifestyle crisis. Expanded beyond online marketplaces into 1,200+ modern trade supermarkets and tier-1 hospital pharmacy networks nationwide.",
    quote:
      "We engineered everyday Indian staples like atta, snacks, and cookies to have 80% fewer carbohydrates without compromising taste or cultural familiarity.",
    founder: "Sudarshan Gangrade",
    image: press_proteinchef,
    logo: loFoodsLogo,
  },
  {
    id: "sp-robotic-works",
    company: "SP Robotic Works",
    slug: "sp-robotic-works",
    category: "STEM Education & Robotics",
    stat: "$3M",
    statLabel: "Series A Led by Mount Judi",
    date: "March 2022",
    source: "EdTechReview & The Hindu",
    url: "https://edtechreview.in/news/sp-robotic-works-funding-mount-judi/",
    headline: "SP Robotic Works Bags $3M Series A Led by Mount Judi to Democratize Maker Tech",
    summary:
      "Scaling interactive AI-guided maker labs teaching coding, robotics, and IoT hardware to over 100,000 K-12 students. Mount Judi India Growth Fund anchored the Series A round to expand smart learning centers into 30+ non-metro industrial towns.",
    quote:
      "Mount Judi's early belief allowed us to build patent-backed experiential tech curricula that inspire India's next generation of inventors and roboticists.",
    founder: "Sneha Priya & Pranavan",
    image: press_sprw,
    logo: sprwLogo,
  },
  {
    id: "thimblerr",
    company: "Thimblerr",
    slug: "thimblerr",
    category: "Fashion Tech & Supply Chain",
    stat: "$1.4M",
    statLabel: "Pre-Series A Round",
    date: "March 2024",
    source: "B2B Startup Times & IPV",
    url: "https://yourstory.com/companies/thimblerr",
    headline: "Thimblerr Secures $1.4M to Digitize Apparel Manufacturing & Cut Lead Times by 80%",
    summary:
      "Enterprise SaaS and cloud operating rails connecting direct-to-consumer apparel fashion brands with smart micro-factories in Tirupur and Surat, collapsing production cycles from 90 days down to 15 days with on-demand zero-inventory fulfillment.",
    quote:
      "By replacing fragmented phone calls and spreadsheets with real-time IoT floor telemetry, we make high-speed fashion manufacturing transparent and agile.",
    founder: "Dinesh K. & Team",
    image: press_thimblerr,
    logo: thimblerrLogo,
  },
  {
    id: "freshleaf-tea",
    company: "Freshleaf Tea",
    slug: "freshleaf-tea",
    category: "Artisanal D2C Beverages",
    stat: "Seed",
    statLabel: "Direct-from-Estate Network",
    date: "June 2024",
    source: "Modern Retail & F&B News",
    url: "https://freshleafteas.in/",
    headline: "Freshleaf Tea Raises Seed Capital to Scale Direct-from-Estate Whole-Leaf Tea Rails",
    summary:
      "Procuring single-origin orthodox and green teas direct from Darjeeling, Assam, and Nilgiri tea estates within 48 hours of plucking, delivering garden-fresh loose-leaf blends and biodegradable pyramid tea bags without broker markups.",
    quote:
      "We eliminate multi-layer auction cartels, ensuring customers drink authentic unblended teas while small estate growers receive higher, fairer realization.",
    founder: "Balkirat Singh",
    image: press_freshleaf,
    logo: freshleafLogo,
  },
];

export function PortfolioNewsScrollytelling() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const isClickScrolling = useRef(false);

  const activeStory = portfolioNewsData[activeStoryIndex] || portfolioNewsData[0];

  // Smooth scroll window to target story when clicked
  const selectStory = useCallback((index: number) => {
    setActiveStoryIndex(index);
    const target = itemRefs.current[index];
    if (target) {
      isClickScrolling.current = true;
      const navOffset = 110;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  }, []);

  // Window scroll listener: calculates which story is currently in the active reading focal point
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickScrolling.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Trigger point around upper 45% of viewport
          const triggerY = window.innerHeight * 0.45;
          let current = 0;

          for (let i = 0; i < portfolioNewsData.length; i++) {
            const el = itemRefs.current[i];
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerY) {
                current = i;
              } else {
                break;
              }
            }
          }

          setActiveStoryIndex(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="portfolio-news-insights" className="w-full bg-white pt-6 sm:pt-8 pb-14 sm:pb-20 lg:pb-24">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Clear Heading Only */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight leading-[1.05]">
            Portfolio News &amp; Insights
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STICKY SPLIT-SCREEN SCROLLYTELLING CONTAINER
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start relative">
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: MINIMALIST STICKY SHOWCASE CARD
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 lg:sticky lg:top-24 self-start">
            <div className="w-full lg:h-[calc(100vh-140px)] lg:max-h-[640px] rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              {/* TOP HEADER */}
              <div>
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: activeStory.slug }}
                    className="flex items-center gap-2.5 min-w-0 group/hdr cursor-pointer"
                    title={`View ${activeStory.company} portfolio page`}
                  >
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shrink-0 border border-neutral-200/80 shadow-2xs group-hover/hdr:border-neutral-950 transition-colors">
                      <img
                        src={activeStory.logo}
                        alt={activeStory.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-display font-bold text-sm text-neutral-950 group-hover/hdr:text-[#036089] transition-colors truncate">
                      {activeStory.company}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="font-mono text-[11px] text-[#036089] font-bold uppercase tracking-wider truncate">
                      {activeStory.category}
                    </span>
                  </Link>

                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 font-mono text-[11px] font-bold text-neutral-900 shrink-0">
                    {activeStory.stat}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-950 tracking-tight leading-snug line-clamp-2 mt-4">
                  {activeStory.headline}
                </h3>

                <div className="flex items-center gap-2 mt-2 font-mono text-[11px] text-neutral-500">
                  <span className="font-semibold text-neutral-700">{activeStory.source}</span>
                  <span>·</span>
                  <span>{activeStory.date}</span>
                </div>
              </div>

              {/* CENTER: Dedicated Framed Photograph Window with Smooth Crossfading */}
              <div className="relative my-4 w-full h-[220px] sm:h-[260px] lg:flex-1 rounded-2xl overflow-hidden border border-neutral-200/90 bg-neutral-100 shadow-2xs">
                {portfolioNewsData.map((story, i) => {
                  const isActive = activeStoryIndex === i;
                  return (
                    <div
                      key={story.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={story.image}
                        alt={story.headline}
                        loading={i < 2 ? "eager" : "lazy"}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                      {story.statLabel && (
                        <div className="absolute bottom-3 left-3 right-3 z-10">
                          <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                            {story.statLabel}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM: Summary & Actions */}
              <div className="pt-2">
                <p className="font-sans text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {activeStory.quote ? `"${activeStory.quote}"` : activeStory.summary}
                </p>

                <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-neutral-100">
                  <div className="font-mono text-[11px] text-neutral-400">
                    Record {activeStoryIndex + 1 < 10 ? `0${activeStoryIndex + 1}` : activeStoryIndex + 1}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: activeStory.slug }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 hover:bg-[#036089] text-white font-mono text-xs font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                      title={`View ${activeStory.company} portfolio page`}
                    >
                      <span>Info</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={activeStory.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 font-mono text-xs font-semibold border border-neutral-200/80 transition-colors cursor-pointer"
                    >
                      <span>Read Press</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: MINIMALIST EDITORIAL NEWS STREAM
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4">
            {portfolioNewsData.map((item, index) => {
              const isActive = activeStoryIndex === index;
              return (
                <article
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onClick={() => selectStory(index)}
                  className={`scroll-mt-28 p-5 sm:p-6 transition-all duration-300 cursor-pointer rounded-2xl sm:rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group ${
                    isActive
                      ? "bg-white border-neutral-950 shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-neutral-950/5 translate-x-1"
                      : "bg-white/70 hover:bg-white border-neutral-200/80 hover:border-neutral-400 shadow-2xs hover:shadow-xs"
                  }`}
                >
                  {/* Left: Content Details */}
                  <div className="flex-1 min-w-0 pr-1">
                    {/* Meta Row: Company Logo + Name + Index + Stat */}
                    <div className="flex items-center flex-wrap gap-2 mb-2 font-mono text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shrink-0 border border-neutral-200">
                          <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                        <span
                          className={`font-bold uppercase tracking-wider ${
                            isActive ? "text-[#036089]" : "text-neutral-700 group-hover:text-neutral-950"
                          }`}
                        >
                          {item.company}
                        </span>
                      </div>
                      <span className="text-neutral-300">·</span>
                      <span className="text-neutral-400 font-semibold font-mono">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span className="px-2 py-0.5 rounded-full bg-neutral-100 font-mono text-[10px] font-bold text-neutral-700">
                        {item.stat}
                      </span>
                    </div>

                    {/* Headline */}
                    <h4
                      className={`font-display text-base sm:text-lg leading-snug transition-colors ${
                        isActive
                          ? "font-black text-neutral-950"
                          : "font-bold text-neutral-800 group-hover:text-[#036089]"
                      }`}
                    >
                      {item.headline}
                    </h4>

                    {/* Brief Summary Excerpt */}
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                      {item.summary}
                    </p>

                    {/* Source & Date below + Direct Portfolio Link */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mt-3 pt-2.5 border-t border-neutral-100 font-mono text-[11px] text-neutral-500">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-neutral-700">{item.source}</span>
                        <span>·</span>
                        <span>{item.date}</span>
                      </div>
                      <Link
                        to="/portfolio/$slug"
                        params={{ slug: item.slug }}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#036089] hover:text-neutral-950 transition-colors cursor-pointer"
                        title={`View ${item.company} portfolio page`}
                      >
                        <span>Info</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Small Thumbnail Image */}
                  <div className="w-full sm:w-28 md:w-32 aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0 border border-neutral-200/90 bg-neutral-100 group-hover:shadow-xs transition-transform">
                    <img
                      src={item.image}
                      alt={item.headline}
                      loading="lazy"
                      className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                        isActive ? "scale-105" : "group-hover:scale-105"
                      }`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
