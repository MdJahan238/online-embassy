import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button } from "react-day-picker";
import Loading from './../../Shared/Loading/Loading';
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users, isloading ,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      return data;
    },
  });



  const handleMakeAdmin = (id)=>{
    //console.log("admin",id);
    fetch(`http://localhost:3000/users/admin/${id}`,{
      method:"PUT",
    })
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(data);
      if(data.modifiedCount>0){
        toast.success("Make Admin Successful!");
        refetch();
      }
    })
  }


  const handleDeleteUser = (user) => {
    //console.log(user.name);
   const agree = window.confirm('Do you want to delete this user?')
    if (agree) {
      console.log("start"); 
    }
  };

  if (isloading){
    return<Loading></Loading>
  }

  return (
    <div>
      <h1 className="text-2xl">All Users in Dashboard {users?.length}</h1>
      <div className="overflow-x-auto bg-slate-200">
        <table className="table">
          {/* head */}
          <thead className="bg-indigo-900 text-white font-semibold">
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>

          {/* table body  */}
          <tbody>
            {users?.map((user,idx) => (
              <tr className="border-b-orange-600" key={user._id}>
                <th>{idx+1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role !=='Admin'?(<button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-outline btn-info">
                    Make Admin
                  </button>):("Already Admin"
                  )}
                </td>

                <td>
                  {
                    user?.role !=='Admin' && (<button onClick={()=>handleDeleteUser(user)} className="btn btn-outline btn-error">Delete</button>
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

export default AllUsers;
