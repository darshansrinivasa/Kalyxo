import Button from "@/components/Global/Button/Button";

function PortfolioCard({
  image,
  title,
  category,
  client,
  href,

  wrapperClassName = "",
  imageClassName = "",
  bottomContentClassName = "",
  categoryClassName = "",
  clientClassName = "",
  overlayContentClassName = "",
  primaryBtnProps,
}) {
  return (
    <div className={wrapperClassName}>
      
      {/* Image Section */}
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className={imageClassName}
        />

        {/* Hover Overlay */}
        <div className={overlayContentClassName}>
          
          <h3 className="text-white text-2xl font-bold mb-4">
            {title}
          </h3>

          {primaryBtnProps && (
            <Button
              {...primaryBtnProps}
              href={href}
            />
          )}

        </div>
      </div>

      {/* Bottom Static Content */}
      <div className={bottomContentClassName}>
        <p className={clientClassName}>
          {client}
        </p>

        <p className={categoryClassName}>
          {category}
        </p>
      </div>

    </div>
  );
}

export default PortfolioCard;