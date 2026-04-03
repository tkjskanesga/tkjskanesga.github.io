import { useState } from "react"
import { motion } from "framer-motion"

const linkList = [
  {
    action: "about",
    label: "About"
  },
  {
    action: "what-we-do",
    label: "What We Do"
  },
  {
    action: "fieldwork",
    label: "Fieldwork"
  },
  {
    action: "join-the-community",
    label: "Community"
  },
]

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  function GetScrollSection(e) {
    const target = e.target.getAttribute("data-action")
    const getTarget = document.querySelector(`[data-section="${target}"]`)

    if (!getTarget) return;
    getTarget.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  return <>
    <div className="w-full h-[170px] masking-gradation-top-to-bottom z-100 fixed top-0 left-0 select-none pointer-events-none" />
    <div className="text-sm fixed top-0 left-0 z-100 w-full h-[70px] flex items-start justify-center select-none px-5 py-4">
      <motion.header 
        initial={{ height: 46 }}
        animate={{ height: navOpen ? "auto" : 46 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full max-w-3xl flex flex-wrap items-start justify-between bg-neutral-900 rounded-3xl text-white overflow-hidden"
      >
        <div data-action="hero" onClick={GetScrollSection} className="w-[calc(100%-62px)] h-[46px] md:w-[200px] flex items-center justify-start px-3.5 cursor-pointer">
          <img
            src="https://github.com/tkjskanesga.png"
            alt="Logo"
            width={34}
            height={34}
            className="w-[34px] h-[34px] object-contain pointer-events-none"
          />
          <b className="font-bold ml-2 pointer-events-none">TKJ Skanesga</b>
        </div>
        <div className="md:hidden w-[62px] h-[46px] flex items-center justify-center p-1 pr-2">
          <button onClick={() => setNavOpen(!navOpen)} className="w-[36px] h-[36px] flex items-center justify-center p-2">
            <div className="w-full h-[14px] flex flex-col items-center justify-between relative">
              <motion.span 
                animate={{ rotate: navOpen ? 45 : 0, top: navOpen ? 6 : 0 }} 
                className="w-full h-[2px] bg-white rounded-md absolute left-0 origin-center"
              ></motion.span>
              <motion.span 
                animate={{ rotate: navOpen ? -45 : 0, top: navOpen ? 6 : 12 }} 
                className="w-full h-[2px] bg-white rounded-md absolute left-0 origin-center"
              ></motion.span>
            </div>
          </button>
        </div>
        <nav className="w-full md:w-[calc(100%-200px)] max-md:pb-3 max-md:mt-1 h-full md:h-[46px] flex flex-wrap items-center justify-end px-3.5 origin-top">
          {linkList.map((link, index) => (
            <a key={index} data-action={link.action} onClick={GetScrollSection} className="p-1 px-2.5 hover:text-neutral-400 rounded-2xl transition-all duration-300 cursor-pointer max-md:block max-md:w-full max-md:py-2">{link.label}</a>
          ))}
        </nav>
      </motion.header>
    </div>
  </>
}