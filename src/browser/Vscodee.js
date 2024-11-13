import React from 'react'
import Codeeditor from './Codeeditor'
import { IoClose } from "react-icons/io5";

const Vscodee = () => {
  return (
    <div className='vscode w-8/12 h-[80vh] bg-zinc-700 absolute bottom-12 left-1/2 transform -translate-x-1/2'>
     <div className='w-full h-max bg-zinc-200 px-2 flex items-center justify-between'>
     <h1 className="text-xl font-semibold  text-gray-700">Embedded VS Code Editor</h1>
     <button className='text-zinc-800 right-0 w-[3vw] h-[3vw] text-2xl vclose'><IoClose /></button>
     </div>
     
      <Codeeditor/>
    </div>
  )
}

export default Vscodee
