import NavList from "./Nav/NavList";
import Button from "../Global/Button/Button";

export default function MobileMenu({ isOpen, onClose, NAV_LINKS }) {
  if (!isOpen) return null;

  return (
    <div 
      className="
        mobile-menu
        md:hidden 
        border-t border-slate-100 
        bg-slate-50
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
            w-full
            flex gap-2 items-center justify-center
            px-6 py-3
            rounded-lg
            bg-purple-600
            text-white text-base font-medium
            hover:bg-purple-700
            transition
          " 
          iconName="bookCalenderWhite"
        />
      </div>
    </div>
  );
}