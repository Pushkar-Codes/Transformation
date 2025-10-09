"use client";

<<<<<<< Updated upstream
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Ideathon() {
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
            IDEATHON 2025 💡
          </h1>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-6">
           Innovate, collaborate, and create groundbreaking tech solutions that drive real change and make a meaningful impact in society. Join the movement where technology meets purpose 
           shaping a better, smarter, and more inclusive future for all.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-wide mt-6">
            <span className="text-purple-300">TECH FOR SOCIAL IMPACT</span>
          </h2>

          {/* Event Info Section */}
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-10">
            <span className="block font-medium mt-2">
              Venue: <span className="text-purple-300 font-semibold">SRMUS Main Block, 5th Mile, Tadong, Gangtok</span>
            </span>
            <span className="block font-medium mt-1">
              Date: <span className="text-purple-300 font-semibold">Oct 31st & 1st Nov, 2025</span>
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
          <p className="text-white/90 mb-6 font-medium">Mrs. Priyadarshini Pradhan</p>

          <h3 className="text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-white/90 font-medium">
=======
import { useState } from "react";

export default function Ideathon() {
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
    <div className="min-h-screen flex flex-col text-gray-900 relative overflow-hidden bg-gradient-to-b from-[#f5f7fa] via-[#e4ebf1] to-[#dfe7ee] font-sans">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff_0%,_transparent_70%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#e6e6e6_0%,_transparent_70%)] opacity-40" />

      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-20 px-4 py-3 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md">
        {/* Mobile Header */}
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-[#1f3b73] font-bold text-lg tracking-wide">
            TRANSFORMATION 2025
          </h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#1f3b73] p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-3 md:mt-2 transition-all duration-300 ${
            menuOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden md:max-h-full"
          }`}
        >
          {navItems.map((event) => (
            <a
              href={event.href}
              key={event.text}
              className="px-4 py-2 rounded-md bg-white border border-gray-300 text-[#1f3b73] hover:bg-[#1f3b73] hover:text-white font-medium text-sm md:text-base transition-all duration-200 cursor-pointer shadow-sm"
            >
              {event.text}
            </a>
          ))}
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 mt-32 md:mt-44 flex-grow relative z-09">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1f3b73] mb-6 tracking-wide">
          IDEATHON 2025
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700 leading-relaxed mb-6">
          Innovate, collaborate, and create <br />
          <span className="text-[#c28b00] font-semibold">
            tech solutions that make a real difference in society.
          </span>
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-[#1f3b73] tracking-wide mb-6">
          <span className="text-[#c28b00]">TECH FOR SOCIAL IMPACT</span>
        </h2>

        <div className="text-base md:text-lg text-gray-700 mb-10">
          <p>
            📍{" "}
            <span className="font-semibold text-[#1f3b73]">Venue:</span> SRMUS
            Main Block, 5th Mile, Tadong, Gangtok
          </p>
          <p>
            📅{" "}
            <span className="font-semibold text-[#1f3b73]">Date:</span> Oct 31st
            &amp; Nov 1st
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#register"
            className="px-6 py-3 rounded-lg border border-[#1f3b73] text-[#1f3b73] hover:bg-[#1f3b73] hover:text-white font-semibold transition duration-300 shadow-sm"
          >
            Register Now
          </a>
          <a
            href="#rules"
            className="px-6 py-3 rounded-lg bg-[#c28b00] text-white font-semibold hover:bg-[#a67c00] transition duration-300 shadow-sm"
          >
            View Rules
          </a>
        </div>

        {/* Coordinator Section */}
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#1f3b73] mb-4">
            Faculty Coordinator
          </h3>
          <p className="text-gray-800 mb-6 font-medium">
            Mrs. Priyadarshini Pradhan
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#1f3b73] mb-3">
            Student Volunteers
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800 font-medium">
>>>>>>> Stashed changes
            <li>Babin Bhattarai</li>
            <li>Aashu Goutam</li>
            <li>Reyan Gurung</li>
            <li>Bikky Kumar</li>
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
            <span className="font-semibold">Email:</span> techfestsrmus.in <br />
            <span className="font-semibold">Contact:</span> Mrs. Priyadarshini Pradhan – 9566976122 <br />
            <span className="font-semibold">Instagram:</span>{" "}
            <a
              href="https://instagram.com/transformation_srmus"
              target="_blank"
              className="underline text-white/80 hover:text-white transition"
            >
              @transformation_srmus
            </a>
          </p>
          <p className="text-white/50 text-[12px]">
            © 2025 Transformation | SRM University Sikkim. All Rights Reserved.
          </p>
        </div>
=======
      <footer className="w-full text-center py-5 text-xs md:text-sm border-t border-gray-300 backdrop-blur-md text-gray-600 mt-auto">
        © 2025 Transformation. All rights reserved. | SRM University Sikkim
>>>>>>> Stashed changes
      </footer>
    </div>
  );
}
