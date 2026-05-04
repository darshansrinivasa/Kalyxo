import Icon from "../../Sections/Hero/Icon";

function TagButton({ text, iconName, className = "", textClassName = "" }) {
  return (
    <div className={`tag-button ${className}`}>
      <Icon iconName={iconName} size={18} alt="" loading="eager" />
      <span className= {textClassName}>
        {text}
      </span>
    </div>
  );
}

export default TagButton;