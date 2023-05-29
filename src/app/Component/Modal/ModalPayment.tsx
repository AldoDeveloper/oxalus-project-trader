
import { Modal, Button, Form } from "react-bootstrap"
import { DataListSubscribtion } from "../../interface/Props"
import React from "react";
import * as Icons from 'react-icons/bs';
import { AuthContext } from "../../Context/AuthContext";
import {toast} from 'react-toastify';
import { dev_api } from "../../../config/config";
import { Navigate } from "react-router-dom";
import { statusPayment } from "../../Api/ApiResource";

export default function ModalPayment(props: 
    {
        konditions: boolean, 
        callbackHandle: any, 
        data?: DataListSubscribtion,
    }){
    const SubscribtionSelect = [
        {
            id: 1,
            text: 'USDT-BEP20',
            action: true,
            class: 'btn-success',
            data:{
                id_package: props?.data?.id_package,
                payment_method: 'crypto',
                currency: 'usdtbsc',
            }
        },
        {
            id: 2,
            text: 'BUSD-BEP20',
            action: true,
            class: 'btn-outline-success'
        }
    ]
    const [status, setStatusChekbox] = React.useState<{checked?: boolean}>({checked: false});
    const [data, setData] = React.useState<{dataRequest: any}>();

    const [process, setProcess] = React.useState<
    {
        loading?: boolean,
        redirect?: boolean,
        data?:any,
        status?: any,
        error?: any
    }>(
        {loading: false, redirect: false, data: {}, error: null}
    );

    const authTokens: any = React.useContext(AuthContext) as any;
    const handleCheckboxModal = async (event: React.MouseEvent<HTMLInputElement, MouseEvent> | any) =>{
        setStatusChekbox({checked: event.target?.checked});
    }
    
    const handleSelectList = async (event: any, data: any) =>{
        const removed = document.querySelectorAll('.icons');
        removed.forEach((element) =>{
            element.classList.remove('act');
        })
        const iconsData = event.target.querySelector('.icons');
        iconsData.classList.add('act');
        setData({dataRequest: data})
    }

    const HandleGetProses = async () =>{
        if(data?.dataRequest === undefined){
           toast.error('Select Your Button Click', {
            type: 'error',
            theme: 'dark',
            autoClose: 3000,
           })
        }
        if(data?.dataRequest?.status !== undefined){
            toast.dismiss('current');
        }
        else
        {
            try
                {
                    const PostProcessTrade = await fetch(`${dev_api.API_URL}api/subscription/process`, {
                        method: 'POST',
                        headers: new Headers({
                            'content-type'  : 'application/json',
                            'x-api-key'     : dev_api.API_KEY,
                            'AUTHORIZATION' : 'Bearer ' + authTokens?.token,
                        }),
                        body: JSON.stringify(data?.dataRequest),
                        signal: AbortSignal.timeout(15000)
                    });

                    if(PostProcessTrade.status === 200){
                        const responseDataJson = await PostProcessTrade.json();
                        try
                            {
                                const statusPaymentData = await statusPayment(responseDataJson?.data.id_ref, authTokens?.token);
                                if(statusPaymentData.status === 200){
                                    const resposnseStatusData = await statusPaymentData.json();
                                    setProcess({
                                        loading: true, 
                                        redirect: true, 
                                        data: responseDataJson, 
                                        status: resposnseStatusData})
                                }
                                if(statusPaymentData.status >= 400){
                                    console.log(await statusPaymentData.json());
                                }
                            }
                        catch(error){
                            console.log(error)
                        }
                    }
                }
                catch(error){
                    setProcess({loading: true, redirect: false, error: error})
                }
            }
        }
    if(process.redirect){
        return <Navigate to={'/dasboard/payment-inturction'} state={process}/>
    }
    return(
        <>
             <Modal
                show={props.konditions}
                onHide={async() => props.callbackHandle(false, setData)}
                backdrop="static"
                centered
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props?.data?.description_package}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <div className="d-flex justify-content-center gap-2">
                        {
                            SubscribtionSelect.map((values, idx) => (
                                <button
                                    onClick={async(event) => handleSelectList(event, values.data)} 
                                    className={`btn ${values.class} btn-lg position-relative`}
                                    key={idx} >
                                    {values.text}
                                    <div className="icons">
                                        <Icons.BsCheck size={'32px'} color="red"/>
                                    </div>
                                </button>
                            ))
                        }
                     </div>
                    <div className="mt-4">
                    <Form.Check
                        type={'checkbox'}
                        onClick={async(event) => handleCheckboxModal(event)}
                        id={`default-check`}
                        label={`I Agree Lorem ipsum dolor sit amet consectetur.`}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        disabled={!status.checked} 
                        onClick={async() => HandleGetProses()}
                        style={{ width: '120px' }}
                        className="float-end" 
                        variant="success" 
                        size="sm">
                            Order...
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}