import ContactPageSec01 from '@/components/ContactPage/ContactPageSec01'
import ContactPageSec02 from '@/components/ContactPage/ContactPageSec02'
import ContactPageSec03 from '@/components/ContactPage/ContactPageSec03'
import ContactPageSec04 from '@/components/ContactPage/ContactPageSec04'
import client from '../../../client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import SlideTextTop from '@/components/SharedSections/SlideTextTop'
export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts() {

    const query = groq`*[_type == "ContactPage"  ] | order(_createdAt desc)`
    const posts = await client.fetch(query)

      return {
          props: { posts},revalidate: 60
       
      }
}
export async function generateMetadata({ params, searchParams }, parent) {

  const query = groq`*[_type == 'ContactPage' ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical: `/contact`,
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

export default async function ContactPage() {
    const posts = await getPosts();
    const data = posts.props.posts;
  return (
    <main>
        <ContactPageSec01 data={data[0]}/>
        <SlideTextTop data={data[0]}/>
        <ContactPageSec03 data={data[0]}/>
        <ContactPageSec04/>
    </main>
  )
}
