import iconPng from "@/assets/icons/Facebook.png";

function Facebook({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="Facebook"
      width={560}
      height={600}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export default Facebook;
