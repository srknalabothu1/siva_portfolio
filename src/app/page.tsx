"use client"

import { useEffect } from "react";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import ReachmeOut from "@/components/reach-me/ReachmeOut";

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-8 bg-white">
      <About />
      <div className="flex flex-col md:flex-row justify-around w-full mt-8">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Experience />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <ReachmeOut />
        </div>
      </div>
    </main>
  );
}
