import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'blogposts')



export function getSortedPostData() {
    const fileNames = fs.readdirSync(postsDir)
    const allPostData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(postsDir, fileName)
        const fileContent = fs.readFileSync(fullPath, 'utf-8')

        const matterResult = matter(fileContent)

        const blogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            desc: matterResult.data.desc,
            img: matterResult.data.img
        }
        return blogPost;
    })

    return allPostData.sort((a, b) => { a.date < b.date ? 1 : -1 })
}





export async function getBlogData(id) {


    const fullPath = path.join(postsDir, `${id}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContent)

    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString()

    const blogPostWithHtml = {
        id,
        title: matterResult.data.title,
        contentHtml
    }
    return blogPostWithHtml;

}