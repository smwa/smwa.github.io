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
  ----------------------------------------- */
  status: {
    rows: [
      { label: "Operator",       value: "Michael Smith" },
      { label: "Location",       value: "Oklahoma · CST" },
      { label: "Local time",     value: "{LOCAL_TIME}", style: "mono" },
      { label: "Shipping since", value: "2014" },
      { label: "Engineers",      value: "1" },
      { label: "Availability",   value: "Accepting work", led: "mint" },
      { label: "Response",       value: "Same business day" },
    ],
    foot: "0 layers between you and the engineer",
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

  /* ---------- Portfolio ---------- */
  portfolio: [
    {
      tag:   "INDUSTRIAL",
      title: "Edge PC for well-sites",
      year:  "2022",
      note:
        "Flogistix runs an industrial edge PC at each well-site. The hard part was never the " +
        "interface — it was that the fleet grew to roughly 2,000 remote sites on flaky cellular " +
        "and satellite links, maintained by a team small enough that nobody was going to drive " +
        "out to fix one. I built the front-end into that: React on AWS Greengrass and Docker " +
        "Compose, so a site pulls its own updates whenever it has a connection and keeps running " +
        "when it doesn't. Adding a site meant provisioning it, not visiting it.",
    },
    {
      tag:   "FINTECH",
      title: "Online banking platform",
      year:  "2023 — present",
      note:
        "Legacy Bank's SaaS provider set a shutdown date for the platform running both its " +
        "consumer and commercial online banking. That turned a replacement from a roadmap item " +
        "into a hard deadline: accounts, documents, and transfers all had to be live before the " +
        "old system went dark. I'm the backend engineer on the customer-facing web app, and " +
        "built the internal app that gives loan officers live status on active loans. Seven " +
        "months from start to cutover. We made the date.",
    },
    {
      tag:   "MEDICAL",
      title: "5-axis CNC laser mill",
      year:  "2022",
      note:
        "A special-purpose 5-axis laser mill for cutting custom-fit dental aligners — every part " +
        "a different shape, so the machine had to hold accuracy across all five axes at once " +
        "rather than repeat one motion well. Working alongside the mechanical and electrical " +
        "engineers, I wrote the controller software on LinuxCNC and tuned the motors.",
    },
  ],

  /* ---------- About ---------- */
  about: {
    portrait: {
      image:   "/assets/michael-smith.png",
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
    cards: [
      { kind: "calendar", title: "Book a call", body: "30 minutes. No prep needed.", primary: true,  cta: "→ Calendar" },
      { kind: "email",    title: "Email",       body: null, primary: true,  cta: "→ Compose"  },
      { kind: "github",   title: "GitHub",      body: null, primary: false, cta: "→ Open"     },
      { kind: "linkedin", title: "LinkedIn",    body: null, primary: false, cta: "→ Open"     },
    ],
  },

  /* ---------- Section headers ---------- */
  sections: {
    services:  { num: "01", label: "SERVICES",  title: "What I do." },
    about:     { num: "02", label: "ABOUT",     title: "One engineer." },
    portfolio: { num: "03", label: "PORTFOLIO", title: "Things I've built." },
    contact:   { num: "04", label: "CONTACT",   title: "Get in touch." },
  },

  /* ---------- Nav links ---------- */
  nav: [
    { href: "#services",  label: "SERVICES" },
    { href: "#about",     label: "ABOUT" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#contact",   label: "CONTACT →", cta: true },
  ],

  /* ---------- Footer ---------- */
  footer: {
    left:   "© {YEAR} Mechstack",
    middle: "Oklahoma",
  },
};
