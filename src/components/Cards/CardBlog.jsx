'use client'
import { Image} from "@nextui-org/react"
import Link from "next/link";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
const ibm =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function CardBlog({index,item}) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  return (
    <div className="flex flex-col bg-[#fcfcfc] gap-y-[20px] w-full rounded-t-[16px] relative" key={index}>
        <div className="flex justify-center items-center w-full lg:h-[240px] rounded-[16px]">
            <Image quality={100} className=" object-cover object-center w-full h-full rounded-[16px]" 
            classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
            radius="none"
            src={urlFor(item?.mainImage?.image).format('webp').url()}
            placeholder="blur"
            alt={item?.mainImage?.alt}
            blurDataURL={urlFor(item?.mainImage?.image).width(10).quality(20).blur(10).url()}
            width="100%" height="100%" />
        </div>
        <div className="flex w-full justify-center items-center">
          <h3 className={`lg:text-[16px] text-[#161616] font-semibold leading-[125%] ${ibm.className}`}>
            {item?.title}
          </h3>
        </div>
        <div className="flex items-center w-full gap-x-[24px]">
          <time className="text-[16px] text-[#161616] font-normal leading-[125%]">
              {formatDate(item?.date)}
          </time>
         
          <svg className="min-w-[2px] min-h-[27px]" width="2" height="27" viewBox="0 0 2 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.5V26.5" stroke="#FF5941"/>
          </svg>
          <p className="text-[16px] text-[#161616] font-normal leading-[125%] uppercase">
              {item?.category}
          </p>
        </div>
        <Link aria-label="Button for opening the next page in content"  href={`/blog/${decodeURIComponent(item?.slug?.slug?.current)}`} className="flex justify-center items-center w-full h-full absolute top-0 z-[10] rounded-t-[16px]"></Link>
    </div>
  )
}
