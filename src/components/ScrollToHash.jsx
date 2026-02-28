import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          location.pathname
        );
      } else {
        // 🔥 Retry until element is mounted
        requestAnimationFrame(scrollToElement);
      }
    };

    scrollToElement();

  }, [location.hash]);

  return null;
}

export default ScrollToHash;