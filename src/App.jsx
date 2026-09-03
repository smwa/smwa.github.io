/* ============================================================
   Mechstack — page layout (presentation only)
   Content lives in src/site.js.
   ============================================================ */
import React, { useState, useEffect } from "react";
import { site as S } from "./site.js";

/* ---------- atoms ---------- */
const Pill = ({ children, dim }) => (
  <span className={`ms-pill ${dim ? "dim" : ""}`}>{children}</span>
);

const Led = ({ on = true, color = "mint" }) => (
  <span className={`ms-led ${on ? "on" : ""} ms-led-${color}`} />
);

/* ---------- live-data helpers ----------
   `now` is null until the component mounts in the browser, so the
   prerendered HTML and the first client render agree (no hydration
   mismatch). The clock fills in on the first tick after mount.
----------------------------------------- */
function useNow() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function fmtClock(now) {
  if (!now) return "--:--:--";
  return now.toLocaleTimeString("en-US", {
    hour12: false,
    timeZone: S.brand.timezone,
  });
}

function resolveTokens(value, now) {
  if (typeof value !== "string") return value;
  return value.replace("{LOCAL_TIME}", fmtClock(now));
}

/* ---------- HERO ---------- */
function Hero() {
  const now = useNow();
  return (
    <section className="ms-hero">
      <div className="ms-grid-bg" />
      <div className="ms-hero-inner">
        <div className="ms-hero-left">
          <div className="ms-tape">
            <span>{fmtClock(now)} {S.brand.timezoneAbbr}</span>
            <span>{S.brand.location}</span>
          </div>

          <h1 className="ms-h1">
            <span className="amber">{S.brand.tagline1}</span><br />
            <span className="mint">{S.brand.tagline2}</span>
          </h1>
          <p className="ms-sub">{S.brand.subhead}</p>

          <div className="ms-cta-row">
            <a className="ms-btn primary" href={S.brand.calendar} target="_blank" rel="noopener">
              Book a 30-min call
            </a>
            <a className="ms-btn ghost" href={`mailto:${S.brand.email}`}>
              {S.brand.email}
            </a>
          </div>
        </div>

        <StatusPanel now={now} />
      </div>
    </section>
  );
}

function StatusPanel({ now }) {
  return (
    <div className="ms-panel-bezel">
      <div className="ms-panel-head">
        <div className="ms-panel-title">
          <Led />
          <span>STATUS</span>
        </div>
        <div className="ms-panel-sub">mechstack.dev / live</div>
      </div>

      <dl className="ms-status">
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

      <div className="ms-panel-foot">
        <span>{S.status.foot}</span>
      </div>
    </div>
  );
}

function StatusRow({ k, v, style = "", led }) {
  return (
    <div className="ms-status-row">
      <dt>{k}</dt>
      <dd className={style}>
        {led && <Led color={led} />}
        <span>{v}</span>
      </dd>
    </div>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const h = S.sections.services;
  return (
    <section className="ms-section" id="services">
      <SectionHead {...h} />
      <div className="ms-services">
        {S.services.map((s) => (
          <article key={s.code} className="ms-svc-card">
            <header>
              <span className="ms-svc-code">{s.code}</span>
              <h3>{s.title}</h3>
            </header>
            <p>{s.blurb}</p>
            <div className="ms-svc-stack">
              {s.stack.map((t) => <Pill key={t}>{t}</Pill>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
function Portfolio() {
  const h = S.sections.portfolio;
  return (
    <section className="ms-section" id="portfolio">
      <SectionHead {...h} />
      <ol className="ms-portfolio">
        {S.portfolio.map((it, i) => (
          <li key={i} className="ms-piece">
            <div className="ms-piece-meta">
              <span className="ms-piece-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ms-piece-tag">{it.tag}</span>
              <span className="ms-piece-year">{it.year}</span>
            </div>
            <div className="ms-piece-body">
              <h3>{it.title}</h3>
              <p>{it.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const h = S.sections.about;
  const a = S.about;
  const p = a.portrait;
  return (
    <section className="ms-section" id="about">
      <SectionHead {...h} />
      <div className={`ms-about ${p && p.image ? "with-portrait" : ""}`}>
        {p && p.image && (
          <aside className="ms-portrait">
            <div className="ms-portrait-frame">
              <img src={p.image} alt={p.alt} />
            </div>
            <figcaption className="ms-portrait-cap">
              <span className="ms-portrait-name">{p.name}</span>
              <span className="ms-portrait-role">{p.role}</span>
            </figcaption>
          </aside>
        )}
        <div className="ms-bio">
          {a.bio.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="ms-bio-side">
          <dl className="ms-side-list">
            {a.facts.map((f, i) => (
              <div key={i}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
          <div className="ms-stack">
            <div className="ms-stack-label">Stack</div>
            <div className="ms-stack-grid">
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
    <section className="ms-section" id="contact">
      <SectionHead {...h} />
      <div className="ms-contact-grid">
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
      className={`ms-contact-card ${card.primary ? "primary" : ""}`}
      href={link.href}
      {...(link.ext ? { target: "_blank", rel: "noopener" } : {})}
    >
      <h3>{card.title}</h3>
      <p>{link.body}</p>
      <span className="ms-cc-go">{card.cta}</span>
    </a>
  );
}

/* ---------- chrome ---------- */
function SectionHead({ num, label, title }) {
  return (
    <header className="ms-secthead">
      <div className="ms-secthead-meta">
        <span className="ms-secthead-num">{num}</span>
        <span className="ms-secthead-label">{label}</span>
      </div>
      <h2 className="ms-secthead-title">{title}</h2>
      <div className="ms-secthead-rule" />
    </header>
  );
}

function Nav() {
  return (
    <nav className="ms-nav">
      <a className="ms-nav-brand" href="#top">
        <img src="/assets/mechstack-logo.png" alt="" />
        <span>{S.brand.name}</span>
      </a>
      <ul>
        {S.nav.map((n) => (
          <li key={n.href} className={n.cta ? "ms-nav-cta-item" : ""}>
            <a href={n.href} className={n.cta ? "ms-nav-cta" : ""}>{n.label}</a>
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
    <footer className="ms-footer">
      <div className="ms-footer-row">
        <span suppressHydrationWarning>{left}</span>
        <span>{middle}</span>
        <span>
          <a href="/privacy-policy">Privacy Policy</a>
          {" · "}
          <a href={`mailto:${S.brand.email}`}>{S.brand.email}</a>
        </span>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
export function App() {
  return (
    <div className="ms-root" id="top">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
