
import { Outlet, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Navbar from '../app/Component/Navbar';
import { AuthContext, Layout } from '../app/Context/AuthContext';
import React from 'react';

export default function LayoutRoutes() {
    const loader = useRouteLoaderData('autho') as any;
    const [show, setShow] = React.useState({ toogle: false });
    
    return (
        <>
            <AuthContext.Provider value={loader}>
                <Layout.Provider value={{ show, setShow } as any}>
                    <Navbar />
                    <Outlet />
                </Layout.Provider>
            </AuthContext.Provider>
        </>
    )
}