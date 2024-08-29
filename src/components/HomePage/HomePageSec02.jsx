'use client'
import Marquee from "react-fast-marquee";

export default function HomePageSec02({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-full mx-auto xl:px-0 pb-[40px]'>
        <div className='flex w-full h-full'>
          {/* Content */}
          <Marquee 
              gradient={true}
              gradientColor='transparent'
              speed={100}
              gradientWidth={20} autoFill={true}
              className="flex items-center w-full py-4 lg:py-6 border-y-[2px] border-[#0E2D4D] bg-[#0E2D4D]">
                {data?.slide?.map((item,index)=>(
                  <div key={index} className='flex items-center mr-[24px]'>
                      <label className='font-pop text-[20px] lg:text-[24px] font-[500] text-[#FCFCFC] tracking-widest leading-[125%] mr-[24px] uppercase'>
                        {item?.text} 
                      </label>
                      <svg className="min-w-[27px] min-h-[27px]" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.8517 13.3623H1.92578" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M13.9219 25.5L13.9219 1.5" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 21.9863L5.43457 5.01657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                        <path d="M22.4043 5.01657L5.43457 21.9863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                      </svg>

                  </div>
                ))}
                  
                  
                
           
              </Marquee>  
  
        </div>
      </div>
    </section>
    
  )
}

