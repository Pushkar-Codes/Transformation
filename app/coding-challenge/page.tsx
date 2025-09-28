import Image from "next/image";
import Link from "next/link";

export default function CodingChallange() {
  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
      {/* Animated blurred gradient circles */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-purple-500 via-pink-400 to-cyan-400 rounded-full blur-[140px] opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-[140px] opacity-50 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 rounded-full blur-[120px] opacity-40 pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

       <header className="w-full fixed top-0 left-0 z-20 px-4 py-3 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20">
  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
    {[
      { href: "/coding-challenge", text: "CODING CHALLENGE" },
      { href: "/ideathon", text: "IDEATHON" },
      { href: "/innovators-expo", text: "INNOVATOR'S EXPO" },
      { href: "/quiz", text: "QUIZ SHOW" },
      { href: "/funzone-gaming", text: "FUNZONE GAMING" },
      { href: "/youth-parliament", text: "YOUTH PARLIAMENT" },
      { href: "/tech-treasure-hunt", text: "TECH TREASURE HUNT" },
      { href: "/", text: "HOME PAGE" }, 
    ].map((event) => (
      <a
        href={event.href}
        key={event.text}
        className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md hover:bg-cyan-400/30 hover:text-cyan-300 font-medium text-sm md:text-base transition-colors duration-200 cursor-pointer"
      >
        {event.text}
      </a>
    ))}
  </div>
</header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center px-6 mt-40 flex-grow relative z-09">
        <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 uppercase tracking-widest drop-shadow-[0_0_20px_rgba(192,132,252,0.7)] animate-pulse">
          Coding Challenge
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed space-y-4">
          <span className="block">
            💻 Welcome to the <span className="font-semibold">Coding Challenge</span>!
          </span>
          <span className="block">
            Test your programming skills, solve exciting problems, and compete with coders worldwide!
          </span>
          <span className="block font-medium mt-4">
            📅 Date: <span className="text-yellow-400">31st Oct | 01st Nov </span>
          </span>
          <span className="block font-medium">
            🏆 Organized by <span className="text-cyan-400">SRM University Sikkim, School of Information Technology</span>
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex gap-4 justify-center">
            <a
              href="#register"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base lg:text-lg relative overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              Register Now
            </a>

            <a
              href="#rules"
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-base lg:text-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              View Rules
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full backdrop-blur-sm lg:text-left px-4 lg:px-16 py-2 text-xs lg:text-sm border-t border-white/10 z-10 text-center">
        © 2025 CodingChallange. All rights reserved.
      </footer>
    </div>
  );
}
