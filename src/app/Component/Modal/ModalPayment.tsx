
import { Modal, Button, Form } from "react-bootstrap"
import { DataListSubscribtion } from "../../interface/Props"
import React from "react";
import * as Icons from 'react-icons/bs';
import { AuthContext } from "../../Context/AuthContext";
import {toast} from 'react-toastify';

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
    const [status, setStatusChekbox] = React.useState<{checked?: boolean, data_select?: {}}>({checked: false});
    const [process, setProcess]      = React.useState<{loading?: boolean, redirect?: boolean, data?:any}>(
        {loading: false, redirect: false, data: {}}
    );

    const authTokens = React.useContext(AuthContext);
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
        setStatusChekbox({data_select: data});
    }
    
    console.log(status.data_select)
    const HandleGetProses = async () =>{
        if(status.data_select === undefined){
           toast.error('Select Your Button Click', {
            type: 'error',
            theme: 'dark',
            autoClose: 3000,
           })
        }
    }
    return(
        <>
             <Modal
                show={props.konditions}
                onHide={async() => props.callbackHandle(false)}
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
                        // disabled={status.checked} 
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