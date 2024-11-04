import CompanyProfileSec01 from '@/components/CompanyProfilePage/CompanyProfileSec01'
import client from '../../../client'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts() {

    const query = groq`*[_type == "CompanyProfilePage"  ] | order(_createdAt desc){
    "pdf":pdf {
                title,
                  "pdfFile": pdfFile.asset->{
                    url,
                    originalFilename
            },}
    }`
    const posts = await client.fetch(query)

      return {
          props: { posts},revalidate: 60
       
      }
}
export async function generateMetadata({ params, searchParams }, parent) {

  const query = groq`*[_type == 'CompanyProfilePage' ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical: `/catalog`,
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

export default async function page() {
    const posts = await getPosts();
    const data = posts.props.posts;
  return (
    <main>
        <CompanyProfileSec01 data={data[0]}/>
    </main>
  )
}
