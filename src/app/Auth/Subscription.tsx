import React, { ReactNode } from "react";
import { Button, Spinner } from "react-bootstrap";
import { SlideAnimate } from "../Animate/AnimateRoutes";
import { useRouteLoaderData } from "react-router-dom";
import { DataListSubscribtion, LoaderPropsAuth, ObjectListSubscribtion } from "../interface/Props";
import { stringConversionSubs } from "../Helpers/StringConvertion";
import * as Icons from 'react-icons/bs';
import ModalPayment from "../Component/Modal/ModalPayment";
import { processSubscribtions } from "../Api/ApiResource";

export default class Subscription extends React.Component<any, 
    {
        modal: boolean, 
        data_modal?: DataListSubscribtion,
        data_loader?: any,
        process_subscribtions?: {
            loading: boolean,
            error: any,
            data: any,
        }
    }>{

    public constructor(props: any){
        super(props);
        this.state = { modal : false, process_subscribtions: {loading: false, error: null, data: null} };
        this.getLoaderData    = this.getLoaderData.bind(this);
        this.handleClickModal = this.handleClickModal.bind(this);
        this.handleGetApiSubscribtion = this.handleGetApiSubscribtion.bind(this);
        this.AlertSubscribtion = this.AlertSubscribtion.bind(this);
    }

    protected handleClickModal(props: boolean, data?: DataListSubscribtion){
        this.setState({modal: props, data_modal: data})
    }

    protected handleGetApiSubscribtion(props: LoaderPropsAuth){
        // (async() =>{
        //     try{
        //         const getResponsesApi= await processSubscribtions()
        //     }
        //     catch(error){

        //     }
        // })();
    }
    protected AlertSubscribtion() :JSX.Element{
        const getLoader: ObjectListSubscribtion = useRouteLoaderData('list_sub') as ObjectListSubscribtion;
        if(getLoader.message !== null){
            return(
                <div className="alert alert-warning text-center">
                    {getLoader.message}
                </div>
            )
        }
        return <></>
    }

    private getLoaderData() : JSX.Element{
        const userAuth : LoaderPropsAuth = useRouteLoaderData('autho') as LoaderPropsAuth;
        const getLoader: ObjectListSubscribtion = useRouteLoaderData('list_sub') as ObjectListSubscribtion;
        return(
            <>
                {
                    getLoader.data.map((subscription, idx) =>(
                        <div className="col col-lg-4 col-sm-6 col-md-6" key={idx}>
                            <div className="card">
                                <div className="card-header text-center">
                                    { subscription.description_package }
                                </div>
                                <div className="card-body">
                                <div style={{ fontSize: '32px' }} className="text-center">
                                    ${ subscription.price_package }<sub>/ Month</sub>
                                </div>
                                <div className="description mt-3">
                                    <ul>
                                        {
                                            stringConversionSubs(subscription.benefit).map((val, idx) =>{
                                               if(val.substring(0, 3).toLocaleLowerCase().trim() == 'no'){
                                                    return(
                                                        <li className="text-danger"
                                                            key={idx}>
                                                            <div className="d-flex gap-2">
                                                                <Icons.BsFillXOctagonFill
                                                                size={'14px'}
                                                                color={'text-danger'}/>
                                                                <span>{val}</span>
                                                            </div>
                                                        </li>
                                                    )
                                               }
                                               return(
                                                    <li key={idx}>
                                                        <div className="d-flex gap-2">
                                                            <Icons.BsCheck
                                                            size={'20px'} 
                                                            color={'green'}/> 
                                                            <span>{val}</span>
                                                        </div>
                                                    </li>
                                               )
                                            })
                                        }
                                    </ul>
                                </div>
                                </div>
                                <div className="card-footer text-center">
                                    <Button variant="success"
                                     onClick={async() => this.handleClickModal(true, subscription)}
                                     style={{ width: '100px' }} 
                                     size="sm">
                                        {/* <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"/> */}
                                        <span> Order</span></Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }

    public render(): React.ReactNode {
        const { modal, data_modal} = this.state;
        return(
            <>
               <SlideAnimate>
                    <div className="container-fluid row mt-3 mb-3 g-3">
                       <this.AlertSubscribtion/>
                       <this.getLoaderData/>
                       <ModalPayment 
                        konditions={modal} 
                        callbackHandle={this.handleClickModal} 
                        data={data_modal}/>
                    </div>
               </SlideAnimate>
            </>
        )
    }
}