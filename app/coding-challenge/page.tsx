"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function CodingChallange() {
  const rulesRef = useRef<HTMLDivElement | null>(null);

  const scrollToRules = () => {
    const el = rulesRef.current;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-pink-900 text-white font-sans overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="h-40" />

      {/* Background Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 rounded-full blur-[130px] opacity-30 pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-fuchsia-500 via-pink-600 to-purple-600 rounded-full blur-[130px] opacity-30 pointer-events-none z-0" />

      {/* Main Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 lg:px-20   space-y-10">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] mb-4">
            Coding Challenge
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-pink-100 leading-relaxed">
            <span className="block">
              Welcome to the{" "}
              <span className="text-pink-400 font-semibold">
                Coding Challenge
              </span>
              !
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

        {/* Coordinators Section */}
        <div className="w-full max-w-2xl mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 text-center shadow-[0_0_25px_rgba(236,72,153,0.3)]">
          <h2 className="text-lg sm:text-xl font-bold text-pink-300 mb-2 tracking-wide">
            Faculty Coordinator
          </h2>
          <p className="text-pink-100 mb-6 font-medium text-sm sm:text-base">
            Mr. Arghya Sikdar
          </p>

          <h3 className="text-lg font-semibold text-pink-300 mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-pink-100 font-medium text-sm sm:text-base">
            <li>Pushkar Dutta</li>
            <li>Rupankar Saswari</li>
            <li>Avash Sharma</li>
            <li>Aunkush Barua</li>
            <li>Benadic Manger</li>
          </ul>
        </div>

        {/* Rules & Instructions Section */}
        <div
          ref={rulesRef}
          style={{ scrollMarginTop: "100px" }}
          className="w-full max-w-5xl mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-8 text-left shadow-[0_0_25px_rgba(236,72,153,0.3)] leading-relaxed text-pink-100"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-pink-300 mb-4 text-center">
            Coding Competition Rules & Instructions
          </h2>

          <p className="whitespace-pre-line text-md sm:text-md md:text-base">
            {`1. Eligibility
● Open to all students from recognized institutions.
● Participants can register individually or in teams of 4.
● Each participant/team must use their own valid student ID at the time of registration.

2. Competition Format
● The competition will consist of multiple problem statements (ranging from easy to advanced).
● Problems will test logical thinking, problem-solving, algorithms, and coding efficiency.
● Allowed programming languages: C, C++, Java, Python, R, Ruby, Redux, Typescript.
● Participants will be given a time limit to solve the problems.
● Solutions will be submitted via [online judge/platform/Google Classroom/manual submission].

3. Rules
1. Original Work Only – Plagiarism, copying code from the internet, or taking help from others is strictly prohibited.
2. No External Devices/Assistance – Use of mobile phones, notes, or online forums during the contest is not allowed.
3. Time Limits – Each problem will have a time limit and may carry different weightage of marks.
4. Execution & Output – Only programs that compile and run successfully will be considered.
5. Partial Points – Partial points will not be awarded for partially correct solutions.
6. Code Quality – Efficient, optimized, and well-structured code will be preferred in case of tie-breakers.
7. Judges’ Decision Final – Any dispute will be resolved by the organizing committee, and the decision will be binding.

4. Instructions for Participants
● Report to the venue 30 minutes before the contest starts (or log in early if online).
● Carry your college ID card and registration confirmation.
● Ensure your laptop/PC is fully charged (if you Bring Your Own Device) or use the system provided.
● Read each problem statement carefully before coding.
● Save and submit your code before the deadline—late submissions will not be accepted.
● Maintain silence and discipline during the event. Any malpractice will lead to disqualification.

5. Evaluation Criteria
● Correctness of output (primary factor).
● Time & Space efficiency of the code.
● Code readability and structure.
● Number of problems solved within the time frame.

6. Prizes & Certificates
● Certificates will be awarded to all participants.
● Winners & runners-up will receive special prizes.`}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center py-6 px-4 text-xs sm:text-sm border-t border-white/10 backdrop-blur-sm text-gray-100 relative z-10">
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
            Faculty Contact: Mr. Arghya Sikdar (Asst. Prof.) - 6294571233 <br />
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
