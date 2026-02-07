import shopify from "../../../assets/icons/Shopify-specialist.png";
import services from "../../../assets/icons/Services.png";
import portfolio from "../../../assets/icons/Portfolio.png";
import mail from "../../../assets/icons/Mail.png";
import about from "../../../assets/icons/About.png";

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
};

function Icon({ name, alt = "", size = 18 }) {
  const iconSrc = ICON_MAP[name];

  if (!iconSrc) {
    console.warn(`Icon "${name}" not found in ICON_MAP`);
    return null;
  }

  return (
    <img
      src={iconSrc}
      alt={alt || name}
      width={size}
      height={size}
    />
  );
}

export default Icon;