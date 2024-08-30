'use client'
import { useState,useEffect } from "react"
import {Card, CardBody, CardFooter,Pagination,Skeleton,Select, SelectItem } from '@nextui-org/react'
import CardBlog from "../Cards/CardBlog";
export default function BlogPageSec04({data,category,blog}) {
  const [cat,setCat]=useState('All');
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex,setStartIndex]=useState(0)
  const [endIndex,setEndIndex]=useState(0)
  const [blogfilter,setFilterblog]=useState(blog||[])
  const [isLoading, setIsLoading] = useState(true)
  //Filter Catagory
  useEffect(() => {
    if(cat == "All"){
      setFilterblog(blog);
    }else{
      const filtered = blog?.filter(item => item?.category?.toLowerCase().includes(cat.toLowerCase()));
      setFilterblog(filtered);
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
  const lengthData = blogfilter?.length
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
            {/* Header */}
          <div className='flex justify-center lg:justify-between items-end w-full lg:gap-x-6'>
            {/* Text */}
            <div className="flex justify-center lg:justify-start">
                <b className="text-[36px] lg:text-[48px] text-[#161616] font-extrabold leading-[100%] text-center lg:text-start uppercase whitespace-pre-line lg:whitespace-normal">
                    {data?.maincontent?.header01}
                    <span className="text-[36px] lg:text-[48px] text-[#161616] font-medium leading-[100%] italic">
                      {data?.maincontent?.header02}
                    </span>
                </b>
            </div>
            {/* Sub */}
            <p className='hidden lg:flex text-[16px] font-normal text-[#161616] leading-[125%]'>
              {data?.maincontent?.subheader}
            </p>
            
          </div>

          {/* Category */}
          <div className="hidden lg:flex justify-between items-center w-full gap-x-[16px]">
            <button key="All" onClick={()=>setCat("All")} className={`flex justify-center ${cat=="All" ? "bg-[#FFB69E]":"bg-[#fcfcfc] hover:bg-[#FFB69E]"}
              items-center lg:w-[calc(25%-12px)] transition-all duration-500 h-[48px] border-[#161616] border-[1px] rounded-[50px]
              lg:text-[18px] text-[#000000] font-normal leading-[125%] uppercase`}>
                All
            </button>
            {category?.map((item,index)=>(
              <button key={item?.title+` index: ${index}`} onClick={()=>setCat(item?.title)} className={`flex justify-center ${item?.title == cat ? "bg-[#FFB69E]":"bg-[#fcfcfc] hover:bg-[#FFB69E]"}
              items-center lg:w-[calc(25%-12px)] transition-all duration-500 h-[48px] border-[#161616] border-[1px] rounded-[50px] 
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
              classNames={{base:'h-[48px]',mainWrapper:'h-[48px]',trigger:'h-[48px] border-[#161616]'}}
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
                ? (<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[24px] lg:gap-y-[32px] sm:gap-x-[24px] w-full sm:w-[592px] lg:w-full'>
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
                : ( <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-6 w-full sm:w-[592px] lg:w-full'>
                  {blogfilter?.slice(startIndex, endIndex)?.map((item,index)=>(
                      <CardBlog key={index} item={item} index={index}/>
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
