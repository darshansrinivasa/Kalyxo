import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
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
          requestAnimationFrame(scrollToElement);
        }
      };

      scrollToElement();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

export default ScrollToHash;