import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HASH_SCROLL_MAX_FRAMES = 90;

function ScrollToHash() {
  const location = useLocation();
  const prevScrollRef = useRef({
    pathname: location.pathname,
    hash: location.hash,
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      let frames = 0;

      const scrollToElement = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }

        frames += 1;
        if (frames < HASH_SCROLL_MAX_FRAMES) {
          requestAnimationFrame(scrollToElement);
        }
      };

      scrollToElement();
      prevScrollRef.current = {
        pathname: location.pathname,
        hash: location.hash,
      };
      return;
    }

    const pathChanged =
      prevScrollRef.current.pathname !== location.pathname;

    if (pathChanged) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    prevScrollRef.current = {
      pathname: location.pathname,
      hash: location.hash,
    };
  }, [location.pathname, location.hash]);

  return null;
}

export default ScrollToHash;