import iconPng from "@/assets/icons/LinkedIn.png";

function LinkedIn({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="LinkedIn"
      width={340}
      height={340}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export default LinkedIn;
