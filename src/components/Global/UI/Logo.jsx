import { Link } from "react-router-dom";
import logoLight from "@/assets/images/logo-light.webp";
import logoDark from "@/assets/images/logo-dark.webp";

function Logo({ is_footer = false }) {
  const loading = is_footer ? "lazy" : "eager";

  return (
    <Link to="/" className="h-auto w-fit block">
      {is_footer ? (
        <img
          src={logoDark}
          alt="Darshan logo"
          className="h-10 w-auto"
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
            alt="Darshan logo"
            className="h-10 w-auto"
            loading={loading}
            decoding="async"
          />
        </picture>
      )}
    </Link>
  );
}

export default Logo;
