import iconPng from "@/assets/icons/Mail.png";

function Mail({ className = "" }) {
  return (
    <img
      src={iconPng}
      alt="Mail"
      className={className}
    />
  );
}

export default Mail;