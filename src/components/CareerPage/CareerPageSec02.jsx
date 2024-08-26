'use client'
import { Image} from "@nextui-org/react"
import Link from "next/link";
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CareerPageSec02({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[54px]'>
        <div className='flex w-full h-full'>
          {/* Image */}
          <div className='flex justify-between w-full gap-x-[24px]'>
            <div className="flex justify-center items-center w-full lg:h-[310px] rounded-[16px]">
              <Image quality={100} className=" object-cover object-center w-full h-full rounded-[16px]" 
              classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
              radius="none"
              src={urlFor(data?.images01?.image).format('webp').url()}
              placeholder="blur"
              alt={data?.images01?.alt}
              width="100%" height="100%" />
          </div>
          <div className="flex justify-center items-center w-full lg:h-[310px] rounded-[16px]">
              <Image quality={100} className=" object-cover object-center w-full h-full rounded-[16px]" 
              classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
              radius="none"
              src={urlFor(data?.images02?.image).format('webp').url()}
              placeholder="blur"
              alt={data?.images02?.alt}
              width="100%" height="100%" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
