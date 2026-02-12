import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import { SteamlinedProcess } from "@/constants/SteamlinedProcess";

function Services() {
  return (
    <>
      <Hero
        className="container py-6 md:py-24 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col ietsm-center justify-center gap-8 w-full max-w-225 mx-auto"
        tagProps={{
          text: "Our Services",
          iconName: "services",
          size: 18,
          className: "button mx-auto",
          textClassName: "text-sm font-medium text-gray-700 dark:text-slate-200 leading-[28px]"
        }}
        headingProps={{
          tag: "h1",
          className:
            "text-center text-5xl sm:text-6xl font-bold gradient-heading capitalize",
          children: (
            <>
              Complete Shopify{" "}
              <span>Solutions</span>
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl",
          children: "From initial setup to ongoing optimization, we provide end-to-end Shopify services that help your e-commerce business thrive and scale.",
        }}
      />

      <RichText
        outerClassName="background-theme-3"
        className="container pt-6 pb-8 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold capitalize",
          children: "How We Deliver Excellence",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-180 mx-auto",
          children: "Our streamlined process ensures quality results and transparent communication every step of the ways",
        }}
      />

      <Featured
        items={SteamlinedProcess}
        outerClassName="pb-14 md:pb-24 background-theme-3"
        className="container"
        gridClassName="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        cardProps={{
          wrapperClassName:
            "rounded-2xl border border-slate-200 dark:border-slate-800 p-8 bg-white dark:bg-slate-900 shadow-lg",
          numberClassName:
            "mb-4 font-bold text-5xl md:text-6xl text-purple-200 dark:text-purple-600",
          titleClassName:
            "mb-3 text-2xl font-semibold text-slate-900 dark:text-slate-100",
          descriptionClassName:
            "text-base leading-6 text-slate-600 dark:text-slate-400",
        }}
      />

      <RichText
        outerClassName="background-theme-2"
        className="container py-6 md:py-18 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col gap-8 w-full"
        buttonContainerClassName="flex flex-col md:flex-row gap-4 md:mx-auto"
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold capitalize",
          children: "Ready to Get Started?",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-220 mx-auto",
          children: "Let's discuss your project and create a custom solution that fits your needs and budget",
        }}
        primaryBtnProps={{
          content: "Book Free Consultation",
          className: "button primary-button icon-right px-8 py-4",
          iconName: "arrowRightPurple",
          href: "/contact"
        }}
        secondaryBtnProps={{
          content: "View Our Work",
          className: "button secondary-button white px-8 py-4",
          href: "/servportfolioices"
        }}
      />
    </>
  );
}
  
export default Services;