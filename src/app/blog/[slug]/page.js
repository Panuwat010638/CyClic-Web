import client from "../../../../client"
import groq from "groq"
import imageUrlBuilder from '@sanity/image-url'
import BlogSlugSec01 from "@/components/BlogPage/slug/BlogSlugSec01";
import BlogSlugSec02 from "@/components/BlogPage/slug/BlogSlugSec02";
import BlogSlugSec03 from "@/components/BlogPage/slug/BlogSlugSec03";

export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export async function getStaticParams({ params, searchParams }, parent) {
  
    const pathsTH = [] = await client.fetch(
    `*[_type == "blog" && defined(slug.currenct)][].slug.current`
    )
    return pathsTH.map(path => ({
        slug: decodeURIComponent(path.toString())
    }))
    
}

async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)

        const query = groq`*[_type == "blog" && slug.slug.current == '${slug}'][0]{
            title,
            mainImage,
            slug,
            detail,
            body,
            date,
            "category":category->title,
            "headings": body[length(style) == 2 && string::startsWith(style, "h2")]
        }`
          const posts = await client.fetch(query, slug)
        const queryBlog = groq`*[_type == "blog" && slug.slug.current != '${slug}'] | order(_createdAt desc){
            title,
            mainImage,
            slug,
            date,
            "category":category->title,
        }`
          const postsBlog = await client.fetch(queryBlog)
          const blog = postsBlog.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB - dateA;
            });

      
          return {
              props: { posts,blog }
           
          }
   
    
}
export async function generateMetadata({ params, searchParams }, parent) {

    const slug  = decodeURIComponent(params.slug);
    const query = groq`*[_type == 'blog' && slug.slug.current == '${slug}'][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
    return {
      title: post?.seo?.titletag ? post?.seo?.titletag:"Cy-clic Blog",
      description: post?.seo?.description,
      keywords: post?.seo?.keywords,
      alternates: {
        canonical: `/blog/${post?.slug?.slug?.current}`,
        },
        openGraph: {
            title: post?.seo?.titletag,
            description: post?.seo?.description,
            images: ogImageUrl ? [ ogImageUrl ] : ['/og.png' ],
            type: 'website',
            authors: ['Cy-Click Business Solution']
          }
    }
    }

export default async function BlogSlugpage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const blog = posts.props.blog;
  return (
    <main>
        <BlogSlugSec01 data={data}/>
        <BlogSlugSec02 data={data}/>
        <BlogSlugSec03 blog={blog}/>
    </main>
  )
}
