'use client'
import Image from "next/image";

import FunInterface from "@/components/FunInterface";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen h-auto p-8  sm:p-20 font-[family-name:var(--font-geist-sans)] custom-gradient bg-gradient-to-b from-black via-purple-950/50 to-purple-950/10">
      <main className=" ">
       <FunInterface/>
      </main>
      <style jsx>{`
  .custom-gradient {
    background: linear-gradient(180deg, 
      rgb(0, 0, 0) 0%,
      rgba(17, 0, 32, 0.95) 35%,
      rgba(25, 0, 47, 0.35) 100%
    );
  }
  /* rest of your styles */
`}</style>
    
    </div>
  );
  
}
