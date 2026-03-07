import Icon from "@/components/Sections/Hero/Icon";
import { Link } from "react-router-dom";

function Button({
  className = "",
  content = "Book free call",
  iconName,
  iconSize = "20",
  onClick,
  href,
  type = "button",
}) {
  const Component = href ? Link : "button";
  const linkProps = href ? { to: href } : { type };
  const commonProps = { className, onClick };

  return (
    <Component
      {...commonProps}
      {...linkProps}
    >
      {iconName && (
        <Icon
          iconName={iconName}
          size={iconSize}
          alt={iconName}
        />
      )}
      <span>{content}</span>
    </Component>
  );
}

export default Button;