import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { FaDownLong } from "react-icons/fa6";
import { SlMusicTone } from "react-icons/sl";
import { AiFillPicture } from "react-icons/ai";
import { TfiVideoClapper } from "react-icons/tfi";
import { CgDrive } from "react-icons/cg";

const Thispc = () => {
  return (
    <div className='thispc  w-full h-max'>
        <div className='flex justify-center flex-wrap px-5 text-xl cursor-pointer'>
            <p className='w-full'>Folder</p>
        <div className='w-1/3 py-3 flex gap-2 items-center justify-start'> <HiOutlineDesktopComputer /> <p>Desktop</p></div> 
      <div className='w-1/3 py-3 flex gap-2 items-center justify-start'> <CgFileDocument /> <p>Document</p></div> 
      <div className='w-1/3 py-3 flex gap-2 items-center justify-start'> <FaDownLong /> <p>Downlode</p></div> 
      <div className='w-1/3 py-3 flex gap-2 items-center justify-start'> <SlMusicTone /> <p>music</p></div> 
      <div className='w-1/3 py-3 flex gap-2 items-center justify-start'> <AiFillPicture /> <p>Picture</p></div> 
      <div className='w-1/3 py-3 flex gap-2 items-center justify-start'> <TfiVideoClapper /><p>Video</p></div> 
  
        </div>

        <div className=' w-full h-max flex justify-start flex-wrap px-5 text-xl mt-10 cursor-pointer'>
        <p className='w-full h-max py-2'>Device and Drivers</p>
        <div className='w-1/4 py-1 flex gap-2 items-center justify-start'> <CgDrive /> <p>Local Disk(C)</p></div> 
      <div className='w-1/4 py-1 flex gap-2 items-center justify-start'> <CgDrive /> <p>Local Disk(D)</p></div> 
      <div className='w-1/4 py-1 flex gap-2 items-center justify-start'> <CgDrive /> <p>Local Disk(E)</p></div> 
        </div>
      
    </div>
  )
}

export default Thispc
