"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Ideathon() {
  const rulesRef = useRef<HTMLDivElement | null>(null);

  const scrollToRules = () => {
    const el = rulesRef.current;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <main className="relative z-10 flex flex-col items-center mb-[150px] lg:mb-[100px] px-6 sm:px-8 space-y-10">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
            {/* Left Side Text */}
            <div className="flex flex-col lg:mt-0 -mt-[30px] lg:items-start lg:text-left">
              <h1 className="text-md lg:text-2xl mt-0 mb-0 font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_20px_rgba(192,132,252,0.7)] leading-[1.05]">
                Transformation
                <span className="text-xs lg:text-xl text-orange-500 font-semibold">
                  {" "}
                  2025
                </span>
              </h1>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] mb-4">
                Ideathon
              </h1>

              <span className=  "text-[#ffcc33] font-semibold">
                  Viksit Sikkim To Viksit Bharat  <br /> <br /> 
                </span>

              <p className="text-base sm:text-lg md:text-xl text-pink-100 leading-relaxed">
                <span className="text-xl block">
                  Welcome to the{" "}
                  <span className="text-[#ffcc33] font-semibold">
                    Ideathon: Tech for Social Impact
                  </span>
                  !
                </span>
                <span className="block mt-2 leading-tight">
                  Present your innovative ideas that bring positive change to
                  society through technology and creativity.
                </span>
                <span className="block font-medium mt-4">
                  Date:{" "}
                  <span className="text-purple-300">31st Oct | 01st Nov</span>
                </span>
                <span className="block font-medium mt-1">
                  Organized by{" "}
                  <span className="text-pink-400">
                    SRM University Sikkim, School of Information Technology
                  </span>
                </span>
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd3wK8mKi2Xx7At8sBOU9Tn5qGCRR5H5gAW8Z-9z8iD6E9QvQ/viewform?usp=dialog"
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

            {/* Right Side Image */}
            <div className="lg:w-1/2">
              <Image
                src="/ideathon.png"
                alt="Illustration for Ideathon event"
                width={1080}
                height={830}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Coordinators Section */}
        <div className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Faculty & Students */}
            <div className="p-6 sm:p-8">
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(244,114,182,1)"
                >
                  <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"></path>
                </svg>
                <h2 className="text-lg sm:text-xl font-bold text-pink-300 tracking-wide">
                  Faculty Coordinator
                </h2>
              </div>

              <p className="text-pink-100 mb-6 font-medium text-sm sm:text-base">
                Ms. Priyadarshini Pradhan (Asst. Prof.)
              </p>

              <h3 className="text-lg font-semibold text-pink-300">
                Student Volunteers
              </h3>
              <ul className="list-disc list-inside text-pink-100 font-medium text-sm sm:text-base space-y-1">
                <li>Gitesh Panday</li>
                <li>Madhav Bhandari</li>
                
              </ul> 
            </div>

            {/* Contact Us */}
            <div className="p-6 sm:p-8 border-t border-white/20 lg:border-t-0 lg:border-l">
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,204,51,1)"
                >
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821Z"></path>
                </svg>
                <h3 className="text-[#ffcc33] font-bold text-base sm:text-lg drop-shadow-[0_0_8px_rgba(255,204,51,0.6)]">
                  CONTACT US
                </h3>
              </div>

              <div className="mt-4 space-y-3 text-gray-200">
                <p>
                  <span className="text-[#ffcc33] font-semibold">
                    Faculty Contact:
                  </span>
                  <br />
                 Ms. Priyadarshini Pradhan (Asst. Prof.) - 7679435343
                </p>
                 <a
                  href="https://www.instagram.com/transformation_srmus?igsh=MXNoczg3bGR6dHo4"
                  className="hover:underline"
                >
                  <div className="flex space-x-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                    -transformation_srmus
                  </div>
                </a>

                <div>
                  <Link href="/rules-regulation" className="hover:underline">
                    Rules & Regulation
                  </Link>
                </div>

                <p>
                  <span className="text-[#ffcc33] font-semibold">
                    Visit SRMUS:
                  </span>{" "}
                  <a
                    href="https://srmus.ac.in"
                    className="underline text-[#ffcc33] hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SRM University Sikkim
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rules Section */}
        <div
          ref={rulesRef}
          style={{ scrollMarginTop: "100px" }}
          className="w-full max-w-5xl mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-8 text-left shadow-[0_0_25px_rgba(236,72,153,0.3)] leading-relaxed text-pink-100"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-pink-300 mb-4">
            Ideathon Rules & Guidelines
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Teams can have 2–5 members from schools or colleges.</li>
            <li>Projects should address a real-world social problem.</li>
            <li>Each team presents an idea with prototype/demo (if available).</li>
            <li>Judging criteria: Innovation, Impact, Feasibility, Presentation.</li>
            <li>Plagiarized or previously submitted ideas are disqualified.</li>
            <li>All participants must carry valid student ID cards.</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full backdrop-blur-sm px-4 lg:px-24 py-4 text-xs lg:text-sm border-t border-white/10 z-10">
        <div className="flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between">
          <div>© 2025 SRM University Sikkim. All rights reserved.</div>

          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
            <Link href="/" className="hover:underline">
              <div className="flex items-center space-x-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21Z"></path>
                </svg>
                <p>Home</p>
              </div>
            </Link>
            <Link href="/rules-regulation" className="hover:underline">
              Rules & Regulation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
