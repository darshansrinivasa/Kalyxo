function BannerImage({
  imageSrc,
  alt = "",
  wrapperClassName = "",
  mediaClassName = "",
  imageClassName = "",
  priority = false,
}) {
  if (!imageSrc) return null;

  const loading = priority ? "eager" : "lazy";

  return (
    <div className={wrapperClassName}>
      <div className={mediaClassName}>
        <img
          src={imageSrc}
          alt={alt}
          className={`max-w-full ${imageClassName}`}
          loading={loading}
          decoding="async"
          {...(priority ? { fetchPriority: "high" } : {})}
        />
      </div>
    </div>
  );
}

export default BannerImage;
