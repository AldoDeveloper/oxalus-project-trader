import { Navigate, Outlet, useRouteLoaderData } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { LoaderPropsAuth } from "../interface/Props";
import { motion } from "framer-motion";

export function LayoutDasboard() {
    const authoCheck = useRouteLoaderData('autho') as LoaderPropsAuth;
    if (!authoCheck.auth) return <Navigate to={'/auth/login'} />

    return (
        <>
            <Row className="position-relative">
                <motion.div className="mobile-sidenav w-50">
                    kansfknasifniaf
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