import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import ContactForm from "@/components/home-page/contact-details/NewContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaArrowRight, FaCheckCircle, FaChevronRight, FaHome, FaQuoteLeft, FaWhatsapp } from "react-icons/fa";

const SITE_URL = "https://www.tacticsdigitalagency.net";
const PILLAR_PATH = "/blogs/best-marketing-agency-in-egypt";
const DEFAULT_PARENT = { path: PILLAR_PATH, label: "Marketing Agency Guide" };

function getParent(article) {
  if (article.isPillar) return null;
  return article.parent || DEFAULT_PARENT;
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function schemaFor(article) {
  const parent = getParent(article);
  const crumbs = [
    ["Home", SITE_URL],
    ["Blogs", `${SITE_URL}/blogs`],
    ...(parent ? [[parent.label, `${SITE_URL}${parent.path}`]] : []),
    [article.breadcrumbLabel, article.canonical],
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${article.canonical}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": article.canonical },
        headline: article.h1,
        description: article.metaDescription,
        image: { "@type": "ImageObject", url: `${SITE_URL}${article.image}`, width: 1200, height: 630 },
        author: { "@type": "Organization", name: "Tactics Editor Team", url: `${SITE_URL}/about-us`, logo: `${SITE_URL}/tactics-editor-avatar.png` },
        publisher: { "@type": "Organization", name: "Tactics Digital Agency", url: SITE_URL },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "en-EG",
        articleSection: article.category,
        keywords: article.keywords,
        isPartOf: article.isPillar ? { "@type": "Blog", "@id": `${SITE_URL}/blogs` } : { "@type": "BlogPosting", "@id": `${SITE_URL}${(article.parent || DEFAULT_PARENT).path}#article` },
        about: article.entities.map((name) => ({ "@type": "Thing", name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map(([name, item], index) => ({ "@type": "ListItem", position: index + 1, name, item })),
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
      },
    ],
  };
}

function normalizeHref(href) {
  return href === "/contact" ? "#contact" : href;
}

function RichParagraph({ parts }) {
  return (
    <p className="text-gray-300 leading-8 mb-5">
      {parts.map((part, i) =>
        typeof part === "string" ? part : (
          <Link key={`${part.href}-${i}`} href={normalizeHref(part.href)} className="text-[rgb(255,228,0)] underline underline-offset-4 decoration-[rgb(255,228,0)]/40 hover:decoration-[rgb(255,228,0)]">
            {part.label}
          </Link>
        ),
      )}
    </p>
  );
}

function Table({ table }) {
  if (!table) return null;
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-800 bg-neutral-900/70 my-7">
      <table className="w-full min-w-[680px] text-left">
        <thead className="bg-neutral-900"><tr>{table.headers.map((h) => <th key={h} className="px-5 py-4 text-sm font-semibold text-[rgb(255,228,0)] border-b border-gray-800">{h}</th>)}</tr></thead>
        <tbody>{table.rows.map((row, r) => <tr key={r} className="border-b border-gray-800/70 last:border-b-0">{row.map((cell, c) => <td key={c} className="px-5 py-4 align-top text-sm leading-6 text-gray-300">{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function Section({ s }) {
  return (
    <section id={s.id} className="scroll-mt-32 mb-14">
      <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{s.title}</h2>
      {s.quickNote && <div className="border-l-4 border-[rgb(255,228,0)] bg-[rgb(255,228,0)]/5 p-5 mb-7 rounded-r-xl"><p className="text-gray-200 leading-7">{s.quickNote}</p></div>}
      {s.paragraphs?.map((p, i) => <p key={i} className="text-gray-300 leading-8 mb-5">{p}</p>)}
      {s.richParagraphs?.map((p, i) => <RichParagraph key={i} parts={p} />)}
      {s.bullets?.length > 0 && <ul className="space-y-3 mb-7">{s.bullets.map((b) => <li key={b} className="flex items-start gap-3 text-gray-300 leading-7"><FaCheckCircle className="text-[rgb(255,228,0)] mt-1.5 shrink-0" /><span>{b}</span></li>)}</ul>}
      {s.steps?.length > 0 && <div className="grid gap-4 my-7">{s.steps.map((step, i) => <div key={step.title} className="bg-neutral-900 border border-gray-800 rounded-xl p-6"><div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-[rgb(255,228,0)] text-black font-bold flex items-center justify-center shrink-0">{String(i + 1).padStart(2, "0")}</div><div><h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3><p className="text-gray-400 leading-7">{step.text}</p></div></div></div>)}</div>}
      {s.cards?.length > 0 && <div className="grid md:grid-cols-2 gap-5 my-7">{s.cards.map((card) => <div key={card.title} className="bg-neutral-900 border border-gray-800 rounded-xl p-6"><h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3><p className="text-gray-400 leading-7">{card.text}</p>{card.bestFor && <p className="text-sm text-[rgb(255,228,0)] mt-4">Best for: {card.bestFor}</p>}</div>)}</div>}
      <Table table={s.table} />
      {s.callout && <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 my-7"><p className="text-gray-200 leading-8">{s.callout}</p></div>}
    </section>
  );
}

export default function EnhancedSeoArticle({ article }) {
  const parent = getParent(article);
  return (
    <>
      <JsonLd data={schemaFor(article)} />
      <div className="bg-neutral-950 min-h-screen text-gray-200 font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
        <Navbar />
        <header className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-gray-800 overflow-hidden bg-neutral-900">
          <div className="absolute inset-0 opacity-30"><Image src={article.image} alt={article.imageAlt} fill className="object-cover" priority sizes="100vw" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-900/80" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-[rgb(255,228,0)] flex items-center gap-1"><FaHome /> Home</Link><FaChevronRight className="text-xs text-gray-600" />
              <Link href="/blogs" className="hover:text-[rgb(255,228,0)]">Blogs</Link>
              {parent && <><FaChevronRight className="text-xs text-gray-600" /><Link href={parent.path} className="hover:text-[rgb(255,228,0)]">{parent.label}</Link></>}
              <FaChevronRight className="text-xs text-gray-600" /><span className="text-gray-300">{article.breadcrumbLabel}</span>
            </nav>
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-[rgb(255,228,0)]/30 bg-[rgb(255,228,0)]/10 px-4 py-1 text-sm font-medium text-[rgb(255,228,0)] mb-5">{article.category}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{article.h1}</h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-8 mb-6">{article.heroSummary}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400"><span>Updated: {formatDate(article.dateModified)}</span><span>{article.readTime}</span><span className="inline-flex items-center gap-2"><Image src="/tactics-editor-avatar.png" alt="Tactics Editor Team" width={28} height={28} className="rounded-full border border-gray-700" />By Tactics Editor Team</span></div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 max-w-7xl mx-auto">
            <article className="min-w-0">
              <section id="quick-answer" className="scroll-mt-32 mb-14 bg-[rgb(255,228,0)]/5 border border-[rgb(255,228,0)]/25 rounded-2xl p-7 lg:p-8">
                <p className="uppercase tracking-[0.18em] text-xs font-semibold text-[rgb(255,228,0)] mb-3">Quick answer</p><p className="text-xl text-white leading-8 mb-5">{article.quickAnswer}</p>
                <div className="grid sm:grid-cols-2 gap-3">{article.takeaways.map((item) => <div key={item} className="flex items-start gap-3 bg-neutral-950/50 rounded-lg p-4"><FaCheckCircle className="text-[rgb(255,228,0)] mt-1 shrink-0" /><span className="text-sm leading-6 text-gray-300">{item}</span></div>)}</div>
              </section>
              {article.sections.map((s) => <Section key={s.id} s={s} />)}
              {article.projects?.length > 0 && <section id="projects" className="scroll-mt-32 mb-14"><h2 className="text-3xl font-bold text-white mb-3">Selected Tactics projects & client work</h2><p className="text-gray-400 leading-7 mb-7">Only scopes supported by published first-party testimonials are shown here. We do not invent case-study numbers.</p><div className="grid md:grid-cols-2 gap-4">{article.projects.map((project) => <div key={project.name} className="bg-neutral-900 border border-gray-800 rounded-xl p-6"><p className="text-xs uppercase tracking-[0.16em] text-[rgb(255,228,0)] mb-2">Client work</p><h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3><p className="text-gray-300 leading-7 mb-3">{project.scope}</p><p className="text-xs text-gray-500 leading-5">{project.evidence}</p></div>)}</div></section>}
              {article.testimonials?.length > 0 && <section id="testimonials" className="scroll-mt-32 mb-14"><h2 className="text-3xl font-bold text-white mb-3">What clients say</h2><p className="text-gray-400 leading-7 mb-7">Verified testimonials already published on the Tactics website.</p><div className="grid gap-5">{article.testimonials.map((testimonial) => <blockquote key={`${testimonial.name}-${testimonial.position}`} className="bg-neutral-900 border border-gray-800 rounded-xl p-7"><FaQuoteLeft className="text-[rgb(255,228,0)] text-2xl mb-4" /><p className="text-gray-200 leading-8 mb-5">“{testimonial.quote}”</p><footer><p className="text-white font-semibold">{testimonial.name}</p><p className="text-sm text-gray-500">{testimonial.position}</p></footer></blockquote>)}</div></section>}
              {article.externalSources?.length > 0 && <section id="sources" className="scroll-mt-32 mb-14"><h2 className="text-3xl font-bold text-white mb-6">Useful verification sources</h2><p className="text-gray-300 leading-8 mb-5">Platform rules, agency lists, and market details change. Verify current information before making a buying decision.</p><div className="space-y-3">{article.externalSources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="block bg-neutral-900 border border-gray-800 rounded-xl p-5 hover:border-[rgb(255,228,0)]/50"><span className="text-white font-semibold">{source.label}</span><span className="block text-sm text-gray-500 mt-1">{source.note}</span></a>)}</div></section>}
              <section id="related" className="scroll-mt-32 mb-14"><h2 className="text-3xl font-bold text-white mb-6">Related guides and services</h2><div className="grid md:grid-cols-2 gap-4">{article.related.map((item) => <Link key={item.href} href={normalizeHref(item.href)} className="group bg-neutral-900 border border-gray-800 rounded-xl p-6 hover:border-[rgb(255,228,0)]/50"><h3 className="text-lg font-semibold text-white group-hover:text-[rgb(255,228,0)] mb-2">{item.title}</h3><p className="text-sm text-gray-400 leading-6 mb-4">{item.description}</p><span className="text-sm text-[rgb(255,228,0)] flex items-center gap-2">Open page <FaArrowRight /></span></Link>)}</div></section>
              <section id="faqs" className="scroll-mt-32 mb-14"><h2 className="text-3xl font-bold text-white mb-7">Frequently asked questions</h2><div className="space-y-4">{article.faqs.map((faq) => <details key={faq.q} className="bg-neutral-900 border border-gray-800 rounded-xl p-6 open:border-[rgb(255,228,0)]/30"><summary className="cursor-pointer list-none text-lg font-semibold text-white">{faq.q}</summary><p className="text-gray-400 leading-7 mt-4">{faq.a}</p></details>)}</div></section>
              <section id="author" className="scroll-mt-32 mb-14 bg-neutral-900 border border-gray-800 rounded-2xl p-7"><div className="flex items-center gap-4 mb-4"><Image src="/tactics-editor-avatar.png" alt="Tactics Editor Team logo avatar" width={64} height={64} className="rounded-full border border-gray-700" /><div><p className="text-xs uppercase tracking-[0.18em] text-[rgb(255,228,0)] mb-1">Author</p><h2 className="text-2xl font-bold text-white">Tactics Editor Team</h2></div></div><p className="text-gray-400 leading-7">The Tactics Editor Team maintains decision-focused marketing guides using first-party website evidence, current search data and verifiable sources. We do not fabricate testimonials, rankings, guarantees or market statistics. Volatile prices, platform rules and provider offerings should be confirmed before signing a contract.</p></section>
              <section className="rounded-2xl bg-[rgb(255,228,0)] text-black p-8 lg:p-10">{article.cta.eyebrow && <p className="uppercase tracking-[0.16em] text-xs font-bold text-black/60 mb-3">{article.cta.eyebrow}</p>}<h2 className="text-3xl font-bold mb-4">{article.cta.title}</h2><p className="text-black/80 leading-7 mb-6 max-w-3xl">{article.cta.text}</p><a href={article.cta.href || "#contact"} className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-6 py-3 font-semibold hover:bg-neutral-800">{article.cta.label || article.cta.button || "Contact Tactics"} <FaArrowRight /></a></section>
            </article>
            <aside className="hidden lg:block"><div className="sticky top-28 space-y-6"><div className="bg-neutral-900 border border-gray-800 rounded-xl p-6"><p className="text-sm font-semibold text-white mb-4">On this page</p><nav className="space-y-2 text-sm"><a href="#quick-answer" className="block text-gray-400 hover:text-[rgb(255,228,0)]">Quick answer</a>{article.sections.map((s) => <a key={s.id} href={`#${s.id}`} className="block text-gray-400 hover:text-[rgb(255,228,0)] leading-5">{s.title}</a>)}{article.projects?.length > 0 && <a href="#projects" className="block text-gray-400 hover:text-[rgb(255,228,0)]">Client work</a>}{article.testimonials?.length > 0 && <a href="#testimonials" className="block text-gray-400 hover:text-[rgb(255,228,0)]">Testimonials</a>}<a href="#related" className="block text-gray-400 hover:text-[rgb(255,228,0)]">Related guides</a><a href="#faqs" className="block text-gray-400 hover:text-[rgb(255,228,0)]">FAQs</a></nav></div><div className="bg-[rgb(255,228,0)]/5 border border-[rgb(255,228,0)]/20 rounded-xl p-6"><p className="text-[rgb(255,228,0)] font-semibold mb-2">Need a scoped recommendation?</p><p className="text-sm text-gray-400 leading-6 mb-4">Tell us the goal, market, and current channels. We can help identify what should be fixed first.</p><a href={article.whatsappHref || "#contact"} target={article.whatsappHref ? "_blank" : undefined} rel={article.whatsappHref ? "noopener noreferrer" : undefined} className="text-sm text-white font-semibold inline-flex items-center gap-2">{article.whatsappHref ? "WhatsApp the team" : "Talk to the team"} <FaArrowRight /></a></div></div></aside>
          </div>
        </main>
        <div id="contact" className="scroll-mt-24"><ContactForm /></div><Footer />
        {article.whatsappHref && <a href={article.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Tactics on WhatsApp" className="lg:hidden fixed bottom-5 right-4 z-[70] inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 font-semibold shadow-2xl shadow-black/40"><FaWhatsapp className="text-xl" /> WhatsApp Tactics</a>}
      </div>
    </>
  );
}
