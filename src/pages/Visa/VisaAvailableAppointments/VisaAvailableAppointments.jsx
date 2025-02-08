import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useState } from 'react';


const VisaAvailableAppointments = ({selectedDate}) => {
    //<----we will use alternate method of data loading (eta diye data view korbe kono insert-update-delete-fetch hobena) and jodi eta component route er sathe mil thake tahole eita use kora hobe---->
// const [appointmentOptions,setAppointmentOptions] = useState([]);
// useEffect(()=>{
//     fetch("VisaAppointments.json")
//     .then((res)=>res.json())
//     .then((data)=>setAppointmentOptions(data)
//     )
// },[])


//<-- data fetch korar pore kew appointment ba kono service instant update er jonne uporer system use na kore tanstack query data fetch system e use korbo-->
//<--(eta diye data view ebong insert-update-delete-fetch hobe) ==> advance method (tanstack query)-->


const [appointments,setApointments] = useState(null);
//console.log(appointments);


//tanstack query
const{data: appointmentOptions,isloading}=useQuery({
    queryKey:["appointmentOptions"],
    queryFn:async()=>{
        const res = await fetch("http://localhost:3000/appointmentOptions");
        const data = await res.json();
        return data;
    },
});
 
if(isloading){
    return "Loading.........."
}

    return (
        <div className='my-10 px-5 mx-auto'>
            <div className='text-center font-semibold mb-3 md:mb-10'>
                <h2 className='text-orange-500'> Visa Appointments</h2>
                <h3 className='text-2xl md:text-3xl'> Visa Appointment on:  
                    {format(selectedDate,"PP")}</h3>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                { appointmentOptions?.map((option) =>(<AppointmentOption key={option._id} appointmentOption={option} setApointments={setApointments}></AppointmentOption>))}
            </div>

            {appointments && (<BookingModal 
            appointments={appointments} 
            selectedDate={selectedDate}
            ></BookingModal> 
        )}
            
        </div>
    );
};

export default VisaAvailableAppointments;
