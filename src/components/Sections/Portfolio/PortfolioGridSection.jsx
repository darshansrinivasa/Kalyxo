import PortfolioCard from "./PortfolioCard";
import Button from "@/components/Global/Button/Button";

function PortfolioGridSection({
  items = [],
  limit,
  outerClassName = "",
  containerClassName = "",
  gridClassName = "",
  cardProps = {},
  viewAllBtnProps,
  viewAllContainerClassName = "",
}) {
  const displayedItems = limit ? items.slice(0, limit) : items;
  const showViewAll = limit && items.length > limit;

  return (
    <section className={outerClassName}>
      <div className={containerClassName}>

        <div className={gridClassName}>
          {displayedItems.map((item) => (
            <PortfolioCard
              key={item.id}
              {...item}
              {...cardProps}
            />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && viewAllBtnProps && (
          <div className={viewAllContainerClassName}>
            <Button {...viewAllBtnProps} />
          </div>
        )}

      </div>
    </section>
  );
}

export default PortfolioGridSection;