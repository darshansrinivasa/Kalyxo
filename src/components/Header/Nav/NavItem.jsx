import { Link } from "react-router-dom";

function NavItem({ label, to, liClassName = "", onClick }) {
  return (
    <li className={liClassName}>
      <Link
        to={to}
        onClick={onClick}
        className="text-base font-medium transition text-fg-secondary hover:text-primary-600"
      >
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
