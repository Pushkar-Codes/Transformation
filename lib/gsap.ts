import gsap from "gsap";

export default function DemoAnimation(element: HTMLElement | null) {
  if (!element) return;

  const container = element.parentElement;

  const timeline = gsap.timeline({ delay: 1 });

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
        // infinite pulse animation of glow
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

  const subTitle = element.nextElementSibling as HTMLElement | null;
  if (subTitle && subTitle.tagName === "P") {
    timeline.fromTo(
      subTitle,
      {
        rotationX: -90,
        autoAlpha: 0,
        transformPerspective: 600,
        filter: "blur(5px)",
      },
      {
        rotationX: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    );
  }

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

  // event stack
  const eventListLinks = document.querySelectorAll(
    ".absolute.bottom-14 a, .absolute.lg\\:bottom-18 a"
  );
  gsap.set(eventListLinks, { x: -50, autoAlpha: 0 });
  gsap.to(eventListLinks, {
    x: 0,
    autoAlpha: 0.9,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
    delay: 2.2,
  });

  // GSAP hover effects
  eventListLinks.forEach((item) => {
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

//menu

export const animateHamburger = (
  isOpen: boolean,
  menu: gsap.TweenTarget,
  topPath: gsap.TweenTarget,
  middlePath: gsap.TweenTarget,
  bottomPath: gsap.TweenTarget
) => {
  const tl = gsap.timeline();

  if (isOpen) {
    // Animate menu sliding in
    gsap.to(menu, {
      x: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    // Animate hamburger icon to an "X"
    tl.to(
      topPath,
      {
        rotate: 45,
        y: 6,
        transformOrigin: "center center",
        duration: 0.3,
      },
      0
    )
      .to(
        middlePath,
        {
          opacity: 0,
          duration: 0.2,
        },
        0
      )
      .to(
        bottomPath,
        {
          rotate: -45,
          y: -6,
          transformOrigin: "center center",
          duration: 0.3,
        },
        0
      );
  } else {
    // Animate menu sliding out
    gsap.to(menu, {
      x: "-100%",
      duration: 0.5,
      ease: "power3.inOut",
    });

    tl.to(
      topPath,
      {
        rotate: 0,
        y: 0,
        duration: 0.3,
      },
      0
    )
      .to(
        middlePath,
        {
          opacity: 1,
          duration: 0.2,
        },
        0
      )
      .to(
        bottomPath,
        {
          rotate: 0,
          y: 0,
          duration: 0.3,
        },
        0
      );
  }
};
