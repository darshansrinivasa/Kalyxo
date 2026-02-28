import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      // 👇 This fixes your banner cut-off issue
      window.scrollTo({
        top: 0,
        behavior: "instant", // use "auto" if instant not supported
      });
    }
  }, [location]);

  return null;
}

export default ScrollToHash;