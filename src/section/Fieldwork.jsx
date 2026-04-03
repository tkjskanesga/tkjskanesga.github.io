function ImageSection({ src = "", alt = "" }) {
  return <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-xl mb-4 bg-neutral-100 duration-150">
    <div className="absolute w-full h-full z-10 p-5 font-geist-mono tracking-tight">
      <span className="inline-block bg-neutral-200/80 text-sm p-1.5 px-3 rounded-md">{alt}</span>
    </div>
    <img
      src={src}
      alt={alt}
      width="100%"
      className="object-cover w-full h-full grayscale-20"
    />
  </div>
}

export default function Fieldwork() {
  return (
    <section data-section="fieldwork" className="w-full py-40 px-8 max-w-7xl mx-auto select-none">
      <h2 className="text-center text-6xl mb-3 font-instrument-serif">Ready for the Industry.</h2>
      <p className="text-center mb-10 font-geist-mono tracking-tight text-neutral-600">Direct application of technical skills in a real-world work environment.</p>
      <div className="w-full md:flex gap-4">
        <div className="w-full md:w-1/3 md:pt-10">
          <ImageSection
            src="/pict1.jpg"
            alt="CCTV Installation"
          />
          <ImageSection
            src="/pict2.jpg"
            alt="Fiber Optic Installation"
          />
        </div>
        <div className="w-full md:w-1/3 md:pb-10">
          <ImageSection
            src="/pict3.jpg"
            alt="Network Infrastructure"
          />
          <ImageSection
            src="/pict4.jpg"
            alt="Configuration Mikrotik"
          />
        </div>
        <div className="w-full md:w-1/3 md:pt-10">
          <ImageSection
            src="/pict5.jpg"
            alt="Point-to-Point Training"
          />
          <ImageSection
            src="/pict6.jpg"
            alt="Configuration VoIP"
          />
        </div>
      </div>
    </section>
  );
}