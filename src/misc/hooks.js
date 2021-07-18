import { useLayoutEffect, useState } from "react";
export function useResponsive() {
  const [_, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return {
    isMobile:
      media("(min-width: 320px) and (max-width: 480px)") ||
      media("(min-width: 480px) and (max-width: 1024px)"),
  };
}

function media(query) {
  return window.matchMedia(query).matches;
}
