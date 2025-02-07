import React from 'react';
import education from '../../../assets/image/education.jpeg'
import MainButton from '../../../components/MainButton/MainButton';

const EducationVisa = () => {
    return (
        <div className='md:w-3/4 px-5 md:my-20 mx-auto'>
            <div className="px-5 my-10">
                <div className=" md:flex items-center">
                    <div className=' md:w-1/2 md:flex justify-end'>
                        <img
                         src={education}
                         className=" mt-5 md:mt-0 p-2 md:p-0 rounded-lg " />
                   </div>
                    <div className='md:w-1/2'>
                        <h1 className="text-2xl md:text-5xl font-bold  text-slate-700">Explore the world  with F1 visa!</h1>
                        <p className="py-6 ">
                         Make 2025 the year you discover Ireland’s open community – where you can live, learn, create and innovate at the heart of Europe.
                         Make 2025 the year you discover Ireland’s open community – where you can live, learn, create and innovate at the heart of Europe.
                        </p>
                        <MainButton>See Details F1</MainButton>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default EducationVisa;