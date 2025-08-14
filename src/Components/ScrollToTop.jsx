import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, key } = useLocation(); // 'key' changes even when clicking the same route

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, key]); // Depend on 'key' to detect navigation even on the same route

  return null;
};

export default ScrollToTop;