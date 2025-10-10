"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useRef } from "react";

export default function QuizShow() {
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
            DIGITAL INDIA QUIZ SHOW
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-4 sm:mt-6 px-2">
            Be part of the exciting <span className="font-semibold">Digital India Quiz Show</span>, a fun
            and knowledge-packed challenge that celebrates India’s digital
            transformation. Test your awareness of technology, innovation,
            e-governance, and the nation’s digital journey.
          </p>

          <p className="text-white/80 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Open to all curious minds and quiz lovers. Compete, learn, and win
            amazing prizes while exploring the spirit of a smarter, digital
            India.
          </p>

          {/* Event Info Section */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-8 px-2">
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
          <p className="text-white/90 mb-6 font-medium text-sm sm:text-base">Mrs. Hema Malini S</p>

          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-white/90 font-medium text-sm sm:text-base">
            <li>Adarsh Adhikari</li>
            <li>Kala Sharma</li>
            <li>Rosan Rai</li>
            <li>Aditi Biswakarma</li>
          </ul>
        </div>

        {/* Rules Section */}
        <div
          ref={rulesRef}
          className="w-full max-w-3xl mt-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8 text-left text-white/90 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Quiz Competition Rules</h2>

          <p className="mt-2 font-semibold text-sm sm:text-base">1. Eligibility & Team</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• Total 4 members in one team</p>

          <p className="mt-4 font-semibold text-sm sm:text-base">2. Rounds</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• Total 3 Rounds</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• Each round has a fixed number of questions</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• Time limit per question 30-60 sec</p>

          <p className="mt-4 font-semibold text-sm sm:text-base">3. Answer System</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• Round 1: Oral Questions – one team at a time</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• Round 2: Picture Quiz</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• Round 3: Rapid fire round – 5 to 8 questions. Press Buzzer fast for Answer.</p>

          <p className="mt-4 font-semibold text-sm sm:text-base">4. Points</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• +10 points for Right Answer</p>
          <p className="ml-4 mt-1 text-sm sm:text-base">• 0 points for wrong</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center py-6 px-4 text-xs sm:text-sm md:text-base border-t border-white/10 backdrop-blur-sm text-white/80 relative z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-white font-bold text-base sm:text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            CONTACT US
          </h3>
          <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
            <span className="font-semibold">Instagram:</span> @transformation_srmus <br />
            <span className="font-semibold">Faculty Contact:</span> Mrs. Hema Malini S (Asst. Prof.) - 9566976122 <br />
            <span className="font-semibold">Website:</span>{" "}
            <a
              href="https://techfestsrmus.in"
              className="underline text-white/80 hover:text-white transition"
              target="_blank"
            >
              techfestsrmus.in
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
