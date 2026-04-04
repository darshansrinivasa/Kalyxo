import Hero from "@/components/Sections/Hero/Hero.jsx";
import heroBannerImage from "@/assets/images/Our-story.jpg"
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import { VALUES } from "@/constants/Values";

function AboutPage() {
  return (
    <>
      <Hero
        className="container py-18 md:pb-14 md:pt-24 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col items-center justify-center gap-8 w-full"
        tagProps={{
          text: "About Me",
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
              <span>Shopify Expert</span>
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-200 mx-auto",
          children: "Shopify developer with 4 years of hands-on experience. Focused on performance, conversion, and clean builds.",
        }}
      />

      <Hero
        className="container py-18 md:pb-24 md:pt-6 flex flex-col md:flex-row gap-16 items-center"
        contentClassName="Banner-media-container"
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
              <span className="block mb-4">I started the way most developers do — learning HTML, CSS, JavaScript, then moving into Liquid and Shopify theme development.</span>
              <span className="block mb-4">The shift happened when I stopped just building sections and started paying attention to how stores actually work. Product page structure, checkout flow, load speed — and how small changes in any of these directly impact revenue.</span>
              <span className="block mb-4">In my full-time role I've worked across multiple stores — customising themes, fixing UI and UX issues, handling real client requirements, and optimising performance across devices. Not just making things look right, but making sure they work right.</span>
              <span className="block mb-4">What I kept noticing was the same pattern — stores with decent traffic but poor conversion. Slow load times, cluttered layouts, weak product pages. Brands spending money on ads and losing customers on the store itself.</span>
              <span>That's the problem I focus on. Right now I work full-time and take on freelance projects alongside it — with the goal of working independently, directly with store owners, solving problems end-to-end.</span>
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
          children: "How I Work",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-180 mx-auto",
          children: "A few things that stay consistent across every project.",
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
          children: "Got a store that needs work? Let's talk.",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-220 mx-auto",
          children: "I take on a small number of projects at a time. If you're planning something in the next few months, worth reaching out now.",
        }}
        primaryBtnProps={{
          content: "Get in Touch",
          className: "button primary-button icon-right px-8 py-4",
          iconName: "arrowRightPurple",
          href: "/contact"
        }}
        secondaryBtnProps={{
          content: "View My Work",
          className: "button secondary-button white px-8 py-4",
          href: "/portfolio"
        }}
      />
    </>
  );
}

export default AboutPage;