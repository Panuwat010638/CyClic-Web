'use client'
import { useState,useEffect } from "react"
import {Card, CardBody, CardFooter,Pagination,Skeleton } from '@nextui-org/react'
import CardWork from "../Cards/CardWork";
import { Select, SelectItem } from "@nextui-org/react";
export default function WorkPageSec02({category,work}) {
    const [cat,setCat]=useState('All');
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex,setStartIndex]=useState(0)
  const [endIndex,setEndIndex]=useState(0)
  const [workfilter,setFilterwork]=useState(work||[])
  const [isLoading, setIsLoading] = useState(true)
  //Filter Catagory
  useEffect(() => {
    if(cat == "All"){
      setFilterwork(work);
    }else{
      const filtered = work?.filter(item => item?.category?.toLowerCase().includes(cat.toLowerCase()));
      setFilterwork(filtered);
    }
    setCurrentPage(1);
    
    // Simulate loading
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 1000) // Simulating a 1.5 second load time
}, [cat]);
  //Pagination
  useEffect(() => {
      const cur = Number(currentPage-1);
      const startIndex = cur * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setStartIndex(startIndex)
      setEndIndex(endIndex)
      // Simulate loading
      setIsLoading(true)
      setTimeout(() => {
          setIsLoading(false)
      }, 1000) // Simulating a 1.5 second load time
  }, [currentPage]);
  const lengthData = workfilter?.length
  const result = parseInt(lengthData / itemsPerPage);
  const result2 = parseInt(lengthData % itemsPerPage);
  useEffect(() => {
     window.scrollTo({ top: 0});
  }, [currentPage]);
  const options = [
    { key: 'All', label: 'All' },
    ...category.map(item => ({ key: item.title, label: item.title }))
  ];
  return (
    <section className='bg-[#fcfcfc]'>
    <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[36px] sm:pb-[48px] lg:pb-[54px]'>
      <div className='flex flex-col justify-center items-center w-full h-full gap-y-[40px] lg:gap-y-[48px]'>
    

        {/* Category */}
        <div className="hidden lg:flex justify-between items-center w-full gap-x-[16px]">
          <button key="All" onClick={()=>setCat("All")} className={`flex justify-center ${cat=="All" ? "bg-[#FFB69E]":"bg-[#fcfcfc] hover:bg-[#FFB69E]"}
            items-center lg:w-[137px] transition-all duration-500 h-[48px] border-[#161616] border-[1px] rounded-[50px]
            lg:text-[18px] text-[#000000] font-normal leading-[125%] uppercase`}>
              All
          </button>
          {category?.map((item,index)=>(
            <button key={item?.title+` index: ${index}`} onClick={()=>setCat(item?.title)} className={`flex justify-center ${item?.title == cat ? "bg-[#FFB69E]":"bg-[#fcfcfc] hover:bg-[#FFB69E]"}
            items-center lg:w-auto lg:px-6 transition-all duration-500 h-[48px] border-[#161616] border-[1px] rounded-[50px] 
            lg:text-[18px] text-[#000000] font-normal leading-[125%] uppercase`}>
              {item?.title}
            </button>
          ))}
        </div>
        <div className="flex lg:hidden justify-center items-center w-full sm:w-[592px]">
          <Select 
            variant={"bordered"}
            className="max-w-full h-[48px]"
            defaultSelectedKeys={["All"]}
            classNames={{base:'h-[48px]',mainWrapper:'h-[48px]',trigger:'h-[48px] border-[#161616]',value:'text-[#161616] text-[18px] font-normal uppercase'}}
            radius="full"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            {options.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        

        {isLoading 
              ? (<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-[24px] lg:gap-y-[32px] sm:gap-x-[24px] w-full sm:w-[592px] lg:w-full'>
                {Array(itemsPerPage).fill().map((_, index) => (
                    <Card shadow="sm" className="bg-[#FFFFFF] rounded-t-[16px]" key={index}>
                     <CardBody className="overflow-visible p-0">
                       <Skeleton
                         className="w-full object-cover h-[240px] rounded-[16px]"
                       />
                     </CardBody>
                     <CardFooter className="flex flex-col items-start w-full">
                        <Skeleton className='w-full h-[20px] mb-[20px]'/>
                       <Skeleton className='w-1/3 h-[20px] '/>
                   
                     </CardFooter>
                   </Card>
                 
                   ))}
              </div>
                )
              : ( <div className='grid grid-cols-1 sm:grid-cols-2  gap-[32px] lg:gap-6 w-full sm:w-[592px] lg:w-full'>
                {workfilter?.slice(startIndex, endIndex)?.map((item,index)=>(
                    <CardWork key={index} item={item} index={index}/>
                ))}
              </div>)
          }

          {/* Pagination */}
          {result != 0 && result2==0  ? (
                <div className="flex justify-center items-center w-full mt-[24px]">
                    <Pagination showControls 
                    
                    total={result} 
                    aria-label="Button for opening the next page in content"
                    classNames={{
                      item: "text-[#FF5941] rounded-full mx-2 w-[48px] h-[48px] border-[1px] border-[#FF5941] bg-transparent drop-shadow-none shadow-none transition-all duration-300",
                      cursor:
                        "text-[#fcfcfc] bg-[#FF5941] rounded-full w-[48px] h-[48px] border-[1px] border-[#FF5941] ",
                      next:"text-[#FF5941] rounded-full w-[48px] h-[48px] border-[1px] border-[#FF5941] bg-transparent transition-all duration-300",
                      prev:"text-[#FF5941] rounded-full w-[48px] h-[48px] border-[1px] border-[#FF5941] bg-transparent  transition-all duration-300",
                      }}
                    page={currentPage}
                    onChange={setCurrentPage}
                   
                     />
                </div> 
                ):result != 0 && result2!=0 ? (
                  <div className="flex justify-center items-center w-full mt-[24px]">
                  <Pagination showControls 
                  total={result+1} 
                  aria-label="Button for opening the next page in content"
                  classNames={{
                    item: "text-[#FF5941] rounded-full w-[48px] h-[48px] border-[1px] border-[#FF5941] bg-transparent drop-shadow-none shadow-none transition-all duration-300",
                    cursor:
                      "text-[#fcfcfc] bg-[#FF5941] rounded-full w-[48px] h-[48px] border-[1px] border-[#FF5941] ",
                    next:"text-[#FF5941] rounded-full w-[48px] h-[48px] border-[1px] border-[#FF5941] bg-transparent transition-all duration-300",
                    prev:"text-[#FF5941] rounded-full w-[48px] h-[48px] border-[1px] border-[#FF5941] bg-transparent  transition-all duration-300",
                    }}
                  page={currentPage}
                  onChange={setCurrentPage}
                 
                   />
              </div> 
              ):null}
      </div>
    </div>
  </section>
  )
}
