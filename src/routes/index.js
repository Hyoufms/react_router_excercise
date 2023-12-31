import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";
import { Navigate } from "react-router-dom";


//router table
const routes = [
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/home',
        element:<Home/>,
        children: [
            {
                path:'news',
                element: <News/>
            },
            {
                path:'Message',
                element: <Message/>,
                children: [
                    {
                        //path:'detail/:id/:title/:content',
                        path:'detail',
                        element: <Detail/>
                    }
                ]
            },
        ]
    },
    {
        path:'/',
        element:<Navigate to="/about"/>
    }
]

export default routes