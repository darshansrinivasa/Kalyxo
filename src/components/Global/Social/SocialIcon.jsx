import { NavLink } from "react-router-dom";

function SocialIcon({label, href, icon: Icon, className = "" }) {
  return (
    <li>
      <NavLink
        to={href}
        className={`
          inline-flex items-center justify-center gap-0 h-10 w-10
          bg-gray-700 dark:bg-gray-400 hover:bg-purple-600 
          transition-colors duration-300
          rounded-lg
          ${className}
        `}
      >
        {Icon && <Icon className="h-4.5 w-4.5" />}
        <span className="hidden">{label}</span>
      </NavLink>
    </li>
  );
}

export default SocialIcon;