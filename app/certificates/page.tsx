import Image from "next/image";
import { Cardo, Philosopher, Gabarito } from "next/font/google";
import Navbar from "../components/navbar";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["700"],
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["700"],
});

const certif = [
  {
    title: "Belajar Dasar Pemrograman Web",
    company: "Dicoding Indonesia",
    link: "/certificates/Dicoding1.pdf",
    year: 2024,
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    company: "Dicoding Indonesia",
    link: "/certificates/Dicoding2.pdf",
    year: 2024,
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    company: "Dicoding Indonesia",
    link: "/certificates/Dicoding3.pdf",
    year: 2024,
  },
  {
    title: "Memulai Pemrograman dengan Dart",
    company: "Dicoding Indonesia",
    link: "/certificates/Dicoding4.pdf",
    year: 2024,
  },
  {
    title: "Belajar Dasar AI",
    company: "Dicoding Indonesia",
    link: "/certificates/Dicoding5.pdf",
    year: 2025,
  },
  {
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    company: "Dicoding Indonesia",
    link: "/certificates/Dicoding6.pdf",
    year: 2025,
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="px-6 py-10 lg:px-20">
        <h1
          className={`${cardo.className} text-center text-3xl md:text-4xl mb-10`}
        >
          Certificates
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certif.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(131,126,128,0.22)] rounded-2xl p-6 flex flex-col items-center text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_10px_#ffffff]"
            >
              <Image
                src="/images/cover/dicodingcover.png"
                alt="Dicoding Certificate"
                width={100}
                height={100}
                className="mb-5 w-20 h-20 object-contain"
              />

              <p
                className={`${philosopher.className} text-sm text-gray-400`}
              >
                {certificate.company}
              </p>

              <h2
                className={`${gabarito.className} text-lg mt-3`}
              >
                {certificate.title}
              </h2>

              <p className="mt-4 text-sm text-cyan-400">
                {certificate.year}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}