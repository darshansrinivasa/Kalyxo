import { Link } from "react-router-dom";
import { analytics } from "@/utils/analytics";

function isInternalHashHref(href) {
  return (
    typeof href === "string" &&
    !/^https?:\/\//i.test(href) &&
    href.includes("#")
  );
}

function NavItem({ label, to, liClassName = "", onClick }) {
  const useNativeAnchor = isInternalHashHref(to);

  const handleClick = (e) => {
    if (
      typeof to === "string" &&
      (to.includes("#contact") || to.endsWith("/#contact"))
    ) {
      analytics.scrollToContact("navbar");
    }
    onClick?.(e);
  };

  return (
    <li className={liClassName}>
      {useNativeAnchor ? (
        <a
          href={to}
          onClick={handleClick}
          className="text-base font-medium transition text-fg-secondary hover:text-primary-600"
        >
          {label}
        </a>
      ) : (
        <Link
          to={to}
          onClick={handleClick}
          className="text-base font-medium transition text-fg-secondary hover:text-primary-600"
        >
          {label}
        </Link>
      )}
    </li>
  );
}

export default NavItem;
