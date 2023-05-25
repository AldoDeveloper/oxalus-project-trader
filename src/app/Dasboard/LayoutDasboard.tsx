import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export function LayoutDasboard(){
    return(
        <>
            <div className="d-flex gap-3">
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    )
}