import NavItem from "./NavItem";

function NavList() {
  return (
    <ul className="flex items-center gap-8">
      <NavItem label="Home" to="/" />
      <NavItem label="Services" to="/services" />
      <NavItem label="Porfolio" to="/portfolio" />
      <NavItem label="About" to="/about" />
      <NavItem label="Contact" to="/contact" />
    </ul>
  );
}

export default NavList;