import { Col, Row, Card } from 'react-bootstrap';
import SignalActive from './SignalActive';
import SignalExpired from './SignalExpired';
import SignalCutlos from './SignalCutlos';
import SignalProfit from './SignalProfit';

const SignalInfo =  () =>{
    return(
        <>
             <Row className='mt-3 mb-5'>
                <Col xl={6}>
                    <section className='mt-3'>
                        <h4 className='text-success'>SIGNAL ACTIVE</h4>
                        <Card className='mb-2' style={{ backgroundColor: 'transparent' }}>
                            <Card.Body>
                                <SignalActive/>
                            </Card.Body>
                        </Card>
                    </section>
                    <section className='mt-3'>
                        <h4 className='text-info'>SIGNAL PROFIT</h4>
                        <Card className=''>
                            <Card.Body>
                                <SignalProfit/>
                            </Card.Body>
                        </Card>
                    </section>
                </Col>
                <Col xl={6}>
                    <section className='mt-3'>
                        <h4 className='text-warning'>SIGNAL EXPIRED</h4>
                        <Card>
                            <Card.Body>
                                <SignalExpired/>
                            </Card.Body>
                        </Card>
                    </section>
                    <section className='mt-3'>
                        <h4 className='text-danger'>SIGNAL CUTLOS</h4>
                        <Card className=''>
                            <Card.Body>
                                <SignalCutlos/>
                            </Card.Body>
                        </Card>
                    </section>
                </Col>
            </Row>
        </>
    )
}
export default SignalInfo;