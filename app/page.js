'use client'
import Image from "next/image";

import FunInterface from "@/components/FunInterface";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen h-auto p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]  bg-gradient-to-b from-black via-purple-950/50 to-purple-950/10">
      <main className=" ">
       <FunInterface/>
      </main>
    
    </div>
  );
}
