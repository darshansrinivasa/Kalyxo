import { NavLink } from "react-router-dom";

function NavItem({ label, to, icon: Icon, className = "" }) {
  return (
    <li className="">
      <NavLink
        to={to}
        className={`
          inline-flex items-center gap-3
          text-slate-400 dark:text-slate-400
          transition-colors
          hover:text-slate-100 dark:hover:text-slate-900
          ${className}
        `}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span>{label}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;