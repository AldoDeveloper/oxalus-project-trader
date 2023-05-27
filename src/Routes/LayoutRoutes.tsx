
import { Outlet, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Navbar from '../app/Component/Navbar';
import { AuthContext } from '../app/Context/AuthContext';

export default function LayoutRoutes(){
    const loader = useRouteLoaderData('autho') as any;
    return(
        <>
           <AuthContext.Provider value={loader}>
                <Navbar/>
                <Outlet/>
           </AuthContext.Provider>
        </>
    )
}