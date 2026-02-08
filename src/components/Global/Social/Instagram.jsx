import iconPng from "@/assets/icons/Instagram.png";

function Instagram({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="Instagram"
      className={className}
    />
  );
}

export default Instagram;