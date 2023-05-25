import { Form, Navigate, Params, useActionData, useParams, useRouteLoaderData } from 'react-router-dom';
import AlertOxalus from './Helper/ResponseAlert';

export function Logins() {
    const loaderCheck    : any = useRouteLoaderData('autho');
    const responseAction : any = useActionData();
    const params : Params<string> = useParams();
    if(loaderCheck?.auth) return <Navigate to={'/dasboard'}/>

    function AlertNotifLogin() : JSX.Element | any{
        if(responseAction === undefined) return;
        return <AlertOxalus response={responseAction?.responseJson}/>
    }
    return (
        <>
            <div 
                style={{ height: '90vh' }} 
                className="d-flex justify-content-center align-items-center">
                <Form action='/auth/login' method='POST'>
                    <div className="login">
                        <div className="mb-5">
                            <h1 className='text-center'>Sign In</h1>
                            <div className='text-inverse text-opacity-50 text-center'>
                                For your protection, please verify your identity.
                            </div>
                        </div>
                        <AlertNotifLogin/>
                        <div className='mb-4'>
                            <label className="form-label">Email Address</label>
                            <input type="text" name='email' className='form-control form-control-lg' />
                        </div>
                        <div className='mb-3'>
                            <div className='d-block'>
                                <label className="form-label float-start">Password</label>
                                <label htmlFor="" className='float-end'>Lupa Password</label>
                            </div>
                            <input type="Password" name='password' className='form-control form-control-lg' />
                        </div>
                        <div className="form-check mb-3">
                            <input type="checkbox" className='form-check-input' />
                            <label className="form-check-label">Remember Me</label>
                        </div>
                        <button type='submit' className='btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3'>
                            LOGIN
                        </button>
                        <div className="text-center text-inverse text-opacity-50">
                            Don't have an account yet? <a href="page_register.html">Sign In</a>.
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}

