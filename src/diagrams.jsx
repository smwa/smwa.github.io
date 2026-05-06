/* ============================================================
   Blueprint diagrams — one component per case file.
   Pick which one a case file shows via `diagram` in src/site.js.
   ============================================================ */
import React from "react";

const Wellsite = () => (
  <g>
    <line x1="6" y1="100" x2="194" y2="100" stroke="currentColor" />
    <line x1="6" y1="103" x2="194" y2="103" stroke="currentColor" strokeDasharray="2 3" />
    <rect x="14" y="74" width="62" height="26" stroke="currentColor" fill="none" />
    <line x1="20" y1="100" x2="20" y2="105" stroke="currentColor" />
    <line x1="70" y1="100" x2="70" y2="105" stroke="currentColor" />
    <rect x="20" y="58" width="22" height="16" stroke="currentColor" fill="none" />
    <line x1="20" y1="62" x2="42" y2="62" stroke="currentColor" />
    <circle cx="31" cy="68" r="2.5" stroke="currentColor" fill="none" />
    <rect x="48" y="62" width="22" height="12" stroke="currentColor" fill="none" />
    <line x1="48" y1="66" x2="70" y2="66" stroke="currentColor" />
    <circle cx="53" cy="70" r="1" fill="currentColor" />
    <circle cx="58" cy="70" r="1" fill="currentColor" />
    <circle cx="63" cy="70" r="1" fill="currentColor" />
    <rect x="32" y="38" width="6" height="20" stroke="currentColor" fill="none" />
    <line x1="38" y1="38" x2="44" y2="32" stroke="currentColor" />
    <line x1="32" y1="38" x2="32" y2="34" stroke="currentColor" />
    <line x1="38" y1="38" x2="38" y2="34" stroke="currentColor" />
    <text x="45" y="96" textAnchor="middle" fill="currentColor" fontSize="6">SKID UNIT</text>
    <line x1="76" y1="86" x2="120" y2="86" stroke="currentColor" />
    <circle cx="98" cy="86" r="2" stroke="currentColor" fill="none" />
    <polygon points="138,100 122,100 130,76" stroke="currentColor" fill="none" />
    <polygon points="178,100 162,100 170,76" stroke="currentColor" fill="none" />
    <line x1="130" y1="76" x2="170" y2="76" stroke="currentColor" />
    <circle cx="150" cy="76" r="2.5" stroke="currentColor" fill="none" />
    <line x1="118" y1="64" x2="184" y2="80" stroke="currentColor" strokeWidth="1.6" />
    <path d="M 116 62 L 122 60 L 124 66 L 118 68 Z" stroke="currentColor" fill="none" />
    <circle cx="180" cy="82" r="6" stroke="currentColor" fill="none" />
    <line x1="180" y1="82" x2="180" y2="76" stroke="currentColor" />
    <line x1="120" y1="64" x2="120" y2="100" stroke="currentColor" />
    <rect x="116" y="96" width="8" height="6" stroke="currentColor" fill="none" />
    <line x1="120" y1="103" x2="120" y2="120" stroke="currentColor" strokeDasharray="2 2" />
    <text x="150" y="118" textAnchor="middle" fill="currentColor" fontSize="6">WELL-SITE</text>
  </g>
);

const Banking = () => (
  <g>
    <rect x="14" y="58" width="40" height="20" stroke="currentColor" fill="none" />
    <text x="34" y="71" textAnchor="middle" fill="currentColor" fontSize="7">CUSTOMER</text>
    <line x1="54" y1="68" x2="68" y2="68" stroke="currentColor" />
    <polygon points="68,65 73,68 68,71" fill="currentColor" />
    <rect x="73" y="56" width="34" height="24" stroke="currentColor" fill="none" />
    <text x="90" y="65" textAnchor="middle" fill="currentColor" fontSize="6">API</text>
    <text x="90" y="73" textAnchor="middle" fill="currentColor" fontSize="6">GATEWAY</text>
    <line x1="107" y1="58" x2="125" y2="22" stroke="currentColor" />
    <line x1="107" y1="63" x2="125" y2="50" stroke="currentColor" />
    <line x1="107" y1="73" x2="125" y2="86" stroke="currentColor" />
    <line x1="107" y1="78" x2="125" y2="114" stroke="currentColor" />
    <rect x="125" y="14"  width="56" height="18" stroke="currentColor" fill="none" />
    <text x="153" y="25"  textAnchor="middle" fill="currentColor" fontSize="6">CORE</text>
    <rect x="125" y="42"  width="56" height="18" stroke="currentColor" fill="none" />
    <text x="153" y="53"  textAnchor="middle" fill="currentColor" fontSize="6">DOCUMENTS</text>
    <rect x="125" y="78"  width="56" height="18" stroke="currentColor" fill="none" />
    <text x="153" y="89"  textAnchor="middle" fill="currentColor" fontSize="6">LOANS</text>
    <rect x="125" y="106" width="56" height="18" stroke="currentColor" fill="none" />
    <text x="153" y="117" textAnchor="middle" fill="currentColor" fontSize="6">ACCOUNTS</text>
    {[23, 51, 87, 115].map((cy, i) => (
      <g key={i}>
        <ellipse cx="186" cy={cy - 3} rx="4" ry="1.5" stroke="currentColor" fill="none" />
        <line x1="182" y1={cy - 3} x2="182" y2={cy + 3} stroke="currentColor" />
        <line x1="190" y1={cy - 3} x2="190" y2={cy + 3} stroke="currentColor" />
        <ellipse cx="186" cy={cy + 3} rx="4" ry="1.5" stroke="currentColor" fill="none" />
      </g>
    ))}
  </g>
);

const Cnc = () => (
  <g>
    <rect x="20" y="95" width="160" height="14" stroke="currentColor" fill="none" />
    <line x1="20" y1="109" x2="180" y2="109" stroke="currentColor" />
    <line x1="40"  y1="95" x2="40"  y2="109" stroke="currentColor" strokeDasharray="2 2" />
    <line x1="80"  y1="95" x2="80"  y2="109" stroke="currentColor" strokeDasharray="2 2" />
    <line x1="120" y1="95" x2="120" y2="109" stroke="currentColor" strokeDasharray="2 2" />
    <line x1="160" y1="95" x2="160" y2="109" stroke="currentColor" strokeDasharray="2 2" />
    <rect x="22"  y="35" width="10"  height="60" stroke="currentColor" fill="none" />
    <rect x="168" y="35" width="10"  height="60" stroke="currentColor" fill="none" />
    <rect x="32"  y="38" width="136" height="12" stroke="currentColor" fill="none" />
    <rect x="86"  y="36" width="28"  height="16" stroke="currentColor" fill="none" />
    <rect x="94"  y="52" width="12"  height="22" stroke="currentColor" fill="none" />
    <circle cx="100" cy="78" r="6" stroke="currentColor" fill="none" />
    <line x1="94" y1="78" x2="106" y2="78" stroke="currentColor" />
    <line x1="100" y1="84" x2="100" y2="95" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="100" cy="95" r="2" fill="currentColor" />
    <rect x="78" y="89" width="44" height="6" stroke="currentColor" fill="none" />
    <text x="40"  y="32"  textAnchor="middle" fill="currentColor" fontSize="6">X</text>
    <text x="92"  y="64"  textAnchor="end"    fill="currentColor" fontSize="6">Z</text>
    <text x="115" y="78"  textAnchor="start"  fill="currentColor" fontSize="6">A/B</text>
    <text x="100" y="124" textAnchor="middle" fill="currentColor" fontSize="7">5-AXIS LASER</text>
  </g>
);

const Inventory = () => (
  <g>
    <g opacity="0.5">
      <rect x="40"  y="32" width="36" height="26" stroke="currentColor" fill="none" />
      <line x1="58"  y1="32" x2="58"  y2="58" stroke="currentColor" />
      <rect x="120" y="32" width="36" height="26" stroke="currentColor" fill="none" />
      <line x1="138" y1="32" x2="138" y2="58" stroke="currentColor" />
    </g>
    <rect x="22" y="58" width="46" height="38" stroke="currentColor" fill="none" />
    <line x1="45" y1="58" x2="45" y2="96" stroke="currentColor" />
    <line x1="22" y1="68" x2="68" y2="68" stroke="currentColor" strokeDasharray="2 2" />
    <g>
      <line x1="28" y1="78" x2="28" y2="90" stroke="currentColor" />
      <line x1="31" y1="78" x2="31" y2="90" stroke="currentColor" strokeWidth="1.4" />
      <line x1="34" y1="78" x2="34" y2="90" stroke="currentColor" />
      <line x1="36" y1="78" x2="36" y2="90" stroke="currentColor" strokeWidth="1.4" />
      <line x1="39" y1="78" x2="39" y2="90" stroke="currentColor" />
    </g>
    <rect x="74" y="44" width="50" height="52" stroke="currentColor" fill="none" />
    <line x1="99" y1="44" x2="99" y2="96" stroke="currentColor" />
    <line x1="74" y1="56" x2="124" y2="56" stroke="currentColor" strokeDasharray="2 2" />
    <rect x="80" y="68" width="38" height="10" stroke="currentColor" fill="none" />
    <rect x="130" y="58" width="46" height="38" stroke="currentColor" fill="none" />
    <line x1="153" y1="58" x2="153" y2="96" stroke="currentColor" />
    <line x1="130" y1="68" x2="176" y2="68" stroke="currentColor" strokeDasharray="2 2" />
    <circle cx="153" cy="82" r="5" stroke="currentColor" fill="none" />
    <text x="153" y="84" textAnchor="middle" fill="currentColor" fontSize="6">SKU</text>
    <line x1="14" y1="96" x2="186" y2="96" stroke="currentColor" />
    <text x="100" y="115" textAnchor="middle" fill="currentColor" fontSize="7">INVENTORY</text>
  </g>
);

export const diagrams = {
  wellsite: Wellsite,
  banking:  Banking,
  cnc:      Cnc,
  inventory: Inventory,
};
