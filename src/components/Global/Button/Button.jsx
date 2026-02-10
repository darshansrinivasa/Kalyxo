import Icon from "@/components/Sections/Hero/Icon";

function Button({
  className = "",
  content = "Book free call",
  iconName,
  onClick,
  href,
  type = "button",
}) {
  const Component = href ? "a" : "button";

  return (
    <Component
      className={className}
      onClick={onClick}
      href={href}
      type={!href ? type : undefined}
    >
      {iconName && (
        <Icon
          iconName={iconName}
          size={20}
          alt={iconName}
        />
      )}
      <span>{content}</span>
    </Component>
  );
}

export default Button;