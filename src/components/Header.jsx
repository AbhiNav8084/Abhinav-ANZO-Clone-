import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 px-10 py-20'>
        <button className='bg-black border-4 text-xl px-8 py-2 hover:bg-[#343a40] rounded-full text-white'>Hire Me</button>
        <i className="ri-layout-grid-2-fill text-4xl text-[#707070] ml-5"></i>
    </div>
  )
}

export default Header