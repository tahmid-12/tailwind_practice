import React from 'react';
import { HeroProps } from '@/types';

const Hero = ({heading, message}: HeroProps) => {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70' />
            <div className='p-5 text-white z-[2]'>
                <h2 className='text-5xl text-bold'>{heading}</h2>
                <p className='py-3 text-xl'>{message}</p>
                <button className='px-8 py-2 border'>Contact</button>
            </div>
        </div>
    )
}

export default Hero