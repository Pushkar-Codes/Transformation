"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
<<<<<<< Updated upstream
=======
import { useState } from "react";

export default function CodingChallange() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/coding-challenge", text: "CODING CHALLENGE" },
    { href: "/ideathon", text: "IDEATHON" },
    { href: "/innovators-expo", text: "INNOVATOR'S EXPO" },
    { href: "/quiz", text: "QUIZ SHOW" },
    { href: "/funzone-gaming", text: "FUNZONE GAMING" },
    { href: "/youth-parliament", text: "YOUTH PARLIAMENT" },
    { href: "/tech-treasure-hunt", text: "TECH TREASURE HUNT" },
    { href: "/", text: "HOME PAGE" },
  ];
>>>>>>> Stashed changes

export default function CodingChallange() {
  return (
<<<<<<< Updated upstream
    <div className="relative min-h-screen p-4 lg:p-8 bg-gradient-to-br from-purple-900 via-violet-800 to-pink-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spacer below fixed Navbar */}
      <div className="h-20" />

      {/* Background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 rounded-full blur-[150px] opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-fuchsia-500 via-pink-600 to-purple-600 rounded-full blur-[150px] opacity-30 pointer-events-none z-0" />

      {/* Main Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 lg:px-20 mt-16 space-y-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] mb-4 whitespace-nowrap">
            {"Coding Challenge;"}
          </h1>

          <p className="text-lg lg:text-xl text-pink-100 leading-relaxed">
            <span className="block">
               Welcome to the{" "}
              <span className="text-pink-400 font-semibold">Coding Challenge</span>!
            </span>
            <span className="block mt-2">
              Test your programming skills, solve exciting problems, and compete
              with coders worldwide!
            </span>
            <span className="block font-medium mt-4">
               Date: <span className="text-purple-300">31st Oct | 01st Nov</span>
            </span>
            <span className="block font-medium mt-1">
              Organized by{" "}
              <span className="text-pink-400">
                SRM University Sikkim, School of Information Technology
              </span>
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYeT-2EihlhuA6UCDdL-nxEOZh1VlcxOigulNjV3j0rVT6oA/viewform?usp=dialog"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base lg:text-lg relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">{" Register Now"}</span>
              <span
                className="absolute inset-0 rounded-md bg-pink-500 blur-xl opacity-40 animate-pulse"
                aria-hidden="true"
              ></span>
            </Link>

            <Link
              href="/rules-regulation"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-bold text-base lg:text-lg shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-transform duration-300 hover:scale-105"
            >
              View Rules
            </Link>
=======
    <div className="min-h-screen flex flex-col text-[#00ffcc] relative overflow-hidden bg-[#0a0f0d] font-mono">
      {/* Animated binary background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-green-400 via-teal-500 to-cyan-500 rounded-full blur-[150px] opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-500 rounded-full blur-[150px] opacity-20 pointer-events-none z-0" />

      {/* Matrix-style overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.05)_0%,rgba(0,0,0,1)_100%)] z-0 pointer-events-none" />

      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-20 px-4 py-3 bg-[#0a0f0d]/90 backdrop-blur-lg border-b border-[#00ffcc]/20 shadow-[0_0_25px_rgba(0,255,204,0.3)]">
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-[#00ffcc] font-bold text-lg tracking-widest">
            TRANSFORMATION 2025
          </h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#00ffcc] p-2 rounded-md border border-[#00ffcc]/40 hover:bg-[#00ffcc]/20 transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 md:gap-4 mt-2 md:mt-0 transition-all duration-300 ${
            menuOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden md:max-h-full"
          }`}
        >
          {navItems.map((event) => (
            <a
              href={event.href}
              key={event.text}
              className="px-4 py-2 rounded-md bg-[#0f1a17] border border-[#00ffcc]/30 text-[#00ffcc] hover:bg-[#00ffcc]/20 hover:text-[#111] font-medium text-sm md:text-base transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(0,255,204,0.3)]"
            >
              {event.text}
            </a>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center px-6 mt-40 flex-grow relative z-09 space-y-6">
        <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 uppercase tracking-widest text-[#00ffcc] drop-shadow-[0_0_25px_rgba(0,255,204,0.8)]">
          {"< Coding Challenge >"}
        </h1>

        <p className="text-lg max-w-2xl leading-relaxed text-[#d1fff4]">
          <span className="block">
            💻 Welcome to the <span className="text-[#00ffcc] font-semibold">Coding Challenge</span>!
          </span>
          <span className="block mt-2">
            Test your programming skills, solve exciting problems, and compete with coders worldwide!
          </span>
          <span className="block font-medium mt-4">
            📅 Date: <span className="text-[#00ffaa]">31st Oct | 01st Nov</span>
          </span>
          <span className="block font-medium mt-1">
            🏆 Organized by{" "}
            <span className="text-[#00e6e6]">SRM University Sikkim, School of Information Technology</span>
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex gap-4 justify-center">
            <a
              href="#register"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md border border-[#00ffcc]/40 text-[#00ffcc] font-bold text-base lg:text-lg relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-[#00ffcc]/20"
            >
              {"</> Register Now"}
            </a>

            <a
              href="/rules-regulation"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-gradient-to-r from-[#00ffcc] to-[#009999] text-black font-bold text-base lg:text-lg shadow-[0_0_20px_rgba(0,255,204,0.5)] transition-transform duration-300 hover:scale-105"
            >
              View Rules
            </a>
>>>>>>> Stashed changes
          </div>
        </div>

        {/* Coordinators Section */}
<<<<<<< Updated upstream
        <div className="w-full max-w-2xl mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 text-center shadow-[0_0_25px_rgba(236,72,153,0.3)]">
          <h2 className="text-xl font-bold text-pink-300 mb-2 tracking-wide">
            Faculty Coordinator
          </h2>
          <p className="text-pink-100 mb-6 font-medium">Mr. Arghya Sikdar</p>

          <h3 className="text-lg font-semibold text-pink-300 mb-3">
             Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-pink-100 font-medium">
=======
        <div className="mt-16 max-w-xl w-full text-center bg-[#0f1a17]/60 border border-[#00ffcc]/30 rounded-xl p-6 shadow-[0_0_25px_rgba(0,255,204,0.2)] backdrop-blur-md">
          <h2 className="text-xl font-bold text-[#00ffaa] mb-3 tracking-wide">
            👨‍🏫 Faculty Coordinator
          </h2>
          <p className="text-[#ffffffcc] mb-6 font-medium">Mr. Arghya Sikdar</p>

          <h3 className="text-lg font-semibold text-[#00ffaa] mb-3">
            💻 Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-[#ffffffb3] font-medium">
>>>>>>> Stashed changes
            <li>Pushkar Dutta</li>
            <li>Rupankar Saswari</li>
            <li>Avash Sharma</li>
            <li>Aunkush Barua</li>
            <li>Benadic Manger</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
<<<<<<< Updated upstream
      <footer className="mt-16 text-center py-6 px-4 text-xs lg:text-sm border-t border-white/10 backdrop-blur-sm text-gray-100 relative z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-[#ffcc33] font-bold text-lg drop-shadow-[0_0_8px_rgba(255,204,51,0.6)]">
            CONTACT US
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            <span className="text-[#ffcc33] font-semibold">Instagram:</span>{" "}
            @transformation_srmus <br />
            <span className="text-[#ffcc33] font-semibold">Faculty Contact:</span>{" "}
            Mr. Arghya Sikdar (Asst. Prof.) - 6294571233 <br />
            <span className="text-[#ffcc33] font-semibold">Website</span>{" "}
            <a
              href="https://srmus.ac.in"
              className="underline text-[#ffcc33] hover:text-white transition"
              target="_blank"
            >
              SRM University
            </a>
          </p>
          <p className="text-gray-400 text-[12px]">
            © 2025 SRM University Sikkim. All rights reserved.
          </p>
        </div>
=======
      <footer className="w-full backdrop-blur-sm px-4 lg:px-16 py-2 text-xs lg:text-sm border-t border-[#00ffcc]/20 z-10 text-center text-[#00ffcc]/80">
        © 2025 <span className="text-[#00ffaa]">SRM University Sikkim. </span>. All rights reserved.
>>>>>>> Stashed changes
      </footer>
    </div>
  );
}
