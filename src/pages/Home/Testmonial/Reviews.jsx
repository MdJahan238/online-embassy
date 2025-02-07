import React from 'react';
import people1 from '../../../assets/image/people1.webp'
import people2 from '../../../assets/image/people2.jpg'
import people3 from '../../../assets/image/people3.jpg'
import people4 from '../../../assets/image/people4.jpg'
import people5 from '../../../assets/image/people5.jpg'
import quote from '../../../assets/image/quote.png'
import Review from './review';

const Reviews = () => {

    const testmonial =[
        {_id:1,name:'Winson Herry', img:people1,review:'it is a long est-1801,it is a long est-1801,it is a long est-1801,it is a long est-1801,it is a long est-1801',location:'California'},
        {_id:2,name:'John Herry', img:people2,review:'it is a long est-1702,it is a long est-1702,it is a long est-1702,it is a long est-1702,it is a long est-1702',location:'Los Angeles'},
        {_id:3,name:'Kerry Andrew', img:people3,review:'it is a long est-1603,it is a long est-1603,it is a long est-1603,it is a long est-1603,it is a long est-1603',location:'New York'},
        {_id:4,name:'Linz Judo', img:people4,review:'it is a long est-1504,it is a long est-1504,it is a long est-1504,it is a long est-1504,it is a long est-1504',location:'New Jersy'},
        {_id:5,name:'Hopkins John', img:people5,review:'it is a long est-1405,it is a long est-1405,it is a long est-1405,it is a long est-1405,it is a long est-1405',location:'Texas'},
    ]

    return (
        <div className='my-10 px-5 mx-auto'>
           <div className='flex justify-between'>
                <div>
                    <h2 className='text-4xl text-orange-500 font-semibold'>Testmonial</h2>
                    <h4 className='text-2xl'>Peop says about us</h4>
                </div>
                <div>
                <img className='w-20 h-20' src={quote} alt="" /> 
                </div>
           </div>
            <div className=' grid md:grid-cols-3 gap-4'>
            {
            testmonial.slice(0,3).map((singleReview) =>(<Review key={singleReview._id} singleReview={singleReview}></Review>))
           }
            </div>
        </div>
    );
};

export default Reviews;