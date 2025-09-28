"use client";
import { useEffect, useRef, useContext, useState } from "react";
import DemoAnimation from "@/lib/gsap";
import Image from "next/image";
import { LoadingContext } from "./context/LoadingContext";
import Link from "next/link";

const EVENTS = [
	{ href: "/coding-challenge", text: "CODING CHALLENGE" },
	{ href: "/ideathon", text: "IDEATHON" },
	{ href: "/innovators-expo", text: "INNOVATOR'S EXPO" },
	{ href: "/quiz", text: "QUIZ SHOW" },
	{ href: "/funzone-gaming", text: "FUNZONE GAMING" },
	{ href: "/youth-parliament", text: "YOUTH PARLIAMENT" },
	{ href: "/tech-treasure-hunt", text: "TECH TREASURE HUNT" },
];

export default function Page() {
	const textRef = useRef<HTMLHeadingElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const { isLoading } = useContext(LoadingContext);
	const [showEvents, setShowEvents] = useState(false);

	// Hide header on scroll
	useEffect(() => {
		let lastScroll = 0;
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			if (headerRef.current) {
				if (currentScroll > 80 && currentScroll > lastScroll) {
					headerRef.current.style.transform = "translateY(-100%)";
				} else {
					headerRef.current.style.transform = "translateY(0)";
				}
			}
			lastScroll = currentScroll;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
		<div className="relative w-full min-h-screen overflow-x-hidden text-white px-0 flex flex-col">
			{/* bg video */}
			<video
				ref={videoRef}
				className="fixed inset-0 w-full h-full object-cover -z-10"
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
			<div className="fixed inset-0 bg-black/70 -z-10"></div>

			{/* Header */}
<header
	ref={headerRef}
	className="w-full fixed top-0 left-0 z-20 px-4 py-3 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20 transition-transform duration-300"
>
	<div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-3 md:gap-0">
		{/* SRM Logo */}
		<div className="flex-shrink-0 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg px-3 py-2">
			<Image
				src="/srmus-logo-full-length.png"
				alt="SRM University Logo"
				width={1000}
				height={200}
				className="h-12 md:h-16 w-auto object-contain drop-shadow"
				priority
			/>
		</div>

		{/* Navigation */}
		<nav className="flex flex-wrap gap-2 lg:gap-6 justify-center md:justify-start flex-1">
			<Link
				href="/"
				className="px-4 py-2 rounded-full hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm md:text-base"
			>
				Home
			</Link>
			<a
				href="#about"
				className="px-4 py-2 rounded-full hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm md:text-base"
				onClick={(e) => {
					e.preventDefault();
					const about = document.getElementById("about");
					if (about) {
						const y = about.getBoundingClientRect().top + window.scrollY - 80;
						window.scrollTo({ top: y, behavior: "smooth" });
					}
				}}
			>
				About
			</a>
			<a
				href="#events"
				className="px-4 py-2 rounded-full hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm md:text-base"
				onClick={(e) => {
					e.preventDefault();
					const events = document.getElementById("events");
					if (events) {
						const y = events.getBoundingClientRect().top + window.scrollY - 80;
						window.scrollTo({ top: y, behavior: "smooth" });
					}
				}}
			>
				Events
			</a>
			<Link
				href="#rules"
				className="px-4 py-2 rounded-full hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm md:text-base"
			>
				Rules
			</Link>
			<Link
				href="https://docs.google.com/forms/d/e/1FAIpQLSfYeT-2EihlhuA6UCDdL-nxEOZh1VlcxOigulNjV3j0rVT6oA/viewform?usp=dialog"
				className="px-4 py-2 rounded-full hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm md:text-base"
			>
				Registration
			</Link>
		</nav>

		{/* NAAC Logo */}
		<div className="flex-shrink-0 mt-2 md:mt-0 ml-0 md:ml-4">
			<Image
				src="/NAAC_no_bg.png"
				alt="NAAC Logo"
				width={80}
				height={80}
				className="h-12 md:h-16 w-auto object-contain"
				priority
			/>
		</div>
	</div>
</header>


			{/* Main Content */}
			<main className="flex-1 flex flex-col items-center justify-center pt-32 pb-16 w-full">
				{/* Hero Section */}
				<section className="w-full flex flex-col items-center justify-center px-4 lg:px-0">
					<div className="max-w-4xl w-full mx-auto flex flex-col lg:flex-row gap-12 items-center justify-center">
						{/* Left: Info & Hero */}
						<div className="flex-1 flex flex-col items-start justify-center">
							<div className="mb-6">
								<p className="text-lg lg:text-2xl font-bold text-white">
									School of Information Technology
								</p>
								<p className="text-base lg:text-lg font-semibold text-gray-300">
									(Approved by AICTE)
								</p>
								<p className="text-base lg:text-lg font-semibold text-white mt-1">
									Presents
								</p>
								<p className="text-xl lg:text-3xl font-extrabold text--400 mt-1 mb-2">
									TECH FEST
								</p>
							</div>
							<h1
								ref={textRef}
								className="text-3xl lg:text-6xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_0_20px_rgba(192,132,252,0.7)] leading-tight text-left"
							>
								TRAN
								<span className="text-gray-400 drop-shadow-lg">S</span>
								FO
								<span className="text-gray-400 drop-shadow-lg">R</span>
								<span className="text-gray-400 drop-shadow-lg">M</span>
								ATION
								<span className="block text-orange-400 text-2xl lg:text-4xl font-bold mt-2">
									2025
								</span>
							</h1>
							<p className="mt-2 text-lg lg:text-2xl font-semibold text-cyan-200 drop-shadow">
								Empowering Youth For Viksit Bharat 2047
							</p>
						</div>
						
					</div>
				</section>

				{/* Event Highlights */}
				<section className="w-full max-w-3xl mx-auto mt-12" id="highlights">
					<div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md shadow-xl">
						<p className="font-bold text-2xl text-purple-300 mb-4 text-center">
							Event Highlights
						</p>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-base lg:text-lg text-white/90">
							<li>Hands-on Learning</li>
							<li>Innovation Showcase</li>
							<li>Expert Interactions</li>
							<li>Team Collaboration</li>
							<li>Exciting Competitions</li>
							<li>Prizes & Recognition</li>
							<li>Networking Opportunities</li>
							<li>Entertainment & Fun Zone</li>
						</ul>
						<div className="mt-6 text-center">
							<p className="font-semibold text-lg text-orange-300">
								Empowering Youth For Viksit Bharat 2047
							</p>
							
							<p className="mt-2 text-base text-white">
								Win a{" "}
								<span className="font-bold text-yellow-400">
									CASH PRIZE & TROPHY
								</span>
							</p>
							<p className="mt-4 font-semibold text-white">
								Dates & Venue:{" "}
								<span className="text-orange-300">
									31 OCT 2025 & 1 NOV 2025
								</span>{" "}
								|{" "}
								<span className="text-cyan-300">
									Main Block SRMUS 5th Mile
								</span>
							</p>
						</div>
					</div>
				</section>

				{/* About Section */}
<section
	id="about"
	className="w-full max-w-3xl mx-auto mt-16"
>
	<div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md shadow-xl">
		<h2 className="text-2xl lg:text-3xl font-bold text-purple-300 mb-4 text-left">
			About
		</h2>
		<p className="mb-3">
			<strong>Transformation 2025</strong> is the annual flagship technology and innovation festival of <strong>SRM University Sikkim</strong>, designed to inspire creativity, collaboration, and forward-thinking solutions for the nation’s future. Centered around the theme <em>“Empowering Youth for Viksit Bharat 2047”</em>, the festival reflects India’s aspiration to achieve developed-nation status by the centenary of independence.
		</p>
		<p className="mb-3">
			Hosted by the <strong>School of Information Technology</strong>, Transformation 2025 will take place on <strong>31st October and 1st November</strong>, welcoming school and college students from across the region. This vibrant platform encourages young minds to showcase their talent through a variety of projects and competitions, including:
		</p>
		<ul className="list-disc list-inside mb-3">
			<li><strong>Coding Challenge</strong> – test your programming and problem-solving skills.</li>
			<li><strong>Ideathon</strong> – develop innovative solutions to real-world problems.</li>
			<li><strong>Innovator's Expo</strong> – present cutting-edge projects and inventions.</li>
			<li><strong>Quiz Show</strong> – compete on technology, science, and general knowledge.</li>
			<li><strong>Funzone Gaming</strong> – enjoy skill-based and entertaining gaming competitions.</li>
			<li><strong>Youth Parliament</strong> – engage in discussions on leadership and social issues.</li>
			<li><strong>Tech Treasure Hunt</strong> – explore creativity and tech-based challenges.</li>
		</ul>
		<p className="mb-3">
			More than just competitions, Transformation 2025 is a movement of knowledge and innovation—encouraging students to think beyond classrooms, create real-world solutions, and embrace the entrepreneurial spirit. Through keynote sessions, exhibitions, interactive workshops, and collaborative forums, participants get the opportunity to connect with industry experts, explore emerging trends, and translate their ideas into impactful action.
		</p>
		<p>
			By celebrating talent, fostering leadership, and promoting innovation, Transformation 2025 not only highlights technological excellence but also reinforces <strong>SRM University Sikkim</strong>’s commitment to nurturing the change-makers who will drive India’s growth story toward <em>Viksit Bharat 2047</em>.
		</p>
	</div>
</section>


			{/* Contacts & Social */}
<section className="w-full max-w-3xl mx-auto mt-16 flex justify-center">
  <div className="w-full sm:w-3/4 lg:w-2/3 bg-white/10 border border-white/20 p-8 rounded-2xl backdrop-blur-md shadow-xl text-center">
    <p className="font-semibold text-lg text-purple-300 mb-4">
      Event Coordinator
    </p>
    <p className="mb-2">
      Mr. Sancha Bir Gurung, Asst. Prof. –{" "}
      <span className="font-bold text-cyan-300">7811928076</span>
    </p>
    <p className="mb-2">
      Mr. Sivarama Kumar P, Asst. Prof. –{" "}
      <span className="font-bold text-cyan-300">9940872949</span>
    </p>
    <p className="mb-0">
      Email:{" "}
      <a
        href="mailto:transformation@srmus.edu.in"
        className="underline text-orange-300"
      >
        transformation@srmus.edu.in
      </a>
    </p>
  </div>
</section>


				{/* Events Section */}
				<section id="events" className="w-full max-w-3xl mx-auto mt-16">
					<h2 className="text-2xl lg:text-3xl font-bold text-purple-300 mb-6 text-left">
						Events
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{EVENTS.map((btn, index) => (
							<div className="relative group" key={index}>
								{/* Neon purple animated background OUTSIDE the box */}
								<div
									className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-300 ease-in-out pointer-events-none"
									style={{
										background:
											"linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
										boxShadow:
											"0 0 32px 8px #a855f7, 0 0 64px 16px #7c3aed",
										filter: "blur(8px)",
										zIndex: 0,
									}}
								></div>
								<Link
									href={btn.href}
									className="relative flex items-center justify-center px-6 py-4 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg text-white font-semibold text-center text-base lg:text-lg transition-all duration-300 ease-in-out
                                        group-hover:translate-y-[-4px] group-hover:shadow-xl
                                        focus:outline-none"
									style={{ willChange: "transform", zIndex: 1 }}
								>
									{btn.text}
								</Link>
							</div>
						))}
					</div>
				</section>
			</main>

		{/* Footer */}
<footer className="w-full bg-black/90 backdrop-blur-md text-white px-6 lg:px-20 py-12 border-t border-white/20 mt-auto">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-start items-start gap-16 md:gap-20">

    {/* About / Branding */}
    <div className="flex-[1_0_35%] flex flex-col">
      <h3 className="text-2xl font-extrabold text-white mb-4">Transformation 2025</h3>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        Annual flagship technology and innovation festival of SRM University Sikkim.  
        Inspiring youth, fostering creativity, and empowering minds for a Viksit Bharat 2047.
      </p>
    </div>

    {/* Follow Us (Vertical) */}
    <div className="flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
      <ul className="flex flex-col gap-3 text-sm md:text-base">
        <li><a href="https://srmus.ac.in" target="_blank" className="hover:text-gray-400 transition-colors">Website</a></li>
        <li><a href="https://www.instagram.com/transformation_srmus/?__d=1" target="_blank" className="hover:text-gray-400 transition-colors">Instagram</a></li>
        <li><a href="https://x.com/SrmSikkim" target="_blank" className="hover:text-gray-400 transition-colors">Twitter</a></li>
        <li><a href="https://facebook.com/SRMUSOfficial" target="_blank" className="hover:text-gray-400 transition-colors">Facebook</a></li>
        <li><a href="https://in.linkedin.com/school/srmusikkim" target="_blank" className="hover:text-gray-400 transition-colors">Linkedin</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div className="flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
      <ul className="flex flex-col gap-2 text-sm md:text-base">
        <li>Mr. Sancha Bir Gurung – <a href="tel:+917811928076" className="hover:text-gray-400 transition-colors">7811928076</a></li>
        <li>Mr. Sivarama Kumar P – <a href="tel:+919940872949" className="hover:text-gray-400 transition-colors">9940872949</a></li>
        <li>Email – <a href="mailto:transformation@srmus.edu.in" className="hover:text-gray-400 transition-colors">transformation@srmus.edu.in</a></li>
      </ul>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-white/20 mt-10"></div>

  {/* Bottom */}
  <div className="mt-6 text-center text-xs text-white/60">
    © 2025 SRM University Sikkim. All rights reserved.
  </div>
</footer>



		</div>
	);
}
