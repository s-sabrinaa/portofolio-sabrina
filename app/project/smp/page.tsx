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
  "Laravel",
  "MySQL",
  "Bootstrap",
];

const feature = [
  {
    poin: "Home",
    ex: "Halaman utama berfungsi sebagai pusat informasi yang memberikan gambaran singkat mengenai sekolah. Pada halaman ini, pengunjung dapat melihat informasi penting, berita terbaru, serta navigasi menuju berbagai halaman lainnya sehingga memudahkan dalam menjelajahi website.",
  },
  {
    poin: "Visi & Misi",
    ex: "Halaman ini menampilkan visi dan misi sekolah sebagai landasan dalam penyelenggaraan pendidikan. Informasi disusun secara jelas agar pengunjung dapat memahami tujuan, nilai, serta arah pengembangan sekolah.",
  },
  {
    poin: "Profil Sekolah",
    ex: "Berisi informasi lengkap mengenai sekolah, seperti sejarah singkat, identitas sekolah, serta informasi umum lainnya. Halaman ini menjadi media bagi masyarakat untuk mengenal sekolah secara lebih mendalam.",
  },
  {
    poin: "Profil Guru & Staff",
    ex: "Menampilkan daftar guru dan tenaga kependidikan yang aktif di sekolah beserta informasi pendukung seperti nama, jabatan, dan foto. Data dapat dikelola melalui dashboard admin sehingga informasi yang ditampilkan selalu diperbarui.",
  },
  {
    poin: "Ekstrakurikuler",
    ex: "Menyediakan informasi mengenai berbagai kegiatan ekstrakurikuler yang tersedia di sekolah. Setiap kegiatan dilengkapi dengan deskripsi sehingga calon siswa maupun orang tua dapat mengetahui pilihan kegiatan yang dapat diikuti.",
  },
  {
    poin: "Berita",
    ex: "Fitur berita digunakan untuk mempublikasikan informasi, pengumuman, maupun dokumentasi kegiatan sekolah. Admin dapat menambah, mengubah, dan menghapus berita sehingga informasi yang disampaikan kepada pengunjung selalu terbaru.",
  },
  {
    poin: "Prestasi",
    ex: "Halaman prestasi menampilkan berbagai pencapaian yang diraih oleh siswa maupun sekolah, baik di bidang akademik maupun non-akademik. Fitur ini bertujuan untuk mendokumentasikan serta memperkenalkan prestasi sekolah kepada masyarakat.",
  },
  {
    poin: "Kontak",
    ex: "Menyediakan informasi kontak resmi sekolah yang dapat digunakan oleh pengunjung untuk menghubungi pihak sekolah. Halaman ini memudahkan komunikasi antara sekolah dengan siswa, orang tua, maupun masyarakat umum.",
  },
  {
    poin: "Login Admin",
    ex: "Sistem menyediakan halaman login yang memungkinkan administrator masuk ke dashboard menggunakan akun yang telah terdaftar. Fitur autentikasi ini memastikan hanya pengguna yang memiliki hak akses yang dapat mengelola data pada website.",
  },
];

export default function ProjectDetail() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="bg-[rgba(170,170,170,0.55)] min-h-screen">
      <div className="relative">
        {/* Hero */}
        <motion.div
          style={{ scale, opacity }}
          className="sticky top-0 h-62.5 sm:h-87.5 md:h-112.5 lg:h-150"
        >
          <Image
            src="/images/cover/Psmp.png"
            alt="cover"
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
                Sistem Informasi Website Profil Sekolah
              </h1>

              <p className="text-gray-400 mt-2">
                Full Stack Developer
              </p>
            </div>

            <a
              href="https://smpn14samarinda.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black px-6 py-3 rounded-full flex items-center justify-center gap-2 w-fit transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_8px_#ffffff]"
            >
              <Dot className="text-green-400" />
              View Website
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
                Sistem Informasi Website Profil Sekolah merupakan sebuah website
                yang dirancang untuk memberikan informasi mengenai profil
                sekolah secara digital. Website ini bertujuan untuk mempermudah
                masyarakat, siswa, dan pihak sekolah dalam mendapatkan informasi
                terkait sekolah seperti profil, berita, kegiatan, fasilitas,
                galeri, serta informasi akademik lainnya.
              </p>

              <br />

              <p className="leading-8 text-gray-300">
                Project ini dibuat untuk menggantikan penyampaian informasi yang
                sebelumnya masih terbatas pada media konvensional menjadi sebuah
                platform website yang lebih modern, mudah diakses, dan
                terstruktur.
              </p>
            </div>

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
              Beberapa fitur utama yang tersedia pada sistem ini antara lain:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {feature.map((fea) => (
                <div
                  key={fea.poin}
                  className="bg-black/50 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_10px_#22d3ee]"
                >
                  <h3 className="text-cyan-300 text-lg font-semibold mb-3 text-center">
                    {fea.poin}
                  </h3>

                  <p className="text-gray-300 leading-7">
                    {fea.ex}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Database */}
          <section className="mt-20 flex flex-col items-center">
            <h2
              className={`${cardo.className} text-2xl md:text-3xl mb-8`}
            >
              Database Structure
            </h2>

            <Image
              src="/images/resultpage/smp/database.png"
              alt="Database Structure"
              width={1200}
              height={700}
              className="w-full max-w-5xl h-auto rounded-xl shadow-lg"
            />
          </section>

          {/* Documentation */}
          <section className="mt-20">
            <h2
              className={`${cardo.className} text-center text-2xl md:text-3xl mb-10`}
            >
              Project Documentation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Psmp",
                "visimisi",
                "sekolah",
                "gurustaff",
                "ekstrakurikuler",
                "berita",
                "prestasi",
                "kontak",
                "login",
                "admin",
              ].map((img) => (
                <Image
                  key={img}
                  src={`/images/resultpage/smp/${img}.png`}
                  alt={img}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover rounded-xl transition duration-300 hover:scale-105 hover:shadow-[0_0_12px_#22d3ee]"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}