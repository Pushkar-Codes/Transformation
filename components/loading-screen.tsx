"use client";

import Lottie from "lottie-react";
import animationData from "@/public/loading.json";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-64 h-64">
        <Lottie animationData={animationData} loop />
      </div>
    </div>
  );
}
