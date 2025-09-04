"use client";
import { useEffect, useRef } from "react";
import DemoAnimation from "@/lib/gsap";

export default function Page({ loading }: { loading?: boolean }) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animate title when loading is done
  useEffect(() => {
    if (!loading && textRef.current) {
      DemoAnimation(textRef.current);
    }
  }, [loading]);

  // Delay video start by 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white px-3 lg:px-16">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loop
        muted
        playsInline
        preload="auto"
      >
        {/* Desktop video */}
        <source
          src="/bg-large.mp4"
          type="video/mp4"
          media="(min-width: 1024px)"
        />
        {/* Mobile video */}
        <source
          src="/bg-small.mp4"
          type="video/mp4"
          media="(max-width: 1023px)"
        />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      {/* University Logo (Top-Left) */}
      <div className="absolute top-4 left-2 lg:top-6 lg:left-8 z-20 lg:px-6">
        <div className="bg-white/60 backdrop-blur-md rounded-lg border border-white/30 p-2 lg:p-3 shadow-lg">
          <img
            src="/srmus-logo-full-length.png"
            alt="SRM University Logo"
            className="h-6 lg:h-12 w-auto object-contain"
          />
        </div>
      </div>
      {/* Main left-aligned content */}
      <div className="relative z-10 -mt-[70px] leading-snug lg:mt-0 flex flex-col items-start text-left h-full justify-center max-w-full lg:max-w-3xl space-y-2.5 lg:space-y-3 px-1 lg:px-0">
        <div>
          <p className="mb-0 pb-0 font-semibold text-xl text-orange-500 leading-none">
            2025
          </p>
          {/* Tech Fest Title */}
          <h1
            ref={textRef}
            className="
      text-3xl lg:text-8xl mt-0 mb-0
      font-extrabold uppercase  tracking-widest
      text-white
      drop-shadow-[0_0_20px_rgba(192,132,252,0.7)]
      leading-[1.05]
    "
          >
            TRANSFORMATION
          </h1>
        </div>

        {/* Organised by */}
        <p className="text-lg lg:text-2xl font-semibold leading-snug">
          Organised by{" "}
          <span className="text-white">School of Information & Technology</span>
        </p>

        {/* University name with glass effect */}
        <p className="text-base lg:text-xl font-light italic opacity-90 bg-white/10 backdrop-blur-md rounded-md border border-white/20 px-2 lg:px-3 py-1 leading-relaxed">
          SRM University Sikkim
        </p>

        {/* Register Now button with glass effect */}
        <button className="mt-2 transition-transform duration-300 hover:scale-105">
          <a
            href="#register"
            className="mt-3 lg:mt-4 px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base lg:text-lg relative overflow-hidden "
          >
            <span className="relative z-10 transition-transform duration-300 hover:scale-110">
              Register Now
            </span>

            <span
              className="absolute inset-0 rounded-md bg-purple-500 blur-xl opacity-50 animate-pulse"
              aria-hidden="true"
            ></span>
          </a>
        </button>
      </div>

      {/* Event list bottom-right with glass effect */}
      <div className="absolute bottom-14 lg:bottom-18 right-2 lg:right-6 z-10 text-sm lg:px-14 lg:text-base space-y-1 lg:space-y-2 text-right">
        {[
          "Coding Challange",
          "Tech Quiz",
          "Ideathon",
          "IoT Innovations",
          "AR/VR Showcase",
          "Data Science Challenge",
          "Tech Start-up Pitch",
        ].map((event, i) => (
          <p
            key={i}
            className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1"
          >
            {event}
          </p>
        ))}
      </div>
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full backdrop-blur-sm lg:text-left px-2 lg:px-16 py-2 text-xs lg:text-sm border-t border-white/10 z-10">
        © 2025 SRM University Sikkim. All rights reserved.
      </footer>
    </div>
  );
}
