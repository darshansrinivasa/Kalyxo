import Hero from "@/components/Sections/Hero/Hero.jsx";
import ContactFormSection from "@/components/Sections/Contact/ContactFormSection";

function ContactPage() {
  return (
    <>
      <Hero
        className="hero-split"
        contentClassName="flex flex-col items-center justify-center gap-8 w-full"
        tagProps={{
          text: "Get In Touch",
          iconName: "mail",
          size: 18,
          className: "button mx-auto",
          textClassName: "tag-text-muted"
        }}
        headingProps={{
          tag: "h1",
          className:
            "text-center text-5xl sm:text-6xl font-bold gradient-heading capitalize",
          children: (
            <>
              Let's Start Your  {" "}
              <span>Success Story</span>
            </>
          ),
        }}
        subheadingProps={{
          tag: "p",
          className: "text-center text-xl max-w-200 mx-auto",
          children: "Ready to transform your e-commerce business? Book a free consultation and let's discuss how we can help you achieve your goals.",
        }}
      />

        <ContactFormSection 
          outerClassName="pb-24 pt-4"
          containerClassName="container"
          leftClassName="w-full md:w-1/2"
          rightClassName="w-full md:w-1/2"
        />
    </>
  );
}
  
export default ContactPage;