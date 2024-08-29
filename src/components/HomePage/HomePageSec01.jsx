'use client'
import Link from "next/link"
export default function HomePageSec01({data}) {
  return (
    <section className="bg-[#ffffff]">
    <div className="max-w-full mx-auto">
        <div className="flex flex-col justify-center items-center w-full h-full relative">
            {/* Image Banner */}
            <div className="flex justify-center items-center w-full h-full">
              <video autoPlay={true} playsInline={true} muted loop controls={false} preload="none" className='object-contain aspect-video w-full h-full'>
                <source src='/assets/videos/bg.mp4' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Content */}
            <div className='flex justify-between items-center w-full sm:w-[592px] lg:w-full xl:w-[1280px] h-full px-6 xl:px-0 lg:gap-[48px] xl:gap-[64px] absolute top-0 z-[10]'>
                {/* Left */}
                <div className='hidden lg:flex items-center lg:w-[180px] h-full'>
                  <b className="text-[16px] text-[#fcfcfc] leading-[125%] font-normal">
                    {data?.content?.left}
                  </b>
                </div>
                {/* Center */}
                <div className='flex flex-col justify-center items-center w-full lg:w-[calc(100%-456px)] xl:w-[calc(100%-488px)] h-full lg:gap-y-[88px]'>
                    {/* Header */}
                    <div className='flex flex-col w-full gap-y-[8px] sm:gap-y-[24px]'>
                        <h1 className='text-[40px] sm:text-[84px] lg:text-[128px] text-[#fcfcfc] font-semibold uppercase leading-[125%] text-center'>
                          {data?.content?.company}
                        </h1>
                        <div className='flex justify-center items-center w-full gap-x-[8px]'>
                          <b className='text-[16px] sm:text-[24px] lg:text-[36px] text-[#fcfcfc] font-semibold uppercase leading-[125%] whitespace-pre-line'>
                            {data?.content?.detail}
                          </b>
                          <div className='flex items-center'>
                            <b className='text-[24px] sm:text-[48px] lg:text-[64px] text-[#fcfcfc] font-semibold uppercase leading-[125%]'>
                              &
                            </b>
                          </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className='hidden lg:flex justify-center items-center'>
                      <Link href={data?.button?.link} className="flex justify-center items-center px-[32px] h-[48px]  border-[2px] border-[#fcfcfc] hover:bg-[#FB602F]
                          transition-all duration-500 rounded-[50px] cursor-pointer
                          lg:text-[18px] text-[#fcfcfc] font-semibold leading-[125%]">
                          <svg className="min-w-[24px] min-h-[24px] mr-[8px] rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9999 11.0002H9.4099L12.7099 7.71019C12.8982 7.52188 13.004 7.26649 13.004 7.00019C13.004 6.73388 12.8982 6.47849 12.7099 6.29019C12.5216 6.10188 12.2662 5.99609 11.9999 5.99609C11.7336 5.99609 11.4782 6.10188 11.2899 6.29019L6.2899 11.2902C6.19886 11.3853 6.12749 11.4974 6.0799 11.6202C5.97988 11.8636 5.97988 12.1367 6.0799 12.3802C6.12749 12.5029 6.19886 12.6151 6.2899 12.7102L11.2899 17.7102C11.3829 17.8039 11.4935 17.8783 11.6153 17.9291C11.7372 17.9798 11.8679 18.006 11.9999 18.006C12.1319 18.006 12.2626 17.9798 12.3845 17.9291C12.5063 17.8783 12.6169 17.8039 12.7099 17.7102C12.8036 17.6172 12.878 17.5066 12.9288 17.3848C12.9796 17.2629 13.0057 17.1322 13.0057 17.0002C13.0057 16.8682 12.9796 16.7375 12.9288 16.6156C12.878 16.4937 12.8036 16.3831 12.7099 16.2902L9.4099 13.0002H16.9999C17.2651 13.0002 17.5195 12.8948 17.707 12.7073C17.8945 12.5198 17.9999 12.2654 17.9999 12.0002C17.9999 11.735 17.8945 11.4806 17.707 11.2931C17.5195 11.1055 17.2651 11.0002 16.9999 11.0002Z" fill="#fcfcfc"/>
                          </svg>
                          {data?.button?.title}
                      </Link>
                    </div>
                </div>
                {/* Left */}
                <div className='hidden lg:flex items-center lg:w-[180px] h-full'>
                  <b className="text-[16px] text-[#fcfcfc] leading-[125%] font-normal">
                    {data?.content?.right}
                  </b>
                </div>
            </div>
     
        </div>
    </div>
</section>
  )
}
