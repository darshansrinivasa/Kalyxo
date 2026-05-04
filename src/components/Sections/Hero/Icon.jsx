import shopify from "@/assets/icons/Shopify-specialist.png";
import services from "@/assets/icons/Services.png";
import servicesWhite from "@/assets/icons/services_white.png";
import portfolio from "@/assets/icons/Portfolio.png";
import mail from "@/assets/icons/Mail.png";
import about from "@/assets/icons/About.png";
import bookCalenderPurple from "@/assets/icons/BookAppointmentPurple.png";
import bookCalenderWhite from "@/assets/icons/BookAppointmentWhite.png";
import arrowRightWhite from "@/assets/icons/arrowRightWhite.png";
import arrowRightPurple from "@/assets/icons/arrowRightPurple.png";
import shopifyBold from "@/assets/icons/shopifyBold.png";
import speed from "@/assets/icons/speed.png";
import growth from "@/assets/icons/growth.png";
import scale from "@/assets/icons/scale.png";
import tick from "@/assets/icons/tick.png";

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
  arrowRightWhite,
  arrowRightPurple,
  shopifyBold,
  speed,
  growth,
  scale,
  tick,
  servicesWhite,
};

function Icon({
  iconName,
  alt = "",
  size = 18,
  className = "",
  loading = "lazy",
  decoding = "async",
}) {
  const iconSrc = ICON_MAP[iconName];

  if (!iconSrc) {
    return null;
  }

  const dim = Number(size);
  const w = Number.isFinite(dim) && dim > 0 ? dim : 18;
  const h = w;

  return (
    <img
      src={iconSrc}
      alt={alt}
      width={w}
      height={h}
      className={className}
      loading={loading}
      decoding={decoding}
      {...(alt === "" ? { "aria-hidden": true } : {})}
    />
  );
}

export default Icon;
