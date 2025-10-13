"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useRef } from "react";

export default function FunZoneGaming() {
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
    <div className="relative min-h-screen p-4 lg:p-8 bg-gradient-to-br from-purple-900 via-violet-800 to-pink-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-gradient-to-br from-fuchsia-500 via-pink-600 to-purple-600 rounded-full blur-[180px] opacity-30 pointer-events-none z-0" />

      {/* Main Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center  lg:px-20 mt-16 space-y-10">
        <div className="max-w-4xl flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-4 whitespace-nowrap">
            FUN ZONE GAMING
          </h1>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-6">
            <span className="font-semibold text-pink-400">Funzone Gaming</span>{" "}
            where passion meets pixels! Compete, connect, and conquer in an
            arena full of energy, teamwork, and fun. Only the best gamers claim
            victory at{" "}
            <span className="font-bold text-yellow-300">
              TRANSFORMATION 2025
            </span>
            .
          </p>

          <p className="text-white/80 mt-3 text-base max-w-2xl mx-auto">
            Be ready with your{" "}
            <span className="text-purple-300 font-semibold">
              FIFA skills on PS5
            </span>{" "}
            and{" "}
            <span className="text-purple-300 font-semibold">
              Mobile Legends skills on Mobile
            </span>
            . Challenge your reflexes and show the world who’s the ultimate
            gamer!
          </p>

          {/* Event Info Section */}
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-10">
            <span className="block font-medium mt-2">
              Date:{" "}
              <span className="text-purple-300 font-semibold">
                31st Oct | 01st Nov, 2025
              </span>
            </span>
            <span className="block font-medium mt-1">
              Time:{" "}
              <span className="text-purple-300 font-semibold">
                Starts at 10 AM
              </span>
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
              <span className="relative z-10">Register Now</span>
              <span
                className="absolute inset-0 rounded-md bg-pink-500 blur-xl opacity-40 animate-pulse"
                aria-hidden="true"
              ></span>
            </Link>

            <button
              onClick={scrollToRules}
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-bold text-base lg:text-lg shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-transform duration-300 hover:scale-105"
            >
              View Rules
            </button>
          </div>
        </div>

        {/* Coordinator Section */}
        <div className="w-full max-w-2xl mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 text-center shadow-[0_0_25px_rgba(255,255,255,0.3)]">
          <h2 className="text-xl font-bold text-white mb-2 tracking-wide">
            Faculty Coordinator
          </h2>
          <p className="text-white/90 mb-6 font-medium">
            Mr. Samir Limboo (Asst. Prof.)
          </p>

          <h3 className="text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-white/90 font-medium">
            <li>Kaizang</li>
            <li>Nim Tshering</li>
            <li>Omshe</li>
            <li>Zigdel</li>
            <li>Noori</li>
            <li>Susang</li>
            <li>Amish</li>
          </ul>
        </div>

        {/* Rules Section */}
        <div
          ref={rulesRef}
          className="w-full max-w-3xl mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 text-left text-white/90 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Funzone Games & Tournament Rules
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            Tournament Rules & Guidelines
          </h3>

          <p className="mt-2 font-semibold">1. FIFA 23 (PS5)</p>
          <p className="ml-4 mt-1">
            <span className="font-medium">Format:</span> 16 Players, 2
            PlayStations (PS5), 2 players per console, Knockout (Single
            Elimination)
          </p>
          <p className="ml-4 mt-1">
            <span className="font-medium">Rules:</span> Match Duration: 10 mins
            (knockouts), 20 mins (final). Tie Breaker: Extra Time → Penalty
            Shootout. Team Selection: Any official in-game team. Controller: Own
            or provided. Conduct: Fair play required, unfair means =
            disqualification. Fixture Flow: Round of 16 → Quarterfinals →
            Semifinals → Final.
          </p>

          <p className="mt-4 font-semibold">
            2. Mobile Legends: Bang Bang (MLBB)
          </p>
          <p className="ml-4 mt-1">
            <span className="font-medium">Format:</span> 10 Teams (1 team per
            college). Team: 5 players + 1 substitute. Knockout (Single
            Elimination)
          </p>
          <p className="ml-4 mt-1">
            <span className="font-medium">Rules:</span> Match Type: Best of 1
            (knockouts), Final (Best of 3/5 – as decided). Mode: Draft Pick.
            Devices: Bring own mobile phones & headphones. Conduct: Cheating or
            delay = disqualification. Substitutes: Allowed only after matches.
            Fixture Flow: Round of 10 → Quarterfinals → Semifinals → Final.
          </p>

          <p className="mt-4 font-semibold">General Guidelines (Both Games)</p>
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>Registration is compulsory.</li>
            <li>Report on time, late entries not allowed.</li>
            <li>Organizer’s decision is final.</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center py-6 px-4 text-xs sm:text-sm border-t border-white/10 backdrop-blur-sm text-gray-100 relative z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="text-[#ffcc33] font-bold text-base sm:text-lg drop-shadow-[0_0_8px_rgba(255,204,51,0.6)]">
            CONTACT US
          </h3>
          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
            <a
              href="https://www.instagram.com/transformation_srmus?igsh=MXNoczg3bGR6dHo4"
              className="hover:underline"
            >
              <span className="text-[#ffcc33] font-semibold">Instagram:</span>{" "}
              @transformation_srmus <br />
              <span className="text-[#ffcc33] font-semibold"></span>
            </a>
            Faculty Contact: Mr. Samir Limboo (Asst. Prof.) - 7908970981 <br />
            <span className="text-[#ffcc33] font-semibold">Website:</span>{" "}
            <a
              href="https://srmus.ac.in"
              className="underline text-[#ffcc33] hover:text-white transition"
              target="_blank"
            >
              SRM University Sikkim
            </a>
          </p>
          <p className="text-gray-400 text-[11px] sm:text-xs">
            © 2025 SRM University Sikkim. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
