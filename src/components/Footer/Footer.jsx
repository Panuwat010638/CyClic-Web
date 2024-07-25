'use client'
import { Image } from "@nextui-org/react"
import Link from "next/link";
import client from "../../../client";
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from "next-sanity";
import { usePathname } from "next/navigation";

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
export default function Footer({data}) {
    const pathname = usePathname();
    const ptComponents = {

        block: { 
            h1: ({ children }) => <h1 id={`${children}`} className=" text-[20px] md:text-[32px] leading-[150%] font-semibold text-[#10639F] mt-[24px] mb-4">{children}</h1>,
            h2: ({ children }) => <h2 id={`${children}`} className=" text-[18px] lg:text-[22px] scroll-mt-[100px] leading-[150%] font-medium text-[#10639F] mb-4">{children}</h2>,
            h3: ({ children }) => <h3 id={`${children}`} className=" text-xl leading-[150%] font-semibold text-[#10639F] mt-[24px] mb-4">{children}</h3>,
            h4: ({ children }) => <h4 id={`${children}`} className=" text-xl leading-[150%] font-semibold text-[#10639F] mt-[24px] mb-4">{children}</h4>,
            h5: ({ children }) => <h5 id={`${children}`} className=" text-lg leading-[150%] font-semibold text-[#10639F] mt-[24px] mb-4 text-center">{children}</h5>,
            normal: ({ children }) => <p className="text-[16px] leading-[110%] text-[#FFFFFF] text-center lg:text-start font-[300] mb-2">{children}</p>
        },
        types: {
            image: ({ value }) => {
                if (!value?.asset?._ref) {
                    return null
                }
      
                return (
                  <div className="flex justify-center w-full aspect-auto my-8 rounded-[16px]">
                  <Image  loading='lazy'   quality={75} className="object-cover xl:object-contain object-center h-full z-0 rounded-[16px]" 
                        classNames={{img:"object-cover xl:object-contain object-center h-full z-0 rounded-[16px]",wrapper:"object-cover xl:object-contain object-center h-full z-0 rounded-[16px]"}}
                      alt={value.alt || 'blog image'}
                      radius="none"
            
                      width="100%" height="100%"
                      src={urlFor(value).format('webp').url()}
                  />
              </div>
                )
            },},
            marks: {
              link: ({ value, children }) => <a aria-label="Button for opening the next page in content"className="text-lg text-[#FEE855] font-[400] tracking-[0.02em] xl:whitespace-pre-line transition-all duration-500 hover:underline" href={value?.href} target="_blank" rel={'noreferrer'}>{children}</a>,
              strong: ({ children }) => <strong id={`${children}`} className="text-[#FB602F] italic font-[600]">{children}</strong>,
          },
            list: {
            bullet: ({ children }) =>
                <ul className=" ml-[48px] md:ml-[56px] list-disc text-[16px] lg:text-[18px] leading-[150%] text-[#10639F] font-[400] mb-2 md:mb-4 tracking-[0.02em]">
                    {children}
                </ul>,
            number: ({ children }) =>
            <ol className="ml-[22px] md:ml-[30px] list-decimal text-[16px] lg:text-[18px] leading-[150%] text-[#10639F] font-[400] mb-2 md:mb-4 tracking-[0.02em]">
                {children}
            </ol>
        }
      }
  return (
    <footer className='bg-[#252A39]'>
        <div className="max-w-7xl mx-auto px-6 xl:px-0 pb-[56px] pt-[56px] lg:pb-[64px] lg:pt-[40px]">
            <div className="flex flex-col items-center lg:items-start justify-center w-full h-full gap-y-[32px]">
                
               
                {/* Top */}
                <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-between w-full h-full gap-y-[32px] lg:gap-y-0 lg:gap-x-[24px] xl:gap-x-[54px]">
                    {/* Left */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-end w-full sm:w-[592px] lg:w-[calc(55%-18px)] xl:w-[584px] gap-y-[48px] lg:gap-y-[0px] lg:gap-x-[16px] xl:gap-x-[24px]">
                        <div className="flex flex-col items-center lg:items-start gap-y-[16px]">
                        {/* Logo  */}
                            <Link href={`/`} className='col-span-3 flex w-[81px] justify-center items-center relative '>
                              <Image className=" object-contain object-center h-full z-0" 
                                  classNames={{wrapper:" object-contain w-full h-full z-0"}}
                                  radius="none"
                                  src={urlFor(data?.logo?.image).format('webp').url()}
                                  placeholder="blur"
                                  alt={data?.logo?.alt}
                                  width="100%" height="100%" quality={100}/>
                            </Link>
                            <svg className="min-w-[109px] min-h-[2px]" width="109" height="2" viewBox="0 0 109 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0.960938H109" stroke="#D6D6D6"/>
                            </svg>
                           
                            <div >
                                 <PortableText
                                     value={data?.detail}
                                     components={ptComponents}
                                 />
                             </div>
                            
                        </div>
                        <div className="grid grid-rows-3 grid-flow-col items-end h-full w-full sm:w-[592px] lg:w-auto gap-y-[32px] gap-x-[32px] lg:gap-x-[24px] xl:gap-x-[48px] lg:gap-y-[24px] xl:gap-y-[36px]">
                        {data?.menu.map((item,index)=>(

                            <Link key={index} href={`${item?.href}`} 
                            className={`${item?.status== true ? "":"hidden"} text-[18px] lg;text-[14px] xl:text-[18px] uppercase cursor-pointer font-semibold leading-[125%] text-center lg:text-start 
                                transition-colors duration-500 ${pathname== `${item?.href}` ? "text-[#FB602F]":"text-[#FCFCFC] hover:text-[#FB602F]"}`}>
                              {item?.title}
                            </Link>
                           
                        ))}  
                        </div>

                    </div>

                    {/* Right */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full sm:w-[592px] lg:w-[calc(45%-18px)] xl:w-[calc(100%-638px)] gap-y-[48px] lg:gap-y-0 gap-x-[4%] h-full">
                        {/* 03 */}
                        <div className="flex items-center justify-center lg:items-end lg:justify-start w-full lg:w-[48%] lg:h-full">
                            <div className="grid grid-cols-2 lg:flex items-center lg:items-end justify-center lg:justify-start w-full gap-x-[32px] lg:gap-x-[16px] xl:gap-x-[32px] lg:h-full">
                                <Link href={data?.social?.company} className=" text-[18px] lg:text-[16px] xl:text-[18px] uppercase text-[#fcfcfc] italic text-center lg:text-start font-light leading-[125%]">
                                    company profile
                                </Link>
                                <Link href={data?.social?.catalog} className=" text-[18px] lg:text-[16px] xl:text-[18px]  uppercase text-[#fcfcfc] text-center lg:text-start italic font-light leading-[125%]">
                                    catalog
                                </Link>
                            </div>
                        </div>
                        {/* 04 */}
                        <div className="flex flex-col items-center lg:items-end lg:justify-start w-full lg:w-[48%] h-full">
                            {data?.word.map((item,index)=>(

                            <Link key={index} href={`${item?.href}`} 
                            className={`${item?.status== true ? "text-[#FB602F] font-medium italic":"text-[#ffffff] font-extralight"} text-[24px] lg:text-[18px] xl:text-[24px] uppercase leading-[150%] 
                                transition-colors duration-500`}>
                              {item?.title}
                            </Link>

                            ))}  
                        </div>
                    </div>

                    
                </div>

             

            </div>
        </div>
    </footer>
  )
}
