import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";

function Logo({is_footer = "false"}) {
  if (is_footer == "true") {
    return (
      <div className="h-auto w-fit">
        <img
          src={logoDark}
          alt="Footer Logo"
          className="h-10"
        />
      </div>
    );
  } else {
    return (
      <div className="h-auto w-fit">
        <img
          src={logoLight}
          alt="Header Logo"
          className="h-10"
        />
      </div>
    );
  }
}

export default Logo;