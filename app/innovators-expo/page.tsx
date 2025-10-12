"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useRef } from "react";

export default function InnovatorsExpo() {
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-4 break-words">
            YOUNG INNOVATOR’S EXPO
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-4 sm:mt-6 px-2">
            A platform where creativity meets technology, and bright minds
            showcase groundbreaking ideas, inventions, and projects that inspire
            the future.
          </p>

          {/* Event Highlights */}
          <div className="text-left w-full max-w-2xl mt-10 space-y-3 text-white/90 px-2">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-purple-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              EVENT HIGHLIGHTS
            </h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base leading-relaxed">
              <li>
                A flagship event of{" "}
                <span className="font-semibold">SRM University Sikkim</span>.
              </li>
              <li>
                Exciting cash prize and recognition for the most impactful
                innovations.
              </li>
              <li>
                Showcase of students’ innovative projects, prototypes, and tech
                ideas.
              </li>
              <li>
                Platform to connect creativity, research, and real-world
                technology.
              </li>
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
                SRM University Main Block, 5th Mile, Room No: 404
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
          <p className="text-white/90 mb-6 font-medium text-sm sm:text-base">
            Mr. SivaramaKumar P
          </p>

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

          <p className="text-white/90 mb-4 text-sm sm:text-base">
            <strong>Event name:</strong> Young Innovator’s Expo
            <br />
            With the theme of Young Innovator’s Expo, which is certainly a great
            idea to work upon to promote entrepreneurship at the level of
            students. SIT, SRM University having the reputation in Sikkim will
            be a great platform to uncover the potential entrepreneur inside
            young minds.
          </p>

          <p className="text-white/90 mb-4 text-sm sm:text-base">
            The competition is not just about recognizing ideas but taking them
            to the next level, motivating young minds toward entrepreneurship,
            and promoting self-dependence.
          </p>

          <ol className="list-decimal list-inside text-white/90 space-y-2 mb-4 text-sm sm:text-base">
            <li>Conducted for school students.</li>
            <li>Team size: 1 to 3 students.</li>
            <li>
              Submit documentation + video + registration form through fest
              mail-id.
            </li>
            <li>
              Documentation (max 600 words) must include:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  <strong>Creativity:</strong> Describe innovation (max 250
                  words).
                </li>
                <li>
                  <strong>Usage:</strong> Explain application domain & include
                  pictures (max 250 words).
                </li>
                <li>
                  <strong>Scope for Commercialization:</strong> Explain
                  potential for commercialization (max 100 words).
                </li>
              </ul>
              <span className="block mt-1 text-white/80 text-xs sm:text-sm">
                Note: Single PDF file, max 10MB.
              </span>
            </li>
          </ol>

          <p className="text-white/90 mb-4 font-medium text-sm sm:text-base">
            <strong>After Qualifying:</strong> Selected teams move to final
            round. Jury chooses best prototypes for development.
          </p>

          <p className="text-white/90 mb-4 font-medium text-sm sm:text-base">
            <strong>Final Round Presentation Submission Guidelines:</strong>
          </p>
          <ol className="list-decimal list-inside text-white/90 space-y-2 text-sm sm:text-base">
            <li>
              Submit solution/idea in MS PowerPoint (max 10 slides):
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>
                  First slide: Title, names, institution, contact & email.
                </li>
                <li>
                  Other slides: Project Design, Beneficiaries, Implementation
                  plan/strategies.
                </li>
              </ul>
            </li>
            <li>
              Send entries to:{" "}
              <span className="font-semibold">
                transformation@srmus.edu.in
              </span>
            </li>
            <li>Subject: ‘Young Innovator’s Expo’ followed by title.</li>
            <li>Teams present concept on scheduled event date.</li>
            <li>
              Prototype/Solution registration & submission date: 31st October
              2025.
            </li>
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
