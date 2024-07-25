import groq from "groq";
import client from "../../client";

const URL = process.env.NEXT_PUBLIC_PUBLIC_URL;

export const dynamic = 'force-dynamic'
export const revalidate = 10

export default async function sitemap() {
    const queryNews = groq`*[_type == "blog" && category->title != "aquarium" ] | order(publishedAt desc){
        language,
        slug,
        publishedAt,
    }`

    const getSortedPostDataN = await client.fetch(queryNews,{ next: { revalidate: 10 } });
    const news = getSortedPostDataN.map(({ slug, publishedAt }) => ({
        url: `${URL}/news/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))
    const queryNewsA = groq`*[_type == "blog" && category->title == "aquarium"] | order(publishedAt desc){
        language,
        slug,
        publishedAt,
    }`

    const getSortedPostDataNA = await client.fetch(queryNewsA,{ next: { revalidate: 10 } });
    const Anews = getSortedPostDataNA.map(({ slug, publishedAt }) => ({
        url: `${URL}/aquarium/news/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))
    ///////////////////////////////////////////////////////////////////////////////////////

    const queryBlog = groq`*[_type == "blog" && category->title != "aquarium" ] | order(publishedAt desc){
        language,
        slug,
        publishedAt,
    }`

    const getSortedPostData = await client.fetch(queryBlog,{ next: { revalidate: 10 } });
    const blog = getSortedPostData.map(({ slug, publishedAt }) => ({
        url: `${URL}/blog/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))
    const queryBlogA = groq`*[_type == "blog" && category->title == "aquarium"] | order(publishedAt desc){
        language,
        slug,
        publishedAt,
    }`

    const getSortedPostDataA = await client.fetch(queryBlogA,{ next: { revalidate: 10 } });
    const Ablog = getSortedPostDataA.map(({ slug, publishedAt }) => ({
        url: `${URL}/aquarium/blog/${decodeURIComponent(slug.slug.current)}`,
        lastModified: publishedAt,
    }))

////////////////////////////////////////////////////////// 
const queryreviews = groq`*[_type == "products" && category->title != "aquarium" ] | order(publishedAt desc){
    language,
    slug,
    publishedAt,
}`
const getSortedreviewsData = await client.fetch(queryreviews,{ next: { revalidate: 10 } });

const product = getSortedreviewsData.map(({ slug, publishedAt }) => ({
    url: `${URL}/product/${decodeURIComponent(slug.slug.current)}`,
    lastModified: publishedAt,
}))
const queryreviewsA = groq`*[_type == "products" && category->title == "aquarium" ] | order(publishedAt desc){
    language,
    slug,
    publishedAt,
}`
const getSortedreviewsDataA = await client.fetch(queryreviewsA,{ next: { revalidate: 10 } });

const Aproduct = getSortedreviewsDataA.map(({ slug, publishedAt }) => ({
    url: `${URL}/product/${decodeURIComponent(slug.slug.current)}`,
    lastModified: publishedAt,
}))

////////////////////////////////////////////////////////// 

    const routes = ["", "/about","/contact","/product","/product/dog","/product/cat","/news","/blog","/aquarium","/aquarium/about","/aquarium/blog","/aquarium/news","/aquarium/product","/aquarium/contact"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...blog,...product,...Aproduct,...Ablog,...Anews,...news];
}