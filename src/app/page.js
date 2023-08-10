"use client"
//social-icons
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { updatePresentSection } from "@/redux/slices/sectionSlice";
import { Toaster } from "react-hot-toast";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import ProtfolioHomeSection from "@/components/ProtfolioHomeSection";



export default function Home() {
  
const dispatch=useDispatch()

useEffect(() => {
 window.addEventListener('scroll',updateActiveLink)
})

useEffect(()=>{
  updateActiveLink()
})


  function updateActiveLink() {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + scrollPosition;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const targetSection = `${section.id}`;
        
        console.log(targetSection);
        dispatch(updatePresentSection(targetSection))
        
      }
    });
  }


  return (
    <>
      <main className="">
      <Toaster/>
        <ProtfolioHomeSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
    </>
  )
}
