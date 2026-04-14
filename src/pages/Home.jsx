import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import ProcessSection from "@/components/Sections/Process/ProcessSection";
import ServicesCardsSection from "@/components/Sections/Services/ServicesCardsSection";
import FeaturedProjectSection from "@/components/Sections/Work/FeaturedProjectSection";
import ContactFormSection from "@/components/Sections/Contact/ContactFormSection";

import { WHY_CHOOSE_US } from "@/constants/WhyChooseUs";
import { PROCESS_STEPS } from "@/constants/Process";

function HomePage() {
  return (
    <>
      <section id="home" className="section-anchor">
        <Hero
          className="container py-8 md:py-12 flex flex-col md:flex-row gap-12 items-center"
          contentClassName="flex flex-col items-center justify-center gap-8 w-full"
          buttonContainerClassName="flex flex-col md:flex-row gap-4"
          tagProps={{
            text: "Shopify Specialist",
            iconName: "shopify",
            size: 18,
            className: "button mx-auto md:mx-0",
            textClassName: "tag-text-muted",
          }}
          headingProps={{
            tag: "h1",
            className:
              "text-center text-5xl md:text-7xl font-bold gradient-heading capitalize",
            children: (
              <>
                <span>Shopify stores built to sell</span>
              </>
            ),
          }}
          subheadingProps={{
            tag: "p",
            className: "text-center md:text-left text-xl",
            children:
              "I build Shopify stores that load fast and convert better.",
          }}
          primaryBtnProps={{
            content: "Book a Free Store Audit",
            className: "button primary-button purple icon-right px-8 py-4",
            href: "/#contact",
          }}
        />
      </section>

      <RichText
        outerClassName="background-theme-1"
        className="container"
        contentClassName="flex flex-col gap-1 w-full"
        tagProps={{
          text: "Why Work With Me?",
          className: "mx-auto md:mx-0 text-center ",
          textClassName: "text-sm max-w-220 mx-auto text-purple-600 uppercase"
        }}
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold",
          children: "What I bring to every project",
        }}
      />

      <Featured
        items={WHY_CHOOSE_US}
        outerClassName="md:mb-16 my-8 mt-6"
        className="container"
        gridClassName="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        cardProps={{
          wrapperClassName:
          "relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 highlighted",
          iconWrapperClassName:
            "icon-img mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-600 text-white highlighted",
          titleClassName:
            "mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100",
          descriptionClassName:
            "text-base leading-6 text-slate-600 dark:text-slate-400",
          accentClassName: "bg-purple-400",
        }}
      />

      <ServicesCardsSection />

      <FeaturedProjectSection />

      <section id="process" className="background-theme-3 section-anchor">
        <RichText
          outerClassName="background-theme-3"
          className="container pt-6 pb-8 md:py-12"
          contentClassName="flex flex-col gap-4 w-full"s
          tagProps={{
            text: "How I Work",
            className: "mx-auto md:mx-0 text-center ",
            textClassName: "text-sm max-w-220 mx-auto text-purple-600 uppercase",
          }}
          headingProps={{
            tag: "h2",
            className: "section-heading-center-cap",
            children: "Clear process. Measurable outcomes.",
          }}
        />

        <ProcessSection
          items={PROCESS_STEPS}
          outerClassName="background-theme-3 pt-0 pb-6 md:pb-16"
          containerClassName="container relative"
          lineClassName="hidden md:block absolute top-14 left-15 right-15 h-[2px] bg-purple-300"
          gridClassName="grid gap-6 md:grid-cols-4"
          itemProps={{
            circleClassName:
              "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg",
            titleClassName: "text-xl font-semibold mb-3",
            descriptionClassName:
              "text-slate-600 dark:text-slate-400 text-base leading-6",
            iconClassName: "mt-8 text-purple-300",
          }}
        />
      </section>

      <ContactFormSection
        outerClassName="py-10 md:pt-12 md:pb-20"
        containerClassName="container"
      />
    </>
  );
}

export default HomePage;