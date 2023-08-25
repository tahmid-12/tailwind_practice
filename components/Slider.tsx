"use client";
import React, { useState } from 'react';
import { SliderProps } from '@/types';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ sliders }: SliderProps) => {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === sliders.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? sliders.length - 1 : current - 1);
    };

    if (!Array.isArray(sliders) || sliders.length < 0) {
        return null;
    }

    return (
        <div id="gallery" className='max-w-[1240px] mx-auto'>
            <h2 className='text-2xl font-bold text-center p-4'>Gallery</h2>
            <div className='relative flex justify-center p-4'>
                {
                    sliders.map((slide, index) => {
                        return (
                            <div key={index}
                                className={
                                    index === current
                                        ? 'opacity-[1] ease-in duration-100'
                                        : 'opacity-0'
                                }
                            >

                                <FaArrowCircleLeft
                                    onClick={prevSlide}
                                    className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                    size={50}
                                />
                                {index === current && (
                                    <Image
                                        src={(slide as any).image}
                                        alt='/'
                                        width='1440'
                                        height='600'
                                        objectFit='cover'
                                    />
                                )}
                                <FaArrowCircleRight
                                    onClick={nextSlide}
                                    className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                    size={50}
                                />
                            </div>

                        );
                    })
                }
            </div>
        </div>
    )
}

export default Slider