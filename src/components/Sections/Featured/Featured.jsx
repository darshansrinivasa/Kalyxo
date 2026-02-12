import FeatureCard from "./FeatureCard";

function Featured({
  items = [],
  outerClassName = "",
  className = "",
  gridClassName = "",
  cardProps = {},
}) {
  return (
    <section className={`feature-card-wrapper ${outerClassName}`}>
      <div className={className}>
        <div className={gridClassName}>
          {items.map((item) => (
            <FeatureCard
              key={item.title}
              {...item}
              {...cardProps}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;