import React from "react";
import { Form } from "react-bootstrap";
import { ResetPasswordEmail } from "../Api/ApiResource";
import { LoadingPromise } from "../LoadingPromise/Loading";

export default class ResetPassword extends React.Component<any, 
   { redirect: boolean }>{
    public constructor(props: any){
        super(props);
        this.handleSubmitResetPassword = this.handleSubmitResetPassword.bind(this);
    }
    
    public handleSubmitResetPassword(event: React.FormEvent<HTMLFormElement>) : void{
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());
        (async() =>{
            try{
                const resetApisFetch = ResetPasswordEmail(body);
                const loadingFetch   = await LoadingPromise(resetApisFetch, 'Error Reset Password');
                if(loadingFetch.status === 200){
                    this.setState({redirect: true});
                    console.log(await loadingFetch.json())
                }
            }catch(error){
                console.log(error)
            }
        })();
    }

    public render(): React.ReactNode {
        return(
            <>
                <div 
                    style={{ height: '90vh' }} 
                    className="d-flex justify-content-center align-items-center">
                    <Form onSubmit={async (event) => this.handleSubmitResetPassword(event)}>
                        <div className="login">
                            <div className="mb-5">
                                <h1 className='text-center'>Reset Password</h1>
                                <div className='text-inverse text-opacity-50 text-center'>
                                    For your protection, please verify your identity.
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className="form-label">Email Address</label>
                                <input type="text" name='email' className='form-control form-control-lg' />
                            </div>
                            <div className="form-check mb-3">
                                <input type="checkbox" className='form-check-input' />
                                <label className="form-check-label">Remember Me</label>
                            </div>
                            <button type='submit' className='btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3'>
                                RESET PASSWORD
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
}