

import Logo from "../Global/UI/Logo";
import NavList from "./Nav/NavList";
import Button from "../Global/Button/Button";
import ThemeToggle from "./ThemeToggleButton";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/HeaderNavigationLink";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./Nav/Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);  
  const { theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

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
        bg-slate-50
        w-full
        transition-shadow duration-300
      ${isScrolled ? "shadow-md dark:shadow-black/30" : "shadow-none"}
      `}
    >
      <div className="flex items-center justify-between py-4 container">
        <Logo />
        <NavList className="hidden md:block" NAV_LINKS={NAV_LINKS} ulClassName="flex gap-8 items-center" />
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle
            theme={theme}
            onToggle={handleToggleTheme}
            className="inline-flex"
          />
          <Button  
            className="button primary-button purple"
            iconName="bookCalenderWhite"
          />
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-800"
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