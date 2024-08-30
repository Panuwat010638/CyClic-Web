'use client'
import React, { useEffect, useState } from 'react';
import { Image} from "@nextui-org/react"
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function CareerPageSec02({data}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateActiveIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = React.Children.count(children) - 1;
    } else if (newIndex > 1) {
        newIndex = 0;
    }
    setActiveIndex(newIndex);
}
  useEffect(() => {
    const interval = setInterval(() => {
      // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนตำแหน่งทุก 5 วินาที
      updateActiveIndex(activeIndex + 1);
    }, 5000);

    return () => {
      // เมื่อ component ถูก unmount ให้ล้าง interval                                          
      clearInterval(interval);
    };
  });
  const mdata = [
    {image:data?.images01?.image,alt:data?.images01?.alt},
    {image:data?.images02?.image,alt:data?.images02?.alt},
  ]
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto sm:px-6 xl:px-0 pb-[40px] lg:pb-[54px]'>
        <div className='flex w-full h-full'>
          {/* Image */}
          <div className='hidden lg:flex justify-between w-full gap-x-[24px]'>
            <div className="flex justify-center items-center w-full lg:h-[310px] rounded-[16px]">
                <Image quality={100} className=" object-cover object-center w-full h-full rounded-[16px]" 
                classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                radius="none"
                src={urlFor(data?.images01?.image).format('webp').url()}
                placeholder="blur"
                alt={data?.images01?.alt}
                width="100%" height="100%" />
            </div>
            <div className="flex justify-center items-center w-full lg:h-[310px] rounded-[16px]">
                <Image quality={100} className=" object-cover object-center w-full h-full rounded-[16px]" 
                classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                radius="none"
                src={urlFor(data?.images02?.image).format('webp').url()}
                placeholder="blur"
                alt={data?.images02?.alt}
                width="100%" height="100%" />
            </div>
          </div>
          {/* Mobile */}
          <div className='flex lg:hidden w-full sm:w-[592px] overflow-hidden'>
            {mdata?.map((item,index)=>(
              <div style={{ transform: `translateX(-${activeIndex * 100}%)` }} key={index} 
              className="flex justify-center items-center min-w-full lg:h-[310px] sm:rounded-[16px] transition-all duration-500">
                <Image quality={100} className=" object-cover object-center w-full h-full sm:rounded-[16px]" 
                classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                radius="none"
                src={urlFor(item.image).format('webp').url()}
                placeholder="blur"
                alt={item?.alt}
                width="100%" height="100%" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
