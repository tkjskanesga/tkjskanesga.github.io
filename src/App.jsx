import { ReactLenis } from "lenis/react";

// Meta
import Header from "./meta/Header";
import Footer from "./meta/Footer";
// Section
import Hero from "./section/Hero";
import About from "./section/About";
import WhatWeDo from "./section/WhatWeDo";
import Fieldwork from "./section/Fieldwork";
import JoinTheCommunity from "./section/JoinTheCommunity";

export default function App() {
  return (
    <>
      <ReactLenis
        options={{
          lerp: 0.1,
          duration: 0.6,
          smooth: true,
          smoothTouch: false,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.2,
        }}
        root
      />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* What We Do */}
      <WhatWeDo />
      {/* The Fieldwork */}
      <Fieldwork />
      {/* Join the Community */}
      <JoinTheCommunity />
      {/* Footer */}
      <Footer />
    </>
  );
}
