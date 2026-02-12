import Hero from "@/components/Sections/Hero/Hero.jsx";
import heroBannerImage from "@/assets/images/Home-hero-banner.png"
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import { WHY_CHOOSE_US } from "@/constants/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero
        className="container py-6 md:py-24 flex flex-col md:flex-row gap-12 items-center"
        contentClassName="flex flex-col gap-8 w-full md:w-[50%]"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        tagProps={{
          text: "Shopify Specialists",
          iconName: "shopify",
          size: 18,
          className: "button mx-auto md:mx-0",
          textClassName: "text-sm font-medium text-gray-700 dark:text-slate-200 leading-[28px]"
        }}
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-5xl md:text-7xl font-bold gradient-heading capitalize",
          children: (
            <>
              {" "}
              <span>We build high-converting Shopify stores</span>
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left  text-xl",
          children: "Transform your e-commerce vision into reality with custom Shopify solutions that drive sales, enhance user experience, and scale with your business.",
        }}
        primaryBtnProps={{
          content: "Book a Free consultation",
          className: "button primary-button purple icon-right px-8 py-4",
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

      <RichText
        outerClassName="background-theme-1"
        className="container py-6 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        tagProps={{
          text: "Why Choose Kalyxo",
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
            "rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 transition-shadow highlighted",
          iconWrapperClassName:
            "icon-img mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-600 text-white",
          titleClassName:
            "mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100",
          descriptionClassName:
            "text-base leading-6 text-slate-600 dark:text-slate-400",
          accentClassName: "bg-purple-400",
        }}
      />

      <RichText
        outerClassName="background-theme-1"
        className="container py-6 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        tagProps={{
          text: "Our Services",
          className: "mx-auto md:mx-0 text-center ",
          textClassName: "text-sm max-w-220 mx-auto text-purple-600 uppercase"
        }}
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold capitalize",
          children: "Complete Shopify Solutions",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl",
          children: "From setup to optimization, we handle every aspect of your Shopify store",
        }}
      />


      <RichText
        outerClassName="background-theme-1"
        className="container py-6 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold capitalize",
          children: "Featured Work",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl",
          children: "Explore our portfolio of successful Shopify stores we've built for clients worldwide",
        }}
      />

      <RichText
        outerClassName="background-theme-1"
        className="container py-6 md:py-16"
        contentClassName="flex flex-col gap-4 w-full"
        tagProps={{
          text: "How We Work",
          className: "mx-auto md:mx-0 text-center ",
          textClassName: "text-sm max-w-220 mx-auto text-purple-600 uppercase"
        }}
        headingProps={{
          tag: "h2",
          className: "text-center text-4xl md:text-5xl font-bold capitalize",
          children: "Our Process",
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
          children: "Ready to Scale Your Shopify Store?",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-220 mx-auto",
          children: "Transform your e-commerce vision into reality with custom Shopify solutions that drive sales, enhance user experience, and scale with your business.",
        }}
        primaryBtnProps={{
          className: "button primary-button icon-right px-8 py-4",
          iconName: "arrowRightPurple",
          href: "/contact"
        }}
        secondaryBtnProps={{
          content: "View Pricing",
          className: "button secondary-button white px-8 py-4",
          href: "/services"
        }}
      />
    </>
  );
}

export default Home;