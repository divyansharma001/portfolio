"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Work with me
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Always seeking collaboration with talented individuals and innovative
          teams! Recruiters, welcome to connect with exciting opportunities. For
          potential collaborators, I&apos;m open to exploring impactful projects
          that push boundaries.
        </p>
        <Link href={"/"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Reach me
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
}
