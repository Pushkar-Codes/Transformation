"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { animateHamburger } from "@/lib/gsap";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktopEventsOpen, setDesktopEventsOpen] = useState(false);
  const [isMobileEventsOpen, setMobileEventsOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const topPathRef = useRef<SVGPathElement>(null);
  const middlePathRef = useRef<SVGPathElement>(null);
  const bottomPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    animateHamburger(
      isMobileMenuOpen,
      mobileMenuRef.current,
      topPathRef.current,
      middlePathRef.current,
      bottomPathRef.current
    );
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setMobileEventsOpen(false);
  };

  const toggleDesktopEvents = () => setDesktopEventsOpen(!isDesktopEventsOpen);
  const toggleMobileEvents = () => setMobileEventsOpen(!isMobileEventsOpen);

  const eventLinks = [
    { name: "Coding Challenge", href: "/coding-challenge" },
    { name: "Ideathon", href: "/ideathon" },
    { name: "Innovator's Expo", href: "/innovators-expo" },
    { name: "Quiz", href: "/quiz" },
    { name: "Funzone Gaming", href: "/funzone-gaming" },
    { name: "Youth Parliament", href: "/youth-parliament" },
    { name: "Tech Treasure Hunt", href: "/tech-treasure-hunt" },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-6 flex-wrap">
              <Link href="/" className="flex items-center">
                <Image
                  src="/srmus-logo-full-length.png"
                  alt="SRM University Logo"
                  width={500}
                  height={120}
                  priority
                  quality={100}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            <div className="lg:flex space-x-8 hidden">
              <div className="flex items-center justify-center ">
                <Image
                  src="/iic-logo.png"
                  alt="IIC Logo"
                  width={120}
                  height={120}
                  quality={100}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>

              <Link href="#" className="flex items-center">
                <Image
                  src="/NAAC_no_bg.png"
                  alt="NAAC Logo"
                  width={120}
                  height={120}
                  quality={100}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {/* <Link
                href="/"
                className="text-gray-800 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                Home
              </Link> */}
              <Link
                href="/#about"
                className="text-gray-800 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                About
              </Link>

              <div className="relative">
                <button
                  onClick={toggleDesktopEvents}
                  className="flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-300 font-medium"
                >
                  <span>Events</span>
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${
                      isDesktopEventsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDesktopEventsOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white/30 backdrop-blur-2xl">
                    <div className="py-1">
                      {eventLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDesktopEventsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-purple-600 focus:outline-none z-50"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    ref={topPathRef}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16"
                  />
                  <path
                    ref={middlePathRef}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12h16"
                  />
                  <path
                    ref={bottomPathRef}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center space-x-11 mb-3  justify-center">
          <div className="flex items-center justify-center ">
            <Image
              src="/iic-logo.png"
              alt="IIC Logo"
              width={120}
              height={120}
              quality={100}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </div>

          <div className="flex items-center">
            <Image
              src="/NAAC_no_bg.png"
              alt="NAAC Logo"
              width={120}
              height={120}
              quality={100}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 h-full w-full bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="/"
          className="text-2xl text-gray-800 font-bold"
          onClick={toggleMobileMenu}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="text-2xl text-gray-800 font-bold"
          onClick={toggleMobileMenu}
        >
          About
        </Link>

        <div className="w-full text-center">
          <button
            onClick={toggleMobileEvents}
            className="flex items-center justify-center w-full text-2xl text-gray-800 font-bold"
          >
            <span>Events</span>
            <svg
              className={`w-6 h-6 ml-2 transform transition-transform duration-300 ${
                isMobileEventsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isMobileEventsOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {eventLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg text-gray-600"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
