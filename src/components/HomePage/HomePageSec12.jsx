'use client';
import React, { useState } from 'react';
import { Input, Select, Button,SelectItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react"
import fo01 from "../../../public/assets/Images/Home/fo01.png"
import fo02 from "../../../public/assets/Images/Home/fo02.png"
export default function HomePageSec12() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [service, setService] = useState('');
    const [errors, setErrors] = useState({});
    const options = [
        {key: "Business CONSULTING", label: "Business CONSULTING"},
        {key: "marketing research", label: "marketing research"},
        {key: "business Intelligence", label: "business Intelligence"},
        {key: "Software Development", label: "Software Development"},

    ]
    const validateForm = () => {
      let newErrors = {};
      if (!name) newErrors.name = "Name is required";
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        newErrors.email = "Invalid email address";
      }
      if (!tel) {
        newErrors.tel = "Telephone number is required";
      } else if (!/^[0-9]{10}$/.test(tel)) {
        newErrors.tel = "Invalid telephone number";
      }
      if (!service) newErrors.service = "Please select a service";
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log({ name, email, tel, service });
        // Handle form submission
      }
    };
  return (
    <section className='bg-[#fcfcfc]'>
        <div className="max-w-full mx-auto">
            <div className="flex flex-col justify-center items-center w-full h-full">

                {/* Content */}
                <div className="flex flex-col lg:flex-row w-full sm:w-[592px] lg:w-full h-full lg:h-[720px]">
                    <div className="flex justify-center items-center w-full lg:w-[50%] lg:h-full">
                        <Image quality={100} className=" object-cover object-center w-full h-full" 
                        classNames={{wrapper:"object-cover w-full h-full"}}
                        radius="none"
                        src={fo01.src}
                        placeholder="blur"
                        alt={`fo01 Image Form CyClick`}
                        width="100%" height="100%" />
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-[50%] lg:h-full relative">
                        <div className="flex justify-center items-center w-full h-full lg:h-full absolute top-0 lg:relative z-[1]">
                            <Image quality={100} className=" object-cover object-center w-full h-full" 
                            classNames={{wrapper:"object-cover w-full h-full"}}
                            radius="none"
                            src={fo02.src}
                            placeholder="blur"
                            alt={`fo02 Image Form CyClick`}
                            width="100%" height="100%" />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full h-full 
                            lg:absolute lg:top-0 z-[10] px-[24px] pt-[24px] pb-[40px] lg:pb-0 lg:pt-0 sm:px-[36px] lg:px-[64px] xl:px-[80px]
                            gap-y-[32px] ">
                            {/* Header */}
                            <div className='flex flex-col items-center w-full gap-y-[16px]'>
                                <b className='text-[24px] lg:text-[36px] font-bold text-[#161616] leading-[130%] uppercase text-center'>
                                    start what you have <br/>
                                    <span className='text-[24px] lg:text-[36px] italic text-[#161616] leading-[130%] font-medium uppercase'>
                                        in mind
                                    </span>
                                </b>
                                <p className='text-[16px] lg:text-[20px] font-medium text-[#FB602F] uppercase'>
                                    Consult with Cy-click
                                </p>
                            </div>
                            {/* Form */}
                            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-y-[32px]">
                                  <Input
                                    label="Name"
                                    variant="underlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    isInvalid={!!errors.name}
                                    errorMessage={errors.name}
                                  />

                                  <Input
                                    label="E-mail"
                                    variant="underlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    isInvalid={!!errors.email}
                                    errorMessage={errors.email}
                                  />

                                  <Input
                                    label="Tel"
                                    variant="underlined"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    isInvalid={!!errors.tel}
                                    errorMessage={errors.tel}
                                  />
                          
                                      <Select 
                                        variant={"underlined"}
                                        label="Interested Service"
                                        placeholder="Select a service"
                                        className="max-w-full"
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        isInvalid={!!errors.service}
                                        errorMessage={errors.service}
                                      >
                                        {options.map((option) => (
                                          <SelectItem key={option.key} value={option.key}>
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </Select>
                                 

                                <div className='group flex justify-center ss:justify-start items-center gap-x-[14px] pb-[20px] w-full ss:w-auto pt-[24px]'>
                                    <button type="submit" className='flex justify-center items-center px-[24px] lg:px-[32px] py-[8px] lg:py-[13px] border-[2px] border-[#161616] hover:bg-[#FB602F]
                                        transition-all duration-500 rounded-[50px]
                                        lg:text-[18px] text-[#161616] font-semibold leading-[125%] uppercase' >
                                        Get a Proposal
                                    </button>
                                </div>
                             
                                </form>
                            {/* Button */}
                          
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
