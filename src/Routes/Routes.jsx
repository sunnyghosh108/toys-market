import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Error from "../Components/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import AddToys from "../Components/AllToys/AddToys";
import Bookings from "../Components/AllToys/Bookings";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../Components/AllToys/UpdateToys";
//import AllToys from "../Components/AllToys/AllToys";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
           
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'blogs',
          element:<Blog></Blog>
        },
        {
          path:'addtoys',
          element:<AddToys></AddToys>
        },
        {
          path:'bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        },
        {
          path:'updateToys/:id',
          element:<UpdateToys></UpdateToys>,
          loader:({params})=> fetch(`https://toys-marketplace-server-one.vercel.app/products/${params.id}`)
        },
        // {
        //   path:'alltoys',
        //   element:<AllToys></AllToys>
        // }
        
        

      ]
    },
  ]);

  export default router;