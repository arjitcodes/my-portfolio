import React from 'react'
import { useRouter } from "next/navigation";



export default function ProtfolioHomeSection() {

    const router=useRouter()

    const handleContactMe=()=>{
        router.push('/#contacts')
        }

  return (
    <section id="protfolioHome" className="hero flex h-screen flex-col items-center justify-center space-y-12 snap-center snap-always">
          <div className="intro space-y-3 text-center">
            <h1 className='font-roboto text-5xl md:text-[4rem] font-bold text-main-text-color dark:font-semibold'>Hey, I&apos;m Arjit</h1>
            <h2 className='text-secondery-text-color font-bold text-base md:text-lg'>Devloper . Problem solver</h2>
          </div>
          <button className='text-secondery-text-color px-4 py-1 border border-secondery-text-color hover:text-white hover:bg-secondery-text-color hover:font-normal font-bold' onClick={handleContactMe}>Contact Me</button>
        </section>
  )
}
