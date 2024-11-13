import React from 'react'
import { FaUserSecret } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { GoProject } from "react-icons/go";

const Desktop = () => {
  return (
    <div className='desktop w-full h-[65vh] p-2 flex gap-5'>

        <div className='mainabout w-max h-[13vh] flex flex-col items-center justify-center cursor-pointer  '>
        <div className='w-full h-[8vh] flex items-center justify-center text-5xl'>
        <FaUserSecret />
        </div>
      <p> about me</p>
      </div>
        <div className='mainskill w-max h-[13vh] flex flex-col items-center justify-center cursor-pointer  '>
        <div className='w-full h-[8vh] flex items-center justify-center text-5xl'>
        <SiHyperskill />
        </div>
      <p> skill</p>
      </div>
        <div className='mainall w-max h-[13vh] flex flex-col items-center justify-center cursor-pointer  '>
        <div className='w-full h-[8vh] flex items-center justify-center text-5xl'>
        <GoProject />
        </div>
      <p> All Project</p>
      </div>

    </div>
  )
}

export default Desktop
