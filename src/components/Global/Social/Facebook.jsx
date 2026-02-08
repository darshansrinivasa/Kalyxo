import iconPng from "@/assets/icons/Facebook.png";

function Facebook({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="Facebook"
      className={className}
    />
  );
}

export default Facebook;