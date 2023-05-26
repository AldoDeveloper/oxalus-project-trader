import React from 'react';
import Card from './Card';
import { SlideAnimate } from '../Animate/AnimateRoutes';
import {Button, Modal } from 'react-bootstrap'
import Loading from '../Component/Loading';
interface PropsLoading{
    loading: boolean
}

export default class Content extends React.Component<any, PropsLoading>{

    public constructor(props: any){
        super(props);
        this.state = {loading : false}
    }

    componentDidMount(): void {
        new Promise((resolve, reject) =>{
            setTimeout(() =>{
                this.setState({loading: true})
            }, 2000)
        })
    }

    render(): React.ReactNode {
        const { loading } =  this.state;
       return(
        <>
            {
                !loading ? <Loading loading={!loading}/> : <>
                    <SlideAnimate>
                        <div className="content">
                            <div className="container-fluid mt-3">
                                <section className='mb-3'>
                                    <h4 className='mb-3'>Signal Info Trade</h4>
                                    <div className="row">
                                        {
                                            Array.from({length: 6}).map((vl, idx) =>(
                                                <Card key={idx}/>
                                            ))
                                        }
                                    </div>
                                </section>
                                <hr />
                                <section className='mb-3'>
                                    <h4 className='mb-3'>Signal Info lainya</h4>
                                    <div className="row row-cols-md-3">
                                        {
                                            Array.from({length: 20}).map((vl, idx) =>(
                                                <Card key={idx}/>
                                            ))
                                        }
                                    </div>
                                </section>
                            </div>
                        </div>
                    </SlideAnimate>
                </>
            }
            
        </>
       )
    }
}