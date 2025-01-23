import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
// import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const page1 = () => {

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)

    const mouseMoving = (e) =>{
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/40);
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10);
        
        tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
    }
  return (
    <div onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='h-screen  p-4 text-white'>
        <div id='page1-in' className='h-full  w-full p-10 rounded-[40px] shadow-xl shadow-gray-300 bg-cover bg-[url(./assets//ANZO.avif)]'>
            <img className='h-20 ml-6' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
            <div id='tiltDiv' ref={tiltRef} className='mt-44 ml-4'>
                <h1 className='text-[4.4vw] leading-[3vw] tracking-tight uppercase font-[anzo1] ml-[5px]'>I AM <span className='text-black'>DARK MODE</span>™</h1>
                <h1 className='text-9xl leading-[8vw] font-[anzo1]'>DESIGNER</h1>        
                <h1 className='text-[4.4vw] leading-[3vw] uppercase font-[anzo1] ml-[5px]'>TO HIRE</h1>            
            </div>
            <Page1Bottom />
        </div>
    </div>
  )
}

export default page1