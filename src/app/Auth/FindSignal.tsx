import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { dev_api } from '../../config/config';
import * as Icons from 'react-icons/bs';
import SkeltonFind from '../Skeleton/SkeltonFind';
import { SlideAnimate } from '../Animate/AnimateRoutes';
import History from '../Dasboard/HistoryTrade';
import SignalToday from './SignalToday';

const FindSignal = () => {
    const location = useLocation();
    const [find, setFind] = React.useState<{ loading: boolean, data: any }>({ loading: false, data: {} });
    const context: any = React.useContext(AuthContext);
    if (location.state === null) return <Navigate to={'/dasboard'} state={{ find_signal: true }} />

    React.useEffect(() => {
        setTimeout(async () => {
            try {
                const signal = await fetch(`${dev_api.API_URL}api/signal/ids/${location.state.id}`, {
                    method: "GET",
                    headers: new Headers({
                        'Content-type': 'applcation/json',
                        'x-api-key': dev_api.API_KEY,
                        'AUTHORIZATION': 'Bearer ' + context?.token as any,
                    })
                });
                if (signal.status === 200) {
                    const responseData = await signal.json();
                    setFind({ loading: true, data: responseData.data })
                }
            }
            catch (error) { }
        }, 2000)
    }, []);

    return (
        <>
            <Row className='mt-3'>
                <Col lg={5} className='mt-3'>
                    <h3 className='mb-3'>Signal Details</h3>
                    {!find.loading && <SkeltonFind />}
                    {
                        find.loading &&
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 align-self-center">{find?.data?.pair}</h5>
                                        <div>
                                            {
                                                find?.data?.signals_type === 'buy' ?
                                                    <Icons.BsFillArrowUpCircleFill size={'30px'}   className="text-success" /> :
                                                    <Icons.BsFillArrowDownCircleFill size={'30px'} className="text-warning" />
                                            }
                                        </div>
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                    {find?.data?.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <p className='float-start'>Entry Price</p>
                                    <p className='float-end text-success'>{find?.data?.entry_price}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className='float-start'>Take Profit</p>
                                    <p className='float-end text-success'>{find?.data?.take_profit}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className='float-start'>Stop Loss</p>
                                    <p className='float-end text-success'>{find?.data?.stop_loss}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className='float-start'>Type</p>
                                    <p className='float-end text-success'>{find?.data?.users_type?.toLocaleUpperCase()}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className='float-start'>Result</p>
                                    <p className='float-end text-success'>{find?.data?.result?.toLocaleUpperCase()}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    }
                </Col>
                <Col className='mt-3'>
                    <SignalToday />
                </Col>
            </Row>
            <SlideAnimate>
                <section className='mt-3'>
                    <h4>History Trade</h4>
                    <History />
                </section>
            </SlideAnimate>
        </>
    )
}
export default FindSignal;