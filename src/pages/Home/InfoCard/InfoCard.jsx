import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/location.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCards from './InfoCards';

const InfoCard = () => {

const cardData = [
    {
        id: 1,
        name : "Opening Hours",
        description:"Open 9:00 am to 4:00 pm",
        image: clock,
        bgClass:"bg-gradient-to-r from-orange-400 via-orange-400 to-red-500",
    },
    {
        id: 2,
        name : "Our Location",
        description:"Gulshan-2, RoadNo-5, House-25",
        image: location,
        bgClass:"bg-gradient-to-r from-orange-400 via-orange-400 to-red-500",
    },
    {
        id: 3,
        name : "contact Us",
        description:"Open 9:00 am to 4:00 pm",
        image: phone,
        bgClass:"bg-gradient-to-r from-orange-400 via-orange-400 to-red-500",
    }
]


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                cardData.map((card) => <InfoCards key={card.id} card={card}></InfoCards>)
            }
          
        </div>
    );
};

export default InfoCard;