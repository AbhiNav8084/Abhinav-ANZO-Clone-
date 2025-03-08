import React from 'react'

const Page8 = () => {
  return (
    <div className='h-screen p-6 bg-white'>
        <div className='h-full w-full relative overflow-hidden bg-black rounded-[30px]'>
            <video className='h-full w-full absolute ' autoPlay muted loop  src="/src/assets/robof.mp4"></video>
            <h1 className='font-[anzo6] text-white absolute left-[12%] text-[12vw] '>ICONIC</h1>
            <h1 className='font-[anzo6] text-white absolute left-[12%] text-[12vw] py-40'>BRAND</h1>
            <h2 className='font-[anzo5] text-white absolute left-[10%] top-[65%] text-[3.10vh] uppercase'>Web design | brand identity</h2>
            <h2 className='font-[anzo5] text-white absolute left-[8.5%] top-[69%] text-[3.08vh]'>POSITIONING | CREATIVE DIRECTION</h2>
            <h2 className='font-[anzo5] text-white absolute left-[11%] top-[73%] text-[3.15vh]'>ONGOING BRAND STRATEGY</h2>
            <button className='bg-black border-4 absolute left-[9%] top-[85%] text-base px-24 py-2 hover:bg-[#343a40] font-[anzo5] rounded-full text-white'>REFINE YOUR BRAND</button>
        </div>
    </div>
  )
}

export default Page8