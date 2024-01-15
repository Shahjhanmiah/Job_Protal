import { createBrowserRouter } from "react-router-dom";

import Home from "../Compontest/Home";
import Main from "./Main.jsx/Main";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
  
        {
          path:'/',
          element:<Home></Home>
          
        },
       


  
      ]
    },
  ]);
export default router  