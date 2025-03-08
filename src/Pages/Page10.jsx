import React from 'react'

const Page10 = () => {
  return (
    <div className='h-screen p-6 bg-white'>
        <div className='h-full w-full relative overflow-hidden bg-black rounded-[30px]'>
            <video className='h-full w-full absolute object-cover' autoPlay muted loop  src="/src/assets/star.mp4"></video>
            <div className='bg-[#060606] border-[15px] rounded-[60px] left-20 top-7 border-white absolute h-[92%] w-[28%] flex items-start justify-center'>
                <video className='h-[14vw] w-[22vw] absolute top-7' muted autoPlay loop src="/src/assets/anim1.mp4"></video>
                <h1 className='font-[anzo6] text-white absolute top-[35%] text-[12vw] '>SHOP</h1>
                <h2 className='font-[anzo5] text-white absolute  top-[70%] text-[3vh] uppercase'>TEMPLATES</h2>
                <h2 className='font-[anzo5] text-white absolute  top-[74%] text-[3vh] uppercase'>ANIMATED ELEMENTS</h2>
                <h2 className='font-[anzo5] text-white absolute  top-[78%] text-[3vh] uppercase'>CUSTOM EFFECT CODES</h2>
                <button className='bg-black border-[5px] absolute  top-[91.5%] text-base px-16 py-3 hover:bg-[#343a40] font-[anzo5] rounded-full text-white'>CHECK LATEST TEMPLATE</button>
            </div>
            <div className='bg-[#060606] border-[15px] rounded-[60px] right-20 top-7 border-white absolute h-[92%] w-[28%] flex items-start justify-center'>
                <video className='h-[14vw] w-[22vw] absolute top-7' muted autoPlay loop src="/src/assets/anim2.mp4"></video>
                <h1 className='font-[anzo6] text-white absolute top-[35%] text-[12vw] '>BLOG</h1>
                <h2 className='font-[anzo5] text-white absolute  top-[70%] text-[3vh] uppercase'>TIPS</h2>
                <h2 className='font-[anzo5] text-white absolute  top-[74%] text-[3vh] uppercase'>WEBINARS</h2>
                <h2 className='font-[anzo5] text-white absolute  top-[78%] text-[3vh] uppercase'>GROUP LESSONS</h2>
                <button className='bg-black border-[5px] absolute  top-[91.5%] text-base px-16 py-3 hover:bg-[#343a40] font-[anzo5] rounded-full text-white'>WATCH LATEST WEBINAR</button>
            </div>
            <video className='absolute scale-75 border-1 rounded-full left-[39%] top-[20%]' autoPlay muted loop src="/src/assets/bubble2.mp4"></video>
        </div>
    </div>
  )
}

export default Page10