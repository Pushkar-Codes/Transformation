"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useRef } from "react";

export default function YouthParliament() {
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
      <main className="relative z-10 flex flex-col items-center justify-center text-center lg:px-20 mt-16 space-y-10">
        <div className="max-w-4xl flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] mb-4 whitespace-nowrap">
            VIKSIT BHARAT <br /> YOUTH PARLIAMENT
          </h1>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-6 max-w-3xl">
            Step into the shoes of a leader! Join us for a powerful simulation
            of real parliamentary sessions as part of{" "}
            <span className="font-semibold text-[#ffcc33]">
              Transformation 2025
            </span>
            .
          </p>

          <p className="text-white/80 mt-3 text-base max-w-2xl mx-auto">
            Speak. Lead. Inspire. Experience leadership, governance, and debate
            like never before under the initiative{" "}
            <span className="font-semibold text-pink-400">Viksit Bharat</span>.
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
              Venue:{" "}
              <span className="text-purple-300 font-semibold">
                SRMUS Main Block, 5th Mile, Tadong, Gangtok <br /> Room No: 303
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
              href="https://techfestsrmus.in"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base lg:text-lg relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">Visit Website</span>
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
            Ms. Sabna Sharma (Asst. Prof.)
          </p>

          <h3 className="text-lg font-semibold text-white mb-3">
            Student Volunteers
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-white/90 font-medium">
            <li>Biswaraj Aley</li>
            <li>Anita Rai</li>
            <li>Md Ali</li>
            <li>Ayush Sherpa</li>
            <li>Susang</li>
            <li>Manish Chettri</li>
            <li>Sishir Rai</li>
            <li>Abishek Sharma</li>
          </ul>
        </div>

        {/* Rules Section */}
        <div
          ref={rulesRef}
          className="w-full max-w-3xl mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 text-left text-white/90 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Rules & Procedure – Lok Sabha Model
          </h2>

          <p className="mt-2 font-semibold">
            1. General Structure of the Session
          </p>
          <ul className="ml-4 mt-1 list-disc list-inside">
            <li>Model followed: Lok Sabha (Lower House of Parliament).</li>
            <li>Total duration: ~90 minutes.</li>
            <li>Total participants: 50 MPs (students).</li>
            <li>
              Motion for debate: One motion / resolution selected in advance
              (e.g., “This House believes that AI will create more jobs than it
              destroys in India”).
            </li>
            <li>
              Presiding Officer: The Speaker of the House (chosen from among
              participants).
            </li>
          </ul>

          <p className="mt-4 font-semibold">2. Roles in the Session</p>
          <ul className="ml-4 mt-1 list-disc list-inside">
            <li>
              Speaker (1 student) – Presides, maintains order, allocates time,
              conducts voting.
            </li>
            <li>Prime Minister (1 student) – Moves the motion.</li>
            <li>
              Council of Ministers (8–10 students) – IT, Finance, Education,
              Health, Defence, etc. Support motion.
            </li>
            <li>
              Leader of Opposition (1 student) – Leads Opposition, opposes
              motion.
            </li>
            <li>Opposition MPs (15–20 students) – Argue against the motion.</li>
            <li>
              Neutral / Questioning MPs (10 students) – Intervene, question both
              sides.
            </li>
            <li>
              Other MPs (rest) – Participate in rebuttals, short interventions.
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            3. Parliamentary Language & Etiquette
          </p>
          <ul className="ml-4 mt-1 list-disc list-inside">
            <li>Address Chair as “Hon’ble Speaker Sir/Madam”.</li>
            <li>Refer to each other as “Hon’ble Member”, not by name.</li>
            <li>Desk thumping for approval; no clapping.</li>
            <li>No personal remarks or unparliamentary language.</li>
            <li>All speeches start with “Hon’ble Speaker Sir, I rise to…”</li>
          </ul>

          <p className="mt-4 font-semibold">
            4. Order of Proceedings (Round by Round)
          </p>
          <ul className="ml-4 mt-1 list-disc list-inside">
            <li>
              Opening Round (5 min): Speaker opens House & announces motion, PM
              speech 3–4 min.
            </li>
            <li>
              Govt & Opposition Main Speeches (40 min total): Alternate speeches
              between Govt & Opposition MPs, 2–3 min each.
            </li>
            <li>
              Intervention / Question Hour Style (20 min): Neutral MPs ask
              questions, relevant Minister/LoP responds.
            </li>
            <li>
              Rebuttal / Short Intervention Round (20 min): Remaining MPs make
              short interventions, Govt & Opposition counterpoints.
            </li>
            <li>
              Closing Statements (5–10 min): LoP summarizes opposition, PM gives
              final reply.
            </li>
            <li>
              Voting & Adjournment (5 min): Speaker announces motion, voice
              vote, result declared.
            </li>
          </ul>

          <p className="mt-4 font-semibold">
            5. Time Management (90 minutes total)
          </p>
          <ul className="ml-4 mt-1 list-disc list-inside">
            <li>Opening: 5 min</li>
            <li>Govt + Opposition speeches: 40 min</li>
            <li>Question/Intervention: 20 min</li>
            <li>Rebuttals: 20 min</li>
            <li>Closing & Voting: 5–10 min</li>
          </ul>

          <p className="mt-4 font-semibold">
            6. Standard Rules of Conduct (per MoPA Youth Parliament Guidelines)
          </p>
          <ul className="ml-4 mt-1 list-disc list-inside">
            <li>
              Speaking Time Limit: Long speeches 2–3 min, Questions/Rebuttals
              30–60 sec, strictly enforced by Speaker.
            </li>
            <li>
              Points of Order: MPs may rise on a “Point of Order”, Speaker
              decides immediately.
            </li>
            <li>
              Decorum: No clapping, shouting, unparliamentary language; desk
              thumping allowed.
            </li>
            <li>Interventions: MPs must seek permission from Speaker.</li>
            <li>
              No Personal Remarks: Debate focuses on issues, not individuals.
            </li>
            <li>
              Speaker’s Authority: Final decision, can cut short speeches or
              move to vote.
            </li>
          </ul>

          <p className="mt-4 font-semibold">7. Marking / Evaluation Criteria</p>
          <ul className="ml-4 mt-1 list-disc list-inside">
            <li>Content (40%) – relevance, facts, arguments.</li>
            <li>Delivery (20%) – clarity, confidence, body language.</li>
            <li>Language (20%) – correct parliamentary terms, fluency.</li>
            <li>Time Discipline (10%) – keeping within allotted time.</li>
            <li>Decorum (10%) – respectful, parliamentary behaviour.</li>
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
            Faculty Contact: Ms. Sabna Sharma (Asst. Prof.) - 9734014682 <br />
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
