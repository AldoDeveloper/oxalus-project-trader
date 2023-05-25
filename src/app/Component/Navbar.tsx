import { useRouteLoaderData } from "react-router-dom"
import { LoaderPropsAuth } from "../interface/Props";
import BadgesUsers from "./Auth/BadgesUsers";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const userAuth = useRouteLoaderData('autho') as LoaderPropsAuth;
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={'/dasboard'}
                        className="navbar-brand text-decoration-none text-success fs-3">
                        Oxalus
                    </NavLink>
                    <div className="collapse navbar-collapse justify-content-end gap-3">
                        <BadgesUsers usersAuth={userAuth}/>
                    </div>
                </div>
            </nav>
        </>
    )
}