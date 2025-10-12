"use client";
import { useEffect, useContext, useRef } from "react";
import DemoAnimation from "@/lib/gsap";
import Image from "next/image";
import { LoadingContext } from "./context/LoadingContext";
import Link from "next/link";

export default function Page() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (!isLoading) {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      }
      if (textRef.current) {
        DemoAnimation(textRef.current);
      }
    }
  }, [isLoading]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white px-3 lg:px-16">
      {/* bg video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster-sm.png"
      >
        <source
          src="/bg-large.mp4"
          type="video/mp4"
          media="(min-width: 1024px)"
        />
        <source
          src="/bg-small.mp4"
          type="video/mp4"
          media="(max-width: 1023px)"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

     {/* logo */}
<div className="fixed flex flex-col lg:flex-row lg:space-x-10 lg:justify-between lg:items-center top-4 left-4 right-4 z-20 px-1 py-3 lg:px-12">

  {/* SRM Logo */}
  <div className="bg-white/60 rounded-lg border border-white/30 p-2 lg:p-3 shadow-lg mb-4 lg:mb-0">
    <Image
      src="/srmus-logo-full-length.png"
      alt="SRM University Logo"
      width={500}
      height={120}
      priority
      quality={100}
      className="h-8 lg:h-12 w-auto object-contain"
    />
  </div>

  {/* IIC + NAAC Logos Container */}
  <div className="flex items-center justify-center gap-3 lg:gap-6">
    {/* IIC Logo */}
    <div className="bg-white/60 rounded-lg border border-white/30 p-2 lg:p-3 shadow-lg">
      <Image
        src="/iic-logo.png"
        alt="IIC Logo"
        width={120}
        height={120}
        quality={100}
        className="h-8 lg:h-12 w-auto object-contain rounded-lg"
      />
    </div>

    {/* NAAC Logo */}
    <div className="bg-white/60 rounded-lg border border-white/30 p-2 lg:p-3 shadow-lg">
      <Image
        src="/NAAC_no_bg.png"
        alt="NAAC Logo"
        width={120}
        height={120}
        quality={100}
        className="h-8 lg:h-12 w-auto object-contain rounded-lg"
      />
    </div>
  </div>
</div>



      <div className="relative z-10 -mt-[90px] leading-snug lg:mt-0 flex flex-col items-start text-left h-full justify-center max-w-full lg:max-w-3xl space-y-2.5 lg:space-y-3 px-1 lg:px-0">
        <div>
          <p className="mb-0 pb-0 font-semibold text-xl text-orange-500 leading-none">
            2025
          </p>

          <h1
            ref={textRef}
            className="
    text-3xl lg:text-8xl mt-0 mb-0
    font-extrabold uppercase tracking-widest
    text-white
    drop-shadow-[0_0_20px_rgba(192,132,252,0.7)]
    leading-[1.05]
    will-change-transform-filter /* <-- ADD THIS CLASS */
  "
          >
            TRANSFORMATION
          </h1>
        </div>

        <p className="text-md lg:text-2xl font-semibold leading-snug">
          Organised by{" "}
          <span className="text-white">School of Information & Technology</span>
        </p>

        <div className="flex space-x-2 justify-center items-center">
          <a href="https://srmus.ac.in" className="hover:underline">
            <p className="text-base lg:text-xl font-light italic opacity-90 bg-white/10 backdrop-blur-md rounded-md border border-white/20 px-2 lg:px-3 py-1 leading-relaxed">
              SRM University Sikkim
            </p>
          </a>

          <a href="https://www.instagram.com/transformation_srmus?igsh=MXNoczg3bGR6dHo4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="rgba(255,255,255,1)"
            >
              <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
            </svg>
          </a>
        </div>

        <button className="mt-2 transition-transform duration-300 hover:scale-105">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYeT-2EihlhuA6UCDdL-nxEOZh1VlcxOigulNjV3j0rVT6oA/viewform?usp=dialog"
            className="mt-3 lg:mt-4 px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base lg:text-lg relative overflow-hidden"
          >
            <span className="relative z-10 transition-transform duration-300 hover:scale-110 hover:underline">
              Register Now
            </span>

            <span
              className="absolute inset-0 rounded-md bg-purple-500 blur-xl opacity-50 animate-pulse"
              aria-hidden="true"
            ></span>
          </a>
        </button>
      </div>

      <div className="absolute bottom-14 lg:bottom-18 right-3 lg:mb-0 mb-8 lg:right-6 z-10 text-sm lg:px-14 lg:text-base space-y-1 lg:space-y-2 text-right ">
        <a
          href="/coding-challenge"
          className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1 block"
        >
          CODING CHALLENGE
        </a>
        <a
          href="/ideathon"
          className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1 block"
        >
          IDEATHON
        </a>
        <a
          href="/innovators-expo"
          className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1 block"
        >
          INNOVATOR&apos;S EXPO
        </a>
        <a
          href="/quiz"
          className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1 block"
        >
          QUIZ
        </a>
        <a
          href="/funzone-gaming"
          className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1 block"
        >
          FUNZONE GAMING
        </a>
        <a
          href="/youth-parliament"
          className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1 block"
        >
          YOUTH PARLIAMENT
        </a>
        <a
          href="/tech-treasure-hunt"
          className="opacity-90 hover:opacity-100 transition cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-2 lg:px-3 py-1 block"
        >
          TECH TREASURE HUNT
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full backdrop-blur-sm text-left px-4 lg:px-16 py-4 text-xs lg:text-sm border-t border-white/10 z-10">
        <div className="flex flex-col-reverse gap-2 lg:flex-row lg:justify-between">
          <div>© 2025 SRM University Sikkim. All rights reserved.</div>
          <div>
            <Link
              href="/rules-regulation"
              className="hover:underline mr-5 lg:mr-0"
            >
              Rules & Regulation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
