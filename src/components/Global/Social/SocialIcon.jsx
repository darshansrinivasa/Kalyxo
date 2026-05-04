import { NavLink } from "react-router-dom";
import { analytics } from "@/utils/analytics";

const isExternalLink = (href) =>
  href?.startsWith("http://") || href?.startsWith("https://");

const linkClassName = `
  inline-flex items-center justify-center gap-0 h-10 w-10
  bg-secondary-800 hover:bg-primary-600
  transition-colors duration-300
  rounded-lg
`;

function SocialIcon({ label, href, icon: Icon, className = "", trackLabel }) {
  const combinedClassName = `${linkClassName} ${className}`.trim();
  const linkTrackId = trackLabel ?? label?.toLowerCase?.() ?? "link";

  if (isExternalLink(href)) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          aria-label={label}
          onClick={() => analytics.linkClick(linkTrackId, href)}
        >
          {Icon && <Icon className="h-4.5 w-4.5" />}
          <span className="hidden">{label}</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      <NavLink
        to={href}
        className={combinedClassName}
        aria-label={label}
      >
        {Icon && <Icon className="h-4.5 w-4.5" />}
        <span className="hidden">{label}</span>
      </NavLink>
    </li>
  );
}

export default SocialIcon;