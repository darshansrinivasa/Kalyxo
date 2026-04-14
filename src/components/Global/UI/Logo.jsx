import { Link } from "react-router-dom";
import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";

function Logo({ is_footer = false }) {
  const altText = is_footer ? "Kalyxo" : "Kalyxo — home";

  return (
    <Link to="/" className="h-auto w-fit block">
      {is_footer ? (
        <img
          src={logoDark}
          alt={altText}
          className="h-10"
        />
      ) : (
        <picture>
          <source
            srcSet={logoDark}
            media="(prefers-color-scheme: dark)"
          />
          <img
            src={logoLight}
            alt={altText}
            className="h-10"
          />
        </picture>
      )}
    </Link>
  );
}

export default Logo;
