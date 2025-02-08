import React, { useState } from 'react';
import VisaBanner from './VisaBanner/VisaBanner';
import VisaAvailableAppointments from './VisaAvailableAppointments/VisaAvailableAppointments';

const Visa = () => {
    const [selectedDate, setSelected] = useState(new Date());
    return (
        <div>
            
            <VisaBanner selectedDate={selectedDate} setSelected={setSelected}></VisaBanner>
            <VisaAvailableAppointments selectedDate={selectedDate} ></VisaAvailableAppointments>
            
        </div>
    );
};

export default Visa;