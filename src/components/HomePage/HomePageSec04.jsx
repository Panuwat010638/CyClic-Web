'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";
import { Image } from '@nextui-org/react';
import img01 from "../../../public/assets/Images/Home/se01.png"
import img02 from "../../../public/assets/Images/Home/se02.png"
import img03 from "../../../public/assets/Images/Home/se03.png"
import img04 from "../../../public/assets/Images/Home/se04.png"
import { IBM_Plex_Sans_Thai } from "next/font/google";
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
const IBM =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });



gsap.registerPlugin(ScrollTrigger);

const sections = [
    { title: 'BUSINESS CONSULTING', description: 'บริการให้คำปรึกษาธุรกิจและวางแผนการตลาดเชิงกลยุทธ์เพื่อขับเคลื่อนองค์กรไปสู่ความสำเร็จ', image: img01 },
    { title: 'MARKETING RESEARCH', description: 'การศึกษาข้อมูลพฤติกรรมของผู้บริโภค เพื่อให้ตอบโจทย์สำหรับกลุ่มเป้าหมาย', image: img02 },
    { title: 'BUSINESS INTELLIGENCE', description: 'บริการที่ใช้ข้อมูลเชิงลึกที่ช่วยวิเคราะห์ผล สำหรับการตัดสินใจขององค์กรได้อย่างฉลาดลาด', image: img03 },
    { title: 'SOFTWARE DEVELOPMENT', description: 'บริการออกแบบและพัฒนาเว็บไซต์เพื่อขยายกลุ่มเป้าหมาย และสร้างความน่าเชื่อถือขององค์กร', image: img04 },
  ];



export default function HomePageSec04({data}) {
    const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const progressRef = useRef(null);
  const contentRefs = useRef([]);
  const imageRefs = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const progress = progressRef.current;
    const contents = contentRefs.current;
    const image = imageRefs.current;
    const dots = dotsRef.current;

    // ซ่อนเนื้อหาทั้งหมดและตั้งค่าเริ่มต้น
    gsap.set(contents, { autoAlpha: 0, y: 50 });
    gsap.set(image.slice(1), { autoAlpha: 0 });
    gsap.set(dots.slice(1), { backgroundColor: '#BEBEBE' });
    gsap.set(progress, { width: 0 });

    // แสดงเนื้อหาแรกทันที
    gsap.to(contents[0], { autoAlpha: 1, y: 0, duration: 0.5, ease: "power4.out" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: '+=300%',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // อัปเดต progress bar อย่างต่อเนื่อง
          gsap.set(progress, { width: `${self.progress * 100}%` });

          // เปลี่ยนสีจุดและแสดงเนื้อหาเมื่อถึงจุดที่กำหนด
          if (self.progress >= 0.9999) {
            updateContent(3);
          } else if (self.progress >= 0.6666) {
            updateContent(2);
          } else if (self.progress >= 0.3333) {
            updateContent(1);
          } else {
            updateContent(0);
          }
        }
      }
    });

    function updateContent(activeIndex) {
      sections.forEach((_, index) => {
        if (index <= activeIndex) {
          gsap.to(dots[index], { backgroundColor: '#FB602F', duration: 0.5 });
          gsap.to(image[index], { autoAlpha: 1, duration: 0.5 });
          gsap.to(contents[index], { 
            autoAlpha: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power4.out",
            overwrite: "auto"
          });
        } else {
          gsap.to(dots[index], { backgroundColor: '#BEBEBE', duration: 0.5 });
          gsap.to(image[index], { autoAlpha: 0, duration: 0.5 });
          gsap.to(contents[index], { 
            autoAlpha: 0, 
            y: 50, 
            duration: 0.5, 
            ease: "power4.in",
            overwrite: "auto"
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (


    <section ref={triggerRef} className="bg-[#fcfcfc] overflow-hidden hidden lg:block">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 xl:px-0 py-[44px] lg:py-[72px]">
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[44px] lg:gap-y-[72px]'>

          {/* Content Desktop */}
          <div  className='hidden lg:flex flex-col justify-center items-center gap-y-[32px]'>
            <div className="flex gap-x-[24px]">
              {data?.list.map((item, index) => (
                <div 
                  key={index} 
                  ref={el => imageRefs.current[index] = el} 
                  className="lg:w-[calc(25%-18px)] flex flex-col justify-center items-center flex-shrink-0 lg:h-[420px] relative"
                >
                  <div className=" w-full h-full overflow-hidden rounded-lg">
                    <Image quality={100} className="object-cover  object-center w-full h-full rounded-[16px]" 
                      classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                      radius="none"
                      src={urlFor(item?.images?.image).format('webp').url()}
                      placeholder="blur"
                      alt={item?.images?.alt}
                      width="100%" height="100%" />
                  </div>
                  <div className='flex justify-center items-end w-full h-full absolute top-0 z-[10] rounded-[16px] lg:p-[32px]'>
                    <h3 className="text-[20px] font-semibold text-[#fcfcfc] leading-[125%] whitespace-pre-line text-center uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[82%] h-1 bg-[#BEBEBE] relative mt-8">
              <div ref={progressRef} className="h-full bg-[#FB602F] absolute top-0 left-0"></div>
              {sections.map((_, index) => (
                <div
                  key={index}
                  ref={el => dotsRef.current[index] = el}
                  className="w-3 h-3 rounded-full absolute top-1/2 -translate-y-1/2"
                  style={{
                    left: `${index * 33.33}%`,
                    backgroundColor: index === 0 ? '#FB602F' : '#BEBEBE'
                  }}
                ></div>
              ))}
            </div>
            <div className="flex gap-x-[24px]">
              {data?.list?.map((section, index) => (
                <div 
                  key={index} 
                  ref={el => contentRefs.current[index] = el} 
                  className="lg:w-[calc(25%-18px)] flex flex-col flex-shrink-0 gap-y-[12px]"
                >
                  <h3 className="text-[20px] font-semibold text-[#161616] leading-[125%] uppercase">
                    {section.title}
                  </h3>
                  <p className={`${IBM.className} text-[18px] text-[#161616] leading-[150%] font-normal`}>
                    {section.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}
