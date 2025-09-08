import React from 'react'
import flmBackground from '../assets/FLM-C91fTY8c.webp'
import flmLogo from '../assets/FLM-C91fTY8c.webp'

const FLMusic = () => {
  return (
<section className='relative min-h-screen bg-black py-20 overflow-hidden'>
    <div className="absolute inset-0">
        <img src={flmBackground} alt="" className='w-full h-full object-cover object-center opacity-75' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90'></div>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay'></div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20'></div>
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='text-center md:text-left space-y-10 animate-on-scroll transition-all duration-1000 opacity-100 translate-y-0'>
                <div className="space-y-6">
                    <img src={flmLogo} alt="" className='h-24 md:h-32 lg:h-40 w-auto mb-8 mx-auto md:mx-0 filter drop-shadow-2xl' />
                    <div className='h-1.5 w-32 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-full md:mx-0 mx-auto'></div>
                </div>
                <p className='text-2xl md:text-3xl text-white/90 leading-relaxed font-light max-w-xl'>
                Experience worship, like never before. Stream our music on any of the platforms below.</p>
                <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8'>
                    <div className='group crsor-pointer'></div>
            </div>
        </div>
    </div>
    </div>
</section>
  )
}

export default FLMusic