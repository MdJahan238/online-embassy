import React from 'react';
import MainButton from '../../../components/MainButton/MainButton';

const InfoCards = ({card}) => {
    const {name,description,image,bgClass}=card;
    return (
        <div className={`card p-5 w-96 shadow-xl items-center mx-auto ${bgClass}`}>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCards;