"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useRef } from "react";

export default function Ideathon() {
  const rulesRef = useRef<HTMLDivElement>(null);

  const scrollToRules = () => {
    if (rulesRef.current) {
      rulesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 bg-gradient-to-br from-purple-900 via-violet-800 to-pink-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-24 sm:h-28 md:h-32" />

      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] max-w-[450px] max-h-[450px] bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] max-w-[450px] max-h-[450px] bg-gradient-to-br from-fuchsia-500 via-pink-600 to-purple-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />

      {/* Main Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-10 mt-10 sm:mt-16 space-y-10 w-full">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-2 sm:mb-4 break-words">
            IDEATHON:
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-4 text-center break-words">
            TECH FOR SOCIAL IMPACT
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-4 sm:mt-6 px-2">
            A platform for young minds to develop technology-driven solutions for social impact and present innovative ideas to the jury.
          </p>

          {/* Event Highlights */}
          <div className="text-left w-full max-w-2xl mt-10 space-y-3 text-white/90 px-2">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-purple-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              EVENT HIGHLIGHTS
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base leading-relaxed">
              <li>Encourage innovation and social impact projects.</li>
              <li>Teams from schools/colleges participate (2–5 members).</li>
              <li>Platform to present solutions to real-world problems.</li>
              <li>Jury evaluates ideas on innovation, feasibility, and impact.</li>
            </ul>
          </div>

          {/* Event Info */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-10 px-2">
            <span className="block font-medium mt-2">
              Date:{" "}
              <span className="text-purple-300 font-semibold">
                31st Oct | 1st Nov, 2025
              </span>
            </span>
            <span className="block font-medium mt-1">
              Venue:{" "}
              <span className="text-purple-300 font-semibold">
                SRM University Main Block, 5th Mile, Room No: 405
              </span>
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
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
          <p className="text-white/90 mb-6 font-medium text-sm sm:text-base">Mr. SivaramaKumar P</p>

          <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-white/90 font-medium text-sm sm:text-base">
            <li>Prasun Adhikari</li>
            <li>Arjun Rawat</li>
            <li>Parman Rai</li>
            <li>Amish Bhattarai</li>
            <li>Nishal Darjee</li>
            <li>Lorence Chettri</li>
          </ul>
        </div>

        {/* Rules Section */}
        <div
          ref={rulesRef}
          className="w-full max-w-3xl mt-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 text-left shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          style={{ scrollMarginTop: "100px" }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-purple-200 mb-4 text-center">
            RULES & REGULATIONS
          </h2>

          <ol className="list-decimal list-inside text-white/90 space-y-3 text-sm sm:text-base">
            <li>Teams of 2–5 members from each school can participate.</li>
            <li>Ideas must focus on technology-driven solutions for social impact.</li>
            <li>All teams must register before the deadline with basic details.</li>
            <li>Submit a brief problem statement (will be provided) and solution in PPT/document format.</li>
            <li>Each team gets 5–7 minutes to present plus 3 minutes for Q&amp;A.</li>
            <li>Ideas will be judged on innovation, impact, feasibility, scalability, and clarity.</li>
            <li>All work must be original, respectful, and free from plagiarism.</li>
            <li>Final Decision: The jury’s decision will be final and binding.</li>
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
            <span className="font-semibold">Instagram:</span> @transformation_srmus <br />
            <span className="font-semibold">Faculty Contact:</span> Mr. SivaramaKumar P - 9940872949 <br />
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
