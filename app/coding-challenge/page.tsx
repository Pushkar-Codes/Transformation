

import Image from "next/image";
import { useRef, useEffect, useContext } from "react";
import { LoadingContext } from "../context/LoadingContext"; 

export default function CodingChallengePage() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (!isLoading) {
      videoRef.current?.play().catch((err) => console.log("Autoplay prevented:", err));
     
    }
  }, [isLoading]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white px-3 lg:px-16">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster-sm.png"
      >
        <source src="/bg-large.mp4" type="video/mp4" media="(min-width: 1024px)" />
        <source src="/bg-small.mp4" type="video/mp4" media="(max-width: 1023px)" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Page content */}
      <div className="flex flex-col items-center relative z-10 py-10">
        <header className="mb-10 flex justify-center w-full">
          <div className="bg-white/60 rounded-lg border border-white/30 p-3 lg:p-5 shadow-lg">
            <Image
              src="/srmus-logo-full-length.png"
              alt="SRM University Logo"
              width={450}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </header>

        <div className="mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721274.png"
            alt="Laptop with Code"
            className="w-32 h-32 mx-auto drop-shadow-lg"
          />
        </div>

        <div className="text-center font-semibold text-yellow-300 mb-4">
          TECH SKILLS | TROPHY | EVENTS | MENTORSHIP | PRIZES
        </div>

        <h1
          ref={textRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-widest text-yellow-400"
        >
          CODING CHALLENGE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-800/80 rounded-2xl p-6 shadow-lg text-center">
            <span className="text-3xl">📅</span>
            <h3 className="text-xl font-bold mt-2">WHEN?</h3>
            <p className="mt-1 text-gray-300">
              31 Oct | School <br /> 01 Nov | College
            </p>
          </div>
          <div className="bg-gray-800/80 rounded-2xl p-6 shadow-lg text-center">
            <span className="text-3xl">🎓</span>
            <h3 className="text-xl font-bold mt-2">WHO?</h3>
            <p className="mt-1 text-gray-300">Any School and College Student !!</p>
          </div>
          <div className="bg-gray-800/80 rounded-2xl p-6 shadow-lg text-center">
            <span className="text-3xl">📍</span>
            <h3 className="text-xl font-bold mt-2">WHERE?</h3>
            <p className="mt-1 text-gray-300">SRMUS Main Block!!</p>
          </div>
        </div>

        <div className="text-center text-lg font-semibold text-yellow-200 mb-6">
          SKILL UP ON PYTHON, VS CODE, COLOB, JCL AND MORE
        </div>

        <p className="max-w-2xl text-center text-gray-300 mb-12 leading-relaxed">
          Join the Coding Challenge 2025 and test your programming skills against
          real-world problems. Compete with fellow coders, showcase your
          creativity, and win exciting TROPHY.
        </p>

        <footer className="text-center border-t border-gray-700 pt-6 w-full">
          <div className="mb-2 text-sm text-gray-400">
            <span>@srmsikkim</span> | <span>@transformation_srmus</span>
          </div>
          <div className="text-sm text-gray-400">
            For More Information visit us at -{" "}
            <a
              href="https://techfestsrmus.in"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 underline hover:text-yellow-300"
            >
              techfestsrmus.in
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
