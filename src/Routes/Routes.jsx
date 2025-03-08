import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";


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
        element:<Projects/>
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      
    ]
    
  },
  
]);

export default router;