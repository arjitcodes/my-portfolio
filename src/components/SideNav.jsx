import { toggleSideNav } from '@/redux/slices/sideNavSlice'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import ThemeBtn from './ThemeBtn'

export default function SideNav() {

  const dispatch = useDispatch();

  const isSideNavOpen = useSelector((state) => {
    return state.sidenav
  })

  return (
    <>
      <div className={`fixed right-0 bottom-0 top-0 left-0 bg-transparent ${isSideNavOpen ? 'block' : 'hidden'} z-50`} onClick={() => dispatch(toggleSideNav(false))}></div>
      <div className={`fixed ${isSideNavOpen ? 'right-0' : '-right-full'} bottom-0 top-0 h-screen md:hidden z-50 bg-[rgb(var(--background-main-rgb))] px-12 flex flex-col items-center justify-start  py-8 shadow-xl`}>
        <div className='flex justify-end items-center w-full'>
          <AiOutlineClose className='text-2xl text-main-text-color' onClick={() => dispatch(toggleSideNav(false))} />
        </div>
        <ul className='text-main-text-color  font-roboto text-base h-screen flex flex-col justify-start mx-6 px-6 my-12 items-center space-y-6'>
          <Link href={'/'} className={`text-roboto font-medium text-lg `} onClick={() => dispatch(toggleSideNav(false))}>Protfolio</Link>
          <Link href={'/#about'} className={`text-roboto font-medium text-lg `} onClick={() => dispatch(toggleSideNav(false))}>About</Link>
          <Link href={'/#projects'} className={`text-roboto font-medium text-lg `} onClick={() => dispatch(toggleSideNav(false))}>Projects</Link>
          <Link href={'/#contacts'} className={`text-roboto font-medium text-lg `} onClick={() => dispatch(toggleSideNav(false))}>Contacts</Link>
          <Link href={'/blogs'} className={`text-roboto font-medium text-lg `} onClick={() => dispatch(toggleSideNav(false))}>Blogs</Link>
          <ThemeBtn />
        </ul>
      </div>
    </>
  )
}
