import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Reveal, { StaggerContainer, StaggerItem } from "../components/Reveal";

function ImageSection({ src = "", alt = "", onClick }) {
  return (
    <StaggerItem className="relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-xl mb-4 bg-neutral-100 cursor-pointer">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full h-full"
        onClick={onClick}
      >
        <div className="absolute w-full h-full z-10 p-5 font-space-grotesk tracking-tight ">
          <span className="inline-block bg-neutral-200/80 text-sm p-1.5 px-3 rounded-md">
            {alt}
          </span>
        </div>
        <img
          loading="lazy"
          src={src}
          alt={alt}
          width="100%"
          className="object-cover w-full h-full grayscale-20"
        />
      </motion.div>
    </StaggerItem>
  );
}

function MobileCarousel({ images, onItemClick }) {
  const [cards, setCards] = useState(() =>
    images.map((img, i) => ({ ...img, id: i })),
  );
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const handleDragStart = () => {
    setIsDragging(false);
  };

  const handleDrag = (_, info) => {
    setIsDragging(true);
    const maxTilt = 15;
    const maxY = 25;
    const rotation = Math.max(
      -maxTilt,
      Math.min(maxTilt, info.offset.x * 0.08),
    );
    const yMove = Math.max(-maxY, Math.min(maxY, info.offset.y * 0.3));
    dragX.set(rotation);
    dragY.set(yMove);
  };

  const handleDragEnd = (_, info, cardId) => {
    const threshold = 60;
    if (Math.abs(info.offset.x) > threshold) {
      setCards((prev) => {
        const idx = prev.findIndex((c) => c.id === cardId);
        const card = prev[idx];
        const rest = prev.filter((c) => c.id !== cardId);
        if (info.offset.x > 0) {
          return [...rest, card];
        }
        return [card, ...rest];
      });
    }
    dragX.set(0);
    dragY.set(0);
    setTimeout(() => setIsDragging(false), 10);
  };

  const handleClick = (card) => {
    if (!isDragging) {
      onItemClick(card);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="relative w-full h-[420px] flex items-center justify-center">
        {cards.map((card, index) => {
          const isTop = index === 0;

          const depth = Math.min(index, 4);
          const scale = 1 - depth * 0.05;
          const rotation = depth * -2;
          const xOffset = depth * -6;
          const opacity = index <= 2 ? 1 : 0;
          const zIndex = cards.length - index;

          return (
            <motion.div
              key={card.id}
              drag={isTop ? true : false}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.4}
              onDragStart={isTop ? handleDragStart : undefined}
              onDrag={isTop ? handleDrag : undefined}
              onDragEnd={
                isTop ? (e, info) => handleDragEnd(e, info, card.id) : undefined
              }
              animate={{
                x: xOffset,
                scale,
                opacity,
                rotate: isTop ? 0 : rotation,
              }}
              exit={{
                x: 300,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                zIndex,
                position: "absolute",
                rotate: isTop ? dragX : rotation,
                translateY: isTop ? dragY : 0,
              }}
              className="aspect-[9/16] h-full max-h-[380px] rounded-2xl overflow-hidden bg-neutral-100 touch-pan-y"
              onClick={() => isTop && handleClick(card)}
            >
              <div className="absolute w-full h-full z-10 p-4 font-space-grotesk tracking-tight">
                <span className="inline-block bg-neutral-200/80 text-sm p-1.5 px-3 rounded-md">
                  {card.alt}
                </span>
              </div>
              <img
                src={card.src}
                alt={card.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-20"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-neutral-800 font-space-grotesk tracking-tight select-none text-center">
        Swipe left or right to see more, click to view full size
      </p>
    </div>
  );
}

function Lightbox({ src, alt, onClose }) {
  const imgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!imgRef.current) return;
    const img = imgRef.current;
    let cancelled = false;

    function onImgLoad() {
      if (cancelled) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const padding = vw < 768 ? 32 : 80;
      const maxW = vw - padding;
      const maxH = vh - padding;

      let w = img.naturalWidth;
      let h = img.naturalHeight;

      if (w > maxW) {
        h = (maxW / w) * h;
        w = maxW;
      }
      if (h > maxH) {
        w = (maxH / h) * w;
        h = maxH;
      }

      requestAnimationFrame(() => {
        if (!cancelled) {
          setDimensions({ width: w, height: h });
        }
      });
    }

    if (img.complete) {
      onImgLoad();
    } else {
      img.addEventListener("load", onImgLoad);
      return () => {
        cancelled = true;
        img.removeEventListener("load", onImgLoad);
      };
    }
  }, [src]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 md:p-10"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-xl overflow-hidden"
          style={{
            width: dimensions.width || "auto",
            height: dimensions.height || "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            loading="lazy"
            ref={imgRef}
            src={src}
            alt={alt}
            className="block w-full h-full"
          />
          <div className="absolute top-3 left-3 bg-black/60 text-white text-sm font-space-grotesk px-3 py-1.5 rounded-md">
            {alt}
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 text-white rounded-full text-lg leading-none hover:bg-black/80 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const images = [
  {
    src: "/working-documentation/pict1-371218cb.webp",
    alt: "CCTV Installation",
  },
  {
    src: "/working-documentation/pict2-c5e7ac27.webp",
    alt: "Fiber Optic Installation",
  },
  {
    src: "/working-documentation/pict3-bf45e279.webp",
    alt: "Network Infrastructure",
  },
  {
    src: "/working-documentation/pict4-4d0933df.webp",
    alt: "Configuration Mikrotik",
  },
  {
    src: "/working-documentation/pict5-e7cc5603.webp",
    alt: "Point-to-Point Training",
  },
  {
    src: "/working-documentation/pict6-551dbe1b.webp",
    alt: "Configuration VoIP",
  },
];

export default function Fieldwork() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      data-section="fieldwork"
      className="w-full py-40 px-8 max-w-7xl mx-auto select-none"
    >
      <Reveal preset="fadeUp">
        <h2 className="text-center text-6xl mb-3 font-instrument-serif">
          Ready for the Industry.
        </h2>
      </Reveal>
      <Reveal preset="fadeUp" delay={0.1}>
        <p className="text-center mb-10 font-space-grotesk tracking-tight text-neutral-600">
          Direct application of technical skills in a real-world work
          environment.
        </p>
      </Reveal>

      {/* Mobile: Swipeable Carousel */}
      <div className="md:hidden">
        <MobileCarousel
          images={images}
          onItemClick={(img) => setLightbox(img)}
        />
      </div>

      {/* Desktop/Tablet: Bento Grid */}
      <StaggerContainer stagger={0.1} className="hidden md:flex gap-4">
        <div className="w-full md:w-1/3 md:pt-10">
          <ImageSection
            src={images[0].src}
            alt={images[0].alt}
            onClick={() => setLightbox(images[0])}
          />
          <ImageSection
            src={images[1].src}
            alt={images[1].alt}
            onClick={() => setLightbox(images[1])}
          />
        </div>
        <div className="w-full md:w-1/3 md:pb-10">
          <ImageSection
            src={images[2].src}
            alt={images[2].alt}
            onClick={() => setLightbox(images[2])}
          />
          <ImageSection
            src={images[3].src}
            alt={images[3].alt}
            onClick={() => setLightbox(images[3])}
          />
        </div>
        <div className="w-full md:w-1/3 md:pt-10">
          <ImageSection
            src={images[4].src}
            alt={images[4].alt}
            onClick={() => setLightbox(images[4])}
          />
          <ImageSection
            src={images[5].src}
            alt={images[5].alt}
            onClick={() => setLightbox(images[5])}
          />
        </div>
      </StaggerContainer>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
