export default function About() {
  return (
    <section data-section="about" className="w-full py-40 px-8 max-w-7xl mx-auto select-none">
      <h2 className="text-center text-6xl mb-3 font-instrument-serif">About Us.</h2>
      <p className="text-center font-geist-mono tracking-tight text-neutral-600">Beyond Computers, We Build Systems.</p>
      <div className="w-full mt-15 flex max-md:flex-wrap gap-4">
        <div className="w-full">
          <p>SMKN 1 Seyegan, popularly known as Skanesga, stands at the forefront of vocational excellence, specifically through our Computer and Network Engineering department. We are dedicated to shaping the next generation of IT professionals by blending rigorous academic foundations with hands-on expertise in computer maintenance and infrastructure. At Skanesga, we don't just teach technology; we cultivate a specialized environment where students master the heartbeat of digital connectivity, ensuring every hardware component and network node operates at its peak performance.</p>
        </div>
        <div className="w-full">
          <p>Our curriculum is meticulously designed to bridge the gap between classroom theory and industrial reality. From the intricate precision of Fiber Optic splicing and MikroTik configurations to the complexity of server virtualization using Proxmox and Debian, our students are trained to be architectural problem-solvers. By integrating digital entrepreneurship and real-world project simulations, we ensure that every graduate is not only a skilled technician but a strategic thinker capable of designing, deploying, and optimizing the future of global network systems.</p>
        </div>
      </div>
    </section>
  );
}