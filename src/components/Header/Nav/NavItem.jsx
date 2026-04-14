import { Link } from "react-router-dom";

function isInternalHashHref(href) {
  return (
    typeof href === "string" &&
    !/^https?:\/\//i.test(href) &&
    href.includes("#")
  );
}

function NavItem({ label, to, liClassName = "", onClick }) {
  const useNativeAnchor = isInternalHashHref(to);

  return (
    <li className={liClassName}>
      {useNativeAnchor ? (
        <a
          href={to}
          onClick={onClick}
          className="text-base font-medium transition text-fg-secondary hover:text-primary-600"
        >
          {label}
        </a>
      ) : (
        <Link
          to={to}
          onClick={onClick}
          className="text-base font-medium transition text-fg-secondary hover:text-primary-600"
        >
          {label}
        </Link>
      )}
    </li>
  );
}

export default NavItem;
