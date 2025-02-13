import { createBrowserRouter } from 'react-router-dom';
import Home from './../../pages/Home/Home';
import About from './../../pages/About/About';
import Main from './../../Layout/Main/Main';
import Visa from '../../pages/Visa/Visa';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import MyAppointment from '../../pages/Dashboard/MyAppointment/MyAppointment';
import AllUsers from '../../pages/Dashboard/AllUsers/AllUsers';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddService from '../../pages/Dashboard/AddService/AddService';

 export const router =  createBrowserRouter([
        {
            path:"/",
            element:<Main></Main>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>,
                },
                {
                    path:"/about",
                    element:<About></About>,
                },
                {
                    path:"/visa",
                    element:<Visa></Visa>,
                },
                {
                    path:"/login",
                    element:<Login></Login>,
                },
                {
                    path:"/sign-up",
                    element:<SignUp></SignUp>,
                },
            ],
        },
        {
            path:'/dashboard',
            element:<PrivateRoute>
                        <DashboardLayout></DashboardLayout>
                    </PrivateRoute>,   
            children:[
                {
                    path:'/dashboard',
                    element:<MyAppointment></MyAppointment>,
                },
                {
                    path:'/dashboard/all-users',
                    element:<AdminRoute>
                                <AllUsers></AllUsers>  {/*AllUsers AdminRoute er children*/}
                            </AdminRoute>,
                },
                {
                    path:'/dashboard/add-service',
                    element:<AdminRoute>
                                <AddService></AddService>  {/*AllUsers AdminRoute er children*/}
                            </AdminRoute>,
                },
            ],
        },
    ]);

    export default router;