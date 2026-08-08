import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext({ atTop: true, atBottom: false });

export function ScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState({ atTop: true, atBottom: false });

  useEffect(() => {
    function check() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const atTop = scrollY < vh * 0.3;
      const atBottom = scrollY + vh >= docH - vh * 0.3;
      setScrollState({ atTop, atBottom });
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
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
