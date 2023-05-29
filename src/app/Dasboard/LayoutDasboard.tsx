import { Navigate, Outlet, useRouteLoaderData } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { LoaderPropsAuth } from "../interface/Props";

export function LayoutDasboard(){
    const authoCheck = useRouteLoaderData('autho') as LoaderPropsAuth;
    
    if(!authoCheck.auth) return <Navigate to={'/auth/login'}/>

    return(
        <>
           <Container fluid>
                <Row>
                    <Col xs={2} lg={2} md={2} className="res">      
                        <Sidebar />
                    </Col>
                    <Col xs={10} lg={10} md={10}>
                         <Outlet/>
                    </Col> 
                </Row>
            </Container>
        </>
    )
}