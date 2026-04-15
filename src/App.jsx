
import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";

const defaultContent = {
  siteName: "NextdoorADU",
  website: "www.NextdoorADU.ca",
  heroTitle: "Turn Your Backyard Into Monthly Income",
  heroSubtitle:
    "Custom backyard homes, garden suites, and rental-ready ADUs designed for Ontario homeowners.",
  heroCtaPrimary: "Book a Free Consultation",
  heroCtaSecondary: "View Models",
  badge: "Niagara ADU Builder",
  aboutTitle: "Why homeowners choose NextdoorADU",
  aboutText:
    "We help property owners unlock value with smart, attractive accessory dwelling units that can create rental income, family space, or aging-in-place options.",
  modelsTitle: "Featured ADU Models",
  models: [
    {
      name: "The Maple",
      price: "Starting from $189,000",
      size: "1 Bed • 1 Bath • 540 sq ft",
      description:
        "Efficient layout designed for strong rental appeal and compact lots."
    },
    {
      name: "The Orchard",
      price: "Starting from $229,000",
      size: "2 Bed • 1 Bath • 720 sq ft",
      description:
        "A flexible family or rental layout with open living space and modern finishes."
    },
    {
      name: "The Canal",
      price: "Custom Pricing",
      size: "Custom footprint",
      description:
        "Built around your lot, your goals, and your municipal requirements."
    }
  ],
  roiTitle: "Why ADUs make sense",
  roiCards: [
    {
      title: "Monthly income",
      text: "Add a long-term rental suite to create recurring income potential."
    },
    {
      title: "Property value",
      text: "Well-designed backyard homes can improve utility and marketability."
    },
    {
      title: "Family flexibility",
      text: "Use an ADU for parents, adult children, guests, or a private office."
    }
  ],
  processTitle: "Simple process",
  process: [
    "Initial consultation and lot review",
    "Concept, layout, and pricing",
    "Permits and approvals",
    "Construction and installation",
    "Final handoff"
  ],
  testimonialQuote:
    "NextdoorADU helped us turn unused backyard space into a beautiful rental unit with a clear, simple process.",
  testimonialName: "Sample Homeowner",
  contactTitle: "Get your free ADU consultation",
  contactText:
    "Tell us about your property and goals. We’ll walk you through options, timelines, and next steps.",
  phone: "(905) 555-0123",
  email: "info@nextdooradu.ca",
  location: "Niagara Region, Ontario",
  footerText:
    "Backyard homes designed for real income, flexibility, and long-term value."
};

const labels = {
  siteName: "Site Name",
  website: "Website",
  heroTitle: "Hero Title",
  heroSubtitle: "Hero Subtitle",
  heroCtaPrimary: "Primary Button",
  heroCtaSecondary: "Secondary Button",
  badge: "Badge",
  aboutTitle: "About Title",
  aboutText: "About Text",
  modelsTitle: "Models Title",
  roiTitle: "Benefits Title",
  processTitle: "Process Title",
  testimonialQuote: "Testimonial Quote",
  testimonialName: "Testimonial Name",
  contactTitle: "Contact Title",
  contactText: "Contact Text",
  phone: "Phone",
  email: "Email",
  location: "Location",
  footerText: "Footer Text"
};

function LogoMark() {
  return (
    <div className="logoWrap">
      <div className="logoBadge">
        <div className="roof" />
        <div className="houseBody" />
      </div>
      <div>
        <div className="logoText">Nextdoor<span>ADU</span></div>
        <div className="logoSub">Backyard Homes</div>
      </div>
    </div>
  );
}

function BrandPanel() {
  return (
    <div className="card brandPanel">
      <div className="brandTop">
        <LogoMark />
        <div className="brandReady">Brand Ready</div>
      </div>
      <div className="brandGrid">
        <div className="miniCard">
          <div className="miniLabel">Primary</div>
          <div className="colorDots">
            <div className="dot navy" />
            <div className="dot blue" />
            <div className="dot light" />
          </div>
        </div>
        <div className="miniCard">
          <div className="miniLabel">Usage</div>
          <div className="miniValue">Website • Signs • Flyers</div>
        </div>
        <div className="miniCard">
          <div className="miniLabel">Style</div>
          <div className="miniValue">Modern • Local • Trustworthy</div>
        </div>
      </div>
    </div>
  );
}

function ModelIcon() {
  return (
    <div className="modelIconWrap">
      <div className="modelIconBox">
        <div className="modelRoof" />
        <div className="modelBody" />
      </div>
      <div className="modelLabel">Model Preview</div>
    </div>
  );
}

function Field({ label, value, onChange, multiline = false }) {
  return (
    <label className="field">
      <span>{label}</span>
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

export default function App() {
  const [content, setContent] = useState(defaultContent);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nextdooradu-content");
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("nextdooradu-content", JSON.stringify(content));
  }, [content]);

  const navItems = useMemo(() => [
    ["About", "#about"],
    ["Models", "#models"],
    ["Benefits", "#benefits"],
    ["Process", "#process"],
    ["Contact", "#contact"]
  ], []);

  const setField = (key, value) => setContent((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="page">
      <button className="editorButton" onClick={() => setEditorOpen(!editorOpen)}>
        {editorOpen ? "Close Editor" : "Edit Website"}
      </button>

      <header className="siteHeader">
        <div className="container headerInner">
          <LogoMark />
          <nav className="desktopNav">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
            <a className="btn primary small" href="#contact">{content.heroCtaPrimary}</a>
          </nav>
          <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <div className="mobileNav container">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroText">
            <div className="badge">{content.badge}</div>
            <h1>{content.heroTitle}</h1>
            <p>{content.heroSubtitle}</p>
            <div className="buttonRow">
              <a className="btn primary" href="#contact">{content.heroCtaPrimary}</a>
              <a className="btn ghost" href="#models">{content.heroCtaSecondary}</a>
            </div>
          </div>
          <div className="heroSide">
            <BrandPanel />
            <div className="card highlightGrid">
              <div className="highlight primaryCard">
                <div className="highlightTitle">Income potential</div>
                <div className="highlightText">Promote monthly income potential, added flexibility, and stronger use of your lot.</div>
              </div>
              <div className="highlight">
                <div className="highlightTitle">End-to-end process</div>
                <div className="highlightText">Consultation, design, permits, and build support in one streamlined system.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container aboutGrid">
          <div>
            <div className="sectionLabel">About</div>
            <h2>{content.aboutTitle}</h2>
            <p className="lead">{content.aboutText}</p>
          </div>
          <div className="card">
            <div className="cardTitle">What we help with</div>
            <ul className="checkList">
              <li>Rental income planning</li>
              <li>Family suite solutions</li>
              <li>Layout and model selection</li>
              <li>Permit and approval guidance</li>
              <li>Construction planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="models" className="section white">
        <div className="container">
          <div className="sectionLabel">Models</div>
          <h2>{content.modelsTitle}</h2>
          <div className="cardGrid">
            {content.models.map((model) => (
              <div className="card" key={model.name}>
                <div className="modelPreview">
                  <ModelIcon />
                </div>
                <div className="cardTitle">{model.name}</div>
                <div className="price">{model.price}</div>
                <div className="meta">{model.size}</div>
                <p>{model.description}</p>
                <a className="btn dark" href="#contact">Request Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="section soft">
        <div className="container">
          <div className="sectionLabel">Benefits</div>
          <h2>{content.roiTitle}</h2>
          <div className="cardGrid">
            {content.roiCards.map((card) => (
              <div className="card" key={card.title}>
                <div className="cardTitle">{card.title}</div>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="sectionLabel">Process</div>
          <h2>{content.processTitle}</h2>
          <div className="processGrid">
            {content.process.map((step, index) => (
              <div className="card stepCard" key={step}>
                <div className="stepNumber">Step {index + 1}</div>
                <div className="stepText">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quoteBlock">
        <div className="container quoteInner">
          <div className="quote">“{content.testimonialQuote}”</div>
          <div className="quoteName">{content.testimonialName}</div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contactGrid">
          <div>
            <div className="sectionLabel">Contact</div>
            <h2>{content.contactTitle}</h2>
            <p className="lead">{content.contactText}</p>
            <div className="contactList">
              <div>{content.phone}</div>
              <div>{content.email}</div>
              <div>{content.location}</div>
              <div>{content.website}</div>
            </div>
          </div>
          <div className="card">
            <div className="formGrid">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <input placeholder="Property Location" />
              <textarea placeholder="Tell us about your lot and goals" />
              <button className="btn primary">Send Inquiry</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="container footerInner">
          <div><strong>{content.siteName}</strong> — {content.footerText}</div>
          <div>{content.website}</div>
        </div>
      </footer>

      {editorOpen && (
        <aside className="editorPanel">
          <div className="editorHeader">
            <div className="cardTitle">Website Editor</div>
            <div className="editorSub">Edit text live. Changes save in the browser automatically.</div>
          </div>
          <div className="editorBody">
            {Object.keys(labels).map((key) => (
              <Field
                key={key}
                label={labels[key]}
                value={content[key]}
                onChange={(value) => setField(key, value)}
                multiline={["heroSubtitle","aboutText","testimonialQuote","contactText","footerText"].includes(key)}
              />
            ))}
            <button
              className="btn ghost resetBtn"
              onClick={() => {
                setContent(defaultContent);
                localStorage.setItem("nextdooradu-content", JSON.stringify(defaultContent));
              }}
            >
              Reset Content
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
