import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

const ProjectSection = () => {

    const [counter, setCounter] = useState(0)
    const [totalProject, setTotalProject] = useState(0)
    const [projectsArr, setProjectsArr] = useState([])


    const handleBulltes = (i) => {
        setCounter(i)
    }


    useEffect(() => {
        const projectsNode = document.querySelectorAll('.md-project')
        const projectsNum = projectsNode.length
        setTotalProject(projectsNum)
        setProjectsArr(projectsNode)
    }, [])

    function handlePrevProject() {
        setCounter(counter - 1)
    }

    function handleNextProject() {
        setCounter(counter + 1)
    }


    useEffect(() => {
        const size = document.querySelector('.md-project').clientWidth
        document.querySelector('.projects-wraper').style.transform = `translateX(-${counter * size}px)`
    }, [counter])

    return (
        <>

            <section id="projects" className=" flex h-screen flex-col justify-center items-center space-y-20 md:space-y-10 snap-center snap-always">
                <h1 className="text-[3rem] md:text-5xl font-roboto font-medium"><span className="text-secondery-text-color">Projects</span> <span className="text-main-text-color">/ Work</span></h1>
                <div className='projects  w-3/4 h-2/5  overflow-hidden hidden md:block'>
                    <div className="projects-wraper w-full h-full  flex transition-transform duration-700 [&>*]:px-4 ">

                        <div className={`md-project  flex-col lg:flex-row space-y-6 md:space-y-9 lg:space-y-0 lg:space-x-16 items-center justify-center w-full flex flex-shrink-0`}>
                            <div className="project-img ">
                                <div className="aspect-square w-72 md:aspect-video md:w-96 lg:w-60 bg-transparent lg:aspect-square flex justify-center items-center text-main-text-color border border-secondery-text-color">Photo will be updated soon.</div>

                            </div>
                            <div className='space-y-4 '>
                                <p className='text-main-text-color font-roboto text-sm md:text-lg   line-clamp-4 leading-relaxed'>
                                    &quot;The Tales of Web&quot; is a blog website that features blog posts about web development. For its development, I am using <span className='text-secondery-text-color '>Express.js</span> along with pure <span className='text-secondery-text-color '>HTML</span>, <span className='text-secondery-text-color '>CSS</span>, and <span className='text-secondery-text-color '>JS</span> . This blog <span className='text-secondery-text-color '>includes an admin dashboard</span> that facilitates adding new blogs, removing blogs, and editing existing blogs . The website is obviously <span className='text-secondery-text-color '>responsive</span> , and it also offers a <span className='text-secondery-text-color '>dark theme</span> option for a better reading experience in low-light environments.
                                </p>
                                <button className='  border border-secondery-text-color text-white bg-secondery-text-color font-normal rounded-sm'><Link href={'/blogs/blog-using-express'}><div className='px-4 py-1'>Know more</div></Link>
                                </button>
                            </div>
                        </div>
                        <div className={`md-project  flex-col lg:flex-row space-y-6 md:space-y-9 lg:space-y-0 lg:space-x-16 items-center justify-center w-full flex flex-shrink-0`}>
                            <div className="project-img ">
                                <div className="aspect-square w-72 md:aspect-video md:w-96 lg:w-60  lg:aspect-square bg-[url('/projectimgs/protfolio-img.jpg')] bg-cover bg-no-repeat bg-center "></div>

                            </div>
                            <div className='space-y-4 '>
                                <p className='text-main-text-color font-roboto text-sm md:text-lg   line-clamp-4 leading-relaxed'>
                                    Let&apos;s talk about this project, which is my personal portfolio website. I am using <span className='text-secondery-text-color '>React and TailwindCSS</span> for its development. The key features of this project <span className='text-secondery-text-color  '>include a blog</span>, offering <span className='text-secondery-text-color '>not only light and dark themes</span> but also the <span className='text-secondery-text-color '>ability to switch to the system default theme</span>. Additionally, it is designed to be fully responsive.
                                </p>
                                <button className='  border border-secondery-text-color text-white bg-secondery-text-color font-normal rounded-sm'><Link href={'/blogs/making-of-portfolio-website'}><div className='px-4 py-1'>Know more</div></Link>
                                </button>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="project-bulets  space-x-3 justify-center items-center [&>*]:cursor-pointer hidden md:flex">
                    <button id='next-btn' className='hidden md:block text-main-text-color   text-base disabled:text-gray-600' onClick={handlePrevProject} disabled={counter === 0} ><MdArrowBackIos /></button>
                    {Array.from(projectsArr).map((_, i) => {
                        return <div className={`rounded-full ${counter === i ? 'bg-main-text-color' : 'bg-transparent'} w-3 aspect-square border border-main-text-color `} key={i} onClick={() => handleBulltes(i)}></div>
                    })}

                    <button id='next-btn' className='hidden md:block text-main-text-color   text-base disabled:text-gray-600' onClick={handleNextProject} disabled={(counter + 1) === totalProject}><MdArrowForwardIos /></button>
                </div>
                <div className="sm-project w-full md:hidden overflow-x-scroll flex touch-pan-x first:pl-8  [&>*]:pr-8">

                    <div className={`project  flex-col lg:flex-row space-y-6 md:space-y-9 lg:space-y-0 lg:space-x-16 items-center justify-center w-4/5 m-auto flex flex-shrink-0 relative ml-8`}>
                        <Link href={'/blogs/blog-using-express'}>
                            <div className="project-img w-full relative">
                                <div className="aspect-[4/3] w-full   relative flex justify-center items-center text-main-text-color border border-secondery-text-color">Photo will be updated soon.</div>

                            </div>
                            <div className='space-y-4 '>

                                <p className='text-main-text-color font-roboto text-sm md:text-lg   line-clamp-6 text-justify leading-relaxed'>
                                    &quot;The Tales of Web&quot; is a blog website that features blog posts about web development. For its development, I am using <span className='text-secondery-text-color '>Express.js</span> along with pure <span className='text-secondery-text-color '>HTML</span>, <span className='text-secondery-text-color '>CSS</span>, and <span className='text-secondery-text-color '>JS</span> . This blog <span className='text-secondery-text-color '>includes an admin dashboard</span> that facilitates adding new blogs, removing blogs, and editing existing blogs . The website is obviously <span className='text-secondery-text-color '>responsive</span> , and it also offers a <span className='text-secondery-text-color '>dark theme</span> option for a better reading experience in low-light environments.
                                </p>

                            </div>
                        </Link>
                    </div>
                    <div className={`project  flex-col lg:flex-row space-y-6 md:space-y-9 lg:space-y-0 lg:space-x-16 items-center justify-center w-4/5 m-auto flex flex-shrink-0 relative `}>
                        <Link href={'/blogs/making-of-portfolio-website'}>
                            <div className="project-img w-full relative">
                                <div className="aspect-[4/3] w-full  bg-secondery-text-color relative bg-[url('/projectimgs/protfolio-img.jpg')] bg-cover bg-no-repeat bg-center "></div>

                            </div>
                            <div className='space-y-4'>
                                <p className='text-main-text-color font-roboto text-sm md:text-lg   line-clamp-6 leading-relaxed'>
                                    Let&apos;s talk about this project, which is my personal portfolio website. I am using <span className='text-secondery-text-color '>React and TailwindCSS</span> for its development. The key features of this project <span className='text-secondery-text-color  '>include a blog</span>, offering <span className='text-secondery-text-color '>not only light and dark themes</span> but also the <span className='text-secondery-text-color '>ability to switch to the system default theme</span>. Additionally, it is designed to be fully responsive.
                                </p>
                            </div>
                        </Link>
                    </div>

                </div>

            </section>
        </>
    )

}


export default ProjectSection;