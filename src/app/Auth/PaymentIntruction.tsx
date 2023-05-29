import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import logoTrade from '../../assets/usdt-bep20.png';
import * as Icons from 'react-icons/bs';
import * as aws from 'react-icons/fa';
import QRCode from 'react-qr-code';
import { useLocation, Location, Navigate } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

interface StateFromPayment{
    copy: boolean,
}

export default class PaymentIntruction extends React.Component<any, StateFromPayment>{
    public constructor(props: any){
        super(props);
        this.state = {copy : false};
        this.RenderComponent = this.RenderComponent.bind(this);
        this.HandleRedirectComponent  = this.HandleRedirectComponent.bind(this);
    }
    public componentDidMount(): void {}

    protected HandleRedirectComponent() : JSX.Element{
        const locations : Location = useLocation();
        console.log(locations.state.status)
        if(locations.state === null) return <Navigate to={'/dasboard'}/>
        return <this.RenderComponent state={locations.state}/>
    }

    protected RenderComponent(props: {state: any}) : JSX.Element{
        return (
            <Row className='justify-content-center mt-3 text-center'>
                <Col lg xl xxl sm md>
                    <h2>Transfer Payment Intruction</h2>
                    <img src={logoTrade} width={'180px'} className='rounded-circle d-block mx-auto' alt="" />
                    <span>Amount Transfers + Fee</span>
                    <h1>{props.state.status.data.amount.toString().substring(0, 5)} USDT</h1>
                    <p className='text-center text-warning'><Icons.BsExclamationDiamondFill/> Please Make Transfer According to the Nominal stated</p>
                    <div style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={props.state?.data.data.payment_processor}
                            viewBox={`0 0 256 256`}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Card style={{ width: 'auto' }} className='mt-3 mb-3'>
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </Card.Body>
                        </Card>
                    </div>
                    <p>Transfer Address USDT BEP-20</p>
                     {
                        this.state.copy ? <span className='text-danger'>Copied</span> : ''
                     }
                    <div className='d-flex justify-content-center mb-3 gap-1'>
                        <div className='border border-1 rounded p-2'>
                            {props.state?.data.data.payment_processor}
                        </div>
                        <div className='border border-1 rounded p-1 align-self-center'>
                            <CopyToClipboard text={props.state?.data.data.payment_processor}
                             onCopy={async() => this.setState({copy: true})}>
                                <Button variant='success' size='sm'><aws.FaCopy/></Button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
    public render(): React.ReactNode {
        return  <this.HandleRedirectComponent/>
    }
}