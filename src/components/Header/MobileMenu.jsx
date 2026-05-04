import NavList from "./Nav/NavList";
import Button from "../Global/Button/Button";
import { analytics } from "@/utils/analytics";

export default function MobileMenu({ isOpen, onClose, NAV_LINKS }) {
  if (!isOpen) return null;

  return (
    <div 
      className="
        mobile-menu
        md:hidden 
        border-t border-border 
        bg-muted
        absolute left-0 right-0
      ">
      <div className="p-10 space-y-6">
        {/* Mobile Nav */}
        <NavList
          NAV_LINKS={NAV_LINKS}
          ulClassName="flex-col gap-6"
          liClassName="mb-8"
          onItemClick={onClose}
        />

        {/* CTA */}
        <Button 
          className="
            button primary-button purple
            w-full
            px-6 py-3
            rounded-lg
            text-base font-medium
            transition
          " 
          iconName="bookCalenderWhite"
          content="Work With Me"
          href="#contact"
          onClick={() => {
            analytics.ctaClick("Work With Me", "navbar");
            analytics.scrollToContact("navbar");
            onClose();
          }}
        />
      </div>
    </div>
  );
}