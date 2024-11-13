import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { RiSquareLine } from "react-icons/ri";
import { SiBombardier } from "react-icons/si";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowUp } from "react-icons/hi";
const Theder = () => {
  return (
    <div className='w-full h-[15vh] '>
      <div className='w-full h-[5vh] flex items-center justify-between'>
        <div className='w-2/12  text-lg pl-2'>
        <p>file Explorer</p>

        </div>

        <div className='flex gap-2 '>
          <button className='w-[3vw] h-[3vw] text-lg'><SiBombardier /></button>
          <button className='w-[3vw] h-[3vw] text-lg'><RiSquareLine /></button>
          <button className='w-[3vw] fclose h-[3vw] text-lg'><IoCloseSharp /></button>
        </div>

      </div>


      <div className='w-full h-[5vh] flex itmes-center justify-between px-2'>
        <div className=' flex items-center gap-3'>
          <p>Flie</p>
          <p>Home </p>
          <p>Manage</p>
        </div>
        <div className='flex gap-2'> 
        <button className='w-[3vw] h-[2vw] flex items-center justify-center text-lg '><RiArrowDownSLine /></button>
        <button className='w-[2vw] h-[2vw] flex items-center justify-center text-lg '>?</button>
      </div>
      </div>


      <div className='w-full h-[5vh] flex pr-2'>
        <div className='w-2/12 flex'>
        <button className='w-[3vw] h-[2vw] flex items-center justify-center text-lg '><HiArrowNarrowLeft /></button>
        <button className='w-[3vw] h-[2vw] flex items-center justify-center text-lg '><HiArrowNarrowRight /></button>
        <button className='w-[3vw] h-[2vw] flex items-center justify-center text-lg '><HiArrowNarrowUp /></button>
        <button className='babout hidden w-[3vw] h-[2vw] flex items-center justify-center text-lg '><HiArrowNarrowUp /></button>
        <button className='bskill hidden w-[3vw] h-[2vw] flex items-center justify-center text-lg '><HiArrowNarrowUp /></button>
        <button className='ballproject hidden w-[3vw] h-[2vw] flex items-center justify-center text-lg '><HiArrowNarrowUp /></button>
        
        </div>
        <div className='w-7/12 h-full border border-zinc300'>


        </div>
        <div className='w-3/12'>
          <input className='w-full h-[5vh] bg-zinc-700 border border-zinc-300 px-2 outline-0' type='search' placeholder='search'/>

        </div>

      </div>
               
    
    </div>
  )
}

export default Theder
