import React from 'react';

const Review = ({singleReview}) => {

    const {name,img,review,location} =singleReview;
    return (
        <div className='card bg-base-100 w-96 shadow-xl '>
            <div className='card-body'>
                <p>{review}</p>
                <div className='card-actions item-center mt-5'>
                    <img className='w-10 h-10 rounded-full border-2 border-orange-500 p-1' src={img} alt="" />
                  <div>
                  <h2 className='card-title'> {name}</h2>
                  <p>{location}</p>
                  </div>
                </div>

            </div>
           
        </div>
    );
};

export default Review;