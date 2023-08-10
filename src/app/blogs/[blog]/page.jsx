import React from 'react'
import { notFound } from 'next/navigation'
import { getBlogData, getSortedPostData } from '../../../../lib/posts'

export function generateStaticParams(){
  const blogs = getSortedPostData()

  return blogs.map((b) => ({
    params: {
      blog: b.id
    }
  }));
}


export  function generateMetadata({ params }) {

  const { blog } = params

  return {
    title: blog
  }

}




const Blog = async ({ params }) => {

  const { blog } = params
  const blogs = getSortedPostData()

  const isBlog = blogs.find(b => b.id === blog)
  if (!isBlog) {
    notFound();
  }

  const blogContent = await getBlogData(blog)
  const {contentHtml } = blogContent
  return (
    <main className='pt-20 text-blog-title-color w-[90%] md:w-4/5 lg:w-3/5 m-auto space-y-4 lg:space-y-16 pb-10'>

      <article className='font-poppins [&>*]:leading-7 [&>*]:py-2 font-medium tracking-wide  [&>*]:mt-6 lg:[&>*]:mt-8 [&>h1]:text-xl  md:[&>h1]:text-4xl [&>h1]:font-bold lg:[&>h1]:mt-12 text-base md:text-lg [&>h2]:text-lg    md:[&>h2]:text-3xl [&>h2]:font-semibold lg:[&>h2]:mt-12 [&>h3]:text-base md:[&>h3]:text-2xl [&>h3]:font-semibold lg:[&>h3]:mt-12 [&>li]:px-5 lg:[&>ol>li]:mt-8  [&>ol>li]:mt-4 [&>ol>li>strong]:mr-2 text-blog-main-color [&>h1]:text-blog-heaing-color [&>h2]:text-blog-heaing-color [&>h3]:text-blog-heaing-color [&>ol>li>strong]:text-blog-heaing-color' dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  )
}

export default Blog