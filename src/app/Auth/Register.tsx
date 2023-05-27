import React from "react";
import { Form } from "react-bootstrap";
import Country from "../List/Country";
import { Form as Forms, useActionData } from "react-router-dom";

export default class Register extends React.Component<any>{

    constructor(props: any){
        super(props)
    }

    protected AlertNotification() : JSX.Element{
        const loaderActionRegister : any = useActionData();
        if(loaderActionRegister?.responseJson?.errors){
            const errorObject = Object.entries(loaderActionRegister?.responseJson?.errors) as any;
            return(
                <div className="alert alert-danger">
                    <ol>
                        {
                            errorObject.map((values: any, idx: number) =>(
                                <li key={idx}>{ values[1] }</li>
                            ))
                        }
                    </ol>
                </div>
            )
        }
        return<></>
    }

    public render(): React.ReactNode {
        return(
            <>
                <div style={{ minHeight: '90vh' }} className="mb-3 mt-3 d-flex justify-content-center align-items-center">
                   <div className="login">
                        <div className="mb-4">
                            <h1 className='text-center'>Sign Up</h1>
                            <div className='text-inverse text-opacity-50 text-center'>One Admin ID is all you need to access all the Admin services.</div>
                        </div>
                        <this.AlertNotification/>
                        <Forms action="/auth/register" method="post" noValidate>
                            <div className='mb-4'>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" size="lg"></Form.Control>
                                </Form.Group>
                            </div>
                            <div className='mb-3'>
                                <Form.Group>
                                    <div className='d-block'>
                                        <label className="form-label float-start">Email</label>
                                        <label htmlFor="" className='float-end'>Lupa Password</label>
                                    </div>
                                    <Form.Control type="email" name="email" size="lg"></Form.Control>
                                </Form.Group>
                            </div>
                            <div className='mb-3'>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" size="lg"></Form.Control>
                                </Form.Group>
                            </div>
                            <div className='mb-3'>
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confirm_password" size="lg"></Form.Control>
                                </Form.Group>
                            </div>
                                <label className="form-label float-start">Country</label>
                                <Form.Select aria-label="Default select example" name="country" size="lg" className="mb-3">
                                    <Country/>
                                </Form.Select>
                            <div className="form-check mb-3">
                                <input type="checkbox" className='form-check-input' />
                                <label className="form-check-label">I have read and agree to the</label>
                            </div>
                            <button type='submit' className='btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3'>SIGN IN</button>
                            <div className="text-center text-inverse text-opacity-50">
                            Already have an Admin ID <a href="page_register.html">Sign up</a>.
                            </div>
                        </Forms>
                   </div>
               </div>
            </>
        )
    }
}