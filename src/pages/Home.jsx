import Hero from "@/components/Sections/Hero/Hero.jsx";
import heroBannerImage from "@/assets/images/Home-hero-banner.png"

function Home() {
  return (
    <>
      <Hero
        className="container py-6 md:py-24 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col gap-8 w-full md:w-[50%]"
        tagProps={{
          text: "Shopify Specialists",
          iconName: "shopify",
          size: 18,
          className: "mx-auto md:mx-0",
          textClassName: "text-sm font-medium text-gray-700 dark:text-slate-200 leading-[28px]"
        }}
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-5xl md:text-7xl font-bold gradient main-heading capitalize",
          children: "We build high-converting Shopify stores",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left  text-xl",
          children: "Transform your e-commerce vision into reality with custom Shopify solutions that drive sales, enhance user experience, and scale with your business.",
        }}
        primaryBtnProps={{
          content: "Book a Free consultation",
          className: "button primary-button purple logo-right px-8 py-4",
          iconName: "arrowRightWhite",
          href: "/contact"
        }}
        secondaryBtnProps={{
          content: "View Our Work",
          className: "button secondary-button purple px-8 py-4",
          href: "/portfolio"
        }}
        imageProps={{
          imageSrc: heroBannerImage,
          wrapperClassName: "md:w-[50%] hidden md:block",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl",
          imageClassName: "blur-[1px]"
        }}
      />
    </>
  );
}

export default Home;