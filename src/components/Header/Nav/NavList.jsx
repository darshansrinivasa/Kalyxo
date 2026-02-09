import NavItem from "./NavItem";

function NavList({className = "", NAV_LINKS, ulClassName = "", liClassName = "" }) {
  return (
    <nav className={className}>
      <ul className={ulClassName}>
        {NAV_LINKS.map((link) => (
          <NavItem 
            key={link.name} 
            label={link.name} 
            to={link.href}
            liClassName={liClassName}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavList;