import logoLight from "@/assets/images/logo-light.png";
import logoDark from "@/assets/images/logo-dark.png";

function Logo() {
  return (
    <div className="h-auto w-fit">
      <img
        src={logoDark}
        alt="Agency Logo"
        className="h-8 dark:hidden"
      />
      <img
        src={logoLight}
        alt="Agency Logo"
        className="h-8 hidden dark:block"
      />
    </div>
  );
}

export default Logo;