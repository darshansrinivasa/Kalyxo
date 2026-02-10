import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";

function About() {
  return (
    <>
      <Hero
        className="container py-6 md:py-24 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col ietsm-center justify-center gap-8 w-full"
        tagProps={{
          text: "About Kalyxo",
          iconName: "about",
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
              We're {" "}
              <span>Shopify Experts </span>
              Who Care
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-200 mx-auto",
          children: "Founded in 2025, Calixo has grown from a small team of passionate developers into a leading Shopify agency trusted by brands worldwide.",
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
          children: "Let's Build Something Amazing Together",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-220 mx-auto",
          children: "Ready to take your Shopify store to the next level? We're here to help.",
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

export default About;


  