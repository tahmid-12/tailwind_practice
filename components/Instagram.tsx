import React from 'react';
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import Instagramimg from './Instagramimg';


const Instagram = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-4xl font-bold'>Follow me on Instagram</p>
            <p className='pb-4'>@tahmid</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <Instagramimg socialImg={IgImg1}/>
                <Instagramimg socialImg={IgImg2}/>
                <Instagramimg socialImg={IgImg3}/>
                <Instagramimg socialImg={IgImg4}/>
                <Instagramimg socialImg={IgImg5}/>
                <Instagramimg socialImg={IgImg6}/>
            </div>
        </div>
    )
}

export default Instagram