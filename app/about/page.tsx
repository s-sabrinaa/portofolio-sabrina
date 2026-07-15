"use client";

import Image from "next/image"
import Link from "next/link"
import {
    ArrowLeft, Download, Mail, Code2,
    MonitorSmartphone,
    Rocket
} from "lucide-react"

import { motion } from 'framer-motion';


const journey = [
    {
        year: "2022",
        title: "Started Learning",
        desc: "Mulai belajar HTML, CSS, JavaScript dan dasar-dasar pemrograman web.",
    },
    {
        year: "2022-Present",
        title: "Independent Developer",
        desc: "Building small-scale projects to improve programming skills and exploring modern web technologies. All projects are documented and published on GitHub.",
    },
    {
        year: "2025",
        title: "Information Technology Teacher",
        desc: "Teaching informatics and introducing programming concepts, web development, and technology fundamentals to students.",
    },
    {
        year: "2025-2026",
        title: "Web Developer | Laravel Developer",
        desc: "Developed a school profile information system website to provide accessible information about school programs, facilities, and activities.",
    },
    {
        year: "Now",
        title: "Open Opportunities",
        desc: "Terus belajar dan terbuka untuk project maupun pekerjaan baru.",
    },
];

const services = [
    {
        icon: Code2,
        title: "Web Development",
        desc: "Membangun website modern menggunakan Laravel, Next.js, React, dan MySQL dengan performa tinggi.",
    },
    {
        icon: MonitorSmartphone,
        title: "UI Implementation",
        desc: "Mengubah desain Figma menjadi website yang responsif, pixel perfect, dan interaktif.",
    },
    {
        icon: Rocket,
        title: "Performance",
        desc: "Optimasi loading, SEO, dan pengalaman pengguna agar aplikasi terasa cepat dan nyaman.",
    },
];

const frontend = [
    {
        name: "HTML",
        value: 95,
    },
    {
        name: "CSS",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 88,
    },
    {
        name: "Tailwind CSS",
        value: 92,
    },
];

const backend = [
    {
        name: "Laravel",
        value: 95,
    },
    {
        name: "PHP",
        value: 92,
    },
    {
        name: "MySQL",
        value: 90,
    },
];
function Progress({
    name,
    value,
}: {
    name: string;
    value: number;
}) {
    return (
        <div className="mb-6">
            <div className="mb-2 flex justify-between text-sm">
                <span>{name}</span>
                <span>{value}%</span>
            </div>

            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                    style={{ width: `${value}%` }}
                    className="h-full rounded-full bg-white transition-all duration-700"
                />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <motion.div
            className='p-5'
            initial={{
                opacity: 0,
                y: 80
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.8
            }}
            viewport={{
                once: false
            }}
        >
            <section className="relative overflow-hidden pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
                {/* Background Glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 w-75 h-75 sm:w-112.5 sm:h-112.5 lg:w-150 lg:h-150 rounded-full bg-white/5 blur-3xl" />

                    <div className="absolute bottom-0 right-0 w-55 h-55 sm:w-75 sm:h-75 lg:w-100 lg:h-100 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6">

                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition mb-10"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>

                    {/* Hero */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left */}
                        <div className="order-2 lg:order-1 text-center lg:text-left">

                            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
                                About Me
                            </p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                                Hi, I'm
                                <br />
                                <span className="bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                    Sabrina Alifia
                                    <br className="hidden sm:block" />
                                    Putri Mentari
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-zinc-300 mb-4">
                                Software Engineer | Laravel Developer
                            </p>

                            <p className="text-zinc-400 leading-8 max-w-xl mx-auto lg:mx-0 mb-8">
                                Saya percaya software yang baik bukan hanya berjalan,
                                tetapi mampu menyelesaikan masalah dengan pengalaman
                                pengguna yang sederhana dan menyenangkan.
                            </p>

                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href="/cv/CV - Sabrina Alifia Putri Mentari.pdf"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium transition hover:bg-zinc-200 hover:-translate-y-1"
                                >
                                    <Download size={18} />
                                    Download CV
                                </a>
                            </div>

                        </div>

                        {/* Right */}
                        <div className="order-1 lg:order-2 relative flex justify-center">

                            {/* Glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-62.5 h-62.5 sm:w-82.5 sm:h-82.5 md:w-105 md:h-105 rounded-full bg-white/10 blur-2xl" />
                            </div>

                            {/* Image */}
                            <div className="relative w-60 sm:w-75 md:w-90 lg:w-105 aspect-square rounded-4xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl">

                                <Image
                                    src="/images/Profil.JPG"
                                    alt="Profile"
                                    fill
                                    priority
                                    className="object-cover"
                                />

                            </div>

                            {/* Status */}
                            <div className="absolute -bottom-5 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">

                                <div className="flex items-center gap-3">

                                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                                    <div>
                                        <p className="text-sm font-medium">
                                            Available for
                                        </p>

                                        <p className="text-xs text-zinc-400">
                                            new opportunities
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

                {/* ================= My Journey ================= */}
                <div className="lg:col-span-1 rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8 backdrop-blur-xl">
                    <h2 className="text-xl md:text-2xl font-semibold mb-8">
                        My Journey
                    </h2>

                    <div className="relative ml-3 border-l border-white/10">
                        {journey.map((item, index) => (
                            <div
                                key={index}
                                className="relative mb-10 pl-8 last:mb-0"
                            >
                                <div className="absolute -left-1.75 top-1 h-3 w-3 rounded-full bg-white shadow-[0_0_15px_white]" />

                                <p className="text-white font-semibold text-sm md:text-base">
                                    {item.year}
                                </p>

                                <h3 className="mt-2 text-lg font-medium">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-7 text-zinc-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= Right Content ================= */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Who I Am */}
                    <div className="rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8 backdrop-blur-xl">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            {/* Left */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                                    Who I Am
                                </h2>

                                <p className="text-zinc-400 leading-8">
                                    Saya adalah seorang Software Engineer yang berfokus pada
                                    pengembangan aplikasi web modern.
                                </p>

                                <p className="mt-5 text-zinc-400 leading-8">
                                    Saya menyukai clean code, antarmuka yang sederhana,
                                    performa tinggi, serta pengalaman pengguna yang nyaman.
                                </p>
                            </div>

                            {/* Right */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                                    Quick Facts
                                </h2>

                                <div className="space-y-3">
                                    {[
                                        "📍 Indonesia",
                                        "💻 Laravel Developer",
                                        "🎓 Computer Education Student",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* ================= What I Do ================= */}
                    <div className="rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8 backdrop-blur-xl">

                        <h2 className="text-xl md:text-2xl font-semibold mb-8">
                            What I Do
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5"
                                    >
                                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
                                            <Icon size={28} />
                                        </div>

                                        <h3 className="text-lg md:text-xl font-semibold">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-zinc-400">
                                            {service.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    {/* ================= My Skills ================= */}
                    <div className="rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8 backdrop-blur-xl">

                        <h2 className="text-xl md:text-2xl font-semibold mb-8">
                            My Skills
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            <div>
                                <h3 className="mb-6 text-lg font-medium">
                                    Frontend
                                </h3>

                                {frontend.map((skill) => (
                                    <Progress
                                        key={skill.name}
                                        {...skill}
                                    />
                                ))}
                            </div>

                            <div>
                                <h3 className="mb-6 text-lg font-medium">
                                    Backend
                                </h3>

                                {backend.map((skill) => (
                                    <Progress
                                        key={skill.name}
                                        {...skill}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </motion.div>


    )
}