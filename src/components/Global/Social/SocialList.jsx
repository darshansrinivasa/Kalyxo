import InstagramIcon from "@/components/Global/Social/Instagram";
import TwitterIcon from "@/components/Global/Social/Twitter";
import LinkedInIcon from "@/components/Global/Social/LinkedIn";
import FacebookIcon from "@/components/Global/Social/Facebook";


import SocialIcon from "./SocialIcon";

const SOCIAL_CONFIG = {
  instagram: {
    label: "Instagram",
    icon: InstagramIcon,
  },
  twitter: {
    label: "Twitter",
    icon: TwitterIcon,
  },
  linkedin: {
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  facebook: {
    label: "Facebook",
    icon: FacebookIcon,
  },
};

function SocialList({ className = "", socials = {} }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(socials).map(([key, href]) => {
        const config = SOCIAL_CONFIG[key];

        if (!config || !href) return null;

        return (
          <SocialIcon
            label={config.label}
            href={href}
            icon={config.icon}
            key={key}
            className="border-bg-gray-50"
          />
        );
      })}
    </div>
  );
}

export default SocialList;