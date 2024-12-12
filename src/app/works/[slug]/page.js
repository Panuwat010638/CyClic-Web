import client from "../../../../client"
import groq from "groq"
import imageUrlBuilder from '@sanity/image-url'
import WorkSlugPageSec01 from "@/components/WorkPage/Slug/WorkSlugPageSec01";
import WorkSlugPageSec02 from "@/components/WorkPage/Slug/WorkSlugPageSec02";
import WorkSlugPageSec03 from "@/components/WorkPage/Slug/WorkSlugPageSec03";
import WorkSlugPageSec04 from "@/components/WorkPage/Slug/WorkSlugPageSec04";
import WorkSlugPageSec05 from "@/components/WorkPage/Slug/WorkSlugPageSec05";
import WorkSlugPageSec06 from "@/components/WorkPage/Slug/WorkSlugPageSec06";


export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export async function getStaticParams({ params, searchParams }, parent) {
  
    const pathsTH = [] = await client.fetch(
    `*[_type == "work" && defined(slug.currenct)][].slug.current`
    )
    return pathsTH.map(path => ({
        slug: decodeURIComponent(path.toString())
    }))
    
}

async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)

        const query = groq`*[_type == "work" && slug.slug.current == '${slug}'][0]{
            title,
            header,
            images,
            content,
            slug,
            date,
            seo,
            "category":category->title,
        }`
          const posts = await client.fetch(query, slug)
        const queryBlog = groq`*[_type == "work" && slug.slug.current != '${slug}'] | order(_createdAt desc){
            header,
            images,
            content,
            slug,
            date,
            seo,
            "category":category->title,
        }`
          const postsBlog = await client.fetch(queryBlog)
          const work = postsBlog.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB - dateA;
            });

      
          return {
              props: { posts,work }
           
          }
   
    
}
export async function generateMetadata({ params, searchParams }, parent) {

    const slug  = decodeURIComponent(params.slug);
    const query = groq`*[_type == 'work' && slug.slug.current == '${slug}'][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
    return {
      title: post?.seo?.titletag ,
      description: post?.seo?.description,
      keywords: post?.seo?.keywords,
      alternates: {
        canonical: `/works/${post?.slug?.slug?.current}`,
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

export default async function WorkSlugpage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const work = posts.props.work;
  return (
    <main>
        <WorkSlugPageSec01 data={data}/>
        <WorkSlugPageSec02 data={data}/>
        <WorkSlugPageSec03 data={data}/>
        <WorkSlugPageSec04 data={data}/>
        <WorkSlugPageSec05 data={data}/>
        <WorkSlugPageSec06 work={work}/>
    </main>
  )
}
