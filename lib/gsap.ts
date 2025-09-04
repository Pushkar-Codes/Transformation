import gsap from "gsap";

export default function DemoAnimation(element: HTMLElement | null) {
  if (!element) return;

  const container = element.parentElement; // wrapper div holding title + p above

  const timeline = gsap.timeline({ delay: 3 });

  // Animate the paragraph above the title
  if (container) {
    const paragraph = container.querySelector("p");
    if (paragraph) {
      timeline.fromTo(
        paragraph,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }

  // Flip animation for the main title (h1)
  timeline.fromTo(
    element,
    {
      rotationX: -90,
      autoAlpha: 0,
      transformPerspective: 600,
      filter: "blur(8px) drop-shadow(0 0 8px rgba(192,132,252,0.6))",
    },
    {
      rotationX: 0,
      autoAlpha: 1,
      filter: "blur(0px) drop-shadow(0 0 20px rgba(192,132,252,1))",
      duration: 1,
      ease: "back.out(1.7)",
      onComplete: () => {
        // Infinite pulse animation of glow
        gsap.to(element, {
          filter: "blur(0px) drop-shadow(0 0 10px rgba(192,132,252,0.8))",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      },
    },
    "-=0.4"
  );

  // Animate the following siblings (sub-content below title)
  if (container) {
    const siblings: HTMLElement[] = [];
    let next = container.nextElementSibling as HTMLElement | null;
    while (next) {
      siblings.push(next);
      next = next.nextElementSibling as HTMLElement | null;
    }
    timeline.to(
      siblings,
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.7"
    );
  }

  // Animate event list items sliding in from left to right as a stack
  const eventListItems = document.querySelectorAll(".absolute.bottom-14 p");
  gsap.set(eventListItems, { x: -50, autoAlpha: 0 });
  gsap.to(eventListItems, {
    x: 0,
    autoAlpha: 0.9,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
    delay: 3.3,
  });

  // GSAP hover effects for event list items
  eventListItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.1,
        x: 10,
        duration: 0.2,
        ease: "power1.out",
        boxShadow: "0px 10px 20px rgba(192, 132, 252, 0.6)",
        zIndex: 20,
        position: "relative",
      });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        x: 0,
        duration: 0.15,
        ease: "power1.inOut",
        boxShadow: "none",
        zIndex: 0,
        position: "static",
      });
    });
  });
}
