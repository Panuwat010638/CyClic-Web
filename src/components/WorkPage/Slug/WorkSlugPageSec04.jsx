'use client'
import { IBM_Plex_Sans_Thai } from "next/font/google";


const IBM =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function WorkSlugPageSec04({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[56px] lg:pb-[84px]'>
        <div className='flex justify-center w-full h-full'>

          <div className='flex flex-col lg:flex-row w-full sm:w-[592px] lg:w-full h-full gap-y-[56px] lg:gap-y-0 lg:gap-x-[84px]'>
            {/* Left */}
            <div className='flex flex-col w-full lg:w-[360px] gap-y-[48px]'>
              <b className="text-[40px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] text-center lg:text-start uppercase whitespace-pre-line">
                {'project \noverview'}
              </b>
              <svg className='hidden lg:flex min-w-[109px] min-h-[109px] animate-spin-slow' width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                  <path d="M94.7825 53.4844H14.2173" stroke="#FF2F12" stroke-width="1.35404"/>
                  <path d="M54.6096 94.3555L54.6096 13.5408" stroke="#FF2F12" stroke-width="1.35404"/>
                  <path d="M70.1211 16.6458L39.0864 91.2598" stroke="#FF2F12" stroke-width="1.35404"/>
                  <path d="M83.1748 82.5234L26.033 25.3816" stroke="#FF2F12" stroke-width="1.35404"/>
                  <path d="M83.1748 25.3816L26.033 82.5234" stroke="#FF2F12" stroke-width="1.35404"/>
                  <path d="M39.1878 16.6049L70.02 91.3027" stroke="#FF2F12" stroke-width="1.35404"/>
                  <path d="M16.8708 39.5037L92.3369 68.4043" stroke="#FF2F12" stroke-width="1.35404"/>
                  <path d="M17.3485 69.5938L91.8594 38.3125" stroke="#FF2F12" stroke-width="1.35404"/>
                </g>
              </svg>
            </div>
            {/* Right */}
            <div className='flex flex-col w-full lg:w-[calc(100%-444px)] gap-y-[32px]'>
              {data?.content?.map((item,index)=>(
                  <div key={index} className={`flex w-full gap-x-[16px] pb-[32px] ${index == data?.content?.length-1 ? "":"border-b-[1px] border-[#939393]"}`}>
                    <div className="flex flex-col w-full gap-y-[24px]">
                      <h3 className="text-[20px] lg:text-[24px] text-[#161616] font-extrabold leading-[125%] uppercase">
                        {item?.title}
                      </h3>
                      {/* Body */}
                      <p className={`text-[18px] text-[#161616] font-normal leading-[150%] uppercase ${IBM.className}`}>
                        {item?.detail}
                      </p>
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
