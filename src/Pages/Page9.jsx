import React from 'react'

const Page9 = () => {
  return (
    <div className='h-screen p-6 bg-white'>
        <div className='h-full w-full relative overflow-hidden bg-black rounded-[30px]'>
            <video className='h-full w-full absolute ' autoPlay muted loop  src="/src/assets/robo2.mp4"></video>
            <h1 className='font-[anzo6] text-white absolute left-[15%] text-[12vw] '>ELITE</h1>
            <h1 className='font-[anzo6] text-white absolute left-[12%] text-[12vw] py-40'>LEGACY</h1>
            <h2 className='font-[anzo5] text-white absolute left-[16.5%] top-[65%] text-[3vh] uppercase'>Art Direction</h2>
            <h2 className='font-[anzo5] text-white absolute left-[13%] top-[69%] text-[3vh] uppercase'>High-End Web Presence</h2>
            <h2 className='font-[anzo5] text-white absolute left-[11%] top-[73%] text-[3vh] uppercase'>CONTINUES Brand Evolution</h2>
            <button className='bg-black border-4 absolute left-[10.5%] top-[85%] text-base px-24 py-2 hover:bg-[#343a40] font-[anzo5] rounded-full text-white'>SHAPE THE FUTURE</button>
        </div>
    </div>
  )
}

export default Page9