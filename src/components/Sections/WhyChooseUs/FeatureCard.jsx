import Icon from "@/components/Sections/Hero/Icon";

function FeatureCard({ icon, title, description }) {
  return (
    <div
      className={`
        relative rounded-2xl border p-6
        bg-white dark:bg-slate-900
        transition-shadow
        "border-slate-200 dark:border-slate-800"
      `}
    >
      {/* Accent line */}
      <span
        className={`
          absolute left-0 top-6 h-12 w-1 rounded-full
          "bg-purple-400"
        `}
      />

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white">
        <Icon iconName={icon} size={22} />
      </div>

      {/* Content */}
      <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h4>

      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;