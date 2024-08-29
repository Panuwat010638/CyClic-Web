'use client'
import Link from "next/link"
import CardWork from "@/components/Cards/CardWork"

export default function WorkSlugPageSec06({work}) {
  return (
    <section className=' bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[48px] lg:pb-[56px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[36px] sm:gap-y-[48px] lg:gap-y-[56px]'>
          {/* Header */}
          <div className='flex justify-center lg:justify-between items-center w-full sm:w-[592px] lg:w-full h-full lg:gap-x-6'>
            {/* Text */}
            <div className="flex">
                <b className="text-[36px] sm:text-[56px] lg:text-[60px] text-center lg:text-start text-[#161616] font-extrabold leading-[125%] uppercase">
                  other project
                </b>
            </div>
            {/* Button */}
            <div className="group hidden lg:flex items-center gap-x-[14px]">
                <Link className="sm:text-[18px] lg:text-[24px] text-[#161616] font-semibold leading-[130%] uppercase"
                href={`/blog`} 
                >
                  view all
                </Link>
                <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#FB602F"/>
                </svg>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-[592px] lg:w-full'>
            {work?.slice(0,2)?.map((item,index)=>(
                <CardWork key={index} item={item} index={index}/>
            ))}
          </div>
          {/* Button */}
          <div className="group flex lg:hidden items-center gap-x-[14px]">
                <Link className="text-[24px] text-[#161616] font-semibold leading-[130%] uppercase"
                href={`/blog`} 
                >
                  view all
                </Link>
                <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#FB602F"/>
                </svg>
            </div>

        </div>
      </div>
    </section>
  )
}
