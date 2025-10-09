"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function CodingChallange() {
  return (
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
          </div>
        </div>

        {/* Coordinators Section */}
        <div className="w-full max-w-2xl mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 text-center shadow-[0_0_25px_rgba(236,72,153,0.3)]">
          <h2 className="text-xl font-bold text-pink-300 mb-2 tracking-wide">
            Faculty Coordinator
          </h2>
          <p className="text-pink-100 mb-6 font-medium">Mr. Arghya Sikdar</p>

          <h3 className="text-lg font-semibold text-pink-300 mb-3">
             Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-pink-100 font-medium">
            <li>Pushkar Dutta</li>
            <li>Rupankar Saswari</li>
            <li>Avash Sharma</li>
            <li>Aunkush Barua</li>
            <li>Benadic Manger</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
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
      </footer>
    </div>
  );
}
