import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({setApointments,appointments,selectedDate,refetch}) => {
  //console.log(appointments); //appoints come from visaAvailableAppointments components

  const {user} =useContext(AuthContext);
  const {name,slots} =appointments;
  const date =format(selectedDate,"PP");

  const handleBooking=(event)=>{
    event.preventDefault();
    const form = event.target;
    const slot =form.slot.value;
    const candidateName =form.name.value;
    const email =form.email.value;
    const phone =form.phone.value;
    const booking = {
      appointmentDate:date,
      candidate:candidateName,
      serviceName:name,
      slot:slot,
      email:email,
      phone:phone,
    }
   // console.log(booking);



fetch("http://localhost:3000/bookings",{
  method:"POST",
  headers:{
    "content-type":"application/json",
  },
  body: JSON.stringify(booking),
})
.then((res)=>res.json())
.then((data)=>{
  //console.log(data);
  if(data.acknowledged){
    //alert("User Created Successfully Done"); toast use as alternate alert
    toast.success('Booking Confirmed!');
    refetch();
    setApointments(null);
  }
  else {
    toast.error(data.message)
  }
});
};
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{name}</h3>
            <label htmlFor="booking-modal" className="btn rounded-full ">
              X
            </label>
          </div>
          <form onSubmit={handleBooking}> 
          <input
            type="text"
            disabled
            value={date}
            placeholder="Date"
            className="input input-primary w-full mt-5"
            readOnly
          />
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Services</legend>
            <select defaultValue="Pick a browser" className="select">
              <option disabled={true}>---Select----</option>
              <option>Passport</option>
              <option>Study</option>
              <option>Tourist</option>
            </select>
            <span className="fieldset-label">Optional</span>
          </fieldset>
          
            <select name="slot" className="select select-borderd w-full mt-4">

             {
              slots?.map((slot,i)=>(
                <option key={i} value={slot}>{slot}</option>
              ))}
            </select>

          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            disabled
            placeholder="Name"
            className="input input-primary w-full mt-5"
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            disabled
            placeholder="Email:example@gmail.com"
            className="input input-primary w-full mt-5"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone No"
            className="input input-primary w-full mt-5"
          />
          <input
          type="submit"
          value="Booking Now"
          className="btn btn-outline bg-amber-600 w-full mt-5"
          />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
