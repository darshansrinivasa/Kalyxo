import { NavLink } from "react-router-dom";

const isExternalLink = (href) =>
  href?.startsWith("http://") || href?.startsWith("https://");

const linkClassName = `
  inline-flex items-center justify-center gap-0 h-10 w-10
  bg-gray-700 hover:bg-purple-600 
  transition-colors duration-300
  rounded-lg
`;

function SocialIcon({ label, href, icon: Icon, className = "" }) {
  const combinedClassName = `${linkClassName} ${className}`.trim();

  if (isExternalLink(href)) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          aria-label={label}
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