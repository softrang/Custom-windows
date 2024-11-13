import React from 'react'
import { useDeta } from '../../context/ShareData'

const Allproject = () => {
    const {project} = useDeta()
  return (
    <div className='allproject w-full h-[65vh] pr-2  overflow-y-scroll'>
        {project.map((items)=>(

      <div className='w-full h-[30vh]  pr-2 mb-5 flex '>
        <div className='w-1/2 h-full '>
        <img className='w-full h-full' src= {items.image} alt={items.title} />

        </div>
        <div className='w-2/3 h-full  px-2'>
        <p className='text-2xl font-sans'><strong>Name:  </strong> {items.title}</p>
        <p className='mt-1 font-mono'> <strong className ="text-xl font-sans"> Discription</strong> {items.dic}</p>
        <p className='mt-2'><strong className='text-xl'> Language: </strong> {items.lang} </p>
        <p className='mt-2 w-full py-1 bg-sky-800  text-center '> Click Heare to see full website</p>
        </div>

      </div>
 ))}


    </div>
  )
}

export default Allproject
