// Using React from global CDN instead of ES6 import
const { useState, useMemo } = React;

// TDO Capital — React landing page with EN/ID localization + Formspree wiring
// Tailwind CSS utility classes are used for styling.
// TODOs you should change before launch:
// 1) CONTACT: Replace CONTACT_EMAIL, CONTACT_PHONE_ID, CONTACT_PHONE_US below.
// 2) FORMSPREE: Replace FORMSPREE_FORM_ID with your real Formspree ID (e.g., xkndlrjo).
//    Or swap to HubSpot — see onSubmit() for an example payload.
// 3) COMPLIANCE: Update disclosures to match your jurisdiction and licenses.

const CONTACT_EMAIL = "endi@tdo-capital.com"; // official email
const CONTACT_PHONE_ID = "+62 8119012888";      // Indonesian phone number
const CONTACT_PHONE_US = "+1 3018149421";       // US number (empty for now)
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID";     // TODO: set your Formspree form id

function TDOCapitalSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const t = useMemo(() => (lang === "id" ? ID : EN), [lang]);

  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.investments, href: "#investments" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.faqs, href: "#faqs" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-content-center font-bold group-hover:scale-105 transition">T</div>
              <div className="leading-tight">
                <div className="font-semibold text-slate-900">TDO Capital</div>
                <div className="text-xs text-slate-500">{t.tagline}</div>
              </div>
            </a>

            <nav className="hidden md:flex gap-6 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <LangToggle lang={lang} setLang={setLang} />
              <a href="#contact" className="px-3 py-2 rounded-xl border border-slate-300 hover:border-slate-900 hover:text-slate-900 text-slate-700 transition text-sm">{t.cta.book}</a>
              <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 transition text-sm">{t.cta.start}</a>
            </div>

            {/* Mobile */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.75 5.25h16.5v1.5H3.75zM3.75 11.25h16.5v1.5H3.75zM3.75 17.25h16.5v1.5H3.75z"/></svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-slate-700 hover:text-slate-900">
                  {item.label}
                </a>
              ))}
              <LangToggle lang={lang} setLang={setLang} />
              <a href="#contact" className="px-3 py-2 rounded-xl border border-slate-300 text-center">{t.cta.book}</a>
              <a href="#contact" className="px-3 py-2 rounded-xl bg-slate-900 text-white text-center">{t.cta.start}</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-100"/>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-100"/>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                {t.hero.titleA} <span className="underline decoration-8 decoration-indigo-200 underline-offset-8">{t.hero.titleB}</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                {t.hero.sub}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:opacity-90 transition">{t.cta.freeConsult}</a>
                <a href="#services" className="px-5 py-3 rounded-2xl border border-slate-300 hover:border-slate-900 hover:text-slate-900 transition">{t.cta.explore}</a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/> {t.hero.p1}</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-400"/> {t.hero.p2}</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-indigo-400"/> {t.hero.p3}</div>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 px-2 py-1 text-xs rounded-lg bg-indigo-600 text-white shadow">{t.badge.illustrative}</div>
                <h3 className="text-sm font-medium text-slate-500">{t.sample.alloc}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: t.sample.equities, w: 42 },
                    { label: t.sample.bonds, w: 28 },
                    { label: t.sample.gold, w: 15 },
                    { label: t.sample.cash, w: 10 },
                    { label: t.sample.alts, w: 5 },
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">{s.label}</span>
                        <span className="font-semibold text-slate-900">{s.w}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-100">
                        <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" style={{ width: `${s.w}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500">{t.sample.disclaimer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Trust bar */}
      <section className="py-10 border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-70">
            {[t.trust.risk, t.trust.research, t.trust.compliance, t.trust.analytics, t.trust.custody, t.trust.reporting].map((x, i) => (
              <div key={i} className="text-center text-sm">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{t.services.title}</h2>
            <p className="mt-3 text-slate-600">{t.services.sub}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.cards.map((s, i) => (
              <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white text-sm group-hover:scale-105 transition">{i+1}</span>
                </div>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"/>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investments */}
      <section id="investments" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{t.invest.title}</h2>
            <p className="mt-3 text-slate-600">{t.invest.sub}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.invest.assets.map((a, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm text-slate-500">{t.invest.assetClass}</div>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{a.name}</h3>
                <p className="mt-2 text-slate-600">{a.blurb}</p>
                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 w-3/4"/>
                </div>
                <a href="#contact" className="mt-4 inline-block text-indigo-700 hover:text-indigo-900 text-sm">{t.invest.talk} →</a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">{t.invest.disclaimer}</p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{t.process.title}</h2>
            <p className="mt-3 text-slate-600">{t.process.sub}</p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((s, idx) => (
              <li key={idx} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-content-center font-semibold shadow">{idx+1}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{t.about.title}</h2>
              <p className="mt-4 text-slate-600">{t.about.p1}</p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {t.about.metrics.map((m, i) => (
                  <li key={i} className="rounded-xl border border-slate-200 p-4">
                    <div className="text-slate-500">{m.k}</div>
                    <div className="text-xl font-semibold text-slate-900">{m.v}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-900">{t.about.why}</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {t.about.whyPoints.map((p, i) => (
                  <li key={i} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-indigo-500"/> {p}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">{t.about.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{t.faq.title}</h2>
            <p className="mt-3 text-slate-600">{t.faq.sub}</p>
          </div>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {t.faq.items.map((f, i) => (
              <details key={i} className="group p-6">
                <summary className="cursor-pointer list-none font-medium text-slate-900 flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 transition group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">{t.contact.title}</h2>
              <p className="mt-3 text-slate-300">{t.contact.sub}</p>
              <ul className="mt-8 space-y-3 text-slate-200 text-sm">
                <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-400"/> {CONTACT_EMAIL}</li>
                <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-400"/> {CONTACT_PHONE_ID} • {CONTACT_PHONE_US}</li>
                <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-indigo-400"/> Jakarta • Bandung • Remote</li>
              </ul>
              <p className="mt-6 text-xs text-slate-400">{t.contact.notice}</p>
            </div>
            <ContactForm lang={lang} t={t} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-semibold text-slate-900">TDO Capital</div>
              <p className="mt-2 text-slate-600">{t.footer.blurb}</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900">{t.footer.links}</div>
              <ul className="mt-2 space-y-2">
                {navItems.map((n) => (
                  <li key={n.href}><a href={n.href} className="text-slate-600 hover:text-slate-900">{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-900">{t.footer.comp}</div>
              <p className="mt-2 text-slate-600">{t.footer.disclosure}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div>© {new Date().getFullYear()} TDO Capital. {t.footer.rights}</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-700">{t.footer.privacy}</a>
              <a href="#" className="hover:text-slate-700">{t.footer.terms}</a>
              <a href="#" className="hover:text-slate-700">{t.footer.disclosures}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="flex items-center gap-1 text-xs">
      <button onClick={() => setLang("en")} className={`px-2 py-1 rounded-lg border ${lang === "en" ? "border-slate-900 text-slate-900" : "border-slate-300 text-slate-600"}`}>EN</button>
      <button onClick={() => setLang("id")} className={`px-2 py-1 rounded-lg border ${lang === "id" ? "border-slate-900 text-slate-900" : "border-slate-300 text-slate-600"}`}>ID</button>
    </div>
  );
}

function ContactForm({ lang, t }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    data.append("language", lang);

    try {
      // --- Option A: Formspree (simple, no backend). ---
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Submission failed");
      }

      // --- Option B (example): HubSpot Forms API
      // Replace with your portalId/formId. Send JSON payload to:
      // https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formId
      // const payload = { fields: [{ name: "email", value: data.get("email") }, ...] };
      // await fetch(HS_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white text-slate-800 p-6 border border-slate-200">
        <div className="text-lg font-semibold">{t.contact.thanksTitle}</div>
        <p className="mt-2 text-slate-600">{t.contact.thanksBody}</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 px-4 py-2 rounded-xl border border-slate-300 hover:border-slate-900 transition">{t.contact.sendAnother}</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 border border-slate-200">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="block text-sm text-slate-700">{t.form.name}</label>
          <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t.form.namePH} />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm text-slate-700">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="name@email.com" />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm text-slate-700">{t.form.phone}</label>
          <input name="phone" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t.form.phonePH} />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm text-slate-700">{t.form.interest}</label>
          <select name="interest" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            {t.form.interestOpts.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-slate-700">{t.form.message}</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder={t.form.messagePH} />
        </div>
      </div>
      <input type="hidden" name="meta_language" value={lang} />
      <button type="submit" disabled={loading} className="mt-6 w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-900 text-white hover:opacity-90 disabled:opacity-50 transition">
        {loading ? t.form.sending : t.form.submit}
      </button>
      {error && <p className="mt-3 text-xs text-rose-600">{error}</p>}
      <p className="mt-3 text-xs text-slate-500">{t.form.privacy}</p>
    </form>
  );
}

// ————— Translations —————
const EN = {
  tagline: "Management & Financial Services",
  nav: { services: "Services", investments: "Investments", process: "Process", about: "About", faqs: "FAQs", contact: "Contact" },
  cta: { book: "Book a call", start: "Get started", freeConsult: "Start with a free consult", explore: "Explore our services" },
  hero: {
    titleA: "Grow wealth with a",
    titleB: "trusted partner",
    sub: "TDO Capital helps individuals and institutions manage, protect, and grow assets across gold, stocks, mutual funds, and direct project investment. Tailored strategies. Transparent reporting. Risk-first thinking.",
    p1: "Fiduciary mindset",
    p2: "Risk-managed",
    p3: "Data-driven",
  },
  badge: { illustrative: "Illustrative" },
  sample: {
    alloc: "Sample Portfolio Allocation",
    equities: "Global Equities",
    bonds: "Government Bonds",
    gold: "Gold",
    cash: "Cash / MMF",
    alts: "Alternatives",
    disclaimer: "For demonstration only. Not investment advice. Allocations depend on your goals and risk tolerance.",
  },
  trust: { risk: "Risk", research: "Research", compliance: "Compliance", analytics: "Analytics", custody: "Custody", reporting: "Reporting" },
  services: {
    title: "Services",
    sub: "End-to-end management & financial services for individuals, families, and institutions.",
    cards: [
      { title: "Discretionary Portfolio Management", desc: "Goal-aligned mandates with risk budgeting, rebalancing, and tax awareness.", points: ["Multi-asset strategies", "Downside protection", "Quarterly reviews"] },
      { title: "Financial Planning", desc: "Holistic planning across cashflow, retirement, education, and estate coordination.", points: ["Goal mapping", "Stress tests", "Liquidity planning"] },
      { title: "Advisory on Direct Projects", desc: "Diligence, structuring, and monitoring for project investments.", points: ["Deal screening", "SPV & terms", "Ongoing oversight"] },
      { title: "Research & Strategy", desc: "Macro, thematic, and quantitative research to inform positioning.", points: ["Signals & models", "Scenario analysis", "Risk dashboards"] },
      { title: "Corporate Finance", desc: "Capital structuring, M&A support, and transaction services.", points: ["Valuation", "Debt advisory", "Investor materials"] },
      { title: "Reporting & Compliance", desc: "Clear, timely reporting aligned with regulatory requirements.", points: ["KPI reporting", "Audit support", "Policy frameworks"] },
    ],
  },
  invest: {
    title: "Investment Solutions",
    sub: "Access diversified options tailored to your objectives and risk tolerance.",
    assetClass: "Asset Class",
    talk: "Talk to an advisor",
    assets: [
      { name: "Gold", blurb: "Physical, ETFs, and savings plans with liquidity pathways." },
      { name: "Stocks", blurb: "Global equity exposure via ETFs and curated portfolios." },
      { name: "Mutual Funds", blurb: "Screened funds mapped to your mandate and fees." },
      { name: "Projects", blurb: "Direct co-investments with thorough diligence and monitoring." },
    ],
    disclaimer: "Investing involves risk, including possible loss of principal. Past performance is not indicative of future results.",
  },
  process: {
    title: "How we work",
    sub: "A clear, collaborative process designed to keep you informed at every step.",
    steps: [
      { title: "Discovery", text: "Understand goals, constraints, and timelines." },
      { title: "Plan", text: "Design strategy with scenarios and risk budget." },
      { title: "Implement", text: "Execute across chosen vehicles with best execution." },
      { title: "Monitor", text: "Ongoing oversight, rebalancing, and reporting." },
    ],
  },
  about: {
    title: "About TDO Capital",
    p1: "We are a management & financial services firm serving clients with transparent advice and disciplined execution. Our team blends experience in corporate finance, asset management, and project advisory. We believe in alignment, simplicity, and measurable outcomes.",
    metrics: [
      { k: "Years operating", v: "10+" },
      { k: "Clients served", v: "250+" },
      { k: "AUM / advised", v: "Confidential" },
      { k: "Avg. response", v: "< 24 hours" },
    ],
    why: "Why clients choose us",
    whyPoints: [
      "Fiduciary-aligned, fee-transparent approach",
      "Quant + fundamentals for balanced decisioning",
      "Institutional-grade risk management",
      "Clear reporting and human support",
    ],
    note: "Note: Regulatory registrations and licenses vary by jurisdiction. Please contact us for details.",
  },
  faq: {
    title: "FAQs",
    sub: "Quick answers to common questions.",
    items: [
      { q: "What is the minimum to get started?", a: "We tailor solutions from entry levels for new investors to bespoke mandates for larger accounts. Speak with us for current thresholds." },
      { q: "Where are assets held?", a: "Client assets are custodied with reputable third-party institutions. We do not take direct custody unless expressly arranged under applicable regulation." },
      { q: "Do you offer Sharia-compliant options?", a: "Yes. We can design portfolios aligned with specific ethical or Sharia screens." },
      { q: "How do fees work?", a: "Transparent fee schedules based on mandate, with no hidden charges. Performance fees may apply for certain strategies." },
    ],
  },
  contact: {
    title: "Let’s talk",
    sub: "Tell us about your goals. We’ll reply within one business day.",
    thanksTitle: "Thanks — we received your message.",
    thanksBody: "An advisor will reach out within one business day.",
    sendAnother: "Send another",
    notice: "By submitting, you agree to our Terms and acknowledge our Privacy Policy.",
  },
  form: {
    name: "Full name",
    namePH: "Your name",
    phone: "Phone",
    phonePH: "Optional",
    interest: "Interested in",
    interestOpts: ["Portfolio Management", "Financial Planning", "Gold", "Stocks / ETFs", "Mutual Funds", "Project Investment", "Corporate Finance"],
    message: "Message",
    messagePH: "Tell us about your goals",
    submitting: "Sending…",
    sending: "Sending…",
    submit: "Send message",
    privacy: "We respect your privacy. Your information is used only to contact you about your inquiry.",
  },
  footer: {
    blurb: "Management & Financial Services • Investing in gold, stocks, mutual funds, and projects.",
    links: "Quick links",
    comp: "Compliance",
    disclosure: "This site is for informational purposes only and does not constitute investment advice or an offer to buy/sell any security. Investing involves risk. Past performance is not a guarantee of future results. Jurisdictional limitations may apply.",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    disclosures: "Disclosures",
  },
};

const ID = {
  tagline: "Jasa Manajemen & Keuangan",
  nav: { services: "Layanan", investments: "Investasi", process: "Proses", about: "Tentang", faqs: "Tanya Jawab", contact: "Kontak" },
  cta: { book: "Jadwalkan panggilan", start: "Mulai sekarang", freeConsult: "Konsultasi gratis", explore: "Lihat layanan" },
  hero: {
    titleA: "Kembangkan aset dengan",
    titleB: "mitra tepercaya",
    sub: "TDO Capital membantu individu dan institusi mengelola, melindungi, dan menumbuhkan aset di emas, saham, reksa dana, dan investasi langsung ke proyek. Strategi yang disesuaikan. Laporan transparan. Mengutamakan manajemen risiko.",
    p1: "Berpihak pada klien",
    p2: "Terukur risikonya",
    p3: "Berbasis data",
  },
  badge: { illustrative: "Ilustrasi" },
  sample: {
    alloc: "Contoh Alokasi Portofolio",
    equities: "Saham Global",
    bonds: "Obligasi Pemerintah",
    gold: "Emas",
    cash: "Kas / RDN",
    alts: "Alternatif",
    disclaimer: "Hanya untuk ilustrasi. Bukan nasihat investasi. Alokasi tergantung pada tujuan dan profil risiko Anda.",
  },
  trust: { risk: "Manajemen Risiko", research: "Riset", compliance: "Kepatuhan", analytics: "Analitik", custody: "Kustodian", reporting: "Pelaporan" },
  services: {
    title: "Layanan",
    sub: "Layanan manajemen & keuangan menyeluruh untuk individu, keluarga, dan institusi.",
    cards: [
      { title: "Pengelolaan Portofolio Diskresioner", desc: "Mandat selaras tujuan dengan penganggaran risiko, rebalancing, dan kesadaran pajak.", points: ["Multi-aset", "Proteksi penurunan", "Review triwulanan"] },
      { title: "Perencanaan Keuangan", desc: "Perencanaan menyeluruh: arus kas, pensiun, pendidikan, dan koordinasi waris.", points: ["Pemetaan tujuan", "Uji skenario", "Perencanaan likuiditas"] },
      { title: "Advisori Investasi Proyek", desc: "Uji tuntas, struktur, dan monitoring untuk investasi proyek langsung.", points: ["Penyaringan deal", "SPV & ketentuan", "Pengawasan berkelanjutan"] },
      { title: "Riset & Strategi", desc: "Riset makro, tematik, dan kuantitatif untuk mendukung penentuan posisi.", points: ["Sinyal & model", "Analisis skenario", "Dasbor risiko"] },
      { title: "Keuangan Korporat", desc: "Struktur permodalan, dukungan M&A, dan jasa transaksi.", points: ["Valuasi", "Advisori utang", "Material investor"] },
      { title: "Pelaporan & Kepatuhan", desc: "Pelaporan jelas dan tepat waktu sesuai regulasi.", points: ["Pelaporan KPI", "Dukungan audit", "Kerangka kebijakan"] },
    ],
  },
  invest: {
    title: "Solusi Investasi",
    sub: "Akses opsi terdiversifikasi sesuai tujuan dan profil risiko Anda.",
    assetClass: "Kelas Aset",
    talk: "Bicara dengan penasihat",
    assets: [
      { name: "Emas", blurb: "Fisik, ETF, dan tabungan emas dengan opsi likuiditas." },
      { name: "Saham", blurb: "Eksposur ekuitas global melalui ETF dan portofolio terkurasi." },
      { name: "Reksa Dana", blurb: "Pemilihan reksa dana sesuai mandat dan biaya Anda." },
      { name: "Proyek", blurb: "Co-invest langsung dengan uji tuntas dan monitoring menyeluruh." },
    ],
    disclaimer: "Investasi mengandung risiko termasuk potensi kehilangan pokok. Kinerja historis tidak menjamin hasil di masa depan.",
  },
  process: {
    title: "Cara kami bekerja",
    sub: "Proses kolaboratif dan transparan agar Anda selalu terinformasi.",
    steps: [
      { title: "Discovery", text: "Memahami tujuan, batasan, dan timeline." },
      { title: "Perencanaan", text: "Mendesain strategi dengan skenario dan anggaran risiko." },
      { title: "Implementasi", text: "Eksekusi pada instrumen pilihan dengan best execution." },
      { title: "Monitoring", text: "Pengawasan berkelanjutan, rebalancing, dan pelaporan." },
    ],
  },
  about: {
    title: "Tentang TDO Capital",
    p1: "Kami adalah firma jasa manajemen & keuangan yang melayani klien dengan nasihat transparan dan eksekusi disiplin. Tim kami memadukan pengalaman keuangan korporat, manajemen aset, dan advisori proyek. Kami menekankan alignment, kesederhanaan, dan hasil terukur.",
    metrics: [
      { k: "Tahun beroperasi", v: "10+" },
      { k: "Klien dilayani", v: "250+" },
      { k: "AUM / advised", v: "Rahasia" },
      { k: "Respon rata-rata", v: "< 24 jam" },
    ],
    why: "Mengapa memilih kami",
    whyPoints: [
      "Berorientasi fiduciary, biaya transparan",
      "Kombinasi kuantitatif & fundamental",
      "Manajemen risiko setara institusi",
      "Laporan jelas dan dukungan manusia",
    ],
    note: "Catatan: Registrasi dan perizinan regulasi berbeda per yurisdiksi. Hubungi kami untuk detail.",
  },
  faq: {
    title: "Tanya Jawab",
    sub: "Jawaban cepat untuk pertanyaan umum.",
    items: [
      { q: "Berapa minimum untuk mulai?", a: "Kami menyesuaikan solusi dari level awal hingga mandat khusus untuk akun besar. Hubungi kami untuk ambang saat ini." },
      { q: "Di mana aset disimpan?", a: "Aset klien disimpan di institusi kustodian pihak ketiga terkemuka. Kami tidak memegang kustodi langsung kecuali diatur sesuai regulasi yang berlaku." },
      { q: "Apakah tersedia opsi syariah?", a: "Ya. Kami dapat merancang portofolio sesuai filter etika atau syariah tertentu." },
      { q: "Bagaimana struktur biaya?", a: "Biaya transparan berdasarkan mandat, tanpa biaya tersembunyi. Biaya kinerja dapat berlaku untuk strategi tertentu." },
    ],
  },
  contact: {
    title: "Hubungi kami",
    sub: "Ceritakan tujuan Anda. Kami akan membalas dalam satu hari kerja.",
    thanksTitle: "Terima kasih — pesan Anda sudah kami terima.",
    thanksBody: "Penasihat kami akan menghubungi dalam satu hari kerja.",
    sendAnother: "Kirim lagi",
    notice: "Dengan mengirimkan formulir, Anda menyetujui Ketentuan dan memahami Kebijakan Privasi kami.",
  },
  form: {
    name: "Nama lengkap",
    namePH: "Nama Anda",
    phone: "Telepon",
    phonePH: "Opsional",
    interest: "Tertarik pada",
    interestOpts: ["Pengelolaan Portofolio", "Perencanaan Keuangan", "Emas", "Saham / ETF", "Reksa Dana", "Investasi Proyek", "Keuangan Korporat"],
    message: "Pesan",
    messagePH: "Ceritakan tujuan Anda",
    submitting: "Mengirim…",
    sending: "Mengirim…",
    submit: "Kirim pesan",
    privacy: "Kami menjaga privasi Anda. Informasi hanya digunakan untuk menindaklanjuti pertanyaan Anda.",
  },
  footer: {
    blurb: "Jasa Manajemen & Keuangan • Investasi emas, saham, reksa dana, dan proyek.",
    links: "Tautan cepat",
    comp: "Kepatuhan",
    disclosure: "Situs ini hanya untuk informasi dan bukan merupakan nasihat investasi atau penawaran untuk membeli/menjual sekuritas apa pun. Investasi mengandung risiko. Kinerja masa lalu tidak menjamin hasil di masa depan. Batas yurisdiksi dapat berlaku.",
    rights: "Hak cipta dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat Penggunaan",
    disclosures: "Pengungkapan",
  },
};
