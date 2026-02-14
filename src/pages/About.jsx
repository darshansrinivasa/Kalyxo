import Hero from "@/components/Sections/Hero/Hero.jsx";
import heroBannerImage from "@/assets/images/Our-story.jpg"
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import { VALUES } from "@/constants/VALUES";

function AboutPage() {
  return (
    <>
      <Hero
        className="container py-18 md:pb-14 md:pt-24 flex flex-col md:flex-row gap-12 items-center"
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
          children: "Founded in 2025, Kalyxo has grown from a small team of passionate developers into a leading Shopify agency trusted by brands worldwide.",
        }}
      />

      <Hero
        className="container py-18 md:pb-24 md:pt-6 flex flex-col md:flex-row gap-16 items-center"
        contentClassName="flex flex-col gap-6 w-full md:w-[50%]"
        headingProps={{
          tag: "h1",
          className: "text-left text-4xl md:text-5xl font-bold gradient-heading capitalize",
          children: (
            <>
              our story
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-left text-lg",
          children: (
            <>
              <span className="block mb-4">Kalyxo was born from a simple observation: too many e-commerce businesses were struggling with poorly designed, slow-loading Shopify stores that failed to convert visitors into customers.</span>
              <span className="block mb-4">We set out to change that by combining technical excellence with conversion-focused design principles. Today, we've helped over 150 businesses transform their online presence and achieve remarkable growth.</span>
              <span>Our approach is different. We don't just build stores – we build revenue-generating machines optimized for performance, user experience, and conversions. Every project is treated as a partnership, and your success is our success.</span>
            </>
          )
          
        }}
        imageProps={{
          imageSrc: heroBannerImage,
          wrapperClassName: "w-full md:w-[50%]",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl",
          imageClassName: ""
        }}
      />

      <RichText
        outerClassName="background-theme-3"
        className="container pt-6 pb-8 md:pt-24 md:pb-16"
        contentClassName="flex flex-col gap-4 w-full"
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold capitalize",
          children: "Our Values",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-180 mx-auto",
          children: "The principles that guide everything we do",
        }}
      />

      <Featured
        items={VALUES}
        outerClassName="background-theme-3 pb-24"
        className="container"
        gridClassName="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        cardProps={{
          wrapperClassName:
          "relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 highlighted",
          iconWrapperClassName:
            "icon-img mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-600 text-white",
          titleClassName:
            "mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100",
          descriptionClassName:
            "text-base leading-6 text-slate-600 dark:text-slate-400",
        }}
      />

      <RichText
        outerClassName="background-theme-2"
        className="container p-6 md:py-18 flex flex-col md:flex-row gap-12 items-center"
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

export default AboutPage;