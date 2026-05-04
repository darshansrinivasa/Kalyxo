import iconPng from "@/assets/icons/Twitter.webp";

function Twitter({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="Twitter"
      width={550}
      height={550}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export default Twitter;
