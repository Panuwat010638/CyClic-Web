import client from '../../../client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import ServicePageSec01 from '@/components/ServicePage/ServicePageSec01';
import SlideTextTop from '@/components/SharedSections/SlideTextTop';
import ServicePageSec02 from '@/components/ServicePage/ServicePageSec02';
import ServicePageSec03 from '@/components/ServicePage/ServicePageSec03';
import ServicePageSec04 from '@/components/ServicePage/ServicePageSec04';
import CRMLoyaltyPrograms from '@/components/test';


export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts() {

    const query = groq`*[_type == "ServicePage"  ] | order(_createdAt desc)`
    const posts = await client.fetch(query)
    const queryCategory = groq`*[_type == "WorkCategory"  ] | order(_createdAt asc)`
    const category = await client.fetch(queryCategory )
 
    const queryHighlight = groq`*[_type == "work" ] | order(_createdAt asc){
        header,
        images,
        content,
        slug,
        date,
        seo,
        "category":category->title,
    }`
    const work = await client.fetch(queryHighlight )
    const queryService = groq`*[_type == "service" ] | order(_createdAt asc)`
    const service = await client.fetch(queryService )
      return {
          props: { posts,category,work,service},revalidate: 60
       
      }
}
export async function generateMetadata({ params, searchParams }, parent) {

  const query = groq`*[_type == 'ServicePage' ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
  return {
    title: post?.seo?.titletag ,
    description: post?.seo?.description,
    keywords: post?.seo?.keywords,
    alternates: {
      canonical: `/service`,
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

export default async function Servicepage() {
    const posts = await getPosts();
    const data = posts.props.posts;
    const category = posts.props.category;
    const work = posts.props.work;
    const service = posts.props.service;
  return (
    <main>
        <h1 className='sr-only'>Cyclic บริการวิเคราะห์ข้อมูลธุรกิจ</h1>
        <ServicePageSec01 data={data[0]}/>
        <SlideTextTop data={data[0]}/>
        <ServicePageSec02 data={data[0]?.service} data2={data[0]} service={service}/>
        <ServicePageSec03 data={data[0]} work={work} category={category}/>
        <ServicePageSec04 data={data[0]?.question}/>
    </main>
  )
}
