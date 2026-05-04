import iconPng from "@/assets/icons/Instagram.webp";

function Instagram({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="Instagram"
      width={570}
      height={570}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export default Instagram;
