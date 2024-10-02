



export default function ErrorPageSec01() {
  return (
    <section className="bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 xl:px-[20px] pb-[150px] lg:pb-[180px] pt-[60px] lg:pt-[100px]">
        <div className="flex flex-col justify-center items-center w-full h-full gap-y-[40px]">
          
          <svg className='flex min-w-[109px] min-h-[109px] animate-spin-slow' width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="flex flex-col items-center w-full sm:w-[592px]  lg:h-full gap-y-[12px]">
              <b className="text-[96px] lg:text-[126px] text-[#FB602F] leading-[125%] uppercase font-bold">
                404
              </b>
              <div className="flex flex-col items-center gap-y-[12px]">
                <label className="text-[24px] text-[#161616] leading-[125%] font-bold uppercase text-center">
                  page not found
                </label>
                <p className="text-[16px] lg:text-[20px] text-[#939393] leading-[125%] font-normal text-center">
                  Sorry, we couldn’t find the page you’re looking for
                </p>
              </div>
              
          </div>
        </div>
      </div>
    </section>
  )
}

