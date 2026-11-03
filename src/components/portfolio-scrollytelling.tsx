import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ExternalLink,
  ArrowRight,
  Quote,
  Sparkles,
} from "lucide-react";

import basecareImg from "@/assets/portfolio/4basecare.webp";
import skyeAirImg from "@/assets/portfolio/skye-air.jpg";
import staquImg from "@/assets/portfolio/staqu.jpg";
import dilFoodsSharkTank from "@/assets/press/dil-foods-shark-tank.webp";
import internshalaPhoto from "@/assets/internshalash.avif";
import convegeniusImg from "@/assets/portfolio/convegenius.jpg";
import innaccelImg from "@/assets/portfolio/innaccel.jpg";
import hexalogImg from "@/assets/portfolio/hexalog.jpg";
import freshtohomeImg from "@/assets/portfolio/freshtohome.jpg";
import loFoodsImg from "@/assets/portfolio/protein.webp";
import sprwImg from "@/assets/sprobo.jpeg";
import thimblerrImg from "@/assets/portfolio/thimblerr.jpg";
import freshleafImg from "@/assets/portfolio/FreshleafProfileFeatureImage-1717987632067.avif";

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
    image: basecareImg,
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
    image: skyeAirImg,
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
    image: staquImg,
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
    image: dilFoodsSharkTank,
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
    image: internshalaPhoto,
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
    image: convegeniusImg,
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
    image: innaccelImg,
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
    image: hexalogImg,
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
    image: freshtohomeImg,
    logo: freshtohomeLogo,
  },
  {
    id: "lo-foods",
    company: "Protein Chef",
    slug: "lo-foods",
    category: "Functional Nutrition",
    stat: "₹100 Cr",
    statLabel: "Annual Run Rate Scaled",
    date: "January 2024",
    source: "YourStory & Inc42",
    url: "https://yourstory.com/2024/01/health-food-brand-lo-foods-raises-funds",
    headline: "Protein Chef Nears ₹100 Cr ARR with High-Protein & Low-Carb Nutrition Line",
    summary:
      "Formulating clinical low-carb, keto-friendly, and diabetic-safe food staples to tackle India's metabolic lifestyle crisis. Expanded beyond online marketplaces into 1,200+ modern trade supermarkets and tier-1 hospital pharmacy networks nationwide.",
    quote:
      "We engineered everyday Indian staples like atta, snacks, and cookies to have 80% fewer carbohydrates without compromising taste or cultural familiarity.",
    founder: "Sudarshan Gangrade",
    image: loFoodsImg,
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
    image: sprwImg,
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
    image: thimblerrImg,
    logo: thimblerrLogo,
  },
  {
    id: "freshleaf",
    company: "Freshleaf Tea",
    slug: "freshleaf",
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
    image: freshleafImg,
    logo: freshleafLogo,
  },
];

export function PortfolioNewsScrollytelling() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const listContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);

  const activeStory = portfolioNewsData[activeStoryIndex] || portfolioNewsData[0];

  // Select a story and scroll it smoothly into view in the right list
  const selectStory = useCallback((index: number, smoothScroll = true) => {
    setActiveStoryIndex(index);
    const target = itemRefs.current[index];
    if (target && listContainerRef.current) {
      isProgrammaticScroll.current = true;
      target.scrollIntoView({
        behavior: smoothScroll ? "smooth" : "auto",
        block: "nearest",
      });
      // Release programmatic flag after smooth scroll completes
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 400);
    }
  }, []);

  // Handle scroll on the right-side list container:
  // Detects which news item is closest to the focal point of the list container
  const handleListScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const container = listContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    // Center point of the visible list window
    const focalY = containerRect.top + containerRect.height * 0.38;

    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(focalY - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeStoryIndex) {
      setActiveStoryIndex(closestIndex);
    }
  }, [activeStoryIndex]);

  return (
    <section id="portfolio-news-insights" className="w-full bg-white py-12 md:py-20 border-t border-black/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Heading Row (Clean PedalStart/Neo-Editorial Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight leading-[0.98]">
              Portfolio News and Insights
            </h2>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            CONTAINED SPLIT-SCREEN LAYOUT (PedalStart UI/UX Architecture)
            - LEFT: Featured News Card with top blue/teal banner & large image
            - RIGHT: Open Borderless Scrollable News Feed List extending to right padding
            - Both stay in this specific area while scrolling
        ═══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-stretch">
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: FEATURED CARD (MATCHING PEDALSTART BLUE BANNER + IMAGE)
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col">
            <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[580px] rounded-3xl overflow-hidden border-2 border-neutral-950 bg-neutral-950 shadow-xl flex flex-col justify-between">
              {/* TOP BANNER: Brand Teal (#036089) Header like PedalStart Blue Top */}
              <div className="relative z-20 bg-[#036089] p-5 sm:p-6 lg:p-7 text-white shadow-md border-b border-white/10">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    {/* Company Logo Badge */}
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shrink-0 shadow-xs">
                      <img
                        src={activeStory.logo}
                        alt={activeStory.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-white/90 font-bold">
                      {activeStory.company}
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="font-mono text-xs text-[#C78D1E] font-bold uppercase tracking-wider">
                      {activeStory.category}
                    </span>
                  </div>

                  {/* Impact Stat Badge */}
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs font-mono text-[11px] font-bold text-white">
                    {activeStory.stat}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-snug line-clamp-2">
                  {activeStory.headline}
                </h3>

                {/* Source & Date Subtitle */}
                <div className="flex items-center gap-2 mt-2 font-sans text-xs text-white/80">
                  <span className="font-semibold text-white">{activeStory.source}</span>
                  <span className="opacity-50">·</span>
                  <span>{activeStory.date}</span>
                </div>
              </div>

              {/* CENTER/BOTTOM: Large Visual Showcase Image with Crossfading */}
              <div className="relative flex-1 w-full overflow-hidden bg-neutral-900">
                {portfolioNewsData.map((story, i) => {
                  const isActive = activeStoryIndex === i;
                  return (
                    <div
                      key={story.id}
                      className={`absolute inset-0 transition-all duration-600 ease-out ${isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                        }`}
                    >
                      <img
                        src={story.image}
                        alt={story.headline}
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Gradient overlay for text contrast at the bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    </div>
                  );
                })}

                {/* Bottom Overlaid Action Bar */}
                <div className="absolute bottom-0 inset-x-0 z-20 p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-md">
                    <p className="font-sans text-xs sm:text-sm text-white/90 line-clamp-2 leading-relaxed drop-shadow-sm">
                      {activeStory.summary}
                    </p>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: activeStory.slug }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/20 font-mono text-xs font-bold text-white transition-colors"
                    >
                      <span>Info</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={activeStory.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#036089] hover:bg-[#024866] font-mono text-xs font-bold text-white shadow-xs transition-colors"
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
              RIGHT COLUMN: BORDERLESS SCROLLABLE NEWS FEED LIST (PedalStart Reference)
              - Expands fully to right-side padding with no outer border box
              - Internal smooth scroll with scroll-triggered preview switching
              - Thumbnail on the right, headline on left, divider lines
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col h-[480px] sm:h-[540px] lg:h-[580px] w-full">
            {/* Scrollable List Container (Scrolled by wheel, touch, or click) */}
            <div
              ref={listContainerRef}
              onScroll={handleListScroll}
              className="w-full h-full overflow-y-auto divide-y divide-neutral-200/90 scroll-smooth overscroll-contain pr-1 sm:pr-2 focus:outline-none"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#cbd5e1 transparent",
              }}
            >
              {portfolioNewsData.map((item, index) => {
                const isActive = activeStoryIndex === index;
                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onClick={() => selectStory(index)}
                    className={`py-4 sm:py-5 px-3 sm:px-4 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 sm:gap-6 group rounded-2xl ${isActive
                      ? "bg-[#036089]/6 border-l-4 border-l-[#036089]"
                      : "hover:bg-neutral-50/80 border-l-4 border-l-transparent"
                      }`}
                  >
                    {/* Left: Headline & Meta Details */}
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px]">
                        <span
                          className={`font-bold uppercase tracking-wider ${isActive ? "text-[#036089]" : "text-neutral-500"
                            }`}
                        >
                          {item.company}
                        </span>
                        <span className="text-neutral-300">·</span>
                        <span className="text-neutral-400 font-medium">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      </div>

                      {/* Headline (Matching PedalBuzz style) */}
                      <h4
                        className={`font-display text-sm sm:text-base leading-snug line-clamp-2 transition-colors ${isActive
                          ? "font-black text-neutral-950"
                          : "font-semibold text-neutral-800 group-hover:text-[#036089]"
                          }`}
                      >
                        {item.headline}
                      </h4>

                      {/* Source & Date below */}
                      <div className="flex items-center gap-2 mt-2 font-mono text-[11px] text-neutral-500">
                        <span className="font-medium text-neutral-600">{item.source}</span>
                        <span>·</span>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Right: Small Thumbnail Image (Matching PedalBuzz layout) */}
                    <div className="w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-neutral-200/90 bg-neutral-100 group-hover:shadow-xs transition-transform">
                      <img
                        src={item.image}
                        alt={item.headline}
                        loading="lazy"
                        className={`w-full h-full object-cover object-center transition-transform duration-300 ${isActive ? "scale-105" : "group-hover:scale-105"
                          }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
