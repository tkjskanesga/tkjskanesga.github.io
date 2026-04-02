import { IoLogoInstagram, IoLogoGithub } from "react-icons/io"

export default function JoinTheCommunity() {
  return (
    <section data-section="join-the-community" className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto select-none">
      <div className="w-full rounded-xl md:rounded-2xl overflow-hidden relative max-md:justify-center flex flex-col md:flex-row items-center min-h-[300px] bg-[#e8e8e8]">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <img
            src="/banner-major-build.png"
            alt="TKJ Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b md:bg-gradient-to-r from-neutral-50 to-transparent max-md:to-white/20 w-full"></div>
        <div className="relative z-10 p-8 md:p-24 flex flex-col items-start justify-center w-full md:w-4/5 h-full">
          <h2 className="w-full max-md:text-center text-5xl font-instrument-serif leading-[1.1] text-zinc-900">Join Our Community.</h2>
          <p className="w-full max-md:text-center font-geist-mono tracking-tight text-zinc-900 mb-4">Let's collaborate and grow together.</p>
          <div className="w-full flex max-md:justify-center gap-3 tracking-tight">
            <a href="https://instagram.com/tkj.skanesga.official/" target="_blank" className="text-xl flex items-center gap-1">
              <IoLogoInstagram />
              <span className="text-sm">@tkj.skanesga.official</span>
            </a>
            <a href="https://github.com/tkjskanesga" target="_blank" className="text-xl flex items-center gap-1">
              <IoLogoGithub />
              <span className="text-sm">@tkjskanesga</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}