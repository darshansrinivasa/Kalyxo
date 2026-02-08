
import NavItem from "./NavItem";

function NavList({ items = [], className = "" }) {
  return (
    <div>
        <ul className={`space-y-3 ${className}`}>
        {items.map((item) => (
            <NavItem
                key={item.label}
                label={item.label}
                to={item.to}
                icon={item.icon}
            />
        ))}
        </ul>
    </div>
  );
}

export default NavList;