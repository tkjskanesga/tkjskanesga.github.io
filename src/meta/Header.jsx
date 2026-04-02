
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
    <div className="text-sm fixed top-0 left-0 z-100 w-full h-[70px] flex items-center justify-center select-none px-5">
      <header className="w-full max-w-3xl h-[46px] flex items-center justify-between bg-neutral-900 rounded-3xl text-white">
        <div data-action="hero" onClick={GetScrollSection} className="w-[200px] h-full flex items-center justify-start px-3.5 cursor-pointer">
          <img
            src="https://github.com/tkjskanesga.png"
            alt="Logo"
            width={34}
            height={34}
            className="w-[34px] h-[34px] object-contain pointer-events-none"
          />
          <b className="font-bold ml-2 pointer-events-none">TKJ Skanesga</b>
        </div>
        <nav className="w-[calc(100%-200px)] h-full flex items-center justify-end px-3.5">
          {linkList.map((link, index) => (
            <a key={index} data-action={link.action} onClick={GetScrollSection} className="p-1 px-2.5 hover:text-neutral-400 rounded-2xl transition-all duration-300 cursor-pointer">{link.label}</a>
          ))}
        </nav>
      </header>
    </div>
  </>
}