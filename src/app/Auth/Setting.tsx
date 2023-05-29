import { Card, Col, Row, Form, Button, ListGroup } from 'react-bootstrap'
import { SlideAnimate } from '../Animate/AnimateRoutes';
import { AuthContext } from '../Context/AuthContext';
import { dev_api } from '../../config/config';
import React  from 'react';
import SkeltonInfoMember from '../Skeleton/SkeltonInfoMember';

const Setting = () => {
    const autho : any  = React.useContext(AuthContext);
    const [member, setMember] = React.useState<{loading: boolean, member: any, error?: any}>
    ({loading: false, member: {}});
    React.useEffect(() =>{
        setTimeout(async () =>{
            try{
                const memberInfo= await fetch(`${dev_api.API_URL}api/member/info`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type'  : 'application/json',
                        'x-api-key'     : dev_api.API_KEY,
                        'AUTHORIZATION' : 'Bearer ' + autho?.token
                    })
                });
                if(memberInfo.status === 200){
                    const responseMemberJson = await memberInfo.json();
                    setMember({loading: true, member: responseMemberJson?.data})
                }
            }catch(error){
                setMember({loading: true, member: {}, error: error})
            }
        }, 2000);
    }, []);
    console.log(member.member);
    return (
        <>
            <h3 className='mt-3 mb-3'>Dasboard Setting</h3>
            <Row className='row-cols-lg-2 mt-3'>
                <SlideAnimate>
                    <Col>
                        <Card>
                            <Card.Header className='text-center'>
                                <h4>Info Member</h4>
                            </Card.Header>
                            <Card.Body>
                                {!member.loading && <SkeltonInfoMember/>}
                                {
                                    member.loading && 
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='text-success'>{member.member?.country}</ListGroup.Item>
                                        <ListGroup.Item className='text-success'>{member.member?.email}</ListGroup.Item>
                                        <ListGroup.Item className='text-success'>{member.member?.name}</ListGroup.Item>
                                        <ListGroup.Item className='text-success'>{member.member?.member_id}</ListGroup.Item>
                                    </ListGroup>
                                }
                            </Card.Body>
                        </Card>
                        <Card className='mt-4'>
                            <Card.Header className='text-center'>
                                <h4>Push Notification</h4>
                            </Card.Header>
                            <Card.Body className='text-center'>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus reprehenderit laboriosam delectus illum inventore voluptatem.
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                {/* <Form>
                                    <input type="hidden" name='notif_wa' />
                                    <input type="hidden" name='notif_tg' />
                                    <Button type='submit' variant='success' style={{ minWidth: '200px' }}>Push Notif...</Button>
                                </Form> */}
                                 <Button type='submit' variant='success' style={{ minWidth: '200px' }}>Push Notif...</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </SlideAnimate>
                <Col>
                    <SlideAnimate>
                        <Card>
                            <Card.Header className='text-center'>
                                <h4>Change Password</h4>
                            </Card.Header>
                            <Card.Body>
                                <div
                                    className="d-flex justify-content-center align-items-center">
                                    <Form action='/auth/login' method='POST'>
                                        <div className="login">
                                            <div className='mb-4'>
                                                <label className="form-label">Old Password</label>
                                                <input type="passwrod" name='old_password' className='form-control form-control-sm' />
                                            </div>
                                            <div className='mb-3'>
                                                <label className="form-label float-start">New Password</label>
                                                <input type="password" name='new_password' className='form-control form-control-sm' />
                                            </div>
                                            <div className='mb-3'>
                                                <label className="form-label float-start">Confirm Password</label>
                                                <input type="password" name='confirm_password' className='form-control form-control-sm' />
                                            </div>
                                            <button type='submit' className='mt-4 btn btn-outline-theme btn-sm d-block w-100 fw-500 mb-3'>
                                                Reset Password
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </Card.Body>
                        </Card>
                    </SlideAnimate>
                </Col>
            </Row>
        </>
    )
}

export default Setting;