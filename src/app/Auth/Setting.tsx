import { Card, Col, Row, Form, Button, ListGroup } from 'react-bootstrap'
import { SlideAnimate } from '../Animate/AnimateRoutes';
import { AuthContext } from '../Context/AuthContext';
import { dev_api } from '../../config/config';
import React from 'react';
import SkeltonInfoMember from '../Skeleton/SkeltonInfoMember';
import { toast } from 'react-toastify';

const Setting = () => {
    const autho: any = React.useContext(AuthContext);
    const [member, setMember] = React.useState<{ loading: boolean, member: any, error?: any }>
        ({ loading: false, member: {} });
    const [btn, setBtn] = React.useState<{ loading: boolean }>({ loading: false });
    const [changesPass, setChangesPass] = React.useState<{ loading?: boolean, error?: any }>({ loading: false, error: null });
    const [errors, setErrors] =React.useState<{error: any}>({error: null});

    React.useEffect(() => {
        setTimeout(async () => {
            try {
                const memberInfo = await fetch(`${dev_api.API_URL}api/member/info`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'x-api-key': dev_api.API_KEY,
                        'AUTHORIZATION': 'Bearer ' + autho?.token
                    })
                });
                if (memberInfo.status === 200) {
                    const responseMemberJson = await memberInfo.json();
                    setMember({ loading: true, member: responseMemberJson?.data })
                }
            } catch (error) {
                setMember({ loading: true, member: {}, error: error })
            }
        }, 2000);
    }, []);

    const HandleSubmitChangesPassword = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const bodysPost = Object.fromEntries(formData.entries());
        async function ResponsesChangesPassword() {
            const signalActive = await fetch(`${dev_api.API_URL}api/member/changepassword`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-api-key': dev_api.API_KEY,
                    'AUTHORIZATION': 'Bearer ' + autho?.token
                }),
                body: JSON.stringify(bodysPost),
                signal: AbortSignal.timeout(15000)
            });
            return signalActive;
        }
        const responses = await toast.promise(ResponsesChangesPassword(), {
            pending: {
                render() { return 'Loading Push Notification' },
                theme: 'dark'
            },
            error: {
                render() { return 'There is an error'; },
                theme: 'dark'
            }
        });
        if (responses.status === 200) {
            toast.success('Changes Password Success', {
                theme: 'dark',
                type: 'success',
                autoClose: 3500,
            });

           setTimeout(() =>{
            window.location.reload();
           }, 3500)
        }

        if (responses.status === 409) {
            const responsesErrors = await responses.json();
            console.log(responsesErrors)
            setChangesPass({ loading: true, error: responsesErrors?.errors })
        }

        if (responses.status === 401) {
            const responsesErrors = await responses.json();
            setErrors({error: responsesErrors})
        }
    }

    const PushNotification = async (event: any) => {

        event.preventDefault();
        setBtn({ loading: true });
        const target = event.target;
        const formData = new FormData(target);
        const body = Object.fromEntries(formData.entries());

        async function Responses() {
            const signalActive = await fetch(`${dev_api.API_URL}api/member/setnotification`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-api-key': dev_api.API_KEY,
                    'AUTHORIZATION': 'Bearer ' + autho?.token
                }),
                body: JSON.stringify(body),
                signal: AbortSignal.timeout(15000)
            });
            return signalActive;
        }
        await toast.promise(Responses(), {
            pending: {
                render() { return 'Loading Push Notification' },
                theme: 'dark'
            },
            success: {
                render() { return 'Notification Successs'; },
                theme: 'dark',
                autoClose: 3000,
            },
            error: {
                render() { return 'There is an error'; },
                theme: 'dark'
            }
        });
    }
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
                                {!member.loading && <SkeltonInfoMember />}
                                {
                                    member.loading &&
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='fs-5'>
                                            <div className='float-start'>
                                                Country
                                            </div>
                                            <div className="float-end">
                                                {member.member?.country}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className='fs-5'>
                                            <div className='float-start'>
                                                Email
                                            </div>
                                            <div className="float-end">
                                                {member.member?.email}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className='fs-5'>
                                            <div className='float-start'>
                                                Name
                                            </div>
                                            <div className="float-end">
                                                {member.member?.name}
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className='fs-5'>
                                            <div className='float-start'>
                                                ID Member
                                            </div>
                                            <div className="float-end">
                                                {member.member?.member_id}
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                }
                            </Card.Body>
                        </Card>
                        <Card className='mt-4'>
                            <Card.Header className='text-center'>
                                <h4>Push Notification</h4>
                            </Card.Header>
                            <Card.Body className='text-center'>
                                 This notification button is for registering to telegram and Wa
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                <Form onSubmit={PushNotification}>
                                    <input type="hidden" name='notif_wa' />
                                    <input type="hidden" name='notif_tg' />
                                    <Button type='submit' disabled={btn.loading} variant='success' style={{ minWidth: '200px' }}>Push Notif...</Button>
                                </Form>
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
                                <div className='d-flex justify-content-center'>
                                    {changesPass.error !== null && <>
                                        <div className="alert alert-danger login">
                                            {
                                                Object.entries(changesPass?.error).map((errors, idx) => (
                                                    <ul key={idx}>
                                                        <li>{errors[0]} : {errors[1] as any}</li>
                                                    </ul>
                                                ))
                                            }
                                        </div>
                                    </>}
                                </div>

                                <div className='d-flex justify-content-center'>
                                    {errors.error !== null && <>
                                        <div className="alert alert-danger login">
                                             { errors.error?.message }
                                        </div>
                                    </>}
                                </div>
                                <div
                                    className="d-flex justify-content-center align-items-center">
                                    <Form onSubmit={HandleSubmitChangesPassword}>
                                        <div className="login">
                                            <div className='mb-4'>
                                                <label className="form-label">Old Password</label>
                                                <input type="passwrod" name='old_password' className='form-control form-control-lg' />
                                            </div>
                                            <div className='mb-3'>
                                                <label className="form-label float-start">New Password</label>
                                                <input type="password" name='new_password' className='form-control form-control-lg' />
                                            </div>
                                            <div className='mb-3'>
                                                <label className="form-label float-start">Confirm Password</label>
                                                <input type="password" name='confirm_password' className='form-control form-control-lg' />
                                            </div>
                                            <button type='submit' className='mt-4 btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3'>
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