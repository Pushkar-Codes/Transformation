import Image from "next/image";

export default function CodingChallengePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10">
      {/* Header */}
      <header className="text-center mb-10 relative w-full">
        {/* Logo */}
        <div className="absolute top-4 left-2 lg:top-6 lg:left-8 z-20 lg:px-6">
          <div className="bg-white/60 rounded-lg border border-white/30 p-2 lg:p-3 shadow-lg">
            <Image
              src="/public/srmus-logo-full-length.png"
              alt="SRM University Logo"
              width={1000}
              height={100}
              className="h-6 lg:h-12 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main Graphic */}
      <div className="mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2721/2721274.png"
          alt="Laptop with Code"
          className="w-32 h-32 mx-auto drop-shadow-lg"
        />
      </div>

      {/* Highlights */}
      <div className="text-center font-semibold text-yellow-300 mb-4">
        TECH SKILLS | TROPHY | EVENTS | MENTORSHIP | PRIZES
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-widest text-yellow-400">
        CODING CHALLENGE
      </h1>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
          <span className="text-3xl">📅</span>
          <h3 className="text-xl font-bold mt-2">WHEN?</h3>
          <p className="mt-1 text-gray-300">
            31 Oct | School <br /> 01 Nov | College
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
          <span className="text-3xl">🎓</span>
          <h3 className="text-xl font-bold mt-2">WHO?</h3>
          <p className="mt-1 text-gray-300">
            Any School and College Student !!
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
          <span className="text-3xl">📍</span>
          <h3 className="text-xl font-bold mt-2">WHERE?</h3>
          <p className="mt-1 text-gray-300">SRMUS Main Block!!</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center text-lg font-semibold text-yellow-200 mb-6">
        SKILL UP ON PYTHON, VS CODE, COLOB, JCL AND MORE
      </div>

      {/* Description */}
      <p className="max-w-2xl text-center text-gray-300 mb-12 leading-relaxed">
        Join the Coding Challenge 2025 and test your programming skills against
        real-world problems. Compete with fellow coders, showcase your
        creativity, and win exciting prizes.
      </p>

      {/* Footer */}
      <footer className="text-center border-t border-gray-700 pt-6">
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
  );
}
