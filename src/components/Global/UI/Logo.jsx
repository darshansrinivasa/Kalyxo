import { Link } from "react-router-dom";
import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";

function Logo({ is_footer = false }) {
  const logoSrc = is_footer ? logoDark : logoLight;
  const altText = is_footer ? "Footer Logo" : "Header Logo";

  return (
    <Link to="/" className="h-auto w-fit block">
      <img
        src={logoSrc}
        alt={altText}
        className="h-10"
      />
    </Link>
  );
}

export default Logo;