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
            Let’s look at your store.
          </Heading>
          <SubHeading tag="p" className="mt-4 text-xl text-slate-600 dark:text-slate-200">
            Share a few details and I’ll review your store before getting back to you.
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