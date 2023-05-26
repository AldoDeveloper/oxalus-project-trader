import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export function LayoutDasboard(){
    
    return(
        <>
            <div className="container-fluid">
                <div className="row g-3">
                    <div className="col col-lg-2 col-sm-4" style={{overflowY: 'scroll'}}>
                        <Sidebar/>
                    </div>
                    <div className="col col-lg-10 col-sm-9 justify-content-start"
                     style={{overflowY: 'scroll' }}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}