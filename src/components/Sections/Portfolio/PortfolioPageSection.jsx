import PortfolioCaseStudy from "./PortfolioCaseStudy";

function PortfolioPageSection({
  id,
  items = [],
  outerClassName = "",
  containerClassName = "",
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 ${outerClassName}`}
    >
      <div className={containerClassName}>
        {items.map((item, index) => (
          <div key={item.id} className="mb-32">
            <PortfolioCaseStudy
              {...item}
              reverse={index % 2 !== 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPageSection;