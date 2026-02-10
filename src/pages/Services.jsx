import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";

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
        outerClassName="background-theme-1"
        className="container py-6 md:py-16"
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

      <RichText
        outerClassName="background-theme-2"
        className="container py-6 md:py-24 flex flex-col md:flex-row gap-12 items-center"
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