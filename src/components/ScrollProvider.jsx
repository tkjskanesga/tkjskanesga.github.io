import { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext({ atTop: true, atBottom: false });

export function ScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState({
    atTop: true,
    atBottom: false,
  });
  const cachedHeight = useRef(0);
  const lastUpdate = useRef(0);

  useEffect(() => {
    function updateHeight() {
      cachedHeight.current = document.documentElement.scrollHeight;
    }

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(document.documentElement);

    function check() {
      const now = Date.now();
      if (now - lastUpdate.current < 100) return;
      lastUpdate.current = now;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docH =
        cachedHeight.current || document.documentElement.scrollHeight;
      const atTop = scrollY < vh * 0.3;
      const atBottom = scrollY + vh >= docH - vh * 0.3;
      setScrollState({ atTop, atBottom });
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      window.removeEventListener("scroll", check);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollPosition() {
  return useContext(ScrollContext);
}
