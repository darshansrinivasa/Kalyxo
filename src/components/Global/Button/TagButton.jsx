import Icon from "../UI/Icon";

function TagButton({ text, icon }) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-1.5
        border
        border-gray-200
        dark:border-slate-700
        rounded-full
        bg-white
        dark:bg-slate-800
        shadow-sm
      "
    >
      {icon}
      <span className="
        text-sm
        font-medium
        text-gray-700
        dark:text-slate-200
      ">
        {text}
      </span>
    </div>
  );
}

export default TagButton;