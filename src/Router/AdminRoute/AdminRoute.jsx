import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';

const AdminRoute = ({children}) => {
 const {user,loading} = useContext(AuthContext);
 const [isAdmin,isAdminLoading]=useAdmin(user?.email); 
 const location =useLocation();    //user define hooks (hooks.jsx)
 
 if (loading || isAdminLoading) {
  return <Loading></Loading>
 }

 if (user && isAdmin) {
  return children;
 }
<Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;