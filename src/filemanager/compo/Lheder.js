import React from 'react'
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { FaDownLong } from "react-icons/fa6";
import { SlMusicTone } from "react-icons/sl";
import { AiFillPicture } from "react-icons/ai";
import { TfiVideoClapper } from "react-icons/tfi";
import { CgDrive } from "react-icons/cg";

const Lheder = () => {
  return (
    <div className='w-2/12 h-[65vh] border-r border-zinc-300 pl-5 border-t'>
       <div className='mainthis w-full py-1 flex gap-2 items-center justify-start'> <MdOutlineLaptopChromebook /> <p>This PC</p></div> 
      <div className='w-full h-max'>
      <div className='maindesk w-full py-1 flex gap-2 items-center justify-start'> <HiOutlineDesktopComputer /> <p>Desktop</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <CgFileDocument /> <p>Document</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <FaDownLong /> <p>Downlode</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <SlMusicTone /> <p>music</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <AiFillPicture /> <p>Picture</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <TfiVideoClapper /><p>Video</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <CgDrive /> <p>Local Disk(C)</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <CgDrive /> <p>Local Disk(D)</p></div> 
      <div className='w-full py-1 flex gap-2 items-center justify-start'> <CgDrive /> <p>Local Disk(E)</p></div> 
  
      </div>
    </div>
  )
}

export default Lheder
