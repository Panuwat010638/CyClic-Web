import React from 'react'

export default function WorkPageSec01({data}) {
  return (
    <section className=' bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 py-[40px] lg:py-[56px]'>
        <div className='flex justify-center items-end w-full h-full'>
          {/* Header */}
          <div className='flex justify-center lg:justify-between items-end w-full h-full lg:gap-x-6'>
            {/* Text */}
            <div className="flex">
                <b className="text-[40px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] text-center lg:text-start uppercase whitespace-pre-line lg:whitespace-normal">
                    {data?.header?.header}
                </b>
            </div>
            {/* Sub */}
            <p className='hidden lg:flex text-[16px] font-normal text-[#161616] leading-[125%]'>
              {data?.header?.subheader}
            </p>
            
          </div>

        </div>
      </div>
    </section>
  )
}
