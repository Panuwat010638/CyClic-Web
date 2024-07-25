import React from 'react'

export default function HomePageSec01() {
  return (
    <section className="bg-[#ffffff]">
    <div className="max-w-full mx-auto">
        <div className="flex justify-center items-center w-full h-full relative">
            {/* Image Banner */}
            <div className="flex justify-center items-center w-full h-full">
            <video autoPlay={true} playsInline={true} muted loop controls={false} preload="none" className='object-contain aspect-video w-full h-full'>
                <source src='/assets/videos/bg.mp4' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
     
        </div>
    </div>
</section>
  )
}
