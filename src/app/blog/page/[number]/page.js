import client from '../../../../../client';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlogPageSec01 from '@/components/BlogPage/BlogPageSec01';
import BlogPageSec03 from '@/components/BlogPage/BlogPageSec03';
import BlogPageSec04 from '@/components/BlogPage/BlogPageSec04';
import SlideTextTop from '@/components/SharedSections/SlideTextTop';


export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

async function getPosts() {

    const query = groq`*[_type == "BlogPage"  ] | order(_createdAt desc)`
    const posts = await client.fetch(query)
    const queryCategory = groq`*[_type == "BlogCategory"  ] | order(_createdAt desc)`
    const category = await client.fetch(queryCategory )
    const queryBlog = groq`*[_type == "blog" && highlight != true  ] | order(_createdAt asc){
        title,
        mainImage,
        slug,
        detail,
        body,
        date,
        "category":category->title,
    }`
    const blog = await client.fetch(queryBlog )
    const queryHighlight = groq`*[_type == "blog" && highlight == true ] | order(_createdAt asc){
        title,
        mainImage,
        slug,
        detail,
        body,
        date,
        "category":category->title,
    }`
    const highlight = await client.fetch(queryHighlight )
      return {
          props: { posts,category,blog,highlight},revalidate: 60
       
      }
}
export async function generateMetadata({ params, searchParams }, parent) {

  const query = groq`*[_type == 'BlogPage' ][0]`
  const post = await client.fetch(query)
  const ogImageUrl = post?.seo?.openGraphImage != undefined ? urlFor(post?.seo?.openGraphImage).width(1200).height(630).fit('scale').auto('format').format('webp').url():null;
  return {
    title: post.seo?.titletag ,
    description: post.seo?.description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical: `/blog`,
      languages: {
        'th': '/th',
      },},
      openGraph: {
        title: post.seo?.titletag,
        description: post.seo?.description,
        images: ogImageUrl ? [ ogImageUrl ] : ['/og.png' ],
        type: 'website',
        authors: ['Cy-Click Business Solution']
      }
  }
  }

export default async function page({params}) {
    const posts = await getPosts();
    const data = posts.props.posts;
    const category = posts.props.category;
    const blog = posts.props.blog;
    const highlight = posts.props.highlight;
  return (
    <main>
        <BlogPageSec01 data={data[0]}/>
        <SlideTextTop data={data[0]}/>
        <BlogPageSec03 highlight={highlight}/>
        <BlogPageSec04 data={data[0]} blog={blog} category={category} params={params}/>
    </main>
  )
}
