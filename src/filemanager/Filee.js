import React from 'react'
import Theder from './compo/Theder'
import Lheder from './compo/Lheder'
import Thispc from './compon/Thispc'
import Desktop from './compon/Desktop'
import Aboutme from './desktop/Aboutme'
import Skill from './desktop/Skill'
import Allproject from './desktop/Allproject'

const Filee = () => {
  return (
    <div className='w-9/12 h-[80vh] file bg-zinc-700 absolute bottom-12 left-1/2 transform -translate-x-1/2'>
      <Theder/>
      <Lheder/>
      <div className='w-10/12 h-[65vh] absolute right-0 bottom-0'>
      <Thispc/>
      <Desktop/>
      <Aboutme/>
      <Skill/>
      <Allproject/>

      </div>
     
    </div>
  )
}

export default Filee
