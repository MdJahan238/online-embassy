import React from 'react';
import MainButton from '../../../components/MainButton/MainButton';
import { Link } from 'react-router-dom';

const Service = ({serviceData}) => {
    const {name,description,img} =serviceData;
    return (
        <div className={"card p-5 w-96 shadow-xl  text-center mx-auto bg-gradient-to-r from-orange-400 via-orange-400 to-red-500"}>
            <figure>
                <img className='h-[200px] rounded-sm ' src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p>{description}</p>
                <MainButton> <Link to='/visa'>See Details</Link></MainButton>
            </div>
        </div>
    );
};

export default Service;