import { useRouteLoaderData } from "react-router-dom"
import { LoaderPropsAuth } from "../interface/Props";
import BadgesUsers from "./Auth/BadgesUsers";
import { NavLink } from "react-router-dom";
import * as Icons from 'react-icons/bs';
import { motion } from "framer-motion";
import { useState } from "react";

const animateSidenav = {
    show:{
        opacity: 1,
        width: '150px'
    },
    hidde:{
        opacity: 0,
        width: '0px'
    }
}

export default function Navbar() {
    const userAuth = useRouteLoaderData('autho') as LoaderPropsAuth;
    const [show, hidde] = useState(false);
    return (
        <>  
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={'/dasboard'}
                        className="navbar-brand text-decoration-none text-success fs-3">
                        Oxalus
                    </NavLink>
                    <div className="list-side-nav">
                        <Icons.BsJustify size={24}/>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end gap-3">
                        <BadgesUsers usersAuth={userAuth}/>
                    </div>
                </div>
            </nav>
        </>
    )
}