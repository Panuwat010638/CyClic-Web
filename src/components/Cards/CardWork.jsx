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
const IBM =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function CardWork({index,item}) {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      };

  return (
    <div className="flex flex-col bg-[#fcfcfc] gap-y-[20px] w-full rounded-t-[16px] relative" key={index}>
        <div className="flex justify-center items-center w-full h-[320px] lg:h-[353px] rounded-[16px]">
            <Image quality={100} className=" object-cover object-center w-full h-full rounded-[16px]" 
            classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
            radius="none"
            src={urlFor(item?.images?.mainImage?.image).url()}
            placeholder="blur"
            alt={item?.images?.mainImage?.alt}
            width="100%" height="100%" />
        </div>
        <div className="flex flex-col w-full gap-y-[8px]">
            <div className="flex flex-col w-full justify-center gap-y-[4px]">
              <h3 className={`text-[20px] lg:text-[24px] text-[#161616] font-semibold uppercase leading-[125%]`}>
                {item?.header?.header}
              </h3>
              <p className="text-[16px] text-[#161616] font-normal leading-[125%]">
                  {item?.category}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start w-full gap-y-[12px]">
              <p className="text-[16px] text-[#939393] font-light italic leading-[125%]">
                  {item?.header?.type}
              </p>
            </div>
        </div>
        
        <Link aria-label="Button for opening the next page in content"  href={`/works/${decodeURIComponent(item?.slug?.slug?.current)}`} className="flex justify-center items-center w-full h-full absolute top-0 z-[10] rounded-t-[16px]"></Link>
    </div>
  )
}
