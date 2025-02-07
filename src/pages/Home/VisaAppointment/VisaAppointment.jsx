import React from 'react';
import MainButton from '../../../components/MainButton/MainButton';
import diplomat from '../../../assets/image/Appointment.png'
import visa from '../../../assets/image/thailand_visa.png'
import { Link } from 'react-router-dom';

const VisaAppointment = () => {
    return (
        <div>
        <div  style={{ 
                    backgroundImage: `url(${visa})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    height: "30%",
                    width: "100%",
                    backgroundBlendMode:"multiply",
                    backgroundColor:"#000000b5",
                    }} className="px-5 pt-10 md:pt-20 my-10">
            <div className=" md:flex justify-between items-center">
            <div className='hidden md:w-1/2 md:flex justify-end'>
                    <img
                     src={diplomat}
                     className=" mt-5 md:mt-0 p-2 md:p-0 w-4/6 md:h-[450px]  rounded-lg " />
               </div>
                <div className='md:w-1/2 md:pe-5 pb-10 md:pb-0'>
                <h1 className="text-2xl md:text-2xl font-bold  text-white">Discover the world  accross key areas </h1>
                <p className="py-6 text-justify text-white">
                Make 2025 the year you discover Ireland’s open community – where you can live, learn, create and innovate at the heart of Europe.
                Make 2025 the year you discover Ireland’s open community – where you can live, learn, create and innovate at the heart of Europe.
                </p>
                <Link to="/appointment"><MainButton>Get Appointment</MainButton></Link>
                
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default VisaAppointment;