"use client"
import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { AiOutlineDesktop } from 'react-icons/ai'
import { VscColorMode } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { toggleSideNav } from '@/redux/slices/sideNavSlice'


const ThemeBtn = () => {

  const [isThemeBtnShow, setThemeBtnShow] = useState(false)

  const [theme, setTheme] = useState('device-default')

  const dispatch = useDispatch()



  const handleLight = () => {
    document.documentElement.setAttribute("dark-theme", "light")
    setThemeBtnShow(false)
    setTheme('light')
    dispatch(toggleSideNav(false))
  }
  const handleDark = () => {
    document.documentElement.setAttribute("dark-theme", "dark")
    setThemeBtnShow(false)
    setTheme('dark')
    dispatch(toggleSideNav(false))
  }
  const handleDefault = () => {
    document.documentElement.removeAttribute("dark-theme")
    setThemeBtnShow(false)
    setTheme('device-default')
    dispatch(toggleSideNav(false))
  }

  return (
    <>
      <div className={`fixed w-full h-full  top-0 left-0 right-0 bottom-0 bg-transparent z-40 ${isThemeBtnShow ? '' : 'hidden'}`} onClick={() => { setThemeBtnShow(false) }} ></div>
      <div className='text-main-text-color hidden md:inline-block  py-1  relative z-50' onMouseOver={() => { setThemeBtnShow(true) }} >
        <VscColorMode className={`cursor-pointer text-2xl ${isThemeBtnShow ? 'text-secondery-text-color' : ''} hover:text-secondery-text-color `} onClick={() => { isThemeBtnShow ? setThemeBtnShow(false) : setThemeBtnShow(true) }} />
        <div className={`absolute  ${isThemeBtnShow ? 'flex' : 'hidden'} items-center justify-center space-x-4 top-10 -right-[3rem] bg-[rgb(var(--background-main-rgb))] shadow shadow-slate-600 rounded-xl px-4 py-2 z-50`} >
          <button onClick={handleLight} ><BsFillSunFill /></button>
          <button onClick={handleDark} ><BsFillMoonFill /></button>
          <button onClick={handleDefault} ><AiOutlineDesktop /></button>
        </div>
      </div>
      <div className='md:hidden space-x-6  pt-5'>
        <button onClick={handleLight}><BsFillSunFill /></button>
        <button onClick={handleDark} ><BsFillMoonFill /></button>
        <button onClick={handleDefault} ><AiOutlineDesktop /></button>
      </div>
    </>
  )
}

export default ThemeBtn