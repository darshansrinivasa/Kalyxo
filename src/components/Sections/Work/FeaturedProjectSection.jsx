import { useState } from "react";
import Heading from "@/components/Global/Text/Heading";
import SubHeading from "@/components/Global/Text/SubHeading";
import Button from "@/components/Global/Button/Button";
import Modal from "@/components/Global/UI/Modal";

const PROJECT = {
  title: "Solara",
  serviceTag: "Store Revamp",
  summary:
    "Improved homepage structure, clarified pre-order experience, optimized product and collection pages, and fixed cart issues caused by third-party scripts — resulting in a smoother buying flow and stronger conversion across the store.",
  challenge:
    "The store had multiple friction points affecting conversions — an unclear homepage structure, inconsistent product and collection page experience, and cart issues caused by third-party scripts. Pre-order communication was also unclear, making it difficult for users to confidently move toward checkout.",
  solution:
    `<ul class="list-disc pl-6">
      <li>Restructured the homepage to improve content flow, hierarchy, and first-time user understanding</li>
      <li>Built modular, reusable sections for scalability and easier future updates</li>
      <li>Improved product and collection page structure for faster decision-making</li>
      <li>Created a clearer pre-order experience with defined delivery timelines</li>
      <li>Fixed cart issues caused by third-party scripts (duplicate add-to-cart events)</li>
      <li>Optimized overall store performance and reduced unnecessary app impact</li>
    </ul>`,
  results: 
  `<ul class="list-disc pl-6">
    <li>Reached checkout increased from <span>~6.3K → 16.4K (~2.5x growth)</span></li>
    <li>Improved Homepage performance score from <span>42 → 77</span></li>
    <li>Reduced Largest Contentful Paint from <span>6.7s → 2.6s</span></li>
    <li>Reduced layout shift (CLS) from <span>1.14 → 0.01</span>, improving visual stability</li>
  </ul>`,
  beforeAfter:
    `<strong>Before:</strong> Cluttered product pages, unclear pre-order communication, and inconsistent layouts made it difficult for users to understand delivery timelines or move confidently toward checkout.
    <br />
    <br />
    <strong>After:</strong> A faster, structured storefront with clearer product information, defined pre-order messaging, and a streamlined path from product pages to checkout.`,
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
          <SubHeading
            tag="p"
            className="section-subheading-center max-w-180 mx-auto px-2"
          >
            A snapshot of the kind of Shopify work I deliver.
          </SubHeading>
        </div>

        <div className="mt-4 md:mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex w-fit items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-200">
                {PROJECT.serviceTag}
              </span>
              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {PROJECT.title}
              </h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
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
              <h3
                id="case-study-title"
                className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100"
              >
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
            <h4 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
              Problem
            </h4>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {PROJECT.challenge}
            </p>
          </section>

          <section>
            <h4 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
              Solution
            </h4>
            <div
              className="mt-3 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300"
              dangerouslySetInnerHTML={{ __html: PROJECT.solution }}
            />
          </section>

          <section>
            <h4 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
              Results & Analytics
            </h4>
            <div
              className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300 list-disc"
              dangerouslySetInnerHTML={{ __html: PROJECT.results }}
            />
          </section>

          <section>
            <div
              className="mt-3 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300"
              dangerouslySetInnerHTML={{ __html: PROJECT.beforeAfter }}
            />
          </section>
        </div>
      </Modal>
    </section>
  );
}

export default FeaturedProjectSection;

