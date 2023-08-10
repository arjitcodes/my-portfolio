import Link from 'next/link'
import React from 'react'
import { getSortedPostData } from '../../../lib/posts'
import Image from 'next/image'


export const metadata={
  title : "Arjit - Blogs",
  description: 'Blogs of Arjit protfolio . In here arjit share what arjit used in projects and why he used it.',
}


const Blogs= () => {

const post =getSortedPostData()

  return (
    <main className='blogs pt-32 pb-20 md:w-11/12  lg:w-3/4 m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
    {post.map((p,i)=>{
return <Link href={`/blogs/${p.id}`} key={i}>
      <div className="blog flex justify-center items-center w-[300px] flex-col m-auto shadow-2xl cursor-pointer rounded-md overflow-hidden ">
        <Image className="img aspect-video w-full bg-secondery-text-color" src={`/blogimgs/${p.img}`} quality={100} width={300} height={168}  alt='alt' />
        <div className="info p-6 space-y-4 text-main-text-color w-full ">
        <div className='aspect-[4/1]  w-full overflow-hidden'>
          <h2 className='text-2xl font-medium  font-roboto line-clamp-2'>{p.title}</h2>
          </div>
          <div className='overflow-hidden w-full  aspect-[4/1]'>
            <p className='font-poppins text-start text-xs line-clamp-4 '>
              {p.desc}
            </p>
          </div>
        </div>
      </div>
      </Link>
    })}

    </main>
  )
}

export default Blogs