import {Col, Row, Card } from 'react-bootstrap';
import CardSkeleton from '../Skeleton/SkeletonCard';
const SignalInfo =  () =>{

    return(
        <>
             <Row className='mt-3 mb-5'>
                <Col xl={6}>
                    <h4 className='text-success'>SIGNAL ACTIVE</h4>
                    <Card className='mb-2' style={{ backgroundColor: 'transparent' }}>
                        <Card.Body>
                            <Row className='row-cols-2 justify-content-center gap-2'>
                                <CardSkeleton card={3} size={11}/>
                            </Row>
                        </Card.Body>
                    </Card>
                    <section className='mt-4'>
                        <h4 className='text-info'> SIGNAL PROFIT</h4>
                        <Card className=''>
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, commodi.
                            </Card.Body>
                        </Card>
                    </section>
                </Col>
                <Col xl={6}>
                    <h4 className='text-warning'>SIGNAL EXPIRED</h4>
                    <Card>
                        <Card.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil nostrum quae deserunt animi quo labore odit blanditiis nam in at sit sint, non soluta doloremque ex enim quas, id aliquam rem porro hic repellat. Ex voluptas nisi totam debitis repellendus numquam commodi ad doloribus? Maiores ullam quaerat minus ipsa!
                        </Card.Body>
                    </Card>
                    <section className='mt-4'>
                        <h4 className='text-danger'> SIGNAL CUTLOS</h4>
                        <Card className=''>
                            <Card.Body>
                                <Row className='row-cols-2 justify-content-center gap-2'>
                                    <CardSkeleton card={2} size={11}/>
                                </Row>
                            </Card.Body>
                        </Card>
                    </section>
                </Col>
            </Row>
        </>
    )
}
export default SignalInfo;