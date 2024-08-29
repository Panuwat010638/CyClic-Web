'use client'
import { Image} from "@nextui-org/react"
import client from "../../../../client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function WorkSlugPageSec05({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[56px]'>
        <div className='flex flex-col items-center w-full h-full gap-[24px]'>
          {/* Content */}
          <div className='flex flex-col lg:flex-row justify-between w-full sm:w-[592px] lg:w-full items-center gap-[24px] lg:gap-[80px] h-full relative bg-[#E3E0D5] p-[18px] sm:p-[24px] lg:p-[40px]'>
              {/* Image */}
              <div className="hidden lg:flex  items-center w-[calc(100%-440px)] ">
                <Image quality={100} className="object-contain object-center w-full h-full " 
                classNames={{wrapper:"object-contain w-full h-full"}}
                radius="none"
                src={urlFor(data?.images.contentImage?.image).format('webp').url()}
                placeholder="blur"
                alt={data?.images.headerImage?.alt}
                width="100%" height="100%" />
              </div>
              <div className=" flex lg:hidden justify-center items-center w-full ">
                <Image quality={100} className="object-contain object-center w-full h-full " 
                classNames={{wrapper:"object-contain w-full h-full "}}
                radius="none"
                src={urlFor(data?.images.contentImage?.imageM).format('webp').url()}
                placeholder="blur"
                alt={data?.images.contentImage?.alt}
                width="100%" height="100%" />
              </div>
              {/* Text */}
              <div className='hidden lg:flex flex-col w-full sm:w-[592px] lg:w-[360px] lg:h-full gap-y-[24px]'>
                <h2 className="text-[20px] lg:text-[24px] text-[#161616] font-extrabold leading-[100%] uppercase">
                    {data?.images?.contentImage?.header}
                </h2>
                <p className={`text-[18px] text-[#161616] font-normal leading-[150%] uppercase`}>
                  {data?.images?.contentImage?.detail}
                </p>

              </div>
            </div>

            <div className='flex lg:hidden flex-col w-full sm:w-[592px] lg:w-[360px] lg:h-full gap-y-[24px]'>
                <b className="text-[20px] lg:text-[24px] text-[#161616] font-extrabold leading-[100%] uppercase">
                    {data?.images?.contentImage?.header}
                </b>
                <p className={`text-[18px] text-[#161616] font-normal leading-[150%] uppercase`}>
                  {data?.images?.contentImage?.detail}
                </p>
            </div>

        </div>
      </div>
    </section>
  )
}
