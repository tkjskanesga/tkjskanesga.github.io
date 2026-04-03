import { Briefcase, AntennaSignal, Bulb, Cube, Database, ArrowUpRightFromSquare } from "@gravity-ui/icons"

const listLearning = [
  {
    icon: <Briefcase />,
    head: "Digital Entrepreneurship",
    title: "Kewirausahaan",
    mean: "Cultivating a tech-driven mindset, focusing on the end-to-end process of web development and digital solutions—from initial architecture to high-value market deployment."
  },
  {
    icon: <AntennaSignal />,
    head: "Wide Area Network",
    title: "Jaringan Berbasis Luas",
    mean: "Mastering the horizons of connectivity through advanced wireless technologies, VoIP systems, Point-to-Point links, and the intricate precision of Fiber Optic installation."
  },
  {
    icon: <Bulb />,
    head: "Network Infrastructure Administration",
    title: "Administrasi Infrastruktur Jaringan",
    mean: <>Advanced specialization in MikroTik enterprise solutions, providing rigorous training in network management and foundational <a href="https://google.com/search?q=MikroTik+Certified+Network+Associate+(MTCNA)" target="_blank" className="underline hover:text-blue-800 inline-flex items-center"><ArrowUpRightFromSquare width={14} className="mr-0.5" />MTCNA</a> standards.</>
  },
  {
    icon: <Database />,
    head: "Network Systems Administration",
    title: "Administrasi Sistem Jaringan",
    mean: "Orchestrating server environments using Debian and Proxmox virtualization, engineered for seamless web deployment and robust application management."
  },
  {
    icon: <Cube />,
    head: "Advanced Network Engineering",
    title: "Jaringan Tingkat Lanjut",
    mean: "Real-world simulations of enterprise-grade network design, encompassing cost estimation, strategic troubleshooting, and long-term optimization for sustainable infrastructure."
  },
]

export default function WhatWeDo() {
  return (
    <section data-section="what-we-do" className="w-full py-40 px-8 max-w-7xl mx-auto select-none">
      <h2 className="text-center text-6xl mb-3 font-instrument-serif">What have we learned?.</h2>
      <p className="text-center font-geist-mono tracking-tight text-neutral-600">We are exploring the key factors that will support the industry.</p>
      <div className="w-full mt-20">
        {listLearning.map((items, key) => (
          <div className="w-full md:flex items-start py-4" key={key}>
            <div className="w-full md:w-[435px] font-geist-mono tracking-tight">
              <div className="w-full flex items-start">
                <span className="mt-1.5">{items.icon}</span>
                <h3 className="ml-3 text-lg font-semibold">{items.head}</h3>
              </div>
              <p className="text-sm text-neutral-600">{items.title}</p>
            </div>
            <div className="w-full md:w-[calc(100%-435px)] max-md:mt-3">
              <p>{items.mean}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}