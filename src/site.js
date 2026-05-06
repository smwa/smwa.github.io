/* ============================================================
   Mechstack — site content
   ------------------------------------------------------------
   Edit this file to update the site. No JSX/CSS knowledge needed.
   Every visible string lives here.
   ============================================================ */

export const site = {

  /* ---------- Brand & contact ---------- */
  brand: {
    name:       "MECHSTACK",
    tagline1:   "Software,",          // hero headline, line 1 (amber)
    tagline2:   "crafted to fit.",    // hero headline, line 2 (mint)
    subhead:
      "Mechstack is a one-engineer shop. I build custom software, " +
      "integrate the tools you already use, and modernize older systems.",

    operator:   "Michael Smith",
    location:   "Oklahoma · USA",
    timezone:   "America/Chicago",
    timezoneAbbr: "CST",

    email:      "info@mechstack.dev",
    calendar:   "https://calendar.app.google/XdLCCQDtGfuNSXgh9",
    github:     "https://github.com/smwa",
    githubLabel:"github.com/smwa",
    linkedin:   "https://linkedin.com/in/michael-smith-ok",
    linkedinLabel: "michael-smith-ok",
  },

  /* ---------- Hero status panel ----------
     Tokens auto-fill from live data:
       "{LOCAL_TIME}"  → live clock (HH:MM:SS)
       "{UPTIME}"      → days + clock since `uptimeStart`
  ----------------------------------------- */
  status: {
    uptimeStart: "2021-01-01",
    rows: [
      { label: "Operator",      value: "Michael Smith" },
      { label: "Location",      value: "Oklahoma · CST" },
      { label: "Local time",    value: "{LOCAL_TIME}", style: "mono" },
      { label: "Uptime",        value: "{UPTIME}",     style: "mono dim" },
      { label: "Engineers",     value: "1" },
      { label: "Availability",  value: "Accepting work", led: "mint" },
      { label: "Response",      value: "Same business day" },
    ],
    foot: "// 0 layers between you and the engineer",
  },

  /* ---------- Services ---------- */
  services: [
    {
      code:  "01",
      title: "Custom development",
      blurb: "Web apps and internal tools, built to fit how you actually work.",
      stack: ["React", ".NET", "Python"],
    },
    {
      code:  "02",
      title: "Systems integration",
      blurb: "Connect the tools you already use. Stop retyping data between them.",
      stack: ["APIs", "Webhooks", "ETL"],
    },
    {
      code:  "03",
      title: "Modernization & consulting",
      blurb: "Modernize older systems and pay down technical debt without a full rewrite.",
      stack: ["Kubernetes", "Docker", "Linux", "Postgres"],
    },
  ],

  /* ---------- Work / case files ----------
     `diagram` picks which blueprint:
       "wellsite" | "banking" | "cnc" | "inventory"
  ----------------------------------------- */
  work: [
    {
      tag:     "INDUSTRIAL",
      title:   "Edge PC for well-sites",
      client:  "Flogistix",
      year:    "2022",
      note:
        "Front-end on an industrial edge PC. React + AWS Greengrass + Docker Compose. " +
        "Built to handle unreliable networks, sensors, and hardware across thousands of remote sites.",
      diagram: "wellsite",
    },
    {
      tag:     "FINTECH",
      title:   "Online banking platform",
      client:  "Legacy Bank",
      year:    "2023 — present",
      note:
        "Backend engineer for a customer-facing web app: account management, documents, transfers. " +
        "Plus an internal app giving loan officers up-to-date status on active loans.",
      diagram: "banking",
    },
    {
      tag:     "CNC",
      title:   "5-axis CNC laser mill",
      client:  "Mechstack",
      year:    "2022",
      note:
        "Worked with mechanical and electrical engineers on a special-purpose 5-axis laser mill. " +
        "LinuxCNC, steppers, microcontrollers.",
      diagram: "cnc",
    },
    {
      tag:     "RETAIL",
      title:   "Inventory management",
      client:  "Mechstack",
      year:    "2021",
      note:    "Inventory tooling for a large-scale device retailer.",
      diagram: "inventory",
    },
  ],

  /* ---------- About ---------- */
  about: {
    sectionTitle: "One engineer.",
    portrait: {
      image:   "/assets/headshot-placeholder.png",
      alt:     "Michael Smith — operator, Mechstack",
      name:    "MICHAEL SMITH",
      role:    "Operator · Engineer · Oklahoma",
    },
    bio: [
      "I'm Michael. Mechstack is one engineer — me.",
      "I've spent the last decade as a tech lead at Paycom, building industrial software at " +
      "Flogistix, and as the backend engineer on a customer banking platform at Legacy Bank. " +
      "On the side, I've built CNC tooling alongside mechanical engineers.",
      "When you hire Mechstack, you're talking to the person writing the code.",
    ],
    facts: [
      { label: "Based",     value: "Oklahoma" },
      { label: "Since",     value: "2014" },
      { label: "Education", value: "BS Computer Science · Oklahoma State · 2013" },
      { label: "",          value: "MS Management Information Systems · Oklahoma State · 2017" },
    ],
    stack: [
      "React", "Angular", ".NET", "ASP.NET",
      "Python", "Django", "Flask", "PHP", "PostgreSQL",
      "MariaDB", "Oracle", "Elasticsearch", "Kubernetes",
      "Docker", "Linux", "LinuxCNC",
    ],
  },

  /* ---------- Contact cards ---------- */
  contact: {
    sectionTitle: "Get in touch.",
    cards: [
      { kind: "calendar", title: "Book a call", body: "30 minutes. No prep needed.", primary: true,  cta: "→ Calendar" },
      { kind: "email",    title: "Email",       body: null, primary: true,  cta: "→ Compose"  },
      { kind: "github",   title: "GitHub",      body: null, primary: false, cta: "→ Open"     },
      { kind: "linkedin", title: "LinkedIn",    body: null, primary: false, cta: "→ Open"     },
    ],
  },

  /* ---------- Section headers ---------- */
  sections: {
    services: { num: "01", label: "SERVICES", title: "What I do." },
    about:    { num: "02", label: "ABOUT",    title: "One engineer." },
    work:     { num: "03", label: "WORK",     title: "Things I've built." },
    contact:  { num: "04", label: "CONTACT",  title: "Get in touch." },
  },

  /* ---------- Nav links ---------- */
  nav: [
    { href: "#services", label: "SERVICES" },
    { href: "#about",    label: "ABOUT" },
    { href: "#work",     label: "WORK" },
    { href: "#contact",  label: "CONTACT →", cta: true },
  ],

  /* ---------- Footer ---------- */
  footer: {
    left:   "© {YEAR} Mechstack",
    middle: "// Oklahoma",
  },
};
