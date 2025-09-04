"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/loading.json"; // Import JSON

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => onFinish(), 700); // wait for fade-out animation
    }, 5000); // play for 5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-64 h-64">
        <Lottie animationData={animationData} loop />
      </div>
    </div>
  );
}
