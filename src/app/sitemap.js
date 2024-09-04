import groq from "groq";
import client from "../../client";

const URL = process.env.NEXT_PUBLIC_PUBLIC_URL;

export const dynamic = 'force-dynamic'
export const revalidate = 10

export default async function sitemap() {

    ///////////////////////////////////////////////////////////////////////////////////////

    const queryBlog = groq`*[_type == "blog"] | order(publishedAt desc){
        slug,
        publishedAt,
    }`

    const getSortedPostData = await client.fetch(queryBlog,{ next: { revalidate: 10 } });
    const blog = getSortedPostData.map(({ slug, publishedAt }) => ({
        url: `${URL}/blog/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))
    const queryCare = groq`*[_type == "career"] | order(publishedAt desc){
        slug,
        publishedAt,
    }`

    const getSortedPostDataC = await client.fetch(queryCare,{ next: { revalidate: 10 } });
    const care = getSortedPostDataC.map(({ slug, publishedAt }) => ({
        url: `${URL}/career/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))
    const queryWork = groq`*[_type == "work"] | order(publishedAt desc){
        slug,
        publishedAt,
    }`

    const getSortedPostDataW = await client.fetch(queryWork,{ next: { revalidate: 10 } });
    const work = getSortedPostDataW.map(({ slug, publishedAt }) => ({
        url: `${URL}/works/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))


////////////////////////////////////////////////////////// 

    const routes = ["","/blog","/career","/contact","service","/works"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...blog,...care,...work];
}