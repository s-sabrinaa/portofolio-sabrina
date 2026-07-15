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
  "Bootstrap",
];

const feature = [
  {
    poin: "Login Interface",
    ex: "Menyediakan tampilan halaman login dengan elemen utama seperti input email/username, password, tombol login, serta opsi tambahan yang mendukung pengalaman pengguna saat melakukan proses autentikasi.",
  },
  {
    poin: "Spotify Branding",
    ex: "Mengimplementasikan elemen visual khas Spotify seperti penggunaan warna, logo, typography, dan gaya desain minimalis agar tampilan website memiliki kesan yang mirip dengan platform aslinya.",
  },
  {
    poin: "Responsive Design",
    ex: "Menerapkan desain responsif agar halaman login dapat menyesuaikan tampilan pada berbagai perangkat, mulai dari desktop, tablet, hingga smartphone.",
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
            src="/images/cover/spotify.png"
            alt="Spotify Inspired Login Page"
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
                Spotify Inspired Login Page
              </h1>

              <p className="text-gray-400 mt-2">
                Front End Developer
              </p>
            </div>

            <a
              href="https://clone-login-spotify.vercel.app/"
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
                Spotify Login Page Clone merupakan sebuah project frontend yang
                dibuat untuk mereplikasi tampilan halaman login dari platform
                streaming musik Spotify. Project ini berfokus pada pembuatan
                antarmuka yang memiliki tampilan modern, minimalis, dan
                menyerupai desain asli dengan memperhatikan detail seperti
                layout, warna, typography, serta penempatan setiap elemen
                visual.
              </p>

              <br />

              <p className="leading-8 text-gray-300">
                Project ini dibuat sebagai latihan dalam memahami proses
                membangun sebuah halaman autentikasi menggunakan teknologi
                frontend, mulai dari penyusunan struktur halaman hingga
                implementasi desain yang responsif pada berbagai ukuran layar.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              src="/images/resultpage/spotifylgn/lgnspotify.png"
              alt="Spotify Login Page Documentation"
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