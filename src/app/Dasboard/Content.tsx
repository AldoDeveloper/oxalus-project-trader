import React from 'react';
import Card from './Card';

export default class Content extends React.Component<any>{
    render(): React.ReactNode {
       return(
        <>
            <div className="content">
                <div className="container mt-3">
                   <div className="row">
                        {
                            Array.from({length: 4}).map((vl, idx) =>(
                                <Card key={idx}/>
                            ))
                        }
                   </div>
                </div>
            </div>
        </>
       )
    }
}