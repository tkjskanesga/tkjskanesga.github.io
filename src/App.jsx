import { ReactLenis } from "lenis/react";

import Header from "./meta/Header";
import Footer from "./meta/Footer";

export default function App() {
  return (
    <>
      <ReactLenis
        options={{
          lerp: 0.2,
          duration: 0.6,
          smooth: true,
          smoothTouch: false,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.7,
        }}
        root
      />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section data-section="hero">
        <div className="w-full h-screen flex items-center justify-center">
          <p>Example Hero Section</p>
        </div>
      </section>
      {/* About Section */}
      <section data-section="about">
        <div className="w-full h-screen flex items-center justify-center">
          <p>Example About Section</p>
        </div>
      </section>
      {/* What We Do */}
      <section data-section="what-we-do">
        <div className="w-full h-screen flex items-center justify-center">
          <p>Example What We Do Section</p>
        </div>
      </section>
      {/* The Fieldwork */}
      <section data-section="fieldwork">
        <div className="w-full h-screen flex items-center justify-center">
          <p>Example Fieldwork Section</p>
        </div>
      </section>
      {/* Join the Community */}
      <section data-section="join-the-community">
        <div className="w-full h-screen flex items-center justify-center">
          <p>Example Join the Community Section</p>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
