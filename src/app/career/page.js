import CareerPageSec01 from '@/components/CareerPage/CareerPageSec01'
import CareerPageSec02 from '@/components/CareerPage/CareerPageSec02'
import CareerPageSec03 from '@/components/CareerPage/CareerPageSec03'
import CareerPageSec04 from '@/components/CareerPage/CareerPageSec04'
import SlideTextBottom from '@/components/SharedSections/SlideTextBottom'
import SlideTextTop from '@/components/SharedSections/SlideTextTop'

import client from '../../../client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import CareerPageSec031 from '@/components/CareerPage/CareerPageSec031'

export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts() {

    const query = groq`*[_type == "CareerPage"  ] | order(_createdAt desc)`
    const posts = await client.fetch(query)
    const queryCare = groq`*[_type == "career"  ] | order(_createdAt asc)`
    const career = await client.fetch(queryCare)
   
      return {
          props: { posts,career},revalidate: 60
       
      }
}
export async function generateMetadata({ params, searchParams }, parent) {

  const query = groq`*[_type == 'CareerPage' ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical: `/career`,
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
export default async function Careerpage() {
  const posts = await getPosts();
  const data = posts.props.posts;
  const career = posts.props.career;
  return (
    <main>
        <CareerPageSec01 data={data[0]}/>
        <CareerPageSec02 data={data[0]?.sec01}/>
        <CareerPageSec031 data={data[0]}/>
        <CareerPageSec03 career={career}/>
        <CareerPageSec04 data={data[0]}/>
        <SlideTextBottom data={data[0]}/>
    </main>
  )
}
