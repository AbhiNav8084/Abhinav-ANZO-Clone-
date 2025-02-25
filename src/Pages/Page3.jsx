import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center'>
        <img className='absolute w-[70%] z-20' src="/src/assets/laptop.png" alt="" />
        <video autoPlay="true" loop muted className='absolute h-[33vw] w-[52vw] object-cover mb-8 z-10' src="/src/assets/file.mp4"></video>

        <div className="h-[0.4vh] w-3/5 top-[45%] absolute z-0 bg-gray-500"></div>
        <div className="h-[0.4vh] w-4/5 top-[60%] absolute z-0 bg-gray-600"></div>
        <div className="h-[0.4vh] w-full top-[78%] absolute z-0 bg-gray-700"></div>
    </div>
  )
}

export default Page3