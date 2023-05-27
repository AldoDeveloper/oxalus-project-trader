
import React from 'react';
import { SlideAnimate } from '../../Animate/AnimateRoutes';

export default class Profile extends React.Component{

    public constructor(props: any){
        super(props)
    }
    public render(): React.ReactNode {
        return(
            <>
                <div className="container-fluid mt-4">
                    <SlideAnimate>
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-header">PROFILE</div>
                            <div className="card-body">
                                lorem29
                            </div>
                        </div>
                    </SlideAnimate>
                </div>
            </>
        )
    }
}