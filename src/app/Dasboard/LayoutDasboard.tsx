import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export function LayoutDasboard(){
    return(
        <>
            <div className="row g-3">
                <div className="col col-lg-2 col-sm-4 col-xl-2" style={{overflowY: 'scroll'}}>
                    <Sidebar/>
                </div>
                <div className="col col-lg-10 col-sm-9 col-xl-10 justify-content-start">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}