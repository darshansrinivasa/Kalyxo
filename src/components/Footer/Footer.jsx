import Logo from "../Global/UI/Logo";
import SubHeading from "../Global/Text/SubHeading"
import SocialList from "../Global/Social/SocialList";

function Footer() {
  const logoSubheadingText =
    "Shopify development focused on performance, UX, and conversion.";

  const rightsText = "@ 2026 Kalyxo. All rights reserved";

  const socials = {
    linkedin: "https://www.linkedin.com/in/darshan-srinivasa/",
  };

  return (
    <footer className="
      bg-footer-bg
      text-footer-fg
    ">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <Logo is_footer />
            <SubHeading className="mt-2 text-footer-fg max-w-xl">
              {logoSubheadingText}
            </SubHeading>
          </div>

          <div className="md:text-right">
            <SocialList className="footer-social-icons" socials={socials} />
          </div>
        </div>
      </div>
        <div className="border-t border-footer-border">
          <div className="container py-6">
            <SubHeading className="text-center">
              {rightsText}
            </SubHeading>
          </div>
        </div>
    </footer>
  );
}

export default Footer;