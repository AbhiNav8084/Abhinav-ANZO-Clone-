import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#Banner img',{
      rotate:360,
      duration:5,
      repeat:-1,
      ease:'linear'
    })
  })

  return (
    <div className='absolute left-0 px-16 py-16 flex items-end justify-between bottom-0 w-full'>
        <div >
            <h2 className='text-[1.35vw] font-[anzo5] tracking-tight'>WEB | BRAND IDENTITY</h2>
            <h3 className='text-[1.35vw] font-[anzo4] leading-4 tracking-tight text-[#747474]'>BESPOKE DESIGN</h3>   
        </div>
        <div id='Banner'>
            <img className='mb-6 size-20' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
            <img className='size-20' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bottom