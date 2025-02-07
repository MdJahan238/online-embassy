import React from 'react';
import Touristvisa from '../../../assets/image/Tourist-Visa.jpeg'
import Studentvisa from '../../../assets/image/student-visa.jpg'
import Workvisa from '../../../assets/image/work-visa.jpg'
import Spousevisa from '../../../assets/image/Spouse-Visa.jpg'
import Familyvisa from '../../../assets/image/family-visa.jpg'
import Service from './Service';

const Services = () => {

    const visaServices =[
            {_id:1,name:'Tourist visa', img:Touristvisa,description:'Collect your online visa it is a long est-1801,it is a long est-1801,it is a long est-1801,it is a long est-1801,it is a long est-1801',location:'California'},
            {_id:2,name:'Student visa', img:Studentvisa,description:'Student visa it is a long est-1702,it is a long est-1702,it is a long est-1702,it is a long est-1702,it is a long est-1702',location:'Los Angeles'},
            {_id:3,name:'Work visa',    img:Workvisa,      description:'Work visa it is a long est-1603,it is a long est-1603,it is a long est-1603,it is a long est-1603,it is a long est-1603',location:'New York'},
            {_id:4,name:'Spouse visa', img:Spousevisa,  description:'Spouse visa it is a long est-1504,it is a long est-1504,it is a long est-1504,it is a long est-1504,it is a long est-1504',location:'New Jersy'},
            {_id:5,name:'Family visa', img:Familyvisa,  description:'Family visa it is a long est-1405,it is a long est-1405,it is a long est-1405,it is a long est-1405,it is a long est-1405',location:'Texas'},
        ]

    return (
        <div className='mt-30 px-5 mx-auto'>
            <div className='text-center font-semibold mb-3 md:mb-10'>
                <h2 className='text-orange-500 font-semibold'>Our Services</h2>
                <h3 className='text-2xl md:text-3xl'>The online embassy service we provide</h3>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                {visaServices.slice(0,3).map((serviceData=><Service key={serviceData._id} serviceData={serviceData}></Service>))}
            </div>
            
        </div>
    );
};

export default Services;