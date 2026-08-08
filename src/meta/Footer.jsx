import { useEffect, useRef } from "react"
import { IoLogoInstagram, IoLogoGithub, IoDocumentText } from "react-icons/io5"
import Reveal from "../components/Reveal"

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
    <footer className="w-full px-5.5 pb-40">
      <Reveal preset="fadeUp" className="w-full max-w-3xl mx-auto">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] items-start text-neutral-500">
          <div className="space-y-2">
            <p className="font-semibold text-black">TKJ Skanesga</p>
            <p className="max-w-lg">Learning by doing with telecommunication, network engineering, and professional documentation for real-world student projects.</p>
          </div>
          <ul className="flex flex-col gap-3 justify-center md:justify-end list-none p-0 m-0">
            <li>
              <a href="https://instagram.com/tkj.skanesga.official/" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full transition-colors inline-flex items-center gap-2">
                <IoLogoInstagram className="text-black/80" />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/tkjskanesga" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full transition-colors inline-flex items-center gap-2">
                <IoLogoGithub className="text-black/80" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://tkjskanesga.mintlify.site" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full transition-colors inline-flex items-center gap-2">
                <IoDocumentText className="text-black/80" />
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
      <div className="w-full text-center mt-6 text-neutral-500 text-xs">
        <p>© <span ref={timeRef}>2026</span> TKJ Skanesga. All rights reserved.</p>
      </div>
    </footer>
    <div className="fixed bottom-0 left-0 w-full masking-gradation-bottom-to-top h-[170px] pointer-events-none z-100"></div>
  </>
}
