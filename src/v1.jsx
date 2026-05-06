/* ============================================================
   Mechstack — V1 layout (presentation only)
   Content lives in src/site.js. Diagrams in src/diagrams.jsx.
   ============================================================ */
import React, { useState, useEffect } from "react";
import { site as S } from "./site.js";
import { diagrams as DIAGRAMS } from "./diagrams.jsx";

/* ---------- atoms ---------- */
const Pill = ({ children, dim }) => (
  <span className={`v1-pill ${dim ? "dim" : ""}`}>{children}</span>
);

const Led = ({ on = true, color = "mint" }) => (
  <span className={`v1-led ${on ? "on" : ""} v1-led-${color}`} />
);

/* ---------- live-data helpers ---------- */
function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function fmtClock(now) {
  return now.toLocaleTimeString("en-US", {
    hour12: false,
    timeZone: S.brand.timezone,
  });
}

function fmtUptime(now, startISO) {
  const start = new Date(startISO).getTime();
  const ms = now.getTime() - start;
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d}d ${pad(h)}:${pad(m)}:${pad(s)}`;
}

function resolveTokens(value, now) {
  if (typeof value !== "string") return value;
  return value
    .replace("{LOCAL_TIME}", fmtClock(now))
    .replace("{UPTIME}",     fmtUptime(now, S.status.uptimeStart))
    .replace("{YEAR}",       String(now.getFullYear()));
}

/* ---------- HERO ---------- */
function Hero() {
  const now = useNow();
  return (
    <section className="v1-hero">
      <div className="v1-grid-bg" />
      <div className="v1-hero-inner">
        <div className="v1-hero-left">
          <div className="v1-tape">
            <span>// {fmtClock(now)} {S.brand.timezoneAbbr}</span>
            <span>{S.brand.location}</span>
          </div>

          <h1 className="v1-h1">
            <span className="amber">{S.brand.tagline1}</span><br />
            <span className="mint">{S.brand.tagline2}</span>
          </h1>
          <p className="v1-sub">{S.brand.subhead}</p>

          <div className="v1-cta-row">
            <a className="v1-btn primary" href={S.brand.calendar} target="_blank" rel="noopener">
              Book a 30-min call
            </a>
            <a className="v1-btn ghost" href={`mailto:${S.brand.email}`}>
              {S.brand.email}
            </a>
          </div>
        </div>

        <StatusPanel now={now} />
      </div>

      <CornerMark pos="tl" /><CornerMark pos="tr" />
      <CornerMark pos="bl" /><CornerMark pos="br" />
    </section>
  );
}

function StatusPanel({ now }) {
  return (
    <div className="v1-panel">
      <div className="v1-panel-bezel">
        <div className="v1-panel-screws"><i /><i /><i /><i /></div>

        <div className="v1-panel-head">
          <div className="v1-panel-title">
            <Led />
            <span>STATUS</span>
          </div>
          <div className="v1-panel-sub">mechstack.dev / live</div>
        </div>

        <dl className="v1-status">
          {S.status.rows.map((row, i) => (
            <StatusRow
              key={i}
              k={row.label}
              v={resolveTokens(row.value, now)}
              style={row.style}
              led={row.led}
            />
          ))}
        </dl>

        <div className="v1-panel-foot">
          <span>{S.status.foot}</span>
        </div>
      </div>
    </div>
  );
}

function StatusRow({ k, v, style = "", led }) {
  return (
    <div className="v1-status-row">
      <dt>{k}</dt>
      <dd className={style}>
        {led && <Led color={led} />}
        <span>{v}</span>
      </dd>
    </div>
  );
}

function CornerMark({ pos }) {
  return <span className={`v1-corner v1-corner-${pos}`} aria-hidden />;
}

/* ---------- SERVICES ---------- */
function Services() {
  const h = S.sections.services;
  return (
    <section className="v1-section" id="services">
      <SectionHead {...h} />
      <div className="v1-services">
        {S.services.map((s) => (
          <article key={s.code} className="v1-svc-card">
            <header>
              <span className="v1-svc-code">{s.code}</span>
              <h3>{s.title}</h3>
            </header>
            <p>{s.blurb}</p>
            <div className="v1-svc-stack">
              {s.stack.map((t) => <Pill key={t}>{t}</Pill>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- WORK ---------- */
function Work() {
  const [active, setActive] = useState(0);
  const w = S.work[active];
  const h = S.sections.work;
  return (
    <section className="v1-section" id="work">
      <SectionHead {...h} />
      <div className="v1-work">
        <ul className="v1-work-list">
          {S.work.map((it, i) => (
            <li key={i}>
              <button
                className={`v1-work-row ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="v1-work-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="v1-work-title">{it.title}</span>
                <span className="v1-work-tag">{it.tag}</span>
                <span className="v1-work-year">{it.year}</span>
              </button>
            </li>
          ))}
        </ul>
        <aside className="v1-work-detail">
          <div className="v1-work-tape">
            / {String(active + 1).padStart(2, "0")} · {w.tag}
          </div>
          <h3 className="v1-work-h">{w.title}</h3>
          <div className="v1-work-meta">
            <span><b>Client</b> {w.client}</span>
            <span><b>Year</b> {w.year}</span>
          </div>
          <p className="v1-work-note">{w.note}</p>
          <Blueprint diagram={w.diagram} />
        </aside>
      </div>
    </section>
  );
}

function Blueprint({ diagram }) {
  const Render = DIAGRAMS[diagram];
  return (
    <svg viewBox="0 0 200 130" className="v1-blueprint">
      <defs>
        <pattern id="bp" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0 L0 0 0 10" fill="none" stroke="rgba(0,255,170,.08)" strokeWidth=".5" />
        </pattern>
      </defs>
      <rect width="200" height="130" fill="url(#bp)" />
      {Render && <Render />}
    </svg>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const h = S.sections.about;
  const a = S.about;
  const p = a.portrait;
  return (
    <section className="v1-section" id="about">
      <SectionHead {...h} />
      <div className={`v1-about ${p && p.image ? "with-portrait" : ""}`}>
        {p && p.image && (
          <aside className="v1-portrait">
            <div className="v1-portrait-frame">
              <img src={p.image} alt={p.alt} />
            </div>
            <figcaption className="v1-portrait-cap">
              <span className="v1-portrait-name">{p.name}</span>
              <span className="v1-portrait-role">{p.role}</span>
            </figcaption>
          </aside>
        )}
        <div className="v1-bio">
          {a.bio.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="v1-bio-side">
          <dl className="v1-side-list">
            {a.facts.map((f, i) => (
              <div key={i}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
          <div className="v1-stack">
            <div className="v1-stack-label">// Stack</div>
            <div className="v1-stack-grid">
              {a.stack.map((s) => <Pill key={s} dim>{s}</Pill>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const h = S.sections.contact;
  return (
    <section className="v1-section v1-contact" id="contact">
      <SectionHead {...h} />
      <div className="v1-contact-grid">
        {S.contact.cards.map((c, i) => (
          <ContactCard key={i} card={c} />
        ))}
      </div>
    </section>
  );
}

function ContactCard({ card }) {
  const b = S.brand;
  const map = {
    calendar: { href: b.calendar,           body: card.body, ext: true },
    email:    { href: `mailto:${b.email}`,  body: card.body || b.email },
    github:   { href: b.github,             body: card.body || b.githubLabel,    ext: true },
    linkedin: { href: b.linkedin,           body: card.body || b.linkedinLabel,  ext: true },
  };
  const link = map[card.kind] || { href: "#", body: card.body };
  return (
    <a
      className={`v1-contact-card ${card.primary ? "primary" : ""}`}
      href={link.href}
      {...(link.ext ? { target: "_blank", rel: "noopener" } : {})}
    >
      <h3>{card.title}</h3>
      <p>{link.body}</p>
      <span className="v1-cc-go">{card.cta}</span>
    </a>
  );
}

/* ---------- chrome ---------- */
function SectionHead({ num, label, title }) {
  return (
    <header className="v1-secthead">
      <div className="v1-secthead-meta">
        <span className="v1-secthead-num">/ {num}</span>
        <span className="v1-secthead-label">{label}</span>
      </div>
      <h2 className="v1-secthead-title">{title}</h2>
      <div className="v1-secthead-rule" />
    </header>
  );
}

function Nav() {
  return (
    <nav className="v1-nav">
      <a className="v1-nav-brand" href="#top">
        <img src="/assets/mechstack-logo.png" alt="" />
        <span>{S.brand.name}</span>
      </a>
      <ul>
        {S.nav.map((n) => (
          <li key={n.href}>
            <a href={n.href} className={n.cta ? "v1-nav-cta" : ""}>{n.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  const f = S.footer;
  const year = new Date().getFullYear();
  const left   = (f.left   || "").replace("{YEAR}", year);
  const middle = (f.middle || "").replace("{YEAR}", year);
  return (
    <footer className="v1-footer">
      <div className="v1-footer-row">
        <span>{left}</span>
        <span>{middle}</span>
        <span><a href={`mailto:${S.brand.email}`}>{S.brand.email}</a></span>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
export function App() {
  return (
    <div className="v1-root" id="top">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
