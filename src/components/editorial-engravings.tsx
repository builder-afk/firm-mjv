import React from "react";

/**
 * Vintage Stippled Botanical Engraving (Hands cradling branch & fruits)
 * Recreated with fine stippling and etching lines in SVG.
 */
export function HeroEngraving({
  color = "#171717",
  className = "w-full h-full",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer subtle guide ring */}
      <circle
        cx="160"
        cy="160"
        r="140"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.3"
      />

      {/* Main contour lines: Classical Hand Cradling Botanical Branch */}
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Palm & Wrist */}
        <path d="M 280 270 C 265 240, 245 220, 230 195 C 220 180, 215 155, 205 135 C 200 125, 190 120, 180 125 C 172 130, 175 145, 182 160 C 190 178, 200 200, 205 225 C 210 248, 225 270, 240 285" />

        {/* Index Finger */}
        <path d="M 205 135 C 198 115, 190 95, 178 80 C 172 72, 162 72, 156 80 C 150 90, 155 108, 165 125 C 172 138, 180 152, 182 160" />

        {/* Middle Finger */}
        <path d="M 178 80 C 170 65, 158 50, 145 42 C 138 38, 130 42, 126 50 C 122 62, 130 82, 140 102 C 148 118, 156 135, 160 148" />

        {/* Ring Finger */}
        <path d="M 145 75 C 138 65, 128 55, 118 50 C 112 47, 105 50, 102 58 C 98 68, 105 85, 114 102 C 122 118, 132 136, 138 148" />

        {/* Pinky */}
        <path d="M 120 95 C 112 88, 102 82, 94 80 C 88 78, 82 82, 80 90 C 78 98, 85 110, 95 124 C 105 140, 118 160, 128 175" />

        {/* Botanical Branch / Olive Stem passing through */}
        <path d="M 40 180 Q 110 170, 160 190 T 260 170" strokeWidth="2.2" />

        {/* Leaves */}
        {/* Leaf 1 */}
        <path d="M 70 176 C 60 155, 75 140, 95 145 C 100 160, 90 175, 70 176 Z" />
        <path d="M 70 176 Q 85 155, 95 145" strokeWidth="1" />

        {/* Leaf 2 */}
        <path d="M 105 174 C 100 150, 120 135, 138 142 C 140 160, 125 174, 105 174 Z" />
        <path d="M 105 174 Q 120 150, 138 142" strokeWidth="1" />

        {/* Leaf 3 */}
        <path d="M 130 185 C 120 205, 135 225, 155 220 C 160 202, 150 188, 130 185 Z" />
        <path d="M 130 185 Q 142 208, 155 220" strokeWidth="1" />

        {/* Leaf 4 */}
        <path d="M 215 180 C 230 160, 252 165, 255 182 C 242 195, 225 192, 215 180 Z" />
        <path d="M 215 180 Q 240 172, 255 182" strokeWidth="1" />

        {/* Leaf 5 */}
        <path d="M 185 190 C 195 210, 218 215, 225 200 C 220 185, 200 182, 185 190 Z" />
        <path d="M 185 190 Q 208 202, 225 200" strokeWidth="1" />

        {/* Berries / Fruits */}
        <circle cx="160" cy="180" r="14" fill="none" strokeWidth="1.8" />
        <circle cx="185" cy="165" r="15" fill="none" strokeWidth="1.8" />
        <circle cx="195" cy="195" r="17" fill="none" strokeWidth="1.8" />
        <circle cx="170" cy="210" r="19" fill="none" strokeWidth="1.8" />
      </g>

      {/* Hand cross-hatching and stippling dots */}
      <g fill={color}>
        {/* Fruit 1 stippling dots */}
        <circle cx="152" cy="180" r="1" />
        <circle cx="155" cy="184" r="1" />
        <circle cx="158" cy="187" r="1.2" />
        <circle cx="162" cy="188" r="1.2" />
        <circle cx="166" cy="185" r="1" />
        <circle cx="154" cy="176" r="1" />
        <circle cx="158" cy="179" r="1" />
        <circle cx="162" cy="182" r="1.2" />

        {/* Fruit 2 stippling dots */}
        <circle cx="178" cy="164" r="1" />
        <circle cx="182" cy="168" r="1.2" />
        <circle cx="186" cy="172" r="1.2" />
        <circle cx="190" cy="168" r="1" />
        <circle cx="184" cy="160" r="1" />

        {/* Fruit 3 stippling dots */}
        <circle cx="188" cy="196" r="1.2" />
        <circle cx="192" cy="200" r="1.2" />
        <circle cx="196" cy="203" r="1" />
        <circle cx="200" cy="198" r="1" />
        <circle cx="194" cy="192" r="1" />

        {/* Fruit 4 stippling dots */}
        <circle cx="162" cy="210" r="1.2" />
        <circle cx="166" cy="216" r="1.2" />
        <circle cx="172" cy="218" r="1.2" />
        <circle cx="176" cy="214" r="1" />
        <circle cx="168" cy="206" r="1" />

        {/* Hand shading stippling */}
        <circle cx="210" cy="140" r="1.2" />
        <circle cx="214" cy="143" r="1" />
        <circle cx="218" cy="147" r="1" />
        <circle cx="225" cy="155" r="1.2" />
        <circle cx="232" cy="164" r="1" />
        <circle cx="240" cy="175" r="1.2" />
        <circle cx="248" cy="187" r="1" />
        <circle cx="255" cy="200" r="1.2" />
        <circle cx="265" cy="215" r="1" />
        <circle cx="275" cy="230" r="1.2" />
      </g>

      {/* Delicate vintage etching lines */}
      <g stroke={color} strokeWidth="0.8" opacity="0.6">
        <line x1="220" y1="240" x2="235" y2="230" />
        <line x1="225" y1="245" x2="242" y2="234" />
        <line x1="232" y1="250" x2="250" y2="238" />
        <line x1="240" y1="256" x2="258" y2="243" />
        <line x1="250" y1="262" x2="268" y2="248" />

        <line x1="170" y1="125" x2="182" y2="120" />
        <line x1="174" y1="130" x2="188" y2="124" />
        <line x1="180" y1="135" x2="195" y2="128" />
      </g>
    </svg>
  );
}

/**
 * Two hands cradling a seedling with celestial accents
 */
export function SeedlingEngraving({
  color = "currentColor",
  className = "w-full h-full text-neutral-950",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left hand */}
        <path d="M 20 110 C 35 105 50 102 70 108 C 80 112 85 120 78 126 C 65 136 40 134 20 130" />
        <path d="M 45 103 C 55 95 68 96 75 104" />

        {/* Right hand */}
        <path d="M 140 110 C 125 105 110 102 90 108 C 80 112 75 120 82 126 C 95 136 120 134 140 130" />
        <path d="M 115 103 C 105 95 92 96 85 104" />

        {/* Central sprouting stem */}
        <path d="M 80 105 L 80 50" strokeWidth="2" />

        {/* Sprout leaves */}
        <path d="M 80 65 C 65 55 55 68 62 80 C 70 85 78 75 80 65 Z" fill="none" strokeWidth="1.5" />
        <path d="M 80 55 C 95 45 105 58 98 70 C 90 75 82 65 80 55 Z" fill="none" strokeWidth="1.5" />
        <path d="M 80 50 C 72 35 88 35 80 50 Z" strokeWidth="1.5" />

        {/* Celestial plus (+) accents */}
        <path d="M 40 50 L 40 58 M 36 54 L 44 54" strokeWidth="1.5" />
        <path d="M 125 85 L 125 93 M 121 89 L 129 89" strokeWidth="1.5" />
      </g>

      {/* Stippled dots */}
      <g fill={color}>
        <circle cx="30" cy="68" r="1.5" />
        <circle cx="48" cy="38" r="1.5" />
        <circle cx="118" cy="46" r="1.5" />
        <circle cx="132" cy="62" r="1.5" />
        <circle cx="75" cy="95" r="1" />
        <circle cx="85" cy="95" r="1" />
        <circle cx="80" cy="98" r="1.2" />
        <circle cx="72" cy="115" r="1" />
        <circle cx="88" cy="115" r="1" />
        <circle cx="80" cy="120" r="1.2" />
      </g>
    </svg>
  );
}

/**
 * Vintage Compass Rose & Fiduciary Emblem
 */
export function CompassRoseEngraving({
  color = "#171717",
  className = "w-full h-full",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="100" cy="100" r="76" stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="68" stroke={color} strokeWidth="0.8" opacity="0.5" />

      {/* 4 Cardinal points */}
      <polygon points="100,20 106,86 100,94 94,86" fill={color} />
      <polygon points="100,20 100,94 94,86" fill={color} opacity="0.8" />
      <polygon points="100,180 106,114 100,106 94,114" fill={color} />
      <polygon points="20,100 86,94 94,100 86,106" fill={color} />
      <polygon points="180,100 114,94 106,100 114,106" fill={color} />

      {/* 4 Diagonal points */}
      <polygon points="45,45 92,88 100,100 88,92" fill={color} opacity="0.6" />
      <polygon points="155,45 108,88 100,100 112,92" fill={color} opacity="0.6" />
      <polygon points="45,155 92,112 100,100 88,108" fill={color} opacity="0.6" />
      <polygon points="155,155 108,112 100,100 112,108" fill={color} opacity="0.6" />

      {/* Center rings */}
      <circle cx="100" cy="100" r="10" fill="#ffffff" stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="4" fill={color} />

      {/* Cardinal letters */}
      <text x="100" y="14" textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold">N</text>
      <text x="100" y="196" textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold">S</text>
      <text x="10" y="103" textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold">W</text>
      <text x="190" y="103" textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold">E</text>
    </svg>
  );
}

/**
 * Mountain Peak & Sun Horizon Stippled Seal (Mount Judi Emblem)
 */
export function MountainSealEngraving({
  color = "#171717",
  className = "w-full h-full",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer octagon / double circle */}
      <circle cx="100" cy="100" r="86" stroke={color} strokeWidth="1.6" />
      <circle cx="100" cy="100" r="78" stroke={color} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />

      {/* Rising Sun with radiating beams */}
      <circle cx="100" cy="90" r="24" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" />
      <g stroke={color} strokeWidth="1" opacity="0.5">
        <line x1="100" y1="52" x2="100" y2="60" />
        <line x1="74" y1="64" x2="80" y2="70" />
        <line x1="126" y1="64" x2="120" y2="70" />
        <line x1="62" y1="90" x2="70" y2="90" />
        <line x1="138" y1="90" x2="130" y2="90" />
      </g>

      {/* Mountain Peak (Mount Judi Summit) */}
      <polygon
        points="100,72 148,142 52,142"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Ridge line */}
      <path d="M 100 72 L 96 110 L 108 142" stroke={color} strokeWidth="1.4" />

      {/* Shading stippling on right flank of mountain */}
      <g fill={color} opacity="0.8">
        <circle cx="105" cy="92" r="1" />
        <circle cx="110" cy="100" r="1.1" />
        <circle cx="115" cy="108" r="1.1" />
        <circle cx="120" cy="116" r="1.2" />
        <circle cx="125" cy="124" r="1.2" />
        <circle cx="130" cy="132" r="1.2" />
        <circle cx="112" cy="114" r="1" />
        <circle cx="118" cy="122" r="1.1" />
        <circle cx="124" cy="130" r="1.2" />
        <circle cx="102" cy="102" r="1" />
        <circle cx="106" cy="120" r="1" />
        <circle cx="112" cy="130" r="1.1" />
      </g>

      {/* Base water/earth horizontal lines */}
      <g stroke={color} strokeWidth="1" opacity="0.5">
        <line x1="45" y1="148" x2="155" y2="148" />
        <line x1="55" y1="154" x2="145" y2="154" />
        <line x1="70" y1="160" x2="130" y2="160" />
      </g>

      {/* Star / Sparkle top */}
      <path d="M 100 36 L 102 42 L 108 44 L 102 46 L 100 52 L 98 46 L 92 44 L 98 42 Z" fill={color} />
    </svg>
  );
}
