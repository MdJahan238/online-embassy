import React from 'react';
import MainButton from '../../../components/MainButton/MainButton';

const AppointmentOption = ({appointmentOption}) => {
    const {name,slots} =appointmentOption;
    return (
        <div className={"card p-5 w-96 shadow-xl  text-center mx-auto bg-gradient-to-r from-orange-500 via-orange-500 to-red-400"}>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p> 
                    {" "}
                    {slots.length} { slots.length >1?"times" : "Time"} spaces Available </p>
                <MainButton>Get Service</MainButton>
            </div>
        </div>
    );
};

export default AppointmentOption;
