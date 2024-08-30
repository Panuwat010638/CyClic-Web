import client from '../../client';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import HomePageSec01 from "@/components/HomePage/HomePageSec01";
import HomePageSec02 from "@/components/HomePage/HomePageSec02";
import HomePageSec06 from "@/components/HomePage/HomePageSec06";
import HomePageSec03 from '@/components/HomePage/HomePageSec03';
import HomePageSec04 from '@/components/HomePage/HomePageSec04';
import HomePageSec04Header from '@/components/HomePage/HomePageSec04Header';
import HomePageSec04ButtonM from '@/components/HomePage/HomePageSec04ButtonM';
import HomePageSec04ContentM from '@/components/HomePage/HomePageSec04ContentM';
import SlideTextBottom from '@/components/SharedSections/SlideTextBottom';
import HomePageSec13 from '@/components/HomePage/HomePageSec13';
import HomePageSec05 from '@/components/HomePage/HomePageSec05';
import HomePageSec11 from '@/components/HomePage/HomePageSec11';
import HomePageSec08 from '@/components/HomePage/HomePageSec08';
import HomePageSec10 from '@/components/HomePage/HomePageSec10';
import HomePageSec12 from '@/components/HomePage/HomePageSec12';
import HomePageSec07 from '@/components/HomePage/HomePageSec07';

export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts() {

    const query = groq`*[_type == "HomePage"  ] | order(_createdAt desc)`
    const posts = await client.fetch(query)
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
          props: { posts,work},revalidate: 60
       
      }
}
export async function generateMetadata({ params, searchParams }, parent) {

  const query = groq`*[_type == 'HomePage' ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical: `/`,
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



export default async function Home() {
  const posts = await getPosts();
  const data = posts.props.posts;
  const work = posts.props.work;
  return (
    <main>
      <HomePageSec01 data={data[0]?.banner}/>
      <HomePageSec02 data={data[0]}/>
      <HomePageSec03 data={data[0]?.about}/>
      <HomePageSec04Header data={data[0]?.service}/>
      <HomePageSec04 data={data[0]?.service}/>
      <HomePageSec04ContentM data={data[0]?.service}/>
      <HomePageSec04ButtonM data={data[0]?.service}/>
      <HomePageSec05 data={data[0]?.experience}/>
      <HomePageSec06 work={work}/>
      <HomePageSec08 data={data[0]?.solutions}/>
      {/* Video */}
      <HomePageSec10 data={data[0]?.review}/>
      <HomePageSec11 data={data[0]?.logo}/>
      <HomePageSec12/>
      <HomePageSec13 data={data[0]?.question}/>
      <SlideTextBottom data={data[0]}/>
    </main>
  );
}
