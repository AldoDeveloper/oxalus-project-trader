import React from 'react';
import Card from './Card';
import { SlideAnimate } from '../Animate/AnimateRoutes';

export default class Content extends React.Component<any>{
    render(): React.ReactNode {
       return(
        <>
            <SlideAnimate>
                <div className="content">
                    <div className="container mt-3">
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
                            <div className="row">
                                {
                                    Array.from({length: 4}).map((vl, idx) =>(
                                        <Card key={idx}/>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </SlideAnimate>
        </>
       )
    }
}