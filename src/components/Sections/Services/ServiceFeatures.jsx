import Icon from "@/components/Sections/Hero/Icon";

function ServiceFeature({
  ulClassName = "",
  liClassName = "",
  liItems = [],
}) {
  return (
    <ul className={ulClassName}>
      {liItems.map((item, index) => (
        <li key={index} className={liClassName}>
          {item.iconName && (
            <Icon
              iconName={item.iconName}
              size={item.iconSize}
              alt={item.iconName}
            />
          )}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default ServiceFeature;