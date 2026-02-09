export default function HamburgerIcon({ isOpen }) {
    return (
      <div className="space-y-1.5">
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </div>
    );
}