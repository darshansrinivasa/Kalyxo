import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";

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
          href: "/contact"
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