import { LoaderPropsAuth } from "../../interface/Props";
import imgs from '../../../assets/man.png';
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

interface PropsProfiles{
    usersAuth: LoaderPropsAuth,
}

export default function BadgesUsers(props: PropsProfiles){
    return(
       <>
            <NavLink to={'#'} className='text-decoration-none text-white d-flex gap-3'>
                <span className="align-self-center">{ props?.usersAuth?.users?.data.email }</span>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: 'transparent', border: 'none', padding: '0px'}}>
                        <img src={imgs} id="dropdown-basic" width={'35px'} className="rounded-circle" alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <NavLink to={'/dasboard/setting'} className={'dropdown-item'}>SETTING</NavLink>
                        <NavLink to={'/logout'} className={'dropdown-item'}>LOGOUT</NavLink>
                        <Dropdown.Divider/>
                        <NavLink to={'/dasboard/subscription'} className={'dropdown-item'}>LOGOUT</NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </NavLink>
       </>
    )
}