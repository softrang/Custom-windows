import React, { useEffect} from 'react'
import Monitor from './Monitor';
import Fdisplay from './Fdisplay';


const Front = () => {

   

    useEffect(() => {
        const Start = document.querySelector(".start");
        const Monitor = document.querySelector(".monitor");
        const Premonitor = document.querySelector(".premonitor");

        const On = document.querySelector(".on");
        Monitor.style.opacity = "0";
        const handleClick = () => {
            Monitor.style.opacity = "1";
            Premonitor.style.display = "none";

            Monitor.style.transition = "1s all ease-in-out";
            On.style.backgroundColor = "red";
           
        };
    
        if (Start) {
            Start.addEventListener("click", handleClick);
        }
    
       

        const Fdisplay = document.querySelector(".fdisplay")
        const Sinin = document.querySelector(".sin")
        const PC = document.querySelector(".pc")
        const Display = document.querySelector(".display")

         Fdisplay.style.display= "none"
const handeldisplay = ()=>{
    Fdisplay.style.display= "block"
    Monitor.style.display = "none";
    PC.style.display = "none";
    Display.style.width = "100vw";
    Display.style.hight = "100vh";
   
}
if (Sinin) {
    Sinin.addEventListener("click", handeldisplay);
}

const Close=document.querySelector(".close");
const Edge=document.querySelector(".edge");

const Mainedge=document.querySelector(".mainedge");

Edge.style.display = "none";
const Edgedisplay = ()=>{
    Edge.style.display = "none";
}
const Mainedgedisplay = ()=>{
    Edge.style.display = "block";
}

Close.addEventListener("click", Edgedisplay)
Mainedge.addEventListener("click", Mainedgedisplay)

const Vclose=document.querySelector(".vclose");
const Vscode=document.querySelector(".vscode");
const Mainvscode=document.querySelector(".mainvscode");
Vscode.style.display = "none";
const Vscodedisplay =()=>{
    Vscode.style.display = "none";
}
const Mainvscodedisplay =()=>{
    Vscode.style.display = "block";
}

Mainvscode.addEventListener("click", Mainvscodedisplay)
Vclose.addEventListener("click", Vscodedisplay)


const Aclose=document.querySelector(".aclose");
const Adove=document.querySelector(".adove");
const Mainadove=document.querySelector(".mainadove");
Adove.style.display = "none";
const Adovedisplay =()=>{
    Adove.style.display = "none";
}
const Mainadovedisplay =()=>{
    Adove.style.display = "block";
}

Mainadove.addEventListener("click", Mainadovedisplay)
Aclose.addEventListener("click", Adovedisplay)




const Fclose=document.querySelector(".fclose");
const File=document.querySelector(".file");
const Mainfile=document.querySelector(".mainfile");
File.style.display = "none";
const Filedisplay =()=>{
    File.style.display = "none";
}
const Mainfiledisplay =()=>{
    File.style.display = "block";
}

Mainfile.addEventListener("click", Mainfiledisplay)
Fclose.addEventListener("click", Filedisplay)







const Mainthis = document.querySelector(".mainthis");
const Maindesk = document.querySelector(".maindesk");

const Thispc = document.querySelector(".thispc");
const Desktop = document.querySelector(".desktop");

Desktop.style.display = "none"
Mainthis.addEventListener("click", () => {
    if (Thispc.style.display === "none") {
        Thispc.style.display = "block";
        Desktop.style.display = "none";
        About.style.display = "none"
        Babout.style.display = "none";
        Skill.style.display = "none";
        Bskil.style.display = "none";
        Allproject.style.display = "none";
        Ballproject.style.display = "none";
   
    } 
});
Maindesk.addEventListener("click", () => {
    if (Desktop.style.display === "none") {
        Desktop.style.display = "flex";
        Thispc.style.display = "none";
        About.style.display = "none"
        Babout.style.display = "none";
        Skill.style.display = "none";
        Bskil.style.display = "none";
        Allproject.style.display = "none";
        Ballproject.style.display = "none";
   

    } 
});


const Mainabout = document.querySelector(".mainabout");
const About = document.querySelector(".aboutme");
const Babout = document.querySelector(".babout");

About.style.display = "none"

Mainabout.addEventListener("click", () => {
    if (About.style.display === "none") {
        About.style.display = "block";
        Babout.style.display = "block";

        Desktop.style.display = "none";
    } 
});

Babout.addEventListener("click", ()=>{
    About.style.display = "none";
    Desktop.style.display = "flex";
    Babout.style.display = "none";
})



const Mainskill = document.querySelector(".mainskill");
const Skill = document.querySelector(".skill");
const Bskil = document.querySelector(".bskill");


Skill.style.display = "none"
Mainskill.addEventListener("click", () => {
    if (Skill.style.display === "none") {
        Skill.style.display = "flex";
        Bskil.style.display = "block";

        Desktop.style.display = "none";
    } 
});

Bskil.addEventListener("click", ()=>{
    Skill.style.display = "none";
    Desktop.style.display = "flex";
    Bskil.style.display = "none";
})




const Mainall = document.querySelector(".mainall");
const Allproject = document.querySelector(".allproject");
const Ballproject = document.querySelector(".ballproject");


Allproject.style.display = "none"
Mainall.addEventListener("click", () => {
    if (Allproject.style.display === "none") {
        Allproject.style.display = "block";
        Ballproject.style.display = "block";

        Desktop.style.display = "none";
    } 
});

Ballproject.addEventListener("click", ()=>{
    Allproject.style.display = "none";
    Desktop.style.display = "flex";
    Ballproject.style.display = "none";
})











 // Cleanup the event listener when the component unmounts
 return () => {
    if (Start) {
        Start.removeEventListener("click", handleClick);
    }
    if (Sinin) {
        Sinin.removeEventListener("click", handeldisplay);
    }


};

    }, []); // Add an empty dependency array to run this effect only once
    
    
   







  return (
    <div className='w-screen h-screen bg-zinc-800 flex items-center justify-end relative'>
        <div className='pc w-[8vw] h-[100vh] bg-zinc-800 absolute left-0 flex flex-col items-center justify-between'>
            <div className='w-1/2 h-[4vw] bg-zinc-900 flex items-center justify-center rounded-full m-auto start cursor-pointer' >
            <p className='text-xl cursor-pointer'>on</p>

            </div>
            <div className='w-[1vw] h-[1vw] bg-zinc-900 rounded-full m-auto on' >

            </div>


            <div className='w-1/3 h-[10vw] bg-zinc-900 rounded-xl m-auto overflow-hidden' >
            <div className='w-1/12 h-full bg-zinc-400/35'>

            </div>

            </div>
            <div className='w-1/3 h-[10vw] bg-zinc-900 rounded-xl m-auto overflow-hidden' >
            <div className='w-1/12 h-full bg-zinc-400/35'>

            </div>

            </div>
<div className='w-full h-[14vh] flex flex-col items-center justify-between'>


            <div className='w-[2vw] h-[2vw] bg-zinc-900 rounded-full m-auto flex items-center justify-center' >
                <div className='w-1/3 h-1/3 border border-zinc-200/20 rounded-full'>

                </div>

            </div>
            <div className='w-[2vw] h-[2vw] bg-zinc-900 rounded-full m-auto flex items-center justify-center' >
                <div className='w-1/3 h-1/3 border border-zinc-200/20 rounded-full'>

                </div>

            </div>
            </div>

            <div className='w-[3vw] h-[3vw] bg-zinc-900 rounded-full m-auto' >

            </div>

        </div>
       





        <div className='display w-[92vw] m-auto h-[100vh] bg-zinc-900 absolute '>
           
            <Monitor/>
            <Fdisplay/>
           

        </div>
       
      
    </div>
  )
}

export default Front
