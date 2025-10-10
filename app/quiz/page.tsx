"use client";

<<<<<<< Updated upstream
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";

export default function QuizShow() {
  return (
    <div className="relative min-h-screen p-4 lg:p-8 bg-gradient-to-br from-purple-900 via-violet-800 to-pink-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-gradient-to-br from-fuchsia-500 via-pink-600 to-purple-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />

      {/* Main Section */}
     <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 lg:px-20 mt-16 space-y-10">
  <div className="max-w-4xl flex flex-col items-center justify-center">
    <h1 className="text-4xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-4 whitespace-nowrap">
      DIGITAL INDIA QUIZ SHOW ? 
    </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-6">
      Be part of the exciting{" "}
      <span className="font-semibold">Digital India Quiz Show</span>, a fun
      and knowledge-packed challenge that celebrates India’s digital
      transformation. Test your awareness of technology, innovation,
      e-governance, and the nation’s digital journey.
    </p>

          <p className="text-white/80 mt-3 text-base max-w-2xl mx-auto">
      Open to all curious minds and quiz lovers  compete, learn, and win
      amazing prizes while exploring the spirit of a smarter, digital
      India.
    </p>

          {/* Event Info Section */}
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-10">
            <span className="block font-medium mt-2">
              Date: <span className="text-purple-300 font-semibold">31st Oct | 01st Nov, 2025</span>
            </span>
            <span className="block font-medium mt-1">
              Time: <span className="text-purple-300 font-semibold">Starts at 10 AM</span>
            </span>
            <span className="block font-medium mt-1">
              Venue: <span className="text-purple-300 font-semibold">
                SRMUS Main Block, 5th Mile, Tadong, Gangtok
              </span>
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYeT-2EihlhuA6UCDdL-nxEOZh1VlcxOigulNjV3j0rVT6oA/viewform?usp=dialog"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base lg:text-lg relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">{"Register Now"}</span>
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
          </div>
        </div>

        {/* Coordinator Section */}
        <div className="w-full max-w-2xl mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]">
          <h2 className="text-xl font-bold text-white mb-2 tracking-wide">
            Faculty Coordinator
          </h2>
          <p className="text-white/90 mb-6 font-medium">Mrs. Hema Malini S</p>

          <h3 className="text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-white/90 font-medium">
=======
import { useState } from "react";

export default function QuizShow() {
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

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-gradient-to-b from-[#7b1818] via-[#8e1c1c] to-[#5a0e0e] font-sans">
      {/* Background Lights */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#ffcc33]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#b30000]/30 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-20 px-4 py-3 bg-[#5a0e0e]/90 backdrop-blur-lg border-b border-[#ffcc33]/30 shadow-[0_0_25px_rgba(255,204,51,0.3)]">
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-[#ffcc33] font-bold text-lg tracking-widest">
            TRANSFORMATION 2025
          </h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#ffcc33] p-2 rounded-md border border-[#ffcc33]/40 hover:bg-[#ffcc33]/20 transition"
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
              className="px-4 py-2 rounded-md bg-[#701414]/70 border border-[#ffcc33]/30 text-[#ffcc33] hover:bg-[#ffcc33]/20 hover:text-white font-medium text-sm md:text-base transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(255,204,51,0.3)]"
            >
              {event.text}
            </a>
          ))}
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center text-center px-6 mt-32 md:mt-44 flex-grow relative z-09 space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#ffcc33] drop-shadow-[0_0_30px_rgba(255,204,51,0.6)] tracking-widest">
          DIGITAL INDIA QUIZ SHOW
        </h1>

        <p className="text-lg md:text-xl max-w-3xl text-gray-100 leading-relaxed">
          Be part of the exciting{" "}
          <span className="text-[#ffcc33] font-semibold">
            Digital India Quiz Show
          </span>
          , a fun and knowledge-packed challenge that celebrates India’s digital
          transformation. Test your awareness of technology, innovation,
          e-governance, and the nation’s digital journey.
        </p>

        <p className="text-gray-100 mt-2 max-w-2xl">
          Open to all curious minds and quiz lovers  compete, learn, and win
          amazing prizes while exploring the spirit of a smarter, digital India!
        </p>

        {/* Event Info */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 text-base md:text-lg text-gray-100">
          <div className="flex flex-col items-center bg-[#ffffff1a] p-4 rounded-lg border border-[#ffcc33]/20 shadow-md">
            <p className="text-[#ffcc33] font-semibold">📅 Date</p>
            <p>31 Oct & 1 Nov, 2025</p>
          </div>
          <div className="flex flex-col items-center bg-[#ffffff1a] p-4 rounded-lg border border-[#ffcc33]/20 shadow-md">
            <p className="text-[#ffcc33] font-semibold">🕓 Doors Open</p>
            <p>At 10 AM</p>
          </div>
          <div className="flex flex-col items-center bg-[#ffffff1a] p-4 rounded-lg border border-[#ffcc33]/20 shadow-md">
            <p className="text-[#ffcc33] font-semibold">📍 Venue</p>
            <p>
              SRMUS Main Block <br /> 5th Mile, Tadong, Gangtok
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#register"
            className="px-6 py-3 rounded-lg border border-[#ffcc33] text-[#ffcc33] hover:bg-[#ffcc33] hover:text-[#5a0e0e] font-semibold transition duration-300 shadow-[0_0_12px_rgba(255,204,51,0.4)]"
          >
            Register Now
          </a>
          <a
            href="#rules"
            className="px-6 py-3 rounded-lg bg-[#ffcc33] text-[#5a0e0e] font-semibold hover:bg-[#e6b800] transition duration-300 shadow-[0_0_15px_rgba(255,204,51,0.5)]"
          >
            View Rules
          </a>
        </div>

        {/* Coordinator Section */}
        <div className="mt-16 w-full max-w-3xl bg-white/10 backdrop-blur-md border border-[#ffcc33]/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,204,51,0.3)] text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#ffcc33] mb-4">
            Faculty Coordinator
          </h3>
          <p className="text-white mb-6 font-medium">
            Mrs. Hema Malini S
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#ffcc33] mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-200 font-medium">
>>>>>>> Stashed changes
            <li>Adarsh Adhikari</li>
            <li>Kala Sharma</li>
            <li>Rosan Rai</li>
            <li>Aditi Biswakarma</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
<<<<<<< Updated upstream
      <footer className="mt-16 text-center py-6 px-4 text-xs lg:text-sm border-t border-white/10 backdrop-blur-sm text-white/80 relative z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-white font-bold text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            CONTACT US
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            <span className="font-semibold">Instagram:</span> @transformation_srmus <br />
            <span className="font-semibold">Faculty Contact:</span> Mrs. Hema Malini S (Asst. Prof.) - 9566976122 <br />
            <span className="font-semibold">Website:</span>{" "}
            <a
              href="https://techfestsrmus.in"
              className="underline text-white/80 hover:text-white transition"
=======
      <footer className="w-full text-center py-8 px-4 text-xs md:text-sm border-t border-[#ffcc33]/30 backdrop-blur-md text-gray-100 relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-[#ffcc33] font-bold text-lg md:text-xl drop-shadow-[0_0_8px_rgba(255,204,51,0.6)]">
            CONTACT US
          </h3>

          <p className="text-gray-200 text-sm">
            <span className="text-[#ffcc33] font-semibold">Instagram:</span>{" "}
            @transformation_srmus <br />
            <span className="text-[#ffcc33] font-semibold">Faculty Contact:</span>{" "}
            Mrs. Hema Malini S (Asst. Prof.) - 9566976122 <br />
            <span className="text-[#ffcc33] font-semibold">Website:</span>{" "}
            <a
              href="https://techfestsrmus.in"
              className="underline text-[#ffcc33] hover:text-white transition"
>>>>>>> Stashed changes
              target="_blank"
            >
              techfestsrmus.in
            </a>
          </p>
<<<<<<< Updated upstream
          <p className="text-white/50 text-[12px]">
            © 2025 Transformation | SRM University Sikkim. All Rights Reserved.
          </p>
        </div>
=======

          <p className="text-gray-300 mt-2 text-[12px]">
            © 2025 Transformation | SRM University Sikkim. All Rights Reserved.
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-[#ffcc33]/20 blur-[90px] rounded-full"></div>
>>>>>>> Stashed changes
      </footer>
    </div>
  );
}
