import React from 'react';
import bannerImage from '../../../assets/image/BannerLogin.jpg'
import MainButton from '../../../components/MainButton/MainButton';
const Banner = () => {
    return (
        <div>
            <div className="px-5 my-10 w-3/4 mx-auto">
                <div className=" md:flex justify-between items-center">
                    <div className='md:w-1/2'>
                    <h1 className="text-2xl md:text-5xl font-bold  text-slate-700">Discover the world  accross key areas </h1>
                    <p className="py-6 ">
                    Make 2025 the year you discover Ireland’s open community – where you can live, learn, create and innovate at the heart of Europe.
                    Make 2025 the year you discover Ireland’s open community – where you can live, learn, create and innovate at the heart of Europe.
                    </p>
                    <MainButton>Get Started</MainButton>
                    </div>
                    <div className=' md:w-1/2 md:flex justify-end'>
                        <img
                         src={bannerImage}
                         className="bg-slate-300 mt-5 md:mt-0 p-2 md:p-0 w-4/6 md:h-[450px]  rounded-lg " />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;