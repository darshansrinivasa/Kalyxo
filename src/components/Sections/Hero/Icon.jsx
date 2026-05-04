import shopify from "@/assets/icons/Shopify-specialist.webp";
import services from "@/assets/icons/Services.webp";
import servicesWhite from "@/assets/icons/services_white.webp";
import portfolio from "@/assets/icons/Portfolio.webp";
import mail from "@/assets/icons/Mail.webp";
import about from "@/assets/icons/About.webp";
import bookCalenderPurple from "@/assets/icons/BookAppointmentPurple.webp";
import bookCalenderWhite from "@/assets/icons/BookAppointmentWhite.webp";
import arrowRightWhite from "@/assets/icons/arrowRightWhite.webp";
import arrowRightPurple from "@/assets/icons/arrowRightPurple.webp";
import shopifyBold from "@/assets/icons/shopifyBold.webp";
import speed from "@/assets/icons/speed.webp";
import growth from "@/assets/icons/growth.webp";
import scale from "@/assets/icons/scale.webp";
import tick from "@/assets/icons/tick.webp";

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
