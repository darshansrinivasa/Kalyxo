import Hero from "@/components/Sections/Hero/Hero.jsx";
import PortfolioSection from "@/components/Sections/Portfolio/PortfolioPageSection.jsx";
import RichText from "@/components/Sections/Richtext/Richtext";

import { PORTFOLIO_ITEMS } from "@/constants/Portfolio";

function PortfolioPage() {
  return (
    <>
      <Hero
        className="container py-6 md:py-24 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col ietsm-center justify-center gap-8 w-full max-w-225 mx-auto"
        tagProps={{
          text: "Our Portfolio",
          iconName: "portfolio",
          size: 18,
          className: "button mx-auto",
          textClassName: "text-sm font-medium text-gray-700 dark:text-slate-200 leading-[28px]"
        }}
        headingProps={{
          tag: "h1",
          className: "text-center text-5xl sm:text-6xl font-bold gradient-heading capitalize",
          children: (
            <>
              Success{" "}
              <span>Stories</span>
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-220 mx-auto",
          children: "Explore our portfolio of high-converting Shopify stores we've built for clients across various industries. Each project showcases our commitment to excellence and results.",
        }}
      />

      <PortfolioSection 
        id="D2C"
        items={PORTFOLIO_ITEMS}
        outerClassName="pb-24"
        containerClassName="container"
        gridClassName="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        cardProps={{
          wrapperClassName:
            "group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition",
          imageClassName:
            "h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105",
          overlayContentClassName:
            "hidden md:flex absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6",
          bottomContentClassName:
            "p-6 flex flex-col gap-3",
          categoryClassName:
            "px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full w-fit",
          clientClassName:
            "text-sm text-gray-600",
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
          children: "Ready to Join Our Success Stores?",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-220 mx-auto",
          children: "Let's create a high-converting Shopify store that drives real results for your business",
        }}
        primaryBtnProps={{
          content: "Book Free Consultation",
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
  
export default PortfolioPage;