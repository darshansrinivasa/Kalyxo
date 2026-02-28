import Hero from "@/components/Sections/Hero/Hero.jsx";
import RichText from "../components/Sections/Richtext/Richtext";
import Featured from "@/components/Sections/Featured/Featured";
import Services from "@/components/Sections/Services/Services";

import { SteamlinedProcess } from "@/constants/SteamlinedProcess";

import storeSetupImage from "@/assets/images/Shopify-Store-Setup.png"
import CustomThemeImage from "@/assets/images/Custom-theme-development.jpg"
import StoreRedesignImage from "@/assets/images/Store-redesign.jpg"

function ServicesPage() {
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

      <Services
        sectionId="store-setup"
        outerClassName="background-theme-3 section-anchor"
        className="container py-8 md:pt-24 md:pb-12 flex flex-col-reverse md:flex-row gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
  
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-4xl font-bold",
          children: "Shopify Store Setup",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left text-lg",
          children: "Launch your dream store with a complete setup that includes theme customization, product uploads, payment gateway integration, and essential app installations.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "Complete store configuration",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Theme customization",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Payment & shipping setup",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Product catalog organization",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Get Started",
          className: "button primary-button purple icon-right text-base",
          iconName: "arrowRightWhite",
          iconSize: 16,
          href: "/contact"
        }}
        imageProps={{
          imageSrc: storeSetupImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[450px] md:max-h-[450px]",
          imageClassName: "object-cover h-full w-full object-center min-h-[300px] md:min-h-[450px] md:max-h-[450px]"
        }}
      />

      <Services
        sectionId="custom-theme"
        outerClassName="background-theme-3 section-anchor"
        className="container py-8 md:py-12 flex flex-col-reverse md:flex-row-reverse gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-4xl font-bold",
          children: "Custom Theme Development",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left text-lg",
          children: "Stand out from the competition with a fully custom tick theme designed specifically for your brand and optimized for conversions.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "Unique brand-focused design",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Mobile-first responsive layout",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Custom functionality",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "SEO optimization built-in",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Get Started",
          className: "button primary-button purple icon-right text-base",
          iconName: "arrowRightWhite",
          iconSize: 16,
          href: "/contact"
        }}
        imageProps={{
          imageSrc: CustomThemeImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[450px] md:max-h-[450px]",
          imageClassName: "object-cover h-full w-full object-center min-h-[300px] md:min-h-[450px] md:max-h-[450px]"
        }}
      />

      <Services
        sectionId="store-redesign"
        outerClassName="background-theme-3 section-anchor"
        className="container py-6 md:py-12 flex flex-col-reverse md:flex-row gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-4xl font-bold",
          children: "Store Redesign",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left text-lg",
          children: "Stand out from the competition with a fully custom tick theme designed specifically for your brand and optimized for conversions.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "Unique brand-focused design",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Mobile-first responsive layout",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Custom functionality",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "SEO optimization built-in",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Get Started",
          className: "button primary-button purple icon-right text-base",
          iconName: "arrowRightWhite",
          iconSize: 16,
          href: "/contact"
        }}
        imageProps={{
          imageSrc: StoreRedesignImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[450px] md:max-h-[450px]",
          imageClassName: "object-cover h-full w-full object-center min-h-[300px] md:min-h-[450px] md:max-h-[450px]"
        }}
      />

      <Services
        sectionId="speed-optimization"
        outerClassName="background-theme-3 section-anchor"
        className="container py-8 md:py-12 flex flex-col-reverse md:flex-row-reverse gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-4xl font-bold",
          children: "Speed Optimization",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left text-lg",
          children: "Dramatically improve your store loading times with technical optimizations that enhance user experience and SEO rankings.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "Performance audit",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Image Optimization",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Theme Code Cleanup & Minification",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "App Cleanup and Optimization",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Get Started",
          className: "button primary-button purple icon-right text-base",
          iconName: "arrowRightWhite",
          iconSize: 16,
          href: "/contact"
        }}
        imageProps={{
          imageSrc: CustomThemeImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[450px] md:max-h-[450px]",
          imageClassName: "object-cover h-full w-full object-center min-h-[300px] md:min-h-[450px] md:max-h-[450px]"
        }}
      />

      <Services
        sectionId="app-integration"
        outerClassName="background-theme-3 section-anchor"
        className="container py-6 md:py-12 flex flex-col-reverse md:flex-row gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-4xl font-bold",
          children: "App Integration",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left text-lg",
          children: "Seamlessly integrate third-party apps and custom functionality to extend your store capabilities and automate workflows.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "App Research & Selection",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Custom API Integration",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Testing & Troubleshooting",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Documentation & Training",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Get Started",
          className: "button primary-button purple icon-right text-base",
          iconName: "arrowRightWhite",
          iconSize: 16,
          href: "/contact"
        }}
        imageProps={{
          imageSrc: StoreRedesignImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[450px] md:max-h-[450px]",
          imageClassName: "object-cover h-full w-full object-center min-h-[300px] md:min-h-[450px] md:max-h-[450px]"
        }}
      />

      <Services
        sectionId="maintanance-support"
        outerClassName="background-theme-3 section-anchor"
        className="container py-8 md:pt-12 md:pb-24 flex flex-col-reverse md:flex-row-reverse gap-12 items-stretch"
        contentClassName="Banner-media-container"
        buttonContainerClassName="flex flex-col md:flex-row gap-4"
        
        
        headingProps={{
          tag: "h1",
          className: "text-center md:text-left text-4xl font-bold",
          children: "Maintainance & Support",
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center md:text-left text-lg",
          children: "Ongoing technical support, updates, and maintenance to keep your store running smoothly and securely at all times.",
        }}
        featureListProps={{
          ulClassName:"flex flex-col gap-3",
          liClassName:"flex flex-row gap-3 items-center",
          liItems:[
            {
              title: "Regular Updates & Bakups",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Bugfixes & troubleshooting",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Performance monitoring",
              iconName: "tick",
              iconSize: "20"
            },
            {
              title: "Support Access",
              iconName: "tick",
              iconSize: "20"
            }
          ]
        }}
        primaryBtnProps={{
          content: "Get Started",
          className: "button primary-button purple icon-right text-base",
          iconName: "arrowRightWhite",
          iconSize: 16,
          href: "/contact"
        }}
        imageProps={{
          imageSrc: CustomThemeImage,
          wrapperClassName: "md:w-[50%]",
          mediaClassName: "rounded-2xl overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[450px] md:max-h-[450px]",
          imageClassName: "object-cover h-full w-full object-center min-h-[300px] md:min-h-[450px] md:max-h-[450px]"
        }}
      />

      <RichText
        outerClassName=""
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
        outerClassName="pb-14 md:pb-24"
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
  
export default ServicesPage;