import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
  const {user} =useContext(AuthContext)
  const { data: bookings, isloading ,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/bookings?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isloading){
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className='text-2xl'>My Appointments </h1>
      <div className="overflow-x-auto bg-slate-200">
        <table className="table">
          {/* head */}
          <thead className="bg-indigo-900 text-white font-semibold">
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Booking Cancel</th>
            </tr>
          </thead>

          {/* table body  */}
          <tbody>
            {bookings?.map((booking,idx) => (
              <tr className="border-b-orange-600" key={user._id}>
                <th>{idx+1}</th>
                <td>{booking?.candidate}</td>
                <td>{booking?.serviceName}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  {
                    user?.role !=='Admin' && (<button onClick={()=>handleDeleteUser(user)} className="btn btn-outline btn-error">Cancel Booking </button>
                  )}
                </td>
              </tr>
           ))};
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;