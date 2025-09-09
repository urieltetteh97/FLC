import React from 'react'
import soulsImage from '../assets/souls.webp'

const Salvation = () => {
  return (
    <section className='relative min-h-screen bg-black py-20 overflow-hidden '>
    <div className='absolute inset-0'>
        <img src={soulsImage} alt="" className='w-full h-full object-cover object-center opacity-75 ' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90'></div>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay'></div>
    </div>
    </section>
  )
}

export default Salvation