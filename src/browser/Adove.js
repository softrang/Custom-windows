import React from 'react'
import { IoClose } from "react-icons/io5";

const Adove = () => {
  return (
    <div className='adove w-8/12 h-[80vh] bg-zinc-200 absolute bottom-12 left-1/2 transform -translate-x-1/2'>
      
<div className='flex items-center justify-between '>
      <h1 className="text-2xl font-semibold mb-4 text-gray-700 pl-5">Embedded Graphic Editor</h1>
      <button className='aclose text-zinc-700 w-[3vw] h-[3vw] text-2xl close'><IoClose /></button>
      </div>

{/* Photopea Editor */}
<iframe
  src="https://www.photopea.com/"
  title="Photopea Graphic Editor"
  width="100%"
  height="100%"
  className="border border-gray-300 rounded-lg"
  style={{ minHeight: '100%' }}
  allow="fullscreen"
></iframe>




    </div>
  )
}

export default Adove
