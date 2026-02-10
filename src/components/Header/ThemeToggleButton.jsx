function ThemeToggle({ theme, onToggle, className }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      className={`
        relative h-8 w-16 items-center rounded-full
        transition-colors duration-300
        ${isDark ? "bg-slate-800" : "bg-gray-200"}
        ${className}
      `}
    >
      {/* Thumb */}
      <span
        className={`
          inline-flex h-7 w-7 items-center justify-center rounded-full
          bg-white shadow transition-transform duration-300
          ${isDark ? "translate-x-8" : "translate-x-1"}
        `}
      >
        {isDark ? (
          <span className="text-base">🌙</span>
        ) : (
          <span className="text-base">☀️</span>
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;