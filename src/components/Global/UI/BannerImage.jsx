function BannerImage({
    imageSrc,
    alt = "",
    wrapperClassName = "",
    mediaClassName = "",
    imageClassName = "",
  }) {
    if (!imageSrc) return null;
  
    return (
      <div className={wrapperClassName}>
        <div className={mediaClassName}>
          <img
            src={imageSrc}
            alt={alt}
            className={`max-w-full h-auto ${imageClassName}`}
            loading="lazy"
          />
        </div>
      </div>
    );
}

export default BannerImage;