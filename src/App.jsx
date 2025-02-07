import { RouterProvider } from 'react-router-dom';
import './App.css';
import "react-day-picker/style.css";
import router from './Router/Route/Route';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  ) 
}

export default App


// function App() {
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<Layout></Layout>,
//       children:[
//         {
//           path:"/",
//           element:<Home></Home>,
//         },
//         {
//           path:"/about",
//           element:<About></About>
//         },
//         {
//           path:"/sign-up",
//           element:<SignUp></SignUp>
//         },
//         {
//           path:"/login",
//           element: <Login></Login>,
//         },
//       ],
//     },
//   ]);

//   return (
// <div>
//     <RouterProvider router={router}></RouterProvider>;
// </div>
// )}
// export default App
