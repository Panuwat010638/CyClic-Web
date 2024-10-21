'use client'
import { Image} from "@nextui-org/react"
import client from "../../../../client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function WorkSlugPageSec03({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[56px]'>
        <div className='flex justify-center w-full h-full'>
            {/* Image */}
            {data?.images.figmaImage?.image ? (
              <div className="hidden lg:flex justify-center items-center w-full sm:w-[592px] lg:w-full">
              <Image quality={100} className="object-contain object-center w-full h-full " 
              classNames={{wrapper:"object-contain w-full h-full "}}
              radius="none"
              src={urlFor(data?.images.figmaImage?.image).format('webp').url()}
              placeholder="blur"
              alt={data?.images.figmaImage?.alt}
              width="100%" height="100%" />
            </div>
            ):null}
            {data?.images.figmaImage?.imageM ? (
              <div className=" flex lg:hidden justify-center items-center w-full sm:w-[592px] lg:w-full">
                <Image quality={100} className="object-contain object-center w-full h-full " 
                classNames={{wrapper:"object-contain w-full h-full "}}
                radius="none"
                src={urlFor(data?.images.figmaImage?.imageM).format('webp').url()}
                placeholder="blur"
                alt={data?.images.figmaImage?.alt}
                width="100%" height="100%" />
              </div>
            ):null}
   
        </div>
      </div>
    </section>
  )
}
