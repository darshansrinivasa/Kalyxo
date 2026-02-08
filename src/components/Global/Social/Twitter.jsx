import iconPng from "@/assets/icons/Twitter.png";

function Twitter({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="Twitter"
      className={className}
    />
  );
}

export default Twitter;