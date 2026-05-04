import Logo from "../Global/UI/Logo";
import NavList from "./Nav/NavList";
import Button from "../Global/Button/Button";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/HeaderNavigationLink";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./Nav/Hamburger";
import { analytics } from "@/utils/analytics";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`
        sticky top-0 z-50
        bg-surface
        w-full
        transition-shadow duration-300
      ${isScrolled ? "shadow-sm dark:shadow-card-dark" : "shadow-none"}
      `}
    >
      <div className="flex items-center justify-between py-4 container">
        <Logo />
        <NavList className="hidden md:block" NAV_LINKS={NAV_LINKS} ulClassName="flex gap-8 items-center" />
        <div className="hidden md:flex items-center gap-4">
          <Button  
            className="button primary-button purple"
            iconName="bookCalenderWhite"
            content="Work With Me"
            href="#contact"
            onClick={() => {
              analytics.ctaClick("Work With Me", "navbar");
              analytics.scrollToContact("navbar");
            }}
          />
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-fg"
        >
          <HamburgerIcon isOpen={isOpen} /> 
        </button>
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        NAV_LINKS={NAV_LINKS}
      />

    </header>
  );
}