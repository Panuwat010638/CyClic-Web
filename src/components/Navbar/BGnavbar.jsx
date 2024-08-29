'use client'
import { usePathname } from "next/navigation"
export default function BGnavbar() {
    const pathname = usePathname();
  return (
    <div className={`${pathname == "/" ? "flex lg:hidden":"flex"} w-full h-[80px] bg-[#252A39]`}></div>
  )
}
