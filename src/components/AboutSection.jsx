import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="about-me flex h-screen flex-col items-center justify-center space-y-16 snap-center snap-always">
      <h1 className="text-[3.5rem] md:text-5xl font-roboto font-medium"><span className="text-secondery-text-color">About</span> <span className="text-main-text-color">me</span></h1>
      <p className="w-[82%] md:w-2/3 text-justify text-main-text-color font-poppins text-sm md:text-[1.075rem] leading-relaxed">Hello, I&apos;m Arjit &ndash; feel free to call me whatever you&apos;d like. I&apos;m a full-stack developer with a focus on HTML , CSS , JavaScript , Nodejs and React . Perhaps you&apos;re here seeking a digital solution to take your business beyond the ordinary . Maybe you&apos;re aiming to build an e-commerce site , a blog , or even something entirely new on the web. Well , you&apos;re in the right place! I can assist you in turning your digital dreams into reality. Let&apos;s connect and bring your vision to life.</p>
    </section>
  )
}
