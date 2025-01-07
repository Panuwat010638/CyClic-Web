'use client'
import Marquee from "react-fast-marquee";

export default function ServiceSlugPageSec01({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-full mx-auto px-0 xl:px-0 pb-[40px] lg:pb-[60px]'>
        <div className='flex w-full h-full'>
          {/* Content */}
          <Marquee 
              gradient={true}
              gradientColor='transparent'
              speed={100}
              gradientWidth={20} autoFill={true}
              className="flex items-center w-full py-4 lg:py-6 border-y-[2px] border-[#000000]">
                
                  <div className='flex items-center mr-[24px]'>
                      <label className='font-pop lg:text-[24px] font-[500] text-[#161616] tracking-widest leading-[125%] mr-[24px] uppercase'>
                        {data?.title} 
                      </label>
                      <svg className="min-w-[27px] min-h-[27px]" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.8517 13.3623H1.92578" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M13.9219 25.5L13.9219 1.5" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 21.9863L5.43457 5.01657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 5.01657L5.43457 21.9863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                      </svg>

                  </div>
                  <div className='flex items-center mr-[24px]'>
                      <label className='font-pop lg:text-[24px] font-[500] text-[#161616] tracking-widest leading-[125%] mr-[24px] uppercase'>
                        {data?.title} 
                      </label>
                      <svg className="min-w-[27px] min-h-[27px]" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.8517 13.3623H1.92578" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M13.9219 25.5L13.9219 1.5" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 21.9863L5.43457 5.01657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 5.01657L5.43457 21.9863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                      </svg>

                  </div>
                  <div className='flex items-center mr-[24px]'>
                      <label className='font-pop lg:text-[24px] font-[500] text-[#161616] tracking-widest leading-[125%] mr-[24px] uppercase'>
                        {data?.title} 
                      </label>
                      <svg className="min-w-[27px] min-h-[27px]" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.8517 13.3623H1.92578" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M13.9219 25.5L13.9219 1.5" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 21.9863L5.43457 5.01657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 5.01657L5.43457 21.9863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                      </svg>

                  </div>
  
             
             
 
           
              </Marquee>  
  
        </div>
      </div>
    </section>
  )
}
