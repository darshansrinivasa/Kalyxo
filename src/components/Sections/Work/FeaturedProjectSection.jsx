import { useState } from "react";
import Heading from "@/components/Global/Text/Heading";
import SubHeading from "@/components/Global/Text/SubHeading";
import Button from "@/components/Global/Button/Button";
import Modal from "@/components/Global/UI/Modal";

const PROJECT = {
  title: "Featured Project — Aurora Skincare",
  serviceTag: "Store Rebuild",
  summary:
    "A Shopify rebuild focused on speed, cleaner UX, and a stronger product page structure to improve add-to-cart and checkout conversion.",
  challenge:
    "The existing theme was slow, hard to edit, and inconsistent across templates. Key PDP elements weren’t supporting purchase decisions, and mobile performance was dragging down conversions.",
  solution:
    "I rebuilt the storefront structure, streamlined the theme code, and tightened the product and collection UX. I also cleaned up app impact and ensured the store stayed easy to manage in the Theme Editor.",
  results: [
    { label: "Homepage load time", value: "3.8s → 1.9s (placeholder)" },
    { label: "Core Web Vitals", value: "Improved (placeholder)" },
    { label: "Conversion rate", value: "+12% (placeholder)" },
    { label: "Revenue impact", value: "+8% over 30 days (placeholder)" },
  ],
  beforeAfter:
    "Before: cluttered PDP and slow mobile pages. After: faster storefront, clearer hierarchy, and a more focused PDP layout (placeholder).",
};

function FeaturedProjectSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="work" className="background-theme-1 section-anchor">
      <div className="container pt-6 pb-8 md:py-16">
        <div className="flex flex-col gap-4 w-full">
          <Heading tag="h2" className="section-heading-center-cap">
            Featured project
          </Heading>
          <SubHeading tag="p" className="section-subheading-center max-w-180 mx-auto">
            A snapshot of the kind of Shopify work I deliver.
          </SubHeading>
        </div>

        <div className="mt-4 md:mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex w-fit items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-200">
                {PROJECT.serviceTag}
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100">
                {PROJECT.title}
              </h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {PROJECT.summary}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                type="button"
                content="View Case Study →"
                className="button primary-button purple icon-right px-8 py-4"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} titleId="case-study-title" onClose={() => setOpen(false)} maxWidthClassName="max-w-4xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 id="case-study-title" className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {PROJECT.title}
              </h3>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-200">
                {PROJECT.serviceTag}
              </span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
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

        <div className="mt-8 grid gap-8">
          <section>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Problem / Challenge
            </h4>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{PROJECT.challenge}</p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              What I built / Solution
            </h4>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{PROJECT.solution}</p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Results & Analytics
            </h4>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-6">
              {PROJECT.results.map((r) => (
                <li key={r.label}>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {r.label}:
                  </span>{" "}
                  {r.value}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Before / After
            </h4>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{PROJECT.beforeAfter}</p>
          </section>
        </div>
      </Modal>
    </section>
  );
}

export default FeaturedProjectSection;

