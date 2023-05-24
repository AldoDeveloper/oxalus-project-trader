
import { Outlet } from 'react-router-dom';
import Navbar from '../app/Component/Navbar';

export default function LayoutRoutes(){
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}