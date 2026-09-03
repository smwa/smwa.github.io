/* ============================================================
   Mechstack — Privacy Policy page
   ============================================================ */
import React from "react";
import { site as S } from "./site.js";

function Nav() {
  return (
    <nav className="ms-nav">
      <a className="ms-nav-brand" href="/">
        <img src="/assets/mechstack-logo.png" alt="" />
        <span>{S.brand.name}</span>
      </a>
      <ul>
        <li><a href="/#services">SERVICES</a></li>
        <li><a href="/#about">ABOUT</a></li>
        <li><a href="/#portfolio">PORTFOLIO</a></li>
        <li className="ms-nav-cta-item"><a href="/#contact" className="ms-nav-cta">CONTACT →</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ms-footer">
      <div className="ms-footer-row">
        <span suppressHydrationWarning>© {year} Mechstack</span>
        <span>Oklahoma</span>
        <span><a href={`mailto:${S.brand.email}`}>{S.brand.email}</a></span>
      </div>
    </footer>
  );
}

export function PrivacyPolicy() {
  const year = new Date().getFullYear();
  return (
    <div className="ms-root" id="top">
      <Nav />
      <main className="pp-main">
        <div className="pp-inner">
          <header className="pp-header">
            <div className="pp-eyebrow">Legal</div>
            <h1 className="pp-h1">Privacy Policy</h1>
            <p className="pp-meta">
              Mechstack · mechstack.dev · Last updated: <span suppressHydrationWarning>{year}</span>
            </p>
          </header>

          <section className="pp-section">
            <h2>1. Overview</h2>
            <p>
              Mechstack ("we", "us", or "our") operates{" "}
              <a href="https://mechstack.dev">mechstack.dev</a> (the "Site").
              This Privacy Policy explains what information we collect, how we use
              it, and your rights with respect to that information.
            </p>
            <p>
              By using the Site you agree to the practices described in this
              policy. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section className="pp-section">
            <h2>2. Information we collect</h2>
            <h3>Information you provide voluntarily</h3>
            <p>
              When you contact us — by email, the calendar booking link, or any
              other channel — you may provide your name, email address, company
              name, and any other details you choose to share. We collect only
              what you actively send us.
            </p>
            <h3>Information collected automatically</h3>
            <p>
              The Site is a static file hosted on GitHub Pages. We do not operate
              our own analytics service or set first-party tracking cookies.
              GitHub may collect standard server logs (IP address, browser
              user-agent, referrer, timestamps) in accordance with the{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Privacy Statement
              </a>
              .
            </p>
            <p>
              The calendar booking link points to Google Calendar. Google may
              collect information as described in the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="pp-section">
            <h2>3. How we use your information</h2>
            <p>We use information you provide only to:</p>
            <ul>
              <li>Respond to your inquiries and schedule work.</li>
              <li>Fulfill any contract or service engagement.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third
              parties. We do not use your information for advertising.
            </p>
          </section>

          <section className="pp-section">
            <h2>4. Data retention</h2>
            <p>
              We retain correspondence and project-related information for as long
              as necessary to fulfill the purpose for which it was collected or as
              required by law. Email you send us is stored by our email provider
              and deleted upon request.
            </p>
          </section>

          <section className="pp-section">
            <h2>5. Third-party services</h2>
            <p>The Site links to or embeds the following third-party services:</p>
            <ul>
              <li>
                <strong>GitHub Pages</strong> — static site hosting. See their{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Statement
                </a>
                .
              </li>
              <li>
                <strong>Google Calendar</strong> — appointment scheduling. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Google Fonts</strong> — font delivery (JetBrains Mono).
                See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
                .
              </li>
            </ul>
            <p>
              We are not responsible for the privacy practices of these third
              parties.
            </p>
          </section>

          <section className="pp-section">
            <h2>6. Cookies</h2>
            <p>
              The Site itself does not set cookies. Third-party services listed
              above may set their own cookies subject to their respective policies.
            </p>
          </section>

          <section className="pp-section">
            <h2>7. Children's privacy</h2>
            <p>
              The Site is not directed at children under 13. We do not knowingly
              collect personal information from children. If you believe a child
              has submitted information to us, contact us and we will delete it.
            </p>
          </section>

          <section className="pp-section">
            <h2>8. Your rights</h2>
            <p>
              Depending on your location you may have rights to access, correct,
              or request deletion of personal data we hold about you. To exercise
              any of these rights, contact us at{" "}
              <a href={`mailto:${S.brand.email}`}>{S.brand.email}</a>.
            </p>
          </section>

          <section className="pp-section">
            <h2>9. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Changes will be
              reflected by updating the "Last updated" date above. Continued use
              of the Site after changes constitutes acceptance of the revised
              policy.
            </p>
          </section>

          <section className="pp-section">
            <h2>10. Contact</h2>
            <p>
              Questions about this Privacy Policy? Reach us at{" "}
              <a href={`mailto:${S.brand.email}`}>{S.brand.email}</a>.
            </p>
            <p className="pp-back">
              <a href="/">← Back to mechstack.dev</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
