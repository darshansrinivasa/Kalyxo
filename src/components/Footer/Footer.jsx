import Logo from "../Global/UI/Logo";
import SubHeading from "../Global/Text/SubHeading"
import SocialList from "../Global/Social/SocialList";

import NavHeading from "../Footer/Nav/NavHeading";
import NavList from "../Footer/Nav/NavList";

import Icon from "@/components/Sections/Hero/Icon";

function Footer() {
  const logoSubheadingText = "Building high-converting Shopify stores that drive real results for businesses worldwide.";

  const rightsText = "@ 2026 Kalyxo. All rights reserved";

  const socials = {
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/company/",
    facebook: "https://facebook.com/",
  };

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const servicesLink = [
    { label: "Store Setup", to: "/" },
    { label: "Custom Theme Development", to: "/services" },
    { label: "Store Redesign", to: "/portfolio" },
    { label: "Speed Optimization", to: "/about" },
    { label: "App Integration", to: "/contact" },
    { label: "Maintenance & Support", to: "/contact" },
  ]

  const getInTouchLink = [
    {
      label: "contact@kalyxo.in",
      to: "mailto:contact@kalyxo.in",
      icon: <Icon iconName="mail" size={18} />,
    },
  ];

  return (
    <footer className="
      bg-slate-900
      text-slate-400
    ">
      <div className="
        max-w-320
        px-6 py-16
        mx-auto
      ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo is_footer = "true" />
            <SubHeading className="mt-8 text-slate-400">
              {logoSubheadingText}
            </SubHeading>

            {/* Social */}
            <SocialList
              className="footer-social-icons mt-8"
              socials={socials}
            />
          </div>

          <div>
            <NavHeading className={'mb-6 text-slate-100'}>Quick Links</NavHeading>
            <NavList items={quickLinks} />
          </div>

          <div>
            <NavHeading className={'mb-6 text-slate-100'}>Services</NavHeading>
            <NavList items={servicesLink} />
          </div>

          <div>
            <NavHeading className={'mb-6 text-slate-100'}>Get In Touch</NavHeading>
            <NavList items={getInTouchLink} />
          </div>
        </div>
      </div>
        <div className="border-t border-gray-700">
          <div className="
            max-w-320
            px-6 py-6
            mx-auto
          ">
            <SubHeading className="text-center">
              {rightsText}
            </SubHeading>
          </div>
        </div>
    </footer>
  );
}

export default Footer;