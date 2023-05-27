
import { Modal, Button, Form } from "react-bootstrap"
import { DataListSubscribtion } from "../../interface/Props"
import React from "react";

export default function ModalPayment(props: 
    {
        konditions: boolean, 
        callbackHandle: any, 
        data?: DataListSubscribtion,
    }){

    const [status, setStatusChekbox] = React.useState<{checked: boolean}>({checked: false});
    const handleCheckboxModal = async (event: React.MouseEvent<HTMLInputElement, MouseEvent> | any) =>{
        setStatusChekbox({checked: event.target?.checked});
    }
    console.log(status)
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
                        <Button size="lg" 
                            variant="success">USDT-BEP20
                        </Button>
                        <button className="btn btn-outline-success btn-lg disabled">
                            BUSD-BEP20
                        </button>
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