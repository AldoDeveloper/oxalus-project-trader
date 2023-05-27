import React from "react";
import { Form } from "react-bootstrap";
import Country from "../List/Country";

export default class Register extends React.Component<any>{

    constructor(props: any){
        super(props)
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
                        <div className='mb-4'>
                             <label className="form-label">Name</label>
                             <input type="text" className='form-control form-control-lg' />
                        </div>
                        <div className='mb-3'>
                             <div className='d-block'>
                                <label className="form-label float-start">Email</label>
                                <label htmlFor="" className='float-end'>Lupa Password</label>
                             </div>
                             <input type="Password" className='form-control form-control-lg' />
                        </div>
                        <div className='mb-3'>
                             <label className="form-label float-start">Password</label>
                             <input type="Password" className='form-control form-control-lg' />
                        </div>
                        <div className='mb-3'>
                             <label className="form-label float-start">Confirm Password</label>
                             <input type="Password" className='form-control form-control-lg' />
                        </div>
                        <label className="form-label float-start">Country</label>
                        <Form.Select aria-label="Default select example" size="lg" className="mb-3">
                            <Country/>
                        </Form.Select>
                        <div className="form-check mb-3">
                            <input type="checkbox" className='form-check-input' />
                            <label className="form-check-label">I have read and agree to the</label>
                        </div>
                        <button type='submit' className='btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3'>LOGIN</button>
                        <div className="text-center text-inverse text-opacity-50">
                        Already have an Admin ID <a href="page_register.html">Sign up</a>.
                        </div>
                   </div>
               </div>
            </>
        )
    }
}