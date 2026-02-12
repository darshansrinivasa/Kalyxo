import Icon from "@/components/Sections/Hero/Icon";

function FeatureCard({
  icon,
  number,
  title,
  description,
  wrapperClassName = "",
  iconWrapperClassName = "",
  numberClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  accentClassName = "",
}) {
  return (
    <div className={`feature-card relative ${wrapperClassName}`}>

      {accentClassName && (
        <span
          className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${accentClassName}`}
        />
      )}

      { icon && (
          <div className={iconWrapperClassName}>
            <Icon iconName={icon} size={34} />
          </div>
        )
      }

      {number && (
        <p className={numberClassName}>
          {number}
        </p>
      )}
      
      { title && (
        <h4 className={titleClassName}>
          {title}
        </h4>
      )}

      {description && (
        <p className={descriptionClassName}>
          {description}
        </p>
      )}
      
    </div>
  );
}

export default FeatureCard;