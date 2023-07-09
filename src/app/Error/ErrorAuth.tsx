import { NavLink } from "react-router-dom";
export default function ErrorAuth(){
    
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
            <div className="error-page">
                <h1>404</h1>
                <h2 className="text-center">
                    NOT FOUND
                </h2>
                <div className="text-center">
                    <NavLink to={'/auth/login'} className={'text-decoration-none'}>To Login ?</NavLink>
                </div>
            </div>
        </div>
    )
}