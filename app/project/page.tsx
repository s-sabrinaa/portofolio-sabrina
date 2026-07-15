import Link from "next/link";
import Image from "next/image";
import { Cardo } from "next/font/google";
import Navbar from "../components/navbar";

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["700"],
});

const projects = [
  {
    cover: "/images/cover/Psmp.png",
    w: 350,
    h: 150,
    title: "Sistem Informasi Website Profile Sekolah",
    tech: ["Laravel", "HTML", "CSS", "Javascript", "Bootstrap"],
    link: "/project/smp/",
  },
  {
    cover: "/images/cover/berry.png",
    w: 350,
    h: 150,
    title: "Strawberry-Themed Cafe Website",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "/project/berrysite",
  },
  {
    cover: "/images/cover/spotify.png",
    w: 350,
    h: 170,
    title: "Spotify Inspired Login Page",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "/project/spotifyLogin",
  },
  {
    cover: "/images/cover/baslogin.png",
    w: 350,
    h: 170,
    title: "Basic Login Page",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "/project/baslogin",
  },
];

export default function ProjectDetail() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="px-6 py-10 lg:px-20">
        <h1
          className={`${cardo.className} text-center text-3xl md:text-4xl mb-10`}
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
      </section>
    </div>
  );
}