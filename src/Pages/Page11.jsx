import React from 'react'

const Page11 = () => {
  return (
    <div className='h-screen relative p-6 bg-white'>
        <div className='h-full w-full overflow-hidden bg-black rounded-[30px]'>
            <video autoPlay='true' loop muted className='h-full w-full object-cover' src="/src/assets/Moon.mp4"></video>
            <h1 className='font-[anzo6] text-[21vw] text-white absolute uppercase left-16 bottom-32'>STEP INTO THE FUTURE.</h1>
            <button className='bg-black border-4 text-base font-[anzo5] px-20 py-3 absolute left-[39%] bottom-[195px] hover:bg-[#343a40] rounded-full text-white'>CREATE YOUR LEGACY</button>
        </div>
    </div>
  )
}

export default Page11