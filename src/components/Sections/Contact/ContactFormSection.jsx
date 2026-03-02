import ContactForm from "./ContactForm";
import Heading from "@/components/Global/Text/Heading";
import SubHeading from "@/components/Global/Text/SubHeading";
import SocialList from "@/components/Global/Social/SocialList";

function ContactSection({
  outerClassName = "",
  containerClassName = "",
  leftClassName = "",
  rightClassName = "",
}) {
    const socials = {
        instagram: "https://instagram.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/company/",
        facebook: "https://facebook.com/",
      };
  return (
    <section id="contact-section" className={`scroll-mt-28 ${outerClassName}`}>
      <div
        className={`${containerClassName} flex flex-col lg:flex-row gap-10 md:gap-16`}
      >
        {/* LEFT SIDE */}
        <div className={leftClassName}>
          <Heading
            tag="h1"
            className="text-4xl md:text-5xl font-bold"
          >
            Get In Touch
          </Heading>

          <SubHeading
            tag="p"
            className="mt-4 md:mt-6 text-lg text-slate-600 dark:text-slate-200"
          >
            Have a project in mind? We'd love to hear about it.
            Fill out the form and we’ll get back to you shortly.
          </SubHeading>

          {/* Business Hours */}
          <div className="mt-6 md:mt-12 bg-slate-100 dark:bg-slate-900 rounded-2xl p-8">
            <h4 className="font-semibold text-lg mb-6">
              Business Hours
            </h4>

            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span>12:00 AM – 6:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 AM – 8:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-4 md:mt-10">
            <p className="font-medium mb-3 md:mb-6">Follow Us</p>
              <SocialList className="social-icons" socials={socials}/>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={rightClassName}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;