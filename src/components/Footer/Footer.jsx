import Logo from "../Global/UI/Logo";
import SubHeading from "../Global/Text/SubHeading"
import SocialList from "../Global/Social/SocialList";

function Footer() {
  const logoSubheadingText =
    "Shopify development, theme customization, and performance optimization.";

  const rightsText = "@ 2026 Kalyxo. All rights reserved";

  const socials = {
    linkedin: "https://www.linkedin.com/in/darshan-srinivasa/",
  };

  return (
    <footer className="
      bg-slate-900
      text-slate-400
    ">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <Logo is_footer="true" />
            <SubHeading className="mt-2 text-slate-400 max-w-xl">
              {logoSubheadingText}
            </SubHeading>
          </div>

          <div className="md:text-right">
            <SocialList className="footer-social-icons" socials={socials} />
          </div>
        </div>
      </div>
        <div className="border-t border-gray-700">
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