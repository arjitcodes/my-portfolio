"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from 'react-icons/ai'
import { toggleSideNav } from '@/redux/slices/sideNavSlice';
import ThemeBtn from './ThemeBtn';

const Navbar = () => {
  const dispatch = useDispatch()
  const pathName = usePathname()
  const sectionName = useSelector((state) => {
    return state.section
  })

  return (
    <nav className="fixed top-0 w-screen left-0 right-0 flex justify-end items-center px-6 md:px-16 py-6 bg-[rgb(var(--background-main-rgb))] z-40 ">
      <ul className='text-main-text-color space-x-16 font-roboto text-base hidden md:flex items-center'>
        <Link href={'/'} className={`hover:text-secondery-text-color text-roboto font-medium tetext-2xl ${pathName === '/' && (sectionName === 'protfolioHome' || sectionName === 'about') ? 'text-secondery-text-color' : ''}`}>Protfolio</Link>
        {/* <Link href={'/#about'} className={`hover:text-secondery-text-color text-roboto font-medium tetext-2xl ${pathName==='/' && sectionName==='about' ?'text-secondery-text-color':''}`}>About</Link> */}
        <Link href={'/#projects'} className={`hover:text-secondery-text-color text-roboto font-medium tetext-2xl ${pathName === '/' && sectionName === 'projects' ? 'text-secondery-text-color' : ''}`}>Projects</Link>
        <Link href={'/#contacts'} className={`hover:text-secondery-text-color text-roboto font-medium tetext-2xl ${pathName === '/' && sectionName === 'contacts' ? 'text-secondery-text-color' : ''}`}>Contacts</Link>
        <Link href={'/blogs'} className={`hover:text-secondery-text-color text-roboto font-medium tetext-2xl ${pathName === '/blogs' ? 'text-secondery-text-color' : ''}`}>Blogs</Link>
        <ThemeBtn />

      </ul>
      {/* <ThemeBtn /> */}

      <AiOutlineMenu className=' md:hidden text-nav-menu-bar-color' onClick={() => dispatch(toggleSideNav(true))} />

    </nav>
  )
}

export default Navbar
