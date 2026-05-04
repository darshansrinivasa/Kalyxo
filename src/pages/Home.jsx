import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import ProcessSection from "@/components/Sections/Process/ProcessSection";
import ServicesCardsSection from "@/components/Sections/Services/ServicesCardsSection";
import FeaturedProjectSection from "@/components/Sections/Work/FeaturedProjectSection";
import ContactFormSection from "@/components/Sections/Contact/ContactFormSection";
import { analytics } from "@/utils/analytics";

import { WHY_CHOOSE_US } from "@/constants/WhyChooseUs";
import { PROCESS_STEPS } from "@/constants/Process";

function HomePage() {
  return (
    <>
      <section id="home" className="section-anchor hero-background">
        <Hero
          className="container py-8 md:py-12 flex flex-col md:flex-row gap-12 items-center"
          contentClassName="flex flex-col items-center justify-center gap-6 w-full"
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
              "relative text-center text-4xl md:text-5xl font-bold gradient-heading",
            children: (
              <>
                Your Store Looks Good.
                <br />
                <span>Is It Selling?</span>
              </>
            ),
          }}
          subheadingProps={{
            tag: "p",
            className:
              "text-center md:text-left text-lg md:text-xl text-fg-secondary leading-relaxed",
            children:
              "I'm a Shopify specialist helping D2C brands turn slow, leaky stores into high-converting storefronts.",
          }}
          primaryBtnProps={{
            content: "Let's Look At Your Store",
            className: "button primary-button purple icon-right px-8 py-4",
            href: "/#contact",
            onClick: () => {
              analytics.ctaClick("Let's Look At Your Store", "hero");
              analytics.scrollToContact("hero");
            },
          }}
        />
      </section>

      <RichText
        outerClassName="pt-3 md:pt-6"
        className="container"
        contentClassName="flex flex-col gap-2 w-full"
        tagProps={{
          text: "Why Work With Me?",
          className: "mx-auto md:mx-0 text-center ",
          textClassName:
            "section-eyebrow max-w-220 mx-auto text-center tracking-wide",
        }}
        headingProps={{
          tag: "h2",
          className: "section-heading-center mt-2",
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
            "depth-surface relative p-6 rounded-2xl border border-border shadow-card dark:shadow-card-dark highlighted",
          iconWrapperClassName:
            "icon-chip icon-img mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/95 to-secondary-500/95 text-white highlighted",
          titleClassName:
            "mb-3 text-lg md:text-xl font-semibold text-fg",
          descriptionClassName:
            "text-sm md:text-base leading-6 text-fg-secondary",
          accentClassName: "bg-primary-400",
        }}
      />

      <ServicesCardsSection />

      <FeaturedProjectSection />

      <section id="process" className="background-theme-3 section-anchor">
        <RichText
          outerClassName="background-theme-3"
          className="container pt-6 pb-8 md:py-12"
          contentClassName="flex flex-col gap-4 w-full"
          tagProps={{
            text: "How I Work",
            className: "mx-auto md:mx-0 text-center ",
            textClassName:
              "section-eyebrow max-w-220 mx-auto text-center tracking-wide",
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
          lineClassName="hidden md:block absolute top-14 left-15 right-15 h-px bg-primary-200 dark:bg-primary-900/80"
          gridClassName="grid gap-6 md:grid-cols-4"
          itemProps={{
            circleClassName:
              "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/95 to-secondary-500/95 text-white font-bold text-lg shadow-sm",
            titleClassName:
              "text-lg md:text-xl font-semibold mb-3 text-fg",
            descriptionClassName:
              "text-sm md:text-base text-fg-secondary leading-6",
            iconClassName: "mt-8 text-primary-400 dark:text-primary-500",
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