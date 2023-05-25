import { LoaderPropsAuth } from "../../interface/Props";
import imgs from '../../../assets/man.png';
import { NavLink } from "react-router-dom";

interface PropsProfiles{
    usersAuth: LoaderPropsAuth,
}

export default function BadgesUsers(props: PropsProfiles){
    return(
       <>
            <NavLink to={'/dasboard/profile'} className='text-decoration-none text-white d-flex gap-3'>
                <span className="align-self-center">{ props?.usersAuth?.users?.data.email }</span>
                <img src={imgs} width={'35px'} className="rounded-circle" alt="" />
            </NavLink>
       </>
    )
}