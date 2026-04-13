import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import Services from "@/components/Sections/Services/Services";
import PortfolioGridSection from "@/components/Sections/Portfolio/PortfolioGridSection";
import ProcessSection from "@/components/Sections/Process/ProcessSection";

import { WHY_CHOOSE_US } from "@/constants/WhyChooseUs";
import { PORTFOLIO_ITEMS } from "@/constants/Portfolio";
import { PROCESS_STEPS } from "@/constants/Process";

import heroBannerImage from "@/assets/images/Home-hero-banner.png"
import storeSetupImage from "@/assets/images/Shopify-Store-Setup.png"
import CustomThemeImage from "@/assets/images/Custom-theme-development.png"
import StoreRedesignImage from "@/assets/images/Store-redesign.jpg"

function HomePage() {
  return (
    <>
      <Hero
        className="container py-8 md:py-24 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col items-center justify-center gap-8 w-full"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        tagProps={{
          text: "Shopify Specialist",
          iconName: "shopify",
          size: 18,
          className: "button mx-auto md:mx-0",
          textClassName: "tag-text-muted"
        }}
        headingProps={{
          tag: "h1",
          className: "text-center text-5xl md:text-7xl font-bold gradient-heading capitalize",
          children: (
            <>
              {" "}
              <span>Your Store Gets Traffic. It Should Be Getting Sales.</span>
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left  text-xl",
          children: `I build and optimize Shopify stores for D2C and B2B brands — focused on speed, conversion, and clean code that actually scales.`,
        }}
        primaryBtnProps={{
          content: "Let's Work Together",
          className: "button primary-button purple icon-right px-8 py-4",
          href: "/contact#contact-section"
        }}
        secondaryBtnProps={{
          content: "See My Work",
          className: "button secondary-button purple px-8 py-4 icon-right",
          iconName: "arrowRightPurple",
          href: "/portfolio"
        }}
        // imageProps={{
        //   imageSrc: heroBannerImage,
        //   wrapperClassName: "md:w-[50%] hidden md:block",
        //   mediaClassName: "rounded-2xl overflow-hidden shadow-2xl",
        // }}
      />

      <RichText
        outerClassName="background-theme-1"
        className="container py-6 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        tagProps={{
          text: "Why Work With Me?",
          className: "mx-auto md:mx-0 text-center ",
          textClassName: "text-sm max-w-220 mx-auto text-purple-600 uppercase"
        }}
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold",
          children: "Built for Performance & Growth",
        }}
      />

      <Featured
        items={WHY_CHOOSE_US}
        outerClassName="mb-24"
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

      <RichText
        outerClassName="background-theme-3"
        className="container pt-6 pb-8 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        tagProps={{
          text: "what I do",
          className: "mx-auto md:mx-0 text-center ",
          textClassName: "text-sm max-w-220 mx-auto text-purple-600 uppercase"
        }}
        headingProps={{
          tag: "h2",
          className: "section-heading-center-cap",
          children: "Services Built Around Your Store.",
        }}
        subheadingProps={{
          tag: "p",
          className: "section-subheading-center",
          children: "Custom builds, revamps, and optimization — depending on where your store is and what it needs.",
        }}
      />

      <Services
        outerClassName="background-theme-3"
        className="container py-8 md:pt-4 md:pb-20 flex flex-col md:flex-row gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        tagProps={{
          text:"Service 01",
          textClassName: "text-sm font-bold text-purple-600 uppercase" 
        }}
        headingProps={{
          tag: "h1",
          className: "text-4xl font-bold",
          children: "Shopify Store Setup",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-lg",
          children: "Starting from scratch or rebuilding a bad foundation. I set up stores that are technically clean, fast, and ready to sell from day one.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "Theme setup and configuration",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Product catalog and collection structure",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Payment, shipping, and tax setup",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "App integration and analytics setup",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Learn More",
          className: "button icon-right text-base text-purple-600 p-0",
          iconName: "arrowRightPurple",
          iconSize: 16,
          href: "/services#store-setup"
        }}
        imageProps={{
          imageSrc: storeSetupImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "media-frame-2xl h-full min-h-[300px] md:min-h-auto",
          imageClassName: "object-cover h-full object-left min-h-[300px] md:min-h-auto"
        }}
      />

      <Services
        outerClassName="background-theme-3"
        className="container py-8 md:pt-4 md:pb-20 flex flex-col md:flex-row-reverse gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        tagProps={{
          text:"Service 02",
          textClassName: "text-sm font-bold text-purple-600 uppercase" 
        }}
        headingProps={{
          tag: "h1",
          className: "text-4xl font-bold",
          children: "Custom Theme Development",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-lg",
          children: "When stock themes hit their limit. I build custom Shopify 2.0 themes in Liquid — built around your brand, not adapted to it.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "Built from scratch in Liquid",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Shopify 2.0 — sections, blocks, metafields",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Mobile-first, performance optimized",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Editable in Theme Editor without touching code",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Learn More",
          className: "button icon-right text-base text-purple-600 p-0",
          iconName: "arrowRightPurple",
          iconSize: 16,
          href: "/services#custom-development"
        }}
        imageProps={{
          imageSrc: CustomThemeImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "media-frame-2xl h-full min-h-[300px] md:min-h-auto",
          imageClassName: "object-cover h-full object-center min-h-[300px] md:min-h-auto"
        }}
      />

      <Services
        outerClassName="background-theme-3"
        className="container py-6 md:pt-4 md:pb-8 flex flex-col md:flex-row gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        tagProps={{
          text:"Service 03",
          textClassName: "text-sm font-bold text-purple-600 uppercase" 
        }}
        headingProps={{
          tag: "h1",
          className: "text-4xl font-bold",
          children: "Store Redesign & CRO",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-lg",
          children: "Your store has traffic. It should be converting more of it. I find what's losing you sales and fix it — without rebuilding what's already working.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "UX and conversion audit first",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Homepage, PDP, and collection page rebuild",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Speed and Core Web Vitals fixes",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Mobile UX — where most drop-off happens",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Learn More",
          className: "button icon-right text-base text-purple-600 p-0",
          iconName: "arrowRightPurple",
          iconSize: 16,
          href: "/services#store-redesign"
        }}
        imageProps={{
          imageSrc: StoreRedesignImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "media-frame-2xl h-full min-h-[300px] md:min-h-auto",
          imageClassName: "object-cover h-full object-center min-h-[300px] md:min-h-auto"
        }}
      />

      <RichText
        outerClassName="background-theme-3"
        className="container pt-6 pb-8 md:pt-8 md:pb-24"
        contentClassName="flex flex-col gap-4 w-full"
        buttonContainerClassName="flex flex-col md:flex-row gap-4 md:mx-auto"
        primaryBtnProps={{
          className: "button primary-button purple icon-right px-8 py-4",
          content: "View All Services",
          iconName: "arrowRightWhite",
          iconSize: 18,
          href: "/services"
        }}
      />

      <RichText
        outerClassName="background-theme-1"
        className="container pt-6 pb-8 md:pt-16 md:py-9"
        contentClassName="flex flex-col gap-4 w-full"
        headingProps={{
          tag: "h2",
          className: "section-heading-center-cap",
          children: "Featured Work",
        }}
        subheadingProps={{
          tag: "p",
          className: "section-subheading-center max-w-150 mx-auto",
          children: "Explore our portfolio of successful Shopify stores we've built for clients worldwide",
        }}
      />

      <PortfolioGridSection
        items={PORTFOLIO_ITEMS}
        limit={6}
        outerClassName=""
        containerClassName="container py-8 md:pt-4 md:pb-20"
        gridClassName="grid gap-8 md:grid-cols-3"
        cardProps={{
          wrapperClassName:
            "group portfolio-card" ,
          imageClassName: "h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105",
          contentClassName: "p-6 flex flex-col gap-3",
          titleClassName: "text-xl font-semibold",
          overlayContentClassName: "flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6",
          bottomContentClassName: "p-6 flex justify-between gap-2 bg-white",
          categoryClassName: "px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full",
          clientClassName: "text-sm text-gray-600",
          primaryBtnProps: {
            content: "View Project",
            className: "button icon-right text-base text-white p-0 justify-end",
            iconName: "arrowRightWhite",
            iconSize: 16,
          }
        }}
        viewAllContainerClassName="mt-12 flex justify-center"
        viewAllBtnProps={{
          content: "View All Projects",
          className: "button icon-right secondary-button px-8 py-4",
          iconName: "arrowRightPurple",
          iconSize: 16,
          href: "/portfolio"
        }}
      />

      <RichText
        outerClassName="background-theme-3"
        className="container pt-6 pb-8 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        tagProps={{
          text: "How I Work",
          className: "mx-auto md:mx-0 text-center ",
          textClassName: "text-sm max-w-220 mx-auto text-purple-600 uppercase"
        }}
        headingProps={{
          tag: "h2",
          className: "section-heading-center-cap",
          children: "A Simple Process. No Surprises",
        }}
      />

      <ProcessSection
        items={PROCESS_STEPS}
        outerClassName="background-theme-3 py-8 md:pt-4 md:pb-20"
        containerClassName="container relative"
        lineClassName="hidden md:block absolute top-14 left-15 right-15 h-[2px] bg-purple-300"
        gridClassName="grid gap-12 md:grid-cols-4"
        itemProps={{
          circleClassName:
            "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg",
          titleClassName:
            "text-xl font-semibold mb-3",
          descriptionClassName:
            "text-slate-600 dark:text-slate-400 text-base leading-6",
          iconClassName:
            "mt-8 text-purple-300",
        }}
      />

      <RichText
        outerClassName="background-theme-2"
        className="cta-split"
        contentClassName="flex flex-col gap-8 w-full"
        buttonContainerClassName="flex flex-col md:flex-row gap-4 md:mx-auto"
        headingProps={{
          tag: "h2",
          className: "section-heading-center-cap",
          children: "Got a Shopify store that needs work?",
        }}
        subheadingProps={{
          tag: "p",
          className: "section-subheading-center max-w-220 mx-auto",
          children: "From a quick fix to a full build — tell me where you are and I'll tell you exactly how I can help.",
        }}
        primaryBtnProps={{
          content: "Book a Free Call",
          className: "button primary-button icon-right px-8 py-4",
          iconName: "arrowRightPurple",
          href: "/contact#contact-section"
        }}
        secondaryBtnProps={{
          content: "View Services",
          className: "button secondary-button white px-8 py-4",
          href: "/services"
        }}
      />
    </>
  );
}

export default HomePage;