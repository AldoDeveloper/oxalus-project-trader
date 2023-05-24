import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Navigate, useRouteLoaderData } from "react-router-dom";
import { LoaderPropsAuth, StateComponentDasboard } from "../interface/Props";

export default class Dasboard_v1 extends React.Component<any, StateComponentDasboard>{

    public constructor(props: any){
        super(props);
        this.HandleAuthDasboard = this.HandleAuthDasboard.bind(this);
    }

    private HandleAuthDasboard() : JSX.Element{
        const loaderAuth = useRouteLoaderData('autho') as LoaderPropsAuth;
        if(!loaderAuth.auth) return <Navigate to={'/auth/login'}/>
        // console.log(loaderAuth.users.subscription_active)
        // if(loaderAuth.users.subscription_active === undefined) return <Navigate to={'/subscribtion'}/>
        if(loaderAuth.auth){
            return(
                <>
                    <div className="d-flex gap-3">
                        <Sidebar/>
                        <Content/>
                    </div>
                </>
            )
        }
        return<></>
    }

    public render(): React.ReactNode {
        return <this.HandleAuthDasboard/>
    }
}