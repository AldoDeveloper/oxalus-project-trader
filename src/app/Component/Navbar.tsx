import { useRouteLoaderData } from "react-router-dom"
import { LoaderPropsAuth } from "../interface/Props";
import BadgesUsers from "./Auth/BadgesUsers";
import { NavLink } from "react-router-dom";
import * as Icons from 'react-icons/bs';
import { Layout } from "../Context/AuthContext";
import React from 'react';

export default function Navbar() {
    const userAuth = useRouteLoaderData('autho') as LoaderPropsAuth;
    const LayoutContext: any = React.useContext(Layout);
    return (
        <>  
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={'/dasboard'}
                        className="navbar-brand text-decoration-none text-success fs-3">
                        Oxalus
                    </NavLink>
                    <div className="list-side-nav" onClick={async () => LayoutContext?.setShow({toggle: !LayoutContext?.show?.toggle})}>
                        {
                            !LayoutContext.show.toggle ? <Icons.BsJustify size={24}/> : <Icons.BsXCircleFill className={'text-danger'} size={24}/>
                        }
                    </div>
                    <div className="collapse navbar-collapse justify-content-end gap-3">
                        {
                            userAuth?.auth && <BadgesUsers usersAuth={userAuth}/>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}