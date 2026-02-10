import Icon from "../../Sections/Hero/Icon";

function TagButton({ text, iconName, className = "", textClassName = "" }) {
  return (
    <div className={`tag-button ${className}`}>
      <Icon iconName={iconName} size='18' alt={iconName}/>
      <span className= {textClassName}>
        {text}
      </span>
    </div>
  );
}

export default TagButton;