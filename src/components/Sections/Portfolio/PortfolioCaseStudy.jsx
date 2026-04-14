import Button from "@/components/Global/Button/Button";

function PortfolioCaseStudy({
  image,
  category,
  title,
  description,
  service_tags = [],
  client,
  metrics,
  href,

  wrapperClassName = "",
  containerClassName = "",
  contentClassName = "",
  imageWrapperClassName = "",
  metricsClassName = "",
  reverse = false,
}) {
  return (
    <div className={`${wrapperClassName}`}>
      <div
        className={`
          ${containerClassName}
          flex flex-col md:flex-row
          ${reverse ? "" : "md:flex-row-reverse"}
          items-center gap-12
        `}
      >
        {/* LEFT CONTENT */}
        <div className={`md:w-1/2 ${contentClassName}`}>
          
          <span className="tag-soft text-sm">{category}</span>

          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-fg">
            {title}
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-fg-secondary">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {service_tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-2 bg-muted text-fg-secondary text-sm rounded-lg border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm text-fg-muted">Client</p>
            <p className="text-xl font-semibold text-fg">{client}</p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className={`md:w-1/2 h-96 relative ${imageWrapperClassName}`}>
          <img
            src={image}
            alt={title}
            className="rounded-2xl border border-border shadow-md h-full w-full object-cover"
          />

          {metrics && (
            <div
              className={`
                absolute -bottom-8 -right-8
                bg-surface
                rounded-2xl border border-border shadow-card dark:shadow-card-dark p-8
                ${metricsClassName}
              `}
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                    <p className="text-primary-600 text-xl md:text-2xl font-bold dark:text-primary-400">
                    {metrics.conversion}
                    </p>
                    <p className="text-xs text-fg-muted">Conversion</p>
                </div>

                <div>
                    <p className="text-primary-600 text-xl md:text-2xl font-bold dark:text-primary-400">
                    {metrics.revenue}
                    </p>
                    <p className="text-xs text-fg-muted">Revenue</p>
                </div>

                <div>
                    <p className="text-primary-600 text-xl md:text-2xl font-bold dark:text-primary-400">
                    {metrics.loadTime}
                    </p>
                    <p className="text-xs text-fg-muted">Load Time</p>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCaseStudy;