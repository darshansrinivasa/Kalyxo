import { useMemo, useState } from "react";
import Button from "@/components/Global/Button/Button";
import Heading from "@/components/Global/Text/Heading";
import SubHeading from "@/components/Global/Text/SubHeading";
import Icon from "@/components/Sections/Hero/Icon";
import Modal from "@/components/Global/UI/Modal";

const SERVICES = [
  {
    key: "store-setup",
    name: "Store Development",
    iconName: "shopifyBold",
    short:
      "Launch-ready Shopify store built clean, fast, and scalable from day one.",
    paragraph:
      "If you need a clean foundation (or your current setup is holding you back), I’ll set up your store so it’s fast, structured, and ready to sell.",
    bullets: [
      "Theme setup + configuration",
      "Navigation, collections, and store structure",
      "Core pages (home, collection, product, cart, policies)",
      "Payment, shipping, taxes, and settings",
      "Analytics + tracking foundations",
      "Pre-launch QA across devices",
    ],
    bestFor: "Best for: new stores, rebuilds, and stores that need a clean baseline.",
  },
  {
    key: "custom-theme-development",
    name: "Custom Theme Development",
    iconName: "services",
    short:
      "Custom-built Shopify themes tailored to your brand and performance needs.",
    paragraph:
      "If your theme is limiting you, I build a Shopify 2.0 theme that matches your brand and stays fast—even as you grow.",
    bullets: [
      "Custom Shopify 2.0 sections + blocks",
      "Liquid/CSS/JS built for speed",
      "Reusable components that stay editable in Theme Editor",
      "Template improvements (PDP, collections, cart)",
      "Technical SEO-friendly structure",
      "Cross-device QA before launch",
    ],
    bestFor: "Best for: brands that want a unique storefront without performance tradeoffs.",
  },
  {
    key: "store-redesign",
    name: "Store Redesign",
    iconName: "growth",
    short: "Revamp your existing store to improve UX and conversions.",
    paragraph:
      "If your store looks fine but doesn’t convert, I’ll redesign the flow and key templates so customers move to checkout with less friction.",
    bullets: [
      "UX audit + prioritized redesign plan",
      "Homepage, PDP, and collection page upgrades",
      "Mobile-first layout improvements",
      "Better hierarchy, content structure, and CTAs",
      "Speed and implementation cleanup as part of the redesign",
    ],
    bestFor: "Best for: stores with traffic that should be converting more.",
  },
  {
    key: "performance",
    name: "Performance Optimization",
    iconName: "speed",
    short: "Speed improvements that directly impact load time and conversions.",
    paragraph:
      "Slow stores lose sales. I’ll find what’s dragging performance down and fix it without breaking your storefront.",
    bullets: [
      "Performance audit + prioritized action plan",
      "Theme code cleanup (unused assets, render blockers)",
      "Core Web Vitals-focused fixes",
      "Image + media optimization guidance",
      "App impact review + recommendations",
      "Before/after reporting (CWV + load times)",
    ],
    bestFor: "Best for: stores that feel slow on mobile or fail Core Web Vitals.",
  },
  {
    key: "conversion-optimization",
    name: "Conversion Optimization",
    iconName: "scale",
    short:
      "Fix what’s stopping users from buying — product pages, flows, and checkout.",
    paragraph:
      "If you’re getting traffic but sales don’t match, I’ll tighten the buying experience so customers can decide faster and check out easier.",
    bullets: [
      "PDP improvements (trust, clarity, objections)",
      "Collection filtering and merchandising fixes",
      "Cart + checkout friction reduction",
      "Copy/layout adjustments that support decisions",
      "Quick A/B test recommendations (optional)",
    ],
    bestFor: "Best for: stores with traffic that need better purchase flow.",
  },
  {
    key: "app-integration-cleanup",
    name: "App Integration & Cleanup",
    iconName: "scale",
    short: "Add only what’s needed. Remove what slows your store down.",
    paragraph:
      "Apps should help you sell—not slow you down. I’ll integrate what you need cleanly and remove what’s hurting performance or UX.",
    bullets: [
      "App selection guidance (if needed)",
      "Install + configuration",
      "Theme integration + styling alignment",
      "Troubleshooting app/theme conflicts",
      "App cleanup recommendations (bloat, duplicates, heavy scripts)",
      "Testing across devices",
    ],
    bestFor: "Best for: stores with too many apps or messy integrations.",
  },
];

function ServicesCardsSection() {
  const [activeKey, setActiveKey] = useState(null);

  const activeService = useMemo(
    () => SERVICES.find((s) => s.key === activeKey) ?? null,
    [activeKey]
  );

  const handleBookAudit = () => {
    setActiveKey(null);
    // Let the modal close animation finish before scrolling.
    window.setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  return (
    <section id="services" className="background-theme-3 section-anchor">
      <div className="container pt-6 pb-8 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow text-center">What I Do</p>
          <Heading tag="h2" className="section-heading-center-cap mt-3 md:mt-4">
            Shopify services focused on performance
          </Heading>
          <SubHeading tag="p" className="section-subheading-center mt-3 max-w-2xl mx-auto">
            Focused Shopify services built around performance, conversion, and scalability.
          </SubHeading>
        </div>

        <div className="mt-10">
          <p className="section-group-label text-center">Core Services</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.key}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition h-full"
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white">
                    <Icon iconName={service.iconName} size={22} />
                  </div>

                  <h3 className="mt-5 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-6 text-slate-600 dark:text-slate-400">
                    {service.short}
                  </p>

                  <div className="mt-2">
                    <Button
                      type="button"
                      content="View Details →"
                      className="button icon-right text-base text-purple-600 p-0 justify-start focus:outline-none focus:ring-0 focus:shadow-none"
                      onClick={() => setActiveKey(service.key)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 section-group-label text-center">
            Specialist Services
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(3, 6).map((service) => (
              <div
                key={service.key}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition h-full"
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white">
                    <Icon iconName={service.iconName} size={22} />
                  </div>

                  <h3 className="mt-5 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-6 text-slate-600 dark:text-slate-400">
                    {service.short}
                  </p>

                  <div className="mt-2">
                    <Button
                      type="button"
                      content="View Details →"
                      className="button icon-right text-base text-purple-600 p-0 justify-start focus:outline-none focus:ring-0 focus:shadow-none"
                      onClick={() => setActiveKey(service.key)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={Boolean(activeService)}
        titleId="service-modal-title"
        onClose={() => setActiveKey(null)}
        maxWidthClassName="max-w-3xl"
      >
        {activeService && (
          <>
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3
                  id="service-modal-title"
                  className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100"
                >
                  {activeService.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {activeService.paragraph}
                </p>
                {activeService.bestFor && (
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    {activeService.bestFor}
                  </p>
                )}
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActiveKey(null)}
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-purple-600 bg-transparent text-purple-600 transition hover:bg-purple-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-0 focus:shadow-none"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
                What’s included
              </h4>
              <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-300 list-disc pl-6">
                {activeService.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
              <p className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-100">
                Want something like this for your store?
              </p>
              <div className="mt-4">
                <Button
                  type="button"
                  content="Book a Free Audit"
                  className="button primary-button purple icon-right px-8 py-4"
                  onClick={handleBookAudit}
                />
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}

export default ServicesCardsSection;

