"use client";
import Navbar from './components/navbar';
import Link from 'next/link'
import Image from 'next/image'
import { Dot, Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Bodoni_Moda_SC, Orbitron, Exo, Mulish, Cardo, Changa } from "next/font/google";
import { motion } from 'framer-motion';

const exo = Exo({
  subsets: ["latin"],
  weight: ["400"],
})
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400"],
})
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
});
const bodoni_moda_SC = Bodoni_Moda_SC({
  subsets: ["latin"],
  weight: ["400"],
})
const cardo = Cardo({
  subsets: ["latin"],
  weight: ["700"],
})
const changa = Changa({
  subsets: ["latin"],
  weight: ["500"],
})

const techStack = [
  {
    name: "HTML",
    image: "/images/tech/HTML.png",
    size: 70,
  },
  {
    name: "CSS",
    image: "/images/tech/CSS.png",
    size: 70,
  },
  {
    name: "JavaScript",
    image: "/images/tech/js.jpg",
    size: 50,
  },
  {
    name: "PHP",
    image: "/images/tech/PHP.png",
    size: 70,
  },
  {
    name: "MySQL",
    image: "/images/tech/mysql.jpg",
    size: 50,
  },
  {
    name: "Git",
    image: "/images/tech/Git.png",
    size: 70,
  },
  {
    name: "Laravel",
    image: "/images/tech/Laravel.png",
    size: 50,
  },
  {
    name: "React",
    image: "/images/tech/React.png",
    size: 70,
  },
  {
    name: "Next",
    image: "/images/tech/next.png",
    size: 70,
  },
  {
    name: "Tailwind",
    image: "/images/tech/Tailwind.png",
    size: 70,
  },
  {
    name: "Bootstrap",
    image: "/images/tech/Bootstrap.png",
    size: 70,
  },
  {
    name: "VS Code",
    image: "/images/tech/Vsc.png",
    size: 60,
  },
];

const projects = [
  {
    cover: "/images/cover/Psmp.png",
    w: 350,
    h: 150,
    title: "Sistem Informasi Website Profile Sekolah",
    tech: ["Laravel", "HTML", "CSS", "Javascript", "Bootstrap"],
    link: "/project/smp/"

  },
  {
    cover: "/images/cover/berry.png",
    w: 350,
    h: 150,
    title: "Strawberry-Themed Cafe Website",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "/project/berrysite"
  },
  {
    cover: "/images/cover/spotify.png",
    w: 350,
    h: 170,
    title: "Spotify Inspired Login Page ",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "/project/spotifyLogin"

  },
];

const experiences = [
  {
    year: "2025",
    role: "Information Technology Teacher",
    company: "SMA Negeri 1 Sanga-Sanga",
    desc: "Teaching informatics and introducing programming concepts, web development, and technology fundamentals to students.",
    tech: [
      "Programming",
      "Web Development",
      "Computer Science"
    ]
  },
  {
    year: "2025-2026",
    role: "Web Developer",
    company: "SMP Negeri 14 Samarinda",
    desc: "Developed a school profile information system website to provide accessible information about school programs, facilities, and activities.",
    tech: [
      "Laravel",
      "MySQL",
      "Bootstrap"
    ]
  },
  {
    year: "2023 - Present",
    role: "Independent Developer",
    company: "Personal Projects",
    desc: "Building small-scale projects to improve programming skills and exploring modern web technologies. All projects are documented and published on GitHub.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "GitHub"
    ]
  }
]

export default function Home() {
  return (
    <div className={`${mulish.className} bg-[#202020]`}>

      <div>
        <Navbar />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-10 lg:px-20">

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <p className="text-base md:text-lg lg:text-xl">
            Hi, I'm
          </p>

          <h2
            className={`${bodoni_moda_SC.className} text-3xl md:text-5xl lg:text-6xl leading-tight`}
          >
            SABRINA ALIFIA PUTRI MENTARI
          </h2>

          <p className="text-lg md:text-2xl lg:text-3xl">
            Software Engineer | Web Developer | Laravel Developer
          </p>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Saya membangun aplikasi web yang fungsional, bersih, dan efisien dengan
            fokus pada solusi nyata serta pengalaman pengguna terbaik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <a
              href="/cv/CV - Sabrina.pdf"
              download
              className="px-6 py-3 bg-black text-white rounded-full transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_8px_#ffffff] text-center"
            >
              Download CV
            </a>

            <a
              href="https://github.com/s-sabrinaa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-full transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_8px_#ffffff] text-center"
            >
              View Github
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/Profil.JPG"
            alt="Sabrina"
            width={500}
            height={500}
            className="w-64 sm:w-80 md:w-96 lg:w-full max-w-md h-auto rounded-full"
          />
        </div>

      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-6 py-10 lg:px-20">

        {/* About Me */}
        <div className="flex-1">
          <h1
            className={`${cardo.className} flex items-center gap-2 mb-5 text-2xl md:text-3xl`}
          >
            <Dot />
            About Me
          </h1>

          <p className="text-justify text-sm md:text-base leading-8 text-gray-300">
            Halo, saya Sabrina, seorang web developer yang memiliki ketertarikan
            dalam membangun website modern, responsif, dan mudah digunakan. Saya
            senang mengubah ide menjadi sebuah produk digital melalui desain yang
            menarik dan kode yang terstruktur.
            <br />
            <br />
            Saya memiliki pengalaman dalam menggunakan teknologi seperti React,
            Next.js, Laravel, dan Tailwind CSS untuk membuat berbagai aplikasi
            berbasis web. Saya juga terus mempelajari teknologi baru, meningkatkan
            kemampuan problem solving, dan mengembangkan skill di bidang software
            development.
            <br />
            <br />
            Saat ini saya terus mengembangkan kemampuan saya dalam bidang full-stack
            development dan terbuka untuk kesempatan belajar serta berkontribusi
            dalam membuat solusi digital yang bermanfaat.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex-1">
          <h1
            className={`${cardo.className} flex items-center gap-2 mb-5 text-2xl md:text-3xl`}
          >
            <Dot />
            Tech Stack
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-[rgba(201,201,201,0.5)] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_8px_#4682b4]"
              >
                <Image
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  width={tech.size}
                  height={tech.size}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />

                <p className="text-sm md:text-base text-center">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="px-6 py-12 lg:px-20">
        <h1
          className={`${cardo.className} text-center mb-10 text-3xl md:text-4xl`}
        >
          PROJECTS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="bg-[rgba(131,126,128,0.22)] rounded-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_10px_#ffffff]"
            >
              <Image
                src={project.cover}
                alt={project.title}
                width={project.w}
                height={project.h}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h2 className="text-lg font-semibold text-center">
                  {project.title}
                </h2>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-700 px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/project"
            className="px-8 py-3 bg-blue-950 rounded-full transition duration-300 hover:bg-blue-800 hover:-translate-y-1"
          >
            View All Projects
          </Link>
        </div>
      </div>
      <motion.div
        className="px-6 py-12 lg:px-20"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h1
          className={`${cardo.className} text-center text-3xl md:text-4xl mb-10`}
        >
          Experience
        </h1>

        <div className="flex flex-col gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(67,67,67,0.65)] rounded-2xl shadow-[0_0_8px_#87cefa] overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-zinc-700 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

                <p className="ml-3 text-sm text-zinc-400">
                  experience.sh
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                  <h3
                    className={`${changa.className} text-xl md:text-2xl`}
                  >
                    {item.role}
                  </h3>

                  <p className="text-sm md:text-base text-gray-400">
                    {item.year}
                  </p>
                </div>

                <p className="font-medium text-lg">
                  {item.company}
                </p>

                <p className="mt-2 text-gray-300 leading-7">
                  {item.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-700 px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <footer className="bg-black px-6 py-10 lg:px-20">
        {/* Logo */}
        <div className={`${orbitron.className} text-center text-white`}>
          <h2 className="text-4xl md:text-5xl">SAPM</h2>

          <p className="mt-2 text-xs md:text-sm text-zinc-400 max-w-xl mx-auto">
            Building modern web experiences with code, creativity, and curiosity.
          </p>

          <hr className="mt-6 border-zinc-700" />
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 py-8">
          <Link
            href="/project"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <Dot />
            Project
          </Link>

          <Link
            href="/certificates"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <Dot />
            Certificates
          </Link>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 md:gap-10 text-xl">
          <a
            href="https://github.com/s-sabrinaa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full transition duration-300 hover:bg-cyan-500 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/sabrinaalf_?igsh=c2trOWgzb3g5dzR5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full transition duration-300 hover:bg-cyan-500 hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:sabrinaalifia06@gmail.com"
            className="bg-gray-700 p-3 rounded-full transition duration-300 hover:bg-cyan-500 hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs md:text-sm text-zinc-500 mt-8">
          © {new Date().getFullYear()} Sabrina Alifia Putri Mentari. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}