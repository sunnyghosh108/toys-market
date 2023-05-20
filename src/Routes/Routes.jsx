import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Error from "../Components/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import BookService from "../Components/AllToys/BookService";
import Bookings from "../Components/AllToys/Bookings";






const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
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
          path:'book/:id',
          element:<BookService></BookService>,
          loader:({params})=>fetch('http://localhost:5000/products/${params.id}')
        },
        {
          path:'bookings',
          element:<Bookings></Bookings>
        }
        

      ]
    },
  ]);

  export default router;