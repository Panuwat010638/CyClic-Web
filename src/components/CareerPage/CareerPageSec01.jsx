import React from 'react'

export default function CareerPageSec01({data}) {
  return (
    <section className=' bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 py-[40px] lg:py-[56px]'>
        <div className='flex justify-center items-end w-full h-full'>
          {/* Header */}
          <div className='flex justify-center lg:justify-between items-center w-full h-full lg:gap-x-6'>
            {/* Text */}
            <div className="flex">
              <b className="text-[36px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] text-center lg:text-start uppercase whitespace-pre-line">
                  {data?.header?.header}
              </b>
            </div>
            {/* Sub */}
            <svg className='hidden sm:flex min-w-[109px] min-h-[109px] animate-spin-slow' width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        </div>
      </div>
    </section>
  )
}
