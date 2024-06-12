"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/moving-border"
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
          potential collaborators, I&apos;m open to exploring impactful projects that
          push boundaries.
        </p>
        <div className="flex justify-center pt-5 ">
        
        <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-md px-4 py-2"
          >
            Contact me!
          </a>
      
    </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
