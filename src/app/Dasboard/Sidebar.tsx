import React from 'react';
import { Button, Toast, ToastContainer, ToastHeader } from 'react-bootstrap';
import * as Icons from 'react-icons/bs';
import { Form, Link, NavLink } from 'react-router-dom';
import imgs from '../../assets/man.png';
import { AuthContext } from '../Context/AuthContext';

export default class Sidebar extends React.Component<any, {toogle: boolean}> {

    public constructor(props: any) {
        super(props);
        this.state  = { toogle: false };
        this.Toast  = this.Toast.bind(this);
    }

    protected Logout() {
        this.setState({toogle: !this.state.toogle});
    }

    protected Toast() : JSX.Element{
        const auth : any = this.context;
        return(
            <ToastContainer position='top-start' className='p-3'>
                <Toast onClose={() => this.setState({toogle: false})} show={this.state.toogle} delay={5000} autohide>
                    <ToastHeader className='gap-2'>
                        <img src={imgs} width={50} alt="" />
                        <strong className="me-auto"> {auth?.users?.data?.name}</strong>
                    </ToastHeader>
                    <Toast.Body className='text-center'>
                        <p>Are you sure you want to logout?</p>
                        <Form action='/logout' method='POST'>
                            <input type="hidden" name='eamil' value={auth?.users?.data?.email} />
                            <Button type={'submit'} variant='success' className='btn-sm'>Logout</Button>
                        </Form>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        )
    }

    render(): React.ReactNode {
        return (
            <>
                <this.Toast/>
                <div className="sidebar">
                    <div className="container mt-3">
                        <div className="menu">
                            <div className="menu-header">Navigation</div>
                            <div className="menu-item">
                                <Link to={'/dasboard'} className={"menu-link"}>
                                    <span><Icons.BsCpu size={"17px"} /></span>
                                    <span>Dasboard</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/dasboard/subscription'} className='menu-link'>
                                    <span><Icons.BsBarChart size={"17px"} /></span>
                                    <span>Subscribtion</span>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/dasboard/setting'} className='menu-link'>
                                    <span><Icons.BsMailbox size={"17px"} /></span>
                                    <span>Setting</span>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/dasboard/find/signal'} className='menu-link'>
                                    <span><Icons.BsSignal size={"17px"} /></span>
                                    <span>Signal</span>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <a type='button' href='#' onClick={async () => this.setState({toogle: true})} className='menu-link'>
                                    <span><Icons.BsArrowBarLeft size={"17px"} /></span>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Sidebar.contextType = AuthContext;