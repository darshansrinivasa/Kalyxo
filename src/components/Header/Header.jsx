import Logo from "../Global/UI/Logo";
import NavList from "./Nav/NavList";
import BookFreeCallButton from "../Global/Button/BookCallButton";
import ThemeToggle from "./ThemeToggleButton";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };


  return (
    <header className="border-b border-gray-200 dark:border-slate-800 w-full">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10 justify-between w-full">
          <Logo />
          <NavList />
          <div className="flex items-center gap-4">
            <ThemeToggle
              theme={theme}
              onToggle={handleToggleTheme}
            />
            <BookFreeCallButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;