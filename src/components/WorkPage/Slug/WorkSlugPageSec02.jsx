'use client'
import { Image} from "@nextui-org/react"
import Link from "next/link";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import client from "../../../../client";
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


export default function WorkSlugPageSec02({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[56px]'>
        <div className='flex justify-center w-full h-full'>
            {/* Content */}
            <div className='flex flex-col lg:flex-row w-full items-center gap-[24px] h-full relative'>
              {/* Image */}
              <div className="flex justify-center items-center w-full sm:w-[592px] lg:w-[calc(100%-544px)] h-[300px] sm:h-[320px] lg:h-[375px] rounded-[16px]">
                  <Image quality={100} className="object-contain object-center w-full h-full rounded-[16px]" 
                  classNames={{wrapper:"object-contain w-full h-full rounded-[16px]"}}
                  radius="none"
                  src={urlFor(data?.images.headerImage?.image).format('webp').url()}
                  placeholder="blur"
                  alt={data?.images.headerImage?.alt}
                  width="100%" height="100%" />
              </div>
              {/* Text */}
              <div className='flex flex-col w-full sm:w-[592px] lg:w-[520px] lg:h-full gap-y-[24px]'>
                <h1 className="text-[36px] lg:text-[48px] text-[#FB602F] font-extrabold leading-[100%] uppercase">
                    {data?.header?.header}
                </h1>
                <p className={`text-[18px] text-[#161616] font-normal leading-[150%] uppercase ${IBM.className}`}>
                  {data?.header?.detail}
                </p>
                <ul className="flex flex-col w-full gap-y-[4px] list-disc marker:text-[#161616] marker:text-[12px] pl-4">
                  {data?.header?.list?.map((item,index)=>(
                    <li key={index} className="text-[18px] text-[#161616] font-normal leading-[150%] uppercase italic">
                        {item?.text}
                    </li>
                  ))}
                </ul>
                <a href={data?.header?.link} target="_blank" className="hidden lg:flex justify-center items-center w-[140px] h-[48px]  border-[2px] border-[#161616] hover:bg-[#FB602F]
                  transition-all duration-500 rounded-[50px] cursor-pointer
                  lg:text-[18px] text-[#161616] font-semibold leading-[125%]">
                  <svg className="min-w-[24px] min-h-[24px] mr-[8px] rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9999 11.0002H9.4099L12.7099 7.71019C12.8982 7.52188 13.004 7.26649 13.004 7.00019C13.004 6.73388 12.8982 6.47849 12.7099 6.29019C12.5216 6.10188 12.2662 5.99609 11.9999 5.99609C11.7336 5.99609 11.4782 6.10188 11.2899 6.29019L6.2899 11.2902C6.19886 11.3853 6.12749 11.4974 6.0799 11.6202C5.97988 11.8636 5.97988 12.1367 6.0799 12.3802C6.12749 12.5029 6.19886 12.6151 6.2899 12.7102L11.2899 17.7102C11.3829 17.8039 11.4935 17.8783 11.6153 17.9291C11.7372 17.9798 11.8679 18.006 11.9999 18.006C12.1319 18.006 12.2626 17.9798 12.3845 17.9291C12.5063 17.8783 12.6169 17.8039 12.7099 17.7102C12.8036 17.6172 12.878 17.5066 12.9288 17.3848C12.9796 17.2629 13.0057 17.1322 13.0057 17.0002C13.0057 16.8682 12.9796 16.7375 12.9288 16.6156C12.878 16.4937 12.8036 16.3831 12.7099 16.2902L9.4099 13.0002H16.9999C17.2651 13.0002 17.5195 12.8948 17.707 12.7073C17.8945 12.5198 17.9999 12.2654 17.9999 12.0002C17.9999 11.735 17.8945 11.4806 17.707 11.2931C17.5195 11.1055 17.2651 11.0002 16.9999 11.0002Z" fill="#161616"/>
                  </svg>
                  Visit
              </a>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}
