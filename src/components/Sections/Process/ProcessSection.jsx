import ProcessItem from "./ProcessItem";

function ProcessSection({
  items = [],
  outerClassName = "",
  containerClassName = "",
  gridClassName = "",
  lineClassName = "",
  itemProps = {},
}) {
  return (
    <section className={outerClassName}>
      <div className={containerClassName}>
        
        {/* Horizontal Line (Desktop Only) */}
        <div className={lineClassName} />

        <div className={gridClassName}>
          {items.map((item, index) => (
            <ProcessItem
              key={index}
              {...item}
              {...itemProps}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProcessSection;