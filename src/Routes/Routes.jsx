import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import About from "../pages/About/About";

import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      
    ]
    
  },
  
]);

export default router;