
import React from 'react';
import { SlideAnimate } from '../../Animate/AnimateRoutes';
export default class Profile extends React.Component{
    public render(): React.ReactNode {
        return(
            <>
                <div className="container-fluid mt-4">
                    <SlideAnimate>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-header">test</div>
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