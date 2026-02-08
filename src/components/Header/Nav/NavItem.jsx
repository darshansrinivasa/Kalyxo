import { NavLink } from "react-router-dom";

function NavItem({ label, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `
          text-sm
          font-medium
          transition
          ${
            isActive
              ? "text-purple-600"
              : "text-slate-100 dark:text-slate-700 hover:text-purple-600"
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