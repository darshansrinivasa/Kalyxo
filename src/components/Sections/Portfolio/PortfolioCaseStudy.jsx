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
          
          <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full w-fit">
            {category}
          </span>

          <h2 className="text-4xl font-bold mt-6">
            {title}
          </h2>

          <p className="text-slate-600 dark:text-slate-200 mt-4 text-lg">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {service_tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-200">Client</p>
            <p className="text-xl font-semibold">{client}</p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className={`md:w-1/2 h-96 relative ${imageWrapperClassName}`}>
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-xl h-full w-full object-cover"
          />

          {metrics && (
            <div
              className={`
                absolute -bottom-8 -right-8
                bg-white dark:bg-slate-900
                rounded-2xl shadow-2xl p-8
                ${metricsClassName}
              `}
            >
              <div className="grid grid-cols-3 gap-6">
                <div>
                    <p className="text-purple-600 text-2xl font-bold">
                    {metrics.conversion}
                    </p>
                    <p className="text-xs text-slate-500">Conversion</p>
                </div>

                <div>
                    <p className="text-purple-600 text-2xl font-bold">
                    {metrics.revenue}
                    </p>
                    <p className="text-xs text-slate-500">Revenue</p>
                </div>

                <div>
                    <p className="text-purple-600 text-2xl font-bold">
                    {metrics.loadTime}
                    </p>
                    <p className="text-xs text-slate-500">Load Time</p>
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