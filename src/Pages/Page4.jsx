import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen p-6 bg-white'>
        <div className='h-full w-full relative overflow-hidden bg-black rounded-[30px]'>
            <video className='h-full w-full absolute object-cover' autoPlay muted loop  src="/src/assets/video4.mp4"></video>
            <img  className='h-[43.5rem] absolute' src="/src/assets/G2.png" alt="" />
            <h1 className='font-[anzo6] text-white absolute left-[38%] text-[13.5vw] py-16'>[ MODERN ]</h1>
            <h2 className='font-[anzo5] text-white absolute left-[39%] top-[50%] text-[3.15vh]'>DESIGNED FOR NOW | BUILD FOR FUTURE</h2>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[43%] top-[56%]'>The digital world moves fast - your</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[42%] top-[60%]'>brand should move even faster. True</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[40%] top-[64%]'>innovation isn’t about keeping up; it’s about</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[44%] top-[68%]'>setting the pace. Design that feels</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[42%] top-[72%]'>effortless yet wields powerful influence.</h3>
            <img className='absolute right-[6%] top-[32%] rounded-2xl' src="/src/assets/G1.jpg" alt="" />
            <button className='bg-black border-4 absolute left-[42%] top-[80%] text-base px-32 py-2 hover:bg-[#343a40] font-[anzo5] rounded-full text-white'>THE WORQ</button>
        </div>
    </div>
  )
}

export default Page4