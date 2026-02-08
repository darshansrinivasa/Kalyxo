import iconPng from "@/assets/icons/LinkedIn.png";

function LinkedIn({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="LinkedIn"
      className={className}
    />
  );
}

export default LinkedIn;