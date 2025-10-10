"use client";

import { useRef } from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function TechTreasureHunt() {
  const rulesRef = useRef<HTMLDivElement | null>(null);

  const scrollToRules = () => {
    const el = rulesRef.current;
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100, // offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 bg-gradient-to-br from-purple-900 via-violet-800 to-pink-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20 sm:h-24 md:h-28" />

      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] max-w-[450px] max-h-[450px] bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] max-w-[450px] max-h-[450px] bg-gradient-to-br from-fuchsia-500 via-pink-600 to-purple-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />

      {/* Main Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-10 mt-10 sm:mt-16 space-y-10 w-full">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-4 break-words">
            TECH TREASURE HUNT 🔎
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-4 sm:mt-6 px-2">
            Get ready to dive into a world where technology and adventure come together. Decode the clues, race against time, and use your logic to uncover the hidden digital treasure.
            Every challenge will test your mind, your teamwork, and your curiosity. Only those who think fast and stay sharp will make it to the end where the real reward awaits.
          </p>

          <p className="text-white/80 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Open to all curious minds – school and college students are welcome to compete, solve puzzles, and win exciting prizes.
          </p>

          {/* Event Info Section */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-8 px-2">
            <span className="block font-medium mt-2">
              Date: <span className="text-purple-300 font-semibold">31st Oct | 01st Nov, 2025</span>
            </span>
            <span className="block font-medium mt-1">
              Venue: <span className="text-purple-300 font-semibold">SRMUS Main Block, 5th Mile, Tadong, Gangtok</span>
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYeT-2EihlhuA6UCDdL-nxEOZh1VlcxOigulNjV3j0rVT6oA/viewform?usp=dialog"
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm sm:text-base md:text-lg relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">Register Now</span>
              <span
                className="absolute inset-0 rounded-md bg-pink-500 blur-xl opacity-40 animate-pulse"
                aria-hidden="true"
              ></span>
            </Link>

            <button
              onClick={scrollToRules}
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-bold text-sm sm:text-base md:text-lg shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-transform duration-300 hover:scale-105"
            >
              View Rules
            </button>
          </div>
        </div>

        {/* Coordinator Section */}
        <div className="w-full max-w-2xl mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide">
            Faculty Coordinator
          </h2>
          <p className="text-white/90 mb-6 font-medium text-sm sm:text-base">Abhimanyu Sharma</p>

          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-white/90 font-medium text-sm sm:text-base">
            <li>Roland Lepcha</li>
            <li>Disha Rai</li>
            <li>Jamyang</li>
            <li>Sishir Rai</li>
          </ul>
        </div>

        {/* Rules Section */}
        <div
          ref={rulesRef}
          className="w-full max-w-3xl mt-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8 text-left text-white/90 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">RULES & REGULATIONS</h2>

          <ol className="list-decimal list-inside text-white/90 space-y-2 text-sm sm:text-base">
            <li>The hunt is open to registered participants only.</li>
            <li>Teams must consist of 1 to 3 members.</li>
            <li>Each team will receive the first clue at the start.</li>
            <li>Clues must be solved in the given sequence. Skipping or rearranging is not allowed.</li>
            <li>The treasure is hidden within the defined boundaries. No team may go outside the designated area.</li>
          </ol>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center py-6 px-4 text-xs sm:text-sm md:text-base border-t border-white/10 backdrop-blur-sm text-white/80 relative z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-white font-bold text-base sm:text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            CONTACT US
          </h3>
          <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
            <span className="font-semibold">Email:</span> techfestsrmus.in <br />
            <span className="font-semibold">Contact:</span> Abhimanyu Sharma – 6297706073 <br />
            <span className="font-semibold">Instagram:</span>{" "}
            <a
              href="https://instagram.com/transformation_srmus"
              target="_blank"
              className="underline text-white/80 hover:text-white transition"
            >
              @transformation_srmus
            </a>
          </p>
          <p className="text-white/50 text-[11px] sm:text-[12px]">
            © 2025 Transformation | SRM University Sikkim. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
