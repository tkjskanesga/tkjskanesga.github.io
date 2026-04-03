export default function Hero() {
  return (
    <section data-section="hero" className="w-full min-h-[600px] h-dvh md:px-8 max-w-5xl mx-auto select-none">
      <div className="w-full min-h-[600px] h-dvh flex items-center md:gap-2">
        <div className="relative w-full h-full md:h-[520px] md:w-[480px] md:rounded-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 md:hidden" />
          <video src="/profile-tkj.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </div>
        <div className="max-md:absolute w-full md:w-[calc(100%-280px)] px-9 md:px-3 max-md:text-white">
          <h1 className="text-6xl mb-3 font-instrument-serif">Connecting the World, Engineering the Future.</h1>
          <p className="text-neutral-600 max-md:text-neutral-300 font-geist-mono tracking-tight">A glimpse into the world of Telecommunication and Computer Networks, where students master the skills to build, secure, and optimize the digital infrastructure that powers our modern lives.</p>
        </div>
      </div>
    </section>
  );
}