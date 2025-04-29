import client from "../../../../client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import ServiceSlugPageSec01 from "@/components/ServicePage/Slug/ServiceSlugPageSec01";
import ServiceSlugPageSec02 from "@/components/ServicePage/Slug/ServiceSlugPageSec02";
import ServiceSlugPageSec03 from "@/components/ServicePage/Slug/ServiceSlugPageSec03";
import ServiceSlugPageSec04 from "@/components/ServicePage/Slug/ServiceSlugPageSec04";
import SlideTextBottom from "@/components/SharedSections/SlideTextBottom";
import HomePageSec11 from "@/components/HomePage/HomePageSec11";
import ServiceSlugStr from "@/components/ServicePage/Slug/ServiceSlugStr";
import ServiceSlugContact from "@/components/ServicePage/Slug/ServiceSlugContact";
import ServiceSlugBanner from "@/components/ServicePage/Slug/ServiceSlugBanner";

export const revalidate = 10;
export const dynamicParams = true;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export async function getStaticParams({ params, searchParams }, parent) {
  const pathsTH = ([] = await client.fetch(
    `*[_type == "service" && defined(slug.currenct)][].slug.current`
  ));
  return pathsTH.map((path) => ({
    slug: decodeURIComponent(path.toString()),
  }));
}

async function getPosts(params) {
  const slug = decodeURIComponent(params.slug);

  const query = groq`*[_type == "service" && slug.slug.current == '${slug}'][0]{
            title,
            detail,
            list,
            status,
            listimage,
            "category":category->title,
            
              "header":ourwork->header,
              "images":ourwork->images,
            "workslug":ourwork->slug,
            mainImage,
            slug,
            date,
  

        }`;
  const posts = await client.fetch(query, slug);
  const queryHome = groq`*[_type == "HomePage"  ] | order(_createdAt desc)`
  const home = await client.fetch(queryHome)
  const queryContact = groq`*[_type == "ContactPage"  ] | order(_createdAt desc)`
  const contact = await client.fetch(queryContact)
  return {
    props: { posts,home,contact },
  };
}
export async function generateMetadata({ params, searchParams }, parent) {
  const slug = decodeURIComponent(params.slug);
  const query = groq`*[_type == 'service' && slug.slug.current == '${slug}'][0]`;
  const post = await client.fetch(query);
  const ogImageUrl =
    post?.seo?.openGraphImage != undefined
      ? urlFor(post?.seo?.openGraphImage)
          .width(1200)
          .height(630)
          .fit("scale")
          .auto("format")
          .format("webp")
          .url()
      : null;
  return {
    title: post?.seo?.titletag ? post?.seo?.titletag : "Cy-clic Blog",
    description: post?.seo?.description,
    keywords: post?.seo?.keywords,
    alternates: {
      canonical: `/service/${post?.slug?.slug?.current}`,
    },
    openGraph: {
      title: post?.seo?.titletag,
      description: post?.seo?.description,
      images: ogImageUrl ? [ogImageUrl] : ["/og.png"],
      type: "website",
      authors: ["Cy-Click Business Solution"],
    },
  };
}

export default async function serviceslugpage({ params }) {
  const posts = await getPosts(params);
  const data = posts.props.posts;
  const data2 = posts.props.home;
  const contact = posts.props.contact;
  const slide = {
    slideBottom:[
    {text:data?.title},
    {text:data?.title},
    {text:data?.title},
    {text:data?.title},
  ]}
  return (
    <main>
      {/* <ServiceSlugPageSec01 data={data} />
      <ServiceSlugPageSec02 data={data} /> */}
      <ServiceSlugBanner data={data}/>
      <ServiceSlugPageSec03 data={data} />
      <SlideTextBottom data={slide}/>
      <ServiceSlugStr data={data2[0]?.experience}/>
      <HomePageSec11 data={data2[0]?.logo}/>
      {data?.status == true ? <ServiceSlugPageSec04 data={data} /> : null}
      <ServiceSlugContact data={contact[0]}/>
    </main>
  );
}
