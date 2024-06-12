"use client"

import { useEffect } from "react";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import ReachmeOut from "@/components/reach-me/ReachmeOut";

export default function Home() {

  return (
    <main className="min-h-screen flex-col items-center justify-between p-[2rem] bg-white">
      <About />
      <div className="flex justify-around">
      <Experience />
      <ReachmeOut/>
      </div>
    </main>
  );
}
