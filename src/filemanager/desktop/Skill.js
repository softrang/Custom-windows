import React from 'react'
import { useDeta } from '../../context/ShareData'

const Skill = () => {
  const {skill} = useDeta()
  return (
    <div className='skill w-full h-max p-3  flex flex-wrap justify-around'>
      {skill.map((items)=>(

        <div className='w-[46%] h-[15vh] flex mb-5'>
          <div className='w-1/3 h-full border-r border-rose-600 p-3 '>
          <img className='w-auto h-full m-auto' src={items.image} alt={items.title}/>

          </div>
          <div className='w-2/3 h-full border-r border-rose-600 px-2'>
          <p className='text-2xl'>{items.title}</p>
          <p className='mt-2'>{items.dic}</p>

          </div>

        </div>
        ))}
    </div>
  )
}

export default Skill
