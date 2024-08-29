'use client'
import Marquee from "react-fast-marquee";
import { useRef, useEffect,useState,useCallback } from 'react';
import { Image } from "@nextui-org/react";


import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function HomePageSec11({data,slidespeed = 0.8}) {
    const marqueeRef = useRef(null);
    const [speed, setSpeed] = useState(slidespeed );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSpeed(0.5);
            } else if (window.innerWidth < 1024) {
                setSpeed(0.75);
            } else {
                setSpeed(1);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial speed

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const animate = useCallback(() => {
        const marquee = marqueeRef.current;
        let position = 0;

        const step = () => {
            position -= speed;
            if (position <= -marquee.scrollWidth / 2) {
                position = 0;
            }
            marquee.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [speed]);

    useEffect(() => {
        const animation = animate();
        return () => cancelAnimationFrame(animation);
    }, [animate]);
  return (
    <section className="bg-[#fcfcfc] overflow-hidden">
    <div className="max-w-full mx-auto py-[48px] lg:py-[80px]">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="overflow-hidden w-full">
                <div 
                    ref={marqueeRef}
                    className="flex items-center py-4 lg:py-6 whitespace-nowrap"
                    style={{ width: '200%' }}
                >
                    {[...data, ...data].map((item, index) => (
                        <div key={index} className="flex justify-center items-center  z-0 mr-6 sm:mr-[56px] lg:mr-[70px]">
                            <Image 
                                loading='lazy' 
                                quality={100} 
                                className="object-contain object-center w-auto h-full max-w-[80px] md:max-w-[100px] lg:max-w-full" 
                                classNames={{
                                    wrapper: "object-contain object-center w-auto h-full max-w-[80px] md:max-w-[100px] lg:max-w-full"
                                }}
                                radius="none"
                                src={item?.images?.image ? urlFor(item?.images?.image).format('webp').url() : ''}
                                placeholder="blur"
                                alt={item?.images?.alt || 'Logo'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
