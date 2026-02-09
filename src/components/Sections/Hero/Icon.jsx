import shopify from "@/assets/icons/Shopify-specialist.png";
import services from "@/assets/icons/Services.png";
import portfolio from "@/assets/icons/Portfolio.png";
import mail from "@/assets/icons/Mail.png";
import about from "@/assets/icons/About.png";
import bookCalenderPurple from "@/assets/icons/BookAppointmentPurple.png";
import bookCalenderWhite from "@/assets/icons/BookAppointmentWhite.png";

/**
 * Central icon registry
 * key → image source
 */
const ICON_MAP = {
  shopify,
  services,
  portfolio,
  about,
  mail,
  bookCalenderWhite,
  bookCalenderPurple,

};

function Icon({ iconName, alt = "", size = 18 }) {
  const iconSrc = ICON_MAP[iconName];

  if (!iconSrc) {
    console.warn(`Icon "${iconName}" not found in ICON_MAP`);
    return null;
  }

  return (
    <img
      src={iconSrc}
      alt={alt || iconName}
      width={size}
      height={size}
    />
  );
}

export default Icon;