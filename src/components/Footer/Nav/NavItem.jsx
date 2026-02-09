import { NavLink } from "react-router-dom";

function NavItem({ label, to, icon, className = "" }) {
  return (
    <li className="">
      <NavLink
        to={to}
        className={`
          inline-flex items-center gap-3
          transition-colors
          ${className}
        `}
      >
        {icon && icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;