"use client";

import { useState } from "react";
<<<<<<< Updated upstream
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function TechTreasureHunt() {
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
            TECH TREASURE HUNT 🔎
          </h1>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-6">
            Get ready to dive into a world where technology and adventure come together. Decode the clues, race against time, and use your logic to uncover the hidden digital treasure.
             Every challenge will test your mind, your teamwork, and your curiosity. Only those who think fast and stay sharp will make it to the end where the real reward awaits.
          </p>

          <p className="text-white/80 mt-3 text-base max-w-2xl mx-auto">
            Open to all curious minds school and college students are welcome to compete, solve puzzles, and win exciting prizes.
          </p>

          {/* Event Info Section */}
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-10">
            <span className="block font-medium mt-2">
              Date: <span className="text-purple-300 font-semibold">31st Oct | 01st Nov, 2025</span>
            </span>
            <span className="block font-medium mt-1">
              Venue: <span className="text-purple-300 font-semibold">SRMUS Main Block, 5th Mile, Tadong, Gangtok</span>
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
          </div>
        </div>

        {/* Coordinator Section */}
        <div className="w-full max-w-2xl mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]">
          <h2 className="text-xl font-bold text-white mb-2 tracking-wide">
            Faculty Coordinator
          </h2>
          <p className="text-white/90 mb-6 font-medium">Abhimanyu Sharma</p>

          <h3 className="text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-white/90 font-medium">
=======

export default function TechTreasureHunt() {
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
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden font-sans bg-gradient-to-b from-[#3b2f2f] via-[#2d241f] to-[#1b1410]">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffcc70_0%,_transparent_70%)] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ff8a00_0%,_transparent_70%)] opacity-25" />

      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-20 px-4 py-3 bg-[#1b1410]/90 backdrop-blur-lg border-b border-[#ffcc70]/30 shadow-[0_0_25px_rgba(255,204,112,0.4)]">
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-[#ffcc70] font-bold text-lg tracking-wider">
            TRANSFORMATION 2025
          </h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#ffcc70] p-2 rounded-md border border-[#ffcc70]/40 hover:bg-[#ffcc70]/20 transition"
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
              className="px-4 py-2 rounded-md bg-[#2a1e16] border border-[#ffcc70]/40 text-[#ffcc70] hover:bg-[#ffcc70]/20 hover:text-[#111] font-medium text-sm md:text-base transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(255,204,112,0.3)]"
            >
              {event.text}
            </a>
          ))}
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center text-center px-6 mt-32 md:mt-44 flex-grow relative z-09 space-y-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc70] to-[#ff8a00] mb-6 tracking-widest drop-shadow-[0_0_30px_rgba(255,204,112,0.8)] animate-pulse">
          TECH TREASURE HUNT
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-[#f5e6c3] leading-relaxed italic">
          “Decode clues, race with logic, and uncover the hidden digital
          treasure where technology meets adventure!”
        </p>

        <h2 className="mt-8 text-2xl md:text-3xl font-bold text-[#ffcc70] tracking-wide">
          Open to All School and College Students
        </h2>

        <div className="mt-6 text-base md:text-lg text-[#f8d49d] space-y-2">
          <p>
            🗓️ <span className="font-semibold text-[#ffcc70]">31st Oct</span> | School Students
          </p>
          <p>
            🗓️ <span className="font-semibold text-[#ffcc70]">1st Nov</span> | College Students
          </p>
          <p>
            📍 <span className="font-semibold text-[#ffcc70]">Venue:</span> SRM University Sikkim, Main Block
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#register"
            className="px-8 py-3 rounded-lg border border-[#ffcc70] text-[#ffcc70] hover:bg-[#ffcc70] hover:text-[#1b1410] font-semibold transition duration-300 shadow-[0_0_20px_rgba(255,204,112,0.6)] hover:shadow-[0_0_30px_rgba(255,204,112,0.9)]"
          >
            Register Now
          </a>
          <a
            href="#details"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#ffcc70] to-[#ff8a00] text-[#1b1410] font-semibold hover:opacity-90 transition duration-300 shadow-[0_0_20px_rgba(255,204,112,0.7)]"
          >
            Event Details
          </a>
        </div>

        {/* Coordinator Section */}
        <div className="mt-16 w-full max-w-3xl bg-[#2a1e16]/70 backdrop-blur-md border border-[#ffcc70]/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,204,112,0.2)] text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#ffcc70] mb-4">
            Faculty Coordinator
          </h3>
          <p className="text-[#f5e6c3] mb-6 font-medium">Abhimanyu Sharma</p>

          <h3 className="text-xl md:text-2xl font-bold text-[#ffcc70] mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-6 text-[#f5e6c3] font-medium">
>>>>>>> Stashed changes
            <li>Roland Lepcha</li>
            <li>Disha Rai</li>
            <li>Jamyang</li>
            <li>Sishir Rai</li>
          </ul>
        </div>
<<<<<<< Updated upstream
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center py-6 px-4 text-xs lg:text-sm border-t border-white/10 backdrop-blur-sm text-white/80 relative z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-white font-bold text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            CONTACT US
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            <span className="font-semibold">Email:</span> techfestsrmus.in <br />
            <span className="font-semibold">Contact:</span> Abhimanyu Sharma – 6297706073 <br />
            <span className="font-semibold">Instagram:</span>{" "}
            <a
              href="https://instagram.com/transformation_srmus"
              target="_blank"
              className="underline text-white/80 hover:text-white transition"
=======

        {/* Contact Section */}
        <div className="mt-10 text-[#f5e6c3] text-sm md:text-base space-y-2 text-center">
          <p>
            📧 <span className="text-[#ffcc70]">techfestsrmus.in</span>
          </p>
          <p>
            📱 Contact: Abhimanyu Sharma (Asst. Prof.) – <span className="text-[#ffcc70]">6297706073</span>
          </p>
          <p>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/transformation_srmus"
              target="_blank"
              className="underline text-[#ffcc70] hover:text-[#ff8a00]"
>>>>>>> Stashed changes
            >
              @transformation_srmus
            </a>
          </p>
<<<<<<< Updated upstream
          <p className="text-white/50 text-[12px]">
            © 2025 Transformation | SRM University Sikkim. All Rights Reserved.
          </p>
        </div>
=======
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-xs md:text-sm border-t border-[#ffcc70]/20 backdrop-blur-md text-[#f5e6c3]">
        © 2025 Transformation. All rights reserved. | SRM University Sikkim
>>>>>>> Stashed changes
      </footer>
    </div>
  );
}
