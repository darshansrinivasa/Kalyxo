function ProcessItem({
  step,
  title,
  description,
  wrapperClassName = "",
  circleClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  return (
    <div className={`relative flex flex-col items-center text-center ${wrapperClassName}`}>
      {/* Step Circle */}
      <div className={circleClassName}>
        {step}
      </div>

      {/* Content */}
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}

export default ProcessItem;