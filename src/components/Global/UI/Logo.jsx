import { Link } from "react-router-dom";
import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";

function Logo({ is_footer = false }) {
  const altText = is_footer ? "Kalyxo" : "Kalyxo — home";
  const loading = is_footer ? "lazy" : "eager";

  return (
    <Link to="/" className="h-auto w-fit block">
      {is_footer ? (
        <img
          src={logoDark}
          alt={altText}
          width={1200}
          height={400}
          className="h-10"
          loading={loading}
          decoding="async"
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
            width={1200}
            height={400}
            className="h-10"
            loading={loading}
            decoding="async"
          />
        </picture>
      )}
    </Link>
  );
}

export default Logo;
