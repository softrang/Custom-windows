import React, { useRef }  from 'react'
import Walpaper from "./image/walpaper.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Monitor = () => {
  const w0st = useRef()
  const w1st = useRef()
  const w2nd = useRef()
  const fdisplay = useRef()
  useGSAP(() => {
   
    gsap.from(w1st.current, {
      y:50,
      duration: 1,
      delay:2,
      opacity:0

    })
    gsap.from(w2nd.current, {
      y:50,
      duration: 1,
      delay:3,
      opacity:0,
            
    })
    gsap.from(".w2nd", {
     rotate:360,
     yoyo:true,
     repeat:-1,
     duration:2
            
    })
    gsap.to(w0st.current, {
    opacity:0,
    duration:1,
    delay:6
            
    })

    gsap.from(fdisplay.current, {
      duration: 1,
      delay:6,
      opacity:0

    })
   

   
})

  return (
<>  
    <div className='premonitor w-full h-full flex items-center justify-center cursor-pointer '> 
    <h1 className='text-center text-5xl text-zinc-400 cursor-pointer'>Please Start The PC click by the <strong> on</strong> button</h1>
    </div>
    <div className='monitor w-full h-full bg-sky-600 flex items-center justify-center'>
      <div ref={w0st} className='w-1/2 h-1/2 flex flex-col items-center justify-center'>
      <h1 ref={w1st} className=' text-[2vw] mb-2 opacity-1' >Windows is starting</h1>
      <div ref={w2nd} className='w2nd w-[3vw] h-[3vw] opacity-1 border-4 border-zinc-50 rounded-full border-dotted'>
      </div>

      </div>
      
      <div ref={fdisplay} className='w-full h-full opacity-1 bg-rose-600 absolute top-0'>
        <img className='w-full h-full  absolute top-0 z-20'  src= {Walpaper} alt='wallpaper'/>
        <div className='w-full h-full absolute top-0 z-30 flex items-center'>
          <div className='w-full h-max flex flex-col items-center justify-center'> 
          <div className='w-[10vw] h-[10vw] border border-zinc-50 rounded-full '>

          </div>
          <h1 className='py-2 text-xl'>MD OASIM MIA</h1>
          <p className='sin cursor-default px-4 py-2'>sin in</p>
          </div>
        </div>
      
    </div>

      
    </div>
    </>
  )
}

export default Monitor
