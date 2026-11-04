"use client";

import { FormEvent, useMemo, useState } from "react";

const categories = [
  { name: "Dress Materials", detail: "Unstitched sets & everyday edits", count: "01", style: "fabric" },
  { name: "Pakistani Suits", detail: "Prints, embroidery & lawn", count: "02", style: "suit" },
  { name: "Sarees", detail: "Classic drapes, modern palettes", count: "03", style: "saree" },
  { name: "Kurtis", detail: "Easy silhouettes for every day", count: "04", style: "kurti" },
  { name: "Ready-to-wear", detail: "Finished looks, made to move", count: "05", style: "ready" },
  { name: "Kidswear & more", detail: "Explore the wider edit", count: "06", style: "kids" },
];

const steps = [
  { number: "01", title: "Browse the edit", text: "Start with the categories your customers already ask for." },
  { number: "02", title: "Compare the details", text: "Review pack size, price basis, fabric and availability before you buy." },
  { number: "03", title: "Source with confidence", text: "Ask the team about current stock, dispatch and the right assortment." },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("All categories");
  const [submitted, setSubmitted] = useState(false);

  const visibleCategories = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return categories.filter((category) => {
      const matchesQuery =
        !normalized ||
        category.name.toLowerCase().includes(normalized) ||
        category.detail.toLowerCase().includes(normalized);
      const matchesFilter = active === "All categories" || category.name === active;
      return matchesQuery && matchesFilter;
    });
  }, [query, active]);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <div className="announcement">
        <span>WHOLESALE, WITH A LITTLE MORE CLARITY</span>
        <span className="announcement-right">A sourcing concept for independent retailers <span>✳</span></span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tantu Wholesale Studio home">
          <Mark />
          <span className="brand-wordmark">TANTU<span>WHOLESALE STUDIO</span></span>
        </a>
        <nav className={menuOpen ? "main-nav mobile-open" : "main-nav"} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#categories">Collections</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">Our approach</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE" : "MENU"}</button>
        <a className="header-cta" href="#inquiry">Wholesale enquiries <Arrow diagonal /></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="Model wearing an embroidered burgundy Indian suit in a textile studio" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light"><span className="eyebrow-dot" /> THE RETAILER’S SOURCING STUDIO</p>
          <h1 id="hero-title">Good finds.<br /><em>Better</em> business.</h1>
          <p className="hero-copy">Discover wholesale Indian fashion with the details your business needs to buy well and sell with confidence.</p>
          <div className="hero-actions">
            <a className="button button-cream" href="#categories">Explore collections <Arrow /></a>
            <a className="text-link light-link" href="#how-it-works">A clearer way to source <Arrow diagonal /></a>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-star">✳</span>
          <span>MADE FOR THE<br />INDEPENDENT RETAILER</span>
        </div>
        <div className="hero-bottom">
          <span>ETHNIC WEAR · WHOLESALE · INDIA</span>
          <span>01 — 06 <span className="hero-line" /></span>
        </div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="intro-label">
          <span className="section-index">01 / THE IDEA</span>
          <span className="vertical-note">A BETTER BUYING EXPERIENCE</span>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">FOR THE PEOPLE BEHIND THE RAILS</p>
          <h2>Stock that speaks to your customers.<br /><em>Details that speak to you.</em></h2>
          <div className="intro-bottom">
            <p>From boutique owners to growing online stores, sourcing should feel less like guesswork. Find the right category, understand the pack, and get the information you need before placing a wholesale order.</p>
            <a href="#how-it-works" className="round-link" aria-label="Learn how it works"><Arrow diagonal /></a>
          </div>
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="section-shell category-heading">
          <div>
            <span className="section-index">02 / THE COLLECTIONS</span>
            <h2>Find your next<br /><em>best seller.</em></h2>
          </div>
          <div className="category-tools">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                aria-label="Search clothing categories"
                placeholder="Search the edit"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <span className="search-hint">SEARCH</span>
            </label>
            <div className="filter-row" aria-label="Category filters">
              {["All categories", "Suit sets", "Everyday", "Occasion"].map((filter) => (
                <button
                  key={filter}
                  className={active === (filter === "All categories" ? "All categories" : filter === "Suit sets" ? "Pakistani Suits" : filter === "Everyday" ? "Kurtis" : "Sarees") ? "filter-chip active" : "filter-chip"}
                  onClick={() => setActive(filter === "All categories" ? "All categories" : filter === "Suit sets" ? "Pakistani Suits" : filter === "Everyday" ? "Kurtis" : "Sarees")}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="section-shell category-grid">
          {visibleCategories.map((category, index) => (
            <a
              className={"category-card card-" + category.style}
              href="#inquiry"
              key={category.name}
              style={{ animationDelay: (index * 45) + "ms" }}
            >
              <div className="card-art">
                <span className="card-count">COLLECTION {category.count}</span>
                <div className={"fabric-shape shape-" + category.style}>
                  <span />
                  <i />
                  <b />
                </div>
                <span className="art-caption">TANTU / WHOLESALE STUDIO</span>
              </div>
              <div className="card-info">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.detail}</p>
                </div>
                <span className="card-arrow"><Arrow diagonal /></span>
              </div>
            </a>
          ))}
          {visibleCategories.length === 0 && (
            <div className="no-results">No categories found. Try “sarees”, “suits” or “cotton”.</div>
          )}
        </div>
        <div className="section-shell category-foot">
          <span>THE RIGHT EDIT STARTS WITH THE RIGHT DETAILS.</span>
          <a href="#inquiry" className="text-link">Browse with our team <Arrow diagonal /></a>
        </div>
      </section>

      <section className="clarity-section" id="how-it-works">
        <div className="section-shell clarity-layout">
          <div className="clarity-heading">
            <span className="section-index">03 / SOURCING, SIMPLIFIED</span>
            <h2>Wholesale should<br />feel <em>straightforward.</em></h2>
            <p>Less back and forth. More of the information that helps you make a good buying decision.</p>
            <a href="#inquiry" className="button button-dark">Let’s talk wholesale <Arrow diagonal /></a>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <span className="step-mark">✳</span>
              </article>
            ))}
            <div className="clarity-footnote"><span className="small-star">✳</span> PACK DETAILS · PRICE BASIS · STOCK STATUS · DISPATCH</div>
          </div>
        </div>
      </section>

      <section className="catalog-note section-shell">
        <div className="catalog-symbol">T.</div>
        <div>
          <span className="section-index">A NOTE ON THIS PREVIEW</span>
          <h2>Your catalog,<br /><em>your terms.</em></h2>
        </div>
        <p>This storefront is ready to be connected to your real product range. Product prices, pack quantities, stock, shipping details and business contact information are intentionally not invented here.</p>
        <a href="#inquiry" className="text-link">Start with your catalog <Arrow diagonal /></a>
      </section>

      <section className="inquiry-section" id="inquiry">
        <div className="section-shell inquiry-layout">
          <div className="inquiry-copy">
            <span className="eyebrow light"><span className="eyebrow-dot" /> YOUR NEXT COLLECTION STARTS HERE</span>
            <h2>Let’s find the<br /><em>right fit.</em></h2>
            <p>Tell us a little about your store and what you’re looking to source. We’ll make the next step feel simple.</p>
            <div className="inquiry-aside"><span>✳</span> FOR BOUTIQUES · RESELLERS · RETAIL TEAMS</div>
          </div>
          <form className="inquiry-form" onSubmit={submitInquiry}>
            <span className="form-step">WHOLESALE ACCESS / ENQUIRY</span>
            <label>
              Your name
              <input required name="name" placeholder="How should we address you?" />
            </label>
            <label>
              Business email or phone
              <input required name="contact" placeholder="Where can our team reach you?" />
            </label>
            <label>
              What are you looking to source?
              <select name="interest" defaultValue="">
                <option value="" disabled>Select a category</option>
                <option>Dress materials</option>
                <option>Pakistani suits</option>
                <option>Sarees</option>
                <option>Kurtis</option>
                <option>Ready-to-wear</option>
                <option>Other / exploring</option>
              </select>
            </label>
            <button className="button button-cream form-submit" type="submit">
              Send an enquiry <Arrow diagonal />
            </button>
            {submitted && <p className="form-message" role="status">Thanks for your interest. This demo form is not connected to a sales inbox yet.</p>}
            <p className="form-privacy">By submitting, you agree to be contacted about your wholesale enquiry.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-top">
          <a className="brand footer-brand" href="#top">
            <Mark />
            <span className="brand-wordmark">TANTU<span>WHOLESALE STUDIO</span></span>
          </a>
          <p>Thoughtful sourcing<br />for independent retail.</p>
          <a href="#top" className="back-top">BACK TO TOP <span>↑</span></a>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2026 TANTU WHOLESALE STUDIO · STOREFRONT CONCEPT</span>
          <div><a href="#categories">Collections</a><a href="#how-it-works">How it works</a><a href="#inquiry">Enquiries</a></div>
          <span>BUILT FOR THE BUSINESS OF STYLE <span className="small-star">✳</span></span>
        </div>
      </footer>
    </main>
  );
}


