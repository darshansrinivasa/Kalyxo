import { NavLink } from "react-router-dom";

function NavItem({ label, to, liClassName = "" }) {
  return (
    <li className={liClassName}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `
          text-base
          font-medium
          transition
          ${
            isActive
              ? "text-purple-600"
              : "text-slate-700 hover:text-purple-600"
          }
        `
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;