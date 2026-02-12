import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div 
      className="min-h-screen
        font-sans
        bg-white
        text-slate-800
        dark:bg-slate-800
        dark:text-slate-100
        transition-colors duration-300"
      >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;