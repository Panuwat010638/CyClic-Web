'use client'
import { Image } from "@nextui-org/react";
import client from "../../../../client";
import Link from "next/link";
import { PortableText } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { Bai_Jamjuree } from "next/font/google";

const BAI =  Bai_Jamjuree(
  { 
    weight: ['200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  } 

export default function CareerSlugSec01({data}) {
  const ptComponents = {

    block: { 
        h1: ({ children }) => <h1 id={`${children}`} className={`${BAI.className} text-[20px] md:text-[32px] leading-[150%] font-semibold text-[#161616] mt-[24px] mb-4`}>{children}</h1>,
        h2: ({ children }) => <h2 id={`${children}`} className={`${BAI.className} text-[18px] scroll-mt-[100px] leading-[125%] font-semibold text-[#161616] mb-4`}>{children}</h2>,
        h3: ({ children }) => <h3 id={`${children}`} className={`${BAI.className} text-xl leading-[150%] font-semibold text-[#161616] mt-[24px] mb-4`}>{children}</h3>,
        h4: ({ children }) => <h4 id={`${children}`} className={`${BAI.className} text-xl leading-[150%] font-semibold text-[#161616] mt-[24px] mb-4`}>{children}</h4>,
        h5: ({ children }) => <h5 id={`${children}`} className={`${BAI.className} text-lg leading-[150%] font-semibold text-[#161616] mt-[24px] mb-4 text-center`}>{children}</h5>,
        normal: ({ children }) => <p className={`${BAI.className} lg:text-[18px] leading-[150%] text-[#161616] font-[300] mb-2`}>{children}</p>
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
          link: ({ value, children }) => <a aria-label="Button for opening the next page in content"className="text-lg text-[#FB602F] font-[400] tracking-[0.02em] xl:whitespace-pre-line transition-all duration-500 hover:underline" href={value?.href} target="_blank" rel={'noreferrer'}>{children}</a>,
          strong: ({ children }) => <strong id={`${children}`} className=" font-[600]">{children}</strong>,
      },
        list: {
        bullet: ({ children }) =>
            <ul className={`${BAI.className} pl-4 lg:pl-6 list-disc text-[16px] lg:text-[18px] leading-[175%] marker:text-[#545867] marker:text-[12px] text-[#545867] font-[400] mb-2 md:mb-4 tracking-[0.02em]`}>
                {children}
            </ul>,
        number: ({ children }) =>
        <ol className={`${BAI.className} ml-[22px] md:ml-[30px] list-decimal text-[16px] lg:text-[18px] leading-[150%] text-[#161616] font-[400] mb-2 md:mb-4 tracking-[0.02em]`}>
            {children}
        </ol>
    }
  }
  return (
    <section className={`bg-[#fcfcfc]`}>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pt-[40px] lg:pt-[56px] pb-[24px] sm:pb-[56px] lg:pb-[80px]'>
        <div className='flex flex-col justify-center items-end w-full h-full gap-y-[24px] sm:gap-y-[36px] lg:gap-y-[48px]'>

          {/* Content */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start w-full h-full gap-y-[40px] lg:gap-y-[0px] lg:gap-x-[24px] pb-[56px] lg:pb-[80px] border-b-[1px] border-[#939393]">
            {/* Left */}
            <div className="flex flex-col items-center lg:items-start w-full sm:w-[592px] lg:w-[520px] gap-y-[80px]">
              <Link href={"/career"} className="hidden lg:flex justify-center items-center w-[210px] h-[48px]  border-[2px] border-[#161616] hover:bg-[#FB602F]
               transition-all duration-500 rounded-[50px] cursor-pointer
              lg:text-[18px] text-[#161616] font-semibold leading-[125%]">
                <svg className="min-w-[24px] min-h-[24px] mr-[8px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9999 11.0002H9.4099L12.7099 7.71019C12.8982 7.52188 13.004 7.26649 13.004 7.00019C13.004 6.73388 12.8982 6.47849 12.7099 6.29019C12.5216 6.10188 12.2662 5.99609 11.9999 5.99609C11.7336 5.99609 11.4782 6.10188 11.2899 6.29019L6.2899 11.2902C6.19886 11.3853 6.12749 11.4974 6.0799 11.6202C5.97988 11.8636 5.97988 12.1367 6.0799 12.3802C6.12749 12.5029 6.19886 12.6151 6.2899 12.7102L11.2899 17.7102C11.3829 17.8039 11.4935 17.8783 11.6153 17.9291C11.7372 17.9798 11.8679 18.006 11.9999 18.006C12.1319 18.006 12.2626 17.9798 12.3845 17.9291C12.5063 17.8783 12.6169 17.8039 12.7099 17.7102C12.8036 17.6172 12.878 17.5066 12.9288 17.3848C12.9796 17.2629 13.0057 17.1322 13.0057 17.0002C13.0057 16.8682 12.9796 16.7375 12.9288 16.6156C12.878 16.4937 12.8036 16.3831 12.7099 16.2902L9.4099 13.0002H16.9999C17.2651 13.0002 17.5195 12.8948 17.707 12.7073C17.8945 12.5198 17.9999 12.2654 17.9999 12.0002C17.9999 11.735 17.8945 11.4806 17.707 11.2931C17.5195 11.1055 17.2651 11.0002 16.9999 11.0002Z" fill="#161616"/>
                </svg>
                  Back to Jobs
              </Link>
              <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full gap-y-[16px] lg:gap-y-[32px]">
                <p className="text-[24px] lg:text-[36px] text-[#FB602F] font-semibold italic leading-[150%] uppercase">
                  We are looking for
                </p>
                <b className="text-[36px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] text-center lg:text-start uppercase whitespace-pre-line">
                  {data?.title}
                </b>
                <p className="text-[16px] lg:text-[18px] text-[#161616] font-light leading-[130%] uppercase">
                  {`${data?.type?.location} ,${data?.type?.type}`}
                </p>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col w-full sm:w-[592px] lg:w-[calc(100%-544px)] gap-y-[32px] lg:gap-y-[48px]">
              {data?.description?.map((item,index)=>(
                <div key={index} className="flex w-full gap-x-[16px]">
                  <svg className="w-[23px] min-w-[23px] min-h-[23px]" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="23" height="23" rx="11.5" fill="#FB602F"/>
                  </svg>
                  <div className="flex flex-col w-[calc(100%-39px)] gap-y-[24px]">
                    <b className="text-[20px] lg:text-[24px] text-[#161616] font-extrabold leading-[125%] uppercase">
                      {item?.title}
                    </b>
                    {/* Body */}
                    <div className="w-full h-full">
                      <PortableText
                            value={item?.body}
                            components={ptComponents}
                        />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
