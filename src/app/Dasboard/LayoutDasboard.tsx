import { Navigate, Outlet, useRouteLoaderData, Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { LoaderPropsAuth } from "../interface/Props";
import { motion } from "framer-motion";
import { Layout } from "../Context/AuthContext";
import React from "react";
import * as Icons from 'react-icons/bs';

const AnimateSideControl = {
    show: {
        opacity: 1,
        position: 'fixed',
        width: '5rem',
    },
    hidde: {
        opacity: 0,
        width: '0rem',
    }
}

export function LayoutDasboard() {
    const authoCheck = useRouteLoaderData('autho') as LoaderPropsAuth;
    if (!authoCheck.auth) return <Navigate to={'/auth/login'} />
    const LayoutContext: any = React.useContext(Layout);
    return (
        <>
            <Row className="position-relative">
                <motion.div transition={{ duration: 0.4 }} variants={AnimateSideControl as any}
                    initial={'hidde'}
                    animate={LayoutContext.show.toggle ? 'show' : 'hidde'}
                    className="mobile-sidenav">
                    <div className="d-flex justify-content-center">
                        <div className="side-mobile">
                            <NavLink to={'/dasboard'} className={'menu-link'}>
                                <li><Icons.BsCpu size={"19px"} /></li>
                            </NavLink>
                            <NavLink to={'/dasboard/subscription'}>
                                <li><Icons.BsBarChart size={"19px"}/></li>
                            </NavLink>
                            <NavLink to={'/dasboard/setting'}>
                                <li><Icons.BsMailbox size={"19px"} /></li>
                            </NavLink>
                            <NavLink to={'/dasboard/find/signal'}>
                                <li><Icons.BsSignal size={"19px"} /></li>                             
                            </NavLink>
                            <NavLink to={'#'}>
                                <li><Icons.BsArrowBarLeft size={"19px"} /></li>
                            </NavLink>
                        </div>
                    </div>
                </motion.div>
                <Col xs={2} lg={2} md={2} className="res">
                    <Sidebar />
                </Col>
                <Col xs={10} lg={10} md={10}>
                    <Container fluid>
                        <Outlet />
                    </Container>
                </Col>
            </Row>
        </>
    )
}