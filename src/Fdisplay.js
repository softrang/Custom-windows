import React from 'react'
import Walpaper from "./image/dwalpaper.jpg"
import Starticon from "./image/starticon.png"
import Msedge from "./image/msedgeicon.png"
import Filexpo from "./image/fileexploral.png"
import Gcrome from "./image/gcrome.png"
import Vscode from "./image/vscodeicon.png"
import Aiicon from "./image/aiicon.png"



import Edge from './browser/Edge'
import Vscodee from './browser/Vscodee'
import Adove from './browser/Adove'
import Filee from './filemanager/Filee'





const Fdisplay = () => {

   
  return (
    <div className='fdisplay w-full h-full  '>
         <img className='w-full h-full  absolute top-0 z-20'  src= {Walpaper} alt='wallpaper'/>

       <div className='w-full h-full absolute top-0 z-30 '>
          <Filee/>
<Edge/>
<Vscodee/>
<Adove/>








          <div className='w-full h-12 bg-zinc-700 flex  gap-2 items-center justify-center absolute bottom-0'> 
          <div className='w-[4vw] h-full scale-75'>
            <img className='w-full h-full' src={Starticon} alt='windowsstart' />

          </div>
          <div className='w-[4vw] mainfile h-full scale-75'>
            <img className='w-full h-full' src={Filexpo} alt='fileexploral' />

          </div>
          <div className='mainedge w-[4vw] h-full scale-75'>
            <img className='w-full h-full' src={Msedge} alt='msedge' />

          </div>
          <div className='w-[4vw] h-full scale-75'>
            <img className='w-full h-full' src={Gcrome} alt='googlecrome' />

          </div>
          <div className=' mainvscode w-[4vw] h-full scale-75'>
            <img className=' w-full h-full' src={Vscode} alt='vscode' />

          </div>
          <div className=' mainadove w-[4vw] h-full scale-75'>
            <img className='w-full h-full' src={Aiicon} alt='Adoveillastore' />

          </div>
          
          </div>
        </div>
      
    </div>
  )
}

export default Fdisplay
