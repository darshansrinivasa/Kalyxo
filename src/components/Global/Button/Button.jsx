import Icon from "@/components/Sections/Hero/Icon";
import { Link } from "react-router-dom";

function isInternalHashHref(href) {
  return (
    typeof href === "string" &&
    !/^https?:\/\//i.test(href) &&
    href.includes("#")
  );
}

function Button({
  className = "",
  content = "Book free call",
  iconName,
  iconSize = "20",
  onClick,
  href,
  type = "button",
}) {
  const useNativeAnchor = href && isInternalHashHref(href);
  const Component = href ? (useNativeAnchor ? "a" : Link) : "button";
  const linkProps = href
    ? useNativeAnchor
      ? { href }
      : { to: href }
    : { type };
  const mergedClassName = [
    "cursor-pointer focus:outline-none focus:ring-0 focus:shadow-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const commonProps = { className: mergedClassName, onClick };

  return (
    <Component
      {...commonProps}
      {...linkProps}
    >
      {iconName && (
        <Icon
          iconName={iconName}
          size={Number(iconSize) || 20}
          alt=""
          loading="lazy"
        />
      )}
      <span>{content}</span>
    </Component>
  );
}

export default Button;