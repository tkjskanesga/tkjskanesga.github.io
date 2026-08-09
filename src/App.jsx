import { lazy, Suspense } from "react";
import { ReactLenis } from "lenis/react";
import { ScrollProvider } from "./components/ScrollProvider";

// Meta
import Header from "./meta/Header";
// Section
import Hero from "./section/Hero";

// Lazy load below-the-fold sections
const About = lazy(() => import("./section/About"));
const WhatWeDo = lazy(() => import("./section/WhatWeDo"));
const Fieldwork = lazy(() => import("./section/Fieldwork"));
const JoinTheCommunity = lazy(() => import("./section/JoinTheCommunity"));
const Footer = lazy(() => import("./meta/Footer"));

function SectionFallback() {
  return <div className="w-full py-40" />;
}

export default function App() {
  return (
    <ScrollProvider>
      <ReactLenis
        options={{
          lerp: 0.1,
          duration: 1,
          smooth: true,
          smoothTouch: false,
          wheelMultiplier: 1.2,
          touchMultiplier: 1.2,
        }}
        root
      />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Below-the-fold sections - lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <About />
        <WhatWeDo />
        <Fieldwork />
        <JoinTheCommunity />
        <Footer />
      </Suspense>
    </ScrollProvider>
  );
}
