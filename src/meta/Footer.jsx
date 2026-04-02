import { useEffect, useRef } from "react"

export default function Footer() {
  const timeRef = useRef(null)
  useEffect(() => {
    const setYearFunc = () => {
      if (!timeRef.current) {
        setTimeout(setYearFunc, 1000)
        return;
      }
      timeRef.current.textContent = new Date().getFullYear()
    }
    setYearFunc()
  }, [])

  return <>
    <footer className="w-full px-5.5 pb-20">
      <div className="w-full h-[80px] text-neutral-500 text-sm max-w-3xl mx-auto flex items-center justify-center md:justify-between">
        <p className="max-md:hidden">TKJ Skanesga</p>
        <p>© <span ref={timeRef}></span> TKJ Skanesga. All rights reserved.</p>
      </div>
    </footer>
    <div className="fixed bottom-0 left-0 w-full masking-gradation-bottom-to-top h-[170px] pointer-events-none z-100"></div>
  </>
}