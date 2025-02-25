import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.ab} className='mt-44 ml-4'>
        <h1 className='text-[4.4vw] leading-[3vw] tracking-tight uppercase font-[anzo1] ml-[5px]'>I AM <span className='text-black'>DARK MODE</span>™</h1>
        <h1 className='text-9xl leading-[8vw] font-[anzo1]'>DESIGNER</h1>        
        <h1 className='text-[4.4vw] leading-[3vw] uppercase font-[anzo1] ml-[5px]'>TO HIRE</h1>            
    </div>
  )
}

export default TiltText
