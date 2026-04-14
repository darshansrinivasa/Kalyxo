import ContactForm from "./ContactForm";
import Heading from "@/components/Global/Text/Heading";
import SubHeading from "@/components/Global/Text/SubHeading";

function ContactSection({
  outerClassName = "",
  containerClassName = "",
}) {
  return (
    <section id="contact" className={`scroll-mt-28 ${outerClassName}`}>
      <div className={containerClassName}>
        <div className="mx-auto max-w-2xl text-center">
          <Heading tag="h2" className="section-heading-center-cap">
            Let's Look At Your Store
          </Heading>
          <SubHeading
            tag="p"
            className="section-subheading-center mt-4 max-w-xl mx-auto px-2"
          >
            Whether you know exactly what you need or just know something isn't working — I'll figure it out with you.
          </SubHeading>
        </div>

        <div className="mt-10 mx-auto w-full max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;