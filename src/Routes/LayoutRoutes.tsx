
import { Outlet, useRouteLoaderData } from 'react-router-dom';
import Navbar from '../app/Component/Navbar';
import { AuthContext, Layout } from '../app/Context/AuthContext';
import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

export default function LayoutRoutes() {
    const loader = useRouteLoaderData('autho') as any;
    const [show, setShow] = React.useState({ toogle: false });

    return (
        <>
            <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                minBreakpoint="xxs">
                <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
                    <AuthContext.Provider value={loader}>
                        <Layout.Provider value={{ show, setShow } as any}>
                            <Navbar />
                            <Outlet />
                        </Layout.Provider>
                    </AuthContext.Provider>
                </SkeletonTheme>
            </ThemeProvider>
            <ToastContainer/>
        </>
    )
}