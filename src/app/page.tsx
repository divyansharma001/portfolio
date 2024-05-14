import { HeroHighlightDemo } from "@/components/Hero";
import { LampDemo } from "@/components/LampHeader";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-between ">
   <LampDemo/>
   <HeroHighlightDemo/>
    </main>
   
  );
}
