'use client'
import { Image } from "@nextui-org/react"
import str from "../../../../public/assets/Images/Service/str.png"


export default function ServiceSlugStr({data}) {
    console.log(data)
  return (
    <section className='bg-[#fcfcfc] overflow-hidden'>
        <div className='max-w-full mx-auto'>
            <div className='flex flex-col items-center justify-center w-full relative'>
                {/* Image */}
                <div className="flex justify-center items-center w-full h-full absolute top-0 z-[1]">
                    <Image quality={100} className=" object-cover object-center w-full h-full" 
                    classNames={{wrapper:"object-cover w-full h-full"}}
                    radius="none"
                    src={str?.src}
                    placeholder="blur"
                    alt={'Service Str Image'}
                    width="100%" height="100%" />
                </div>
                {/* Content */}
                <div className='grid lg:flex items-center justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-none px-6 xl:px-0 
                 relative z-[10] py-[32px] lg:py-[48px]
                w-full ss:w-[360px] sm:w-[592px] lg:w-full xl:w-[1280px] mx-auto gap-4 lg:gap-6'>
                    {data?.works?.map((item,index)=>(
                        <div key={index}
                        className="flex items-center w-full lg:w-auto gap-[8px]"
                      >
                        <b className="text-[36px] sm:text-[40px] lg:text-[48px] text-[#fcfcfc] font-bold leading-[125%] uppercase">
                          {`${item?.count}+`}
                        </b>
                        <b className="text-[24px] text-[#fcfcfc] font-normal leading-[125%] italic uppercase whitespace-pre-line">
                          {item?.title}
                        </b>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
