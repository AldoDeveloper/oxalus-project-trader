import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutRoutes from './LayoutRoutes';
import { Logins } from '../app/Auth/Login';
import ErrorAuth from '../app/Error/ErrorAuth';
import Register from '../app/Auth/Register';
import ResetPassword from '../app/Auth/ResetPassword';
import { ActionLogin, ActionLogout, ActionRegister } from '../app/Action/Index';
import Dasboard_v1 from '../app/Dasboard/Dasboard_v1';
import { LoaderAuth } from '../app/Loader/indexLoader';
import Profile from '../app/Component/Auth/Profile';
import { LayoutDasboard } from '../app/Dasboard/LayoutDasboard';
import Subscription from '../app/Auth/Subscription';
import { getListSubscribtion } from '../app/Api/ApiResource';
import PaymentIntruction from '../app/Auth/PaymentIntruction';
import FindSignal from '../app/Auth/FindSignal';
import Setting from '../app/Auth/Setting';
import ElementIndex from './ElementIndex';

const Routerd  = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoutes/>,
        id: 'autho',
        loader: LoaderAuth,
        errorElement: <ErrorAuth/>,
        children:[
            {
                index: true,
                element: <ElementIndex/>
            },
            {
                path: 'auth',
                errorElement: <h1>Errors...</h1>,
                children: [
                    {
                        index: true,
                        element: <ElementIndex/>
                    },
                    {
                        path: 'login',
                        action: ActionLogin,
                        element: <Logins/>,
                        errorElement: <ErrorAuth/>
                    },
                    {
                        path: 'register',
                        action: ActionRegister,
                        element: <Register/>,
                        errorElement: <ErrorAuth/>
                    },
                    {
                        path: 'reset-password',
                        element: <ResetPassword/>,
                        errorElement: <ErrorAuth/>
                    }
                ]
            },
            {
                path: 'dasboard',
                element: <LayoutDasboard/>,
                errorElement: <ErrorAuth/>,
                children:[
                    {
                        index: true,
                        element: <Dasboard_v1/>
                    },
                    {
                        path: 'profile',
                        element: <Profile/>,
                        errorElement: <ErrorAuth/>
                    },
                    {
                        path: 'subscription',
                        id: 'list_sub',
                        loader: getListSubscribtion,
                        element: <Subscription/>
                    },
                    {
                        path: 'setting',
                        element: <Setting/>,
                        errorElement: <ErrorAuth/>
                    },
                    {
                        path: 'find/signal',
                        element: <FindSignal/>,
                        errorElement: <ErrorAuth/>
                    },
                    {
                        path: 'payment-inturction',
                        element: <PaymentIntruction/>,
                        errorElement: <ErrorAuth/>
                    }
                ]
            },
        ]
    },
    {
        path: 'logout',
        action: ActionLogout,
    }
]);

export default function RoutesActivation(){
    return <RouterProvider router={Routerd}/>
}