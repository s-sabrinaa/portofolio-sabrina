"use client";

import Image from "next/image";
import { Dot } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Mulish, Cardo } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400"],
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["700"],
});

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
];

const feature = [
  {
    poin: "Homepage",
    ex: "Halaman utama menampilkan konsep dan identitas cafe melalui desain visual yang menarik. Pengunjung dapat melihat gambaran umum mengenai cafe, highlight produk unggulan, serta navigasi menuju berbagai bagian website.",
  },
  {
    poin: "Product Showcase",
    ex: "Menampilkan berbagai produk yang tersedia pada cafe, seperti cake, minuman berbahan strawberry, jam, dan produk lainnya. Setiap produk ditampilkan dengan gambar, nama, serta informasi singkat untuk memberikan gambaran kepada pengunjung mengenai menu yang ditawarkan.",
  },
  {
    poin: "About Cafe",
    ex: "Halaman ini berisi informasi mengenai konsep cafe, cerita singkat mengenai bisnis, serta nilai yang ingin diberikan kepada pelanggan. Bagian ini membantu membangun branding dan identitas dari cafe.",
  },
  {
    poin: "Customer Reviews",
    ex: "Menyediakan section ulasan pelanggan yang menampilkan feedback dan pengalaman pengunjung terhadap produk maupun pelayanan cafe. Fitur ini bertujuan untuk membangun kepercayaan calon pelanggan dengan memberikan gambaran mengenai kepuasan pelanggan sebelumnya melalui tampilan rating, komentar, dan informasi pendukung lainnya.",
  },
  {
    poin: "Contact Section",
    ex: "Menyediakan informasi kontak dan lokasi cafe agar pengunjung dapat mengetahui cara menghubungi atau mengunjungi cafe.",
  },
];

export default function ProjectDetail() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-[rgba(170,170,170,0.55)]">
      <div className="relative">
        {/* Hero */}
        <motion.div
          style={{ scale, opacity }}
          className="sticky top-0 h-62.5 sm:h-87.5 md:h-112.5 lg:h-150"
        >
          <Image
            src="/images/cover/berry.png"
            alt="Strawberry Cafe Website"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <div
          className={`${mulish.className} relative bg-[#202020] rounded-t-3xl px-6 py-10 md:px-10 lg:px-20 text-justify`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Strawberry-Themed Cafe Website
              </h1>

              <p className="text-gray-400 mt-2">
                Front End Developer
              </p>
            </div>

            <a
              href="https://ui-website-strawberry.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black px-6 py-3 rounded-full flex items-center justify-center gap-2 w-fit transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_8px_#ffffff]"
            >
              <Dot className="text-green-400" />
              View Project
            </a>
          </div>

          {/* Overview */}
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:flex-2">
              <h2
                className={`${cardo.className} text-2xl md:text-3xl mb-5`}
              >
                Overview
              </h2>

              <p className="leading-8 text-gray-300">
                Strawberry Cafe Website merupakan sebuah website landing page
                yang dirancang untuk menampilkan konsep bisnis cafe dengan tema
                produk berbahan dasar strawberry. Website ini dibuat sebagai
                representasi digital sebuah cafe yang menjual berbagai macam
                produk seperti strawberry cake, strawberry milk, strawberry jam,
                dan berbagai menu lainnya.
              </p>

              <br />

              <p className="leading-8 text-gray-300">
                Project ini berfokus pada pembuatan tampilan website yang
                menarik, modern, dan responsif dengan mengutamakan pengalaman
                pengguna dalam menjelajahi informasi produk serta konsep cafe.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="lg:flex-1">
              <h2
                className={`${cardo.className} text-2xl md:text-3xl mb-5`}
              >
                Technology Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <section className="mt-16">
            <h2
              className={`${cardo.className} text-center text-2xl md:text-3xl mb-3`}
            >
              Features
            </h2>

            <p className="text-center text-gray-400 mb-8">
              Beberapa fitur utama yang tersedia pada project ini antara lain:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {feature.map((fea) => (
                <div
                  key={fea.poin}
                  className="bg-black/50 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_10px_#22d3ee]"
                >
                  <h3 className="text-cyan-300 text-lg font-semibold text-center mb-3">
                    {fea.poin}
                  </h3>

                  <p className="text-gray-300 leading-7">
                    {fea.ex}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Documentation */}
          <section className="mt-20 flex flex-col items-center">
            <h2
              className={`${cardo.className} text-2xl md:text-3xl mb-8`}
            >
              Project Documentation
            </h2>

            <Image
              src="/images/resultpage/berry/berryresult.png"
              alt="Strawberry Cafe Website Documentation"
              width={1200}
              height={700}
              className="w-full max-w-5xl h-auto rounded-xl shadow-lg transition duration-300 hover:scale-[1.02]"
            />
          </section>
        </div>
      </div>
    </div>
  );
}