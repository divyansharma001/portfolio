import { MeteorsDemo } from "@/components/Card";
import { SparklesPreview } from "@/components/Heading";
import { HeroHighlightDemo } from "@/components/Hero";
import { LampDemo } from "@/components/LampHeader";
import { AnimatedPinDemo } from "@/components/Projects2";
import { HeroParallaxDemo } from "@/components/Skills";
import { Meteors } from "@/components/ui/meteors";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-between ">
   <LampDemo/>
   <HeroHighlightDemo/>
   <div className="hidden xl:block"><HeroParallaxDemo/></div>

   {/* <div className=" xl:pt-32 pt-24 text-4xl xl:text-7xl md:text-6xl font-light">
    Projects
   </div> */}

   <SparklesPreview/>
      

  <Meteors/>

  <div>
    <AnimatedPinDemo/>
  </div>



    </main>
   
  );
}
