import CareerSlugSec01 from "@/components/CareerPage/slug/CareerSlugSec01";
import client from "../../../../client"
import groq from "groq"
import CareerSlugSec02 from "@/components/CareerPage/slug/CareerSlugSec02";
import CareerSlugSec03 from "@/components/CareerPage/slug/CareerSlugSec03";
import imageUrlBuilder from '@sanity/image-url'
import CareerSlugSec02p2 from "@/components/CareerPage/slug/CareerSlugSec02p2";

export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export async function getStaticParams({ params, searchParams }, parent) {
  
    const pathsTH = [] = await client.fetch(
    `*[_type == "career" && defined(slug.currenct)][].slug.current`
    )
    return pathsTH.map(path => ({
        slug: decodeURIComponent(path.toString())
    }))
    
}

async function getPosts(params) {
   
    const slug  = decodeURIComponent(params.slug)

    const query = groq`*[_type == "career" && slug.slug.current == '${slug}'][0]`
    const posts = await client.fetch(query, slug)
    const queryBenefit = groq`*[_type == "CareerPage"  ] | order(_createdAt desc)`
    const benefit = await client.fetch(queryBenefit)

    
    return {
        props: { posts,benefit } 
    }
   
    
}
export async function generateMetadata({ params, searchParams }, parent) {

    const slug  = decodeURIComponent(params.slug);
    const query = groq`*[_type == 'career' && slug.slug.current == '${slug}'][0]`
    const post = await client.fetch(query)
    const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
    return {
      title: post.seo?.titletag ,
      description: post.seo?.description,
      keywords: post.seo?.keywords,
      alternates: {
        canonical: `/career/${post?.slug?.slug?.current}`,
      },
        openGraph: {
            title: post.seo?.titletag,
            description: post.seo?.description,
            images: ogImageUrl ? [ ogImageUrl ] : ['/og.png' ],
            type: 'website',
            authors: ['Cy-Click Business Solution']
          }
    }
    }

export default async function Carepage({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const benefit = posts.props.benefit;
  return (
    <main>
        <CareerSlugSec01 data={data}/>
        <CareerSlugSec02 data={benefit[0]}/>
        <CareerSlugSec02p2/>
        <CareerSlugSec03/>
    </main>
  )
}
