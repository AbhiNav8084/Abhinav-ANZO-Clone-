import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen  p-6 bg-white'>
        <div className='h-full w-full relative overflow-hidden bg-black rounded-[30px]'>
            <img className='h-full w-full object-cover absolute ' src="/src/assets/MINIMAL.avif"></img>
            <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.2)_10%,rgba(1,0.9,1,1)_100%)]"></div>
            <h1 className='font-[anzo6] text-white absolute left-[7%] text-[12vw] py-12'>[ MINIMAL ]</h1>
            <h2 className='font-[anzo5] text-white absolute left-[10.5%] top-[45%] text-[3.15vh]'>EFFORTLESS | BOLD | ICONIC</h2>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[8%] top-[52%]'>Minimalism isn’t emptiness - it’s precision.</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[8.2%] top-[55.5%]'>Every line, every space, every interaction</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[9%] top-[59%]'>is intentional. The brands that lead the</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[10%] top-[62.5%]'>world aren’t cluttered with excess -</h3>
            <h3 className='text-xl text-[#9b9b9b] absolute font-[anzo5] left-[9%] top-[66%]'>they radiate confidence through clarity.</h3>
            <button className='bg-black border-4 text-base font-[anzo5] px-28 py-2 absolute left-[9.5%] bottom-[115px] hover:bg-[#343a40] rounded-full text-white'>BRAND BOOK</button>
            <img className='absolute h-[40vw] -right-8 top-[30%]' src="/src/assets/nokia.png" alt="" />
        </div>
    </div>
  )
}

export default Page6