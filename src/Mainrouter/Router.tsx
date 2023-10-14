import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Homescreen from '../Pages/Homescreen'
import Desc from '../Props/Description'
import DescHold from '../Pages/DescHold'
import CardDisplay from '../Pages/CardDisplay'


export const Mainrouter = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Homescreen/>
        },
        {
            path: "/movies/:movies",
            element: <DescHold/>
        }
    ]

},
])