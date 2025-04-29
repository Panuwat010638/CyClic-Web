"use client";
import React, { useState } from "react";
import { Input, Select, Button, SelectItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import client from "../../../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const ibm = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function ServiceSlugBanner({ data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState({});
  const options = [
    { key: "BUSINESS CONSULTING", label: "BUSINESS CONSULTING" },
    { key: "MARKETING RESEARCH", label: "MARKETING RESEARCH" },
    { key: "BUSINESS INTELLIGENCE", label: "BUSINESS INTELLIGENCE" },
    { key: "SOFTWARE DEVELOPMENT", label: "SOFTWARE DEVELOPMENT" },
  ];
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/api/line", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, tel, service }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        const result = await response.json();
        console.log("Message sent successfully:", result);
        // Reset form fields
        setName("");
        setEmail("");
        setTel("");
        setService("");
        // Show success message to user
        alert("ข้อมูลของคุณถูกส่งเรียบร้อยแล้ว!");
      } catch (error) {
        console.error("Error sending message:", error);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
      }
    }
  };
  return (
    <section className="bg-[#fcfcfc]">
      <div className="max-w-full mx-auto">
        <div className="flex items-center flex-col w-full h-full relative">
          {/* Image */}
          <div className="flex justify-center items-center w-full h-full absolute z-[1] top-0">
            <Image
              quality={100}
              className=" object-cover object-center w-full h-full"
              classNames={{
                wrapper: "object-cover w-full h-full ",
              }}
              radius="none"
              src={urlFor(data?.mainImage?.image).format("webp").url()}
              placeholder="blur"
              alt={data?.mainImage?.alt}
              blurDataURL={urlFor(data?.mainImage?.image)
                .width(10)
                .quality(20)
                .blur(10)
                .url()}
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex justify-center items-center w-full h-full bg-black/50 absolute top-0 z-[5]" />
          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full sm:w-[592px] lg:w-full xl:w-[1280px] h-screen px-6 xl:px-0 relative z-[10]">
            {/* Header */}
            <div className="flex flex-col justify-center items-center w-full lg:w-[calc(50%-12px)] h-full gap-6 lg:gap-[32px]">
              <h1 className="text-[36px] lg:text-[64px] text-[#FB602F] font-bold italic leading-[150%] uppercase text-center">
                {data?.title}
              </h1>
              <h4
                className={`${ibm.className} text-[18px] lg:text-[20px] text-[#fcfcfc] font-normal leading-[150%] whitespace-pre-line text-center`}
              >
                {data?.detail}
              </h4>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full lg:w-[calc(50%-12px)] gap-y-[32px] rounded-[16px] p-6 lg:p-[40px] bg-[#fcfcfc]/90"
            >
                <div>
                    <h2 className="text-[24px] lg:text-[36px] text-[#161616] font-bold uppercase leading-[125%]">
                    {`start what you have in mind`}
                </h2>
                <h2 className="text-[24px] lg:text-[36px] text-[#161616] font-bold uppercase leading-[125%]">
                    {` in mind`}
                </h2>
                </div>
                <p className="text-[16px] lg:text-[20px] text-[#FB602F] font-normal leading-[150%]">

                </p>
                
              <Input
                label="Name"
                variant="underlined"
                value={name}
                classNames={{ label: "text-[18px] text-[#161616]" }}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!errors.name}
                errorMessage={errors.name}
              />

              <Input
                label="E-mail"
                variant="underlined"
                classNames={{ label: "text-[18px] text-[#161616]" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
                errorMessage={errors.email}
              />

              <Input
                label="Tel"
                variant="underlined"
                classNames={{ label: "text-[18px] text-[#161616]" }}
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                isInvalid={!!errors.tel}
                errorMessage={errors.tel}
              />

              <Select
                variant={"underlined"}
                placeholder=" Select interested service"
                className="max-w-full"
                classNames={{
                  label: "text-[18px] text-[#161616]",
                  value: "text-[#161616] text-[18px] font-normal",
                  popoverContent: "text-[#161616] text-[16px] font-normal",
                }}
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

              <div className="group flex justify-center ss:justify-start items-center gap-x-[14px] pb-[20px] w-full ss:w-auto pt-[24px]">
                <button
                  type="submit"
                  className="flex justify-center items-center px-[24px] lg:px-[32px] py-[8px] lg:py-[13px] border-[2px] border-[#161616] hover:bg-[#161616]
                                        transition-all duration-500 rounded-[50px]
                                        lg:text-[18px] text-[#161616] hover:text-[#fcfcfc] font-semibold leading-[125%] uppercase"
                >
                  Get a Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
