"use client";

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
            <li>Adarsh Adhikari</li>
            <li>Kala Sharma</li>
            <li>Rosan Rai</li>
            <li>Aditi Biswakarma</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
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
              target="_blank"
            >
              techfestsrmus.in
            </a>
          </p>
          <p className="text-white/50 text-[12px]">
            © 2025 Transformation | SRM University Sikkim. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
