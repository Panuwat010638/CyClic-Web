import client from '../../../../../../../client';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import WorkCatPageSec01 from '@/components/WorkPage/WorkCategoryPage/WorkCatPageSec01';
import WorkCatPageSec02 from '@/components/WorkPage/WorkCategoryPage/WorkCatPageSec02';


export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts(params) {
    const cat  = decodeURIComponent(params?.category)
    const query = groq`*[_type == "WorkPage"  ] | order(_createdAt desc)`
    const posts = await client.fetch(query)
    const queryCategory = groq`*[_type == "WorkCategory"  ] | order(_createdAt asc)`
    const category = await client.fetch(queryCategory )
 
    const queryHighlight = groq`*[_type == "work" && category->title == '${cat}'  ] | order(_createdAt asc){
        header,
        images,
        content,
        slug,
        date,
        seo,
        "category":category->title,
    }`
    const work = await client.fetch(queryHighlight )
      return {
          props: { posts,category,work},revalidate: 60
       
      }
}
export async function generateMetadata({ params, searchParams }, parent) {

  const query = groq`*[_type == 'WorkPage' ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
  return {
    title: post?.seo?.titletag ,
    description: post?.seo?.description,
    keywords: post?.seo?.keywords,
    alternates: {
      canonical: `/works`,
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

export default async function page({params}) {
    const posts = await getPosts(params);
    const data = posts.props.posts;
    const category = posts.props.category;
    const work = posts.props.work;
  return (
    <main>
        <WorkCatPageSec01 data={data[0]}/>
        <WorkCatPageSec02 category={category} work={work} params={params}/>
    </main>
  )
}
