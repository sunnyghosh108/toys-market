import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Error from "../Components/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";






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
        

      ]
    },
  ]);

  export default router;