import { format } from "date-fns";
import React from "react";

const BookingModal = ({appointments,selectedDate}) => {
  //console.log(appointments); //appoints come from visaAvailableAppointments components
  const {name} =appointments;
  const date =format(selectedDate,"PP");

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

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Appointment Slot</legend>
            <select defaultValue="Pick a browser" className="select">
              <option disabled={true}>---Select----</option>
              <option>Slot1</option>
              <option>Slot2</option>
              <option>Slot3</option>
            </select>
            <span className="fieldset-label">Optional</span>
          </fieldset>
          <input
            type="name"
            placeholder="Name"
            className="input input-primary w-full mt-5"
          />
          <input
            type="email"
            placeholder="Email:example@gmail.com"
            className="input input-primary w-full mt-5"
          />
          <input
            type="number"
            placeholder="Phone No"
            className="input input-primary w-full mt-5"
          />
          <input
          type="submit"
          value="Booking Now"
          className="btn btn-outline bg-amber-600 w-full mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
