import client from '../../../client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import WorkPageSec01 from '@/components/WorkPage/WorkPageSec01';
import WorkPageSec02 from '@/components/WorkPage/WorkPageSec02';


export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts() {

    const query = groq`*[_type == "WorkPage"  ] | order(_createdAt desc)`
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

export default async function Workspage() {
    const posts = await getPosts();
    const data = posts.props.posts;
    const category = posts.props.category;
    const work = posts.props.work;
  return (
    <main>
        <h1 className='sr-only'>Cyclic บริการออกแบบทำเว็บไซต์</h1>
        <h2 className='sr-only'>Cyclic รับทำเว็บไซต์ เน้นดีไซน์สวยและการใช้งานง่าย ออกแบบตามโจทย์ธุรกิจ บริการ web design และ user interface design ช่วยดึงดูดความสนใจจากกลุ่มเป้าหมาย</h2>
        <WorkPageSec01 data={data[0]}/>
        <WorkPageSec02 category={category} work={work}/>
    </main>
  )
}
