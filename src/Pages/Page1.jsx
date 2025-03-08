import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TiltText from '../components/TiltText'

const page1 = () => {

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)

    const mouseMoving = (e) =>{
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/4)
        
    }

    useGSAP(function(){
        gsap.to(tiltRef.current,{
            transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration:5,
            ease:'power4.out'
        })
    },[xVal,yVal])


  return (
    <div onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='h-screen  p-4 text-white'>
        <div id='page1-in' className='h-full  w-full p-10 rounded-[40px] shadow-xl shadow-gray-300 bg-cover bg-[url(./assets//ANZO.avif)]'>
            <img className='h-20 ml-6 fixed' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
            <TiltText ab={tiltRef} />
            <Page1Bottom />
        </div>
    </div>
  )
}

export default page1