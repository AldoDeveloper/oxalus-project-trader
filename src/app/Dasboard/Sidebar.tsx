import React from 'react';
import * as Icons from 'react-icons/bs'
export default class Sidebar extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <div className="sidebar">
                   <div className="container mt-3">
                       <div className="menu">
                            <div className="menu-header">Navigation</div>
                            <div className="menu-item">
                                <a href="#" className='menu-link'>
                                    <span><Icons.BsCpu size={"17px"}/></span>
                                    <span>Dasboard</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="#" className='menu-link'>
                                    <span><Icons.BsBarChart size={"17px"}/></span>
                                    <span>Analitic</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="#" className='menu-link'>
                                    <span><Icons.BsMailbox size={"17px"}/></span>
                                    <span>Analitic</span>
                                </a>        
                            </div>
                       </div>
                       <hr />
                       <div className="menu">
                            <div className="menu-header">Navigation</div>
                            <div className="menu-item">
                                <a href="#" className='menu-link'>
                                    <span><Icons.BsCpu size={"17px"}/></span>
                                    <span>Dasboard</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="#" className='menu-link'>
                                    <span><Icons.BsBarChart size={"17px"}/></span>
                                    <span>Analitic</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="#" className='menu-link'>
                                    <span><Icons.BsMailbox size={"17px"}/></span>
                                    <span>Analitic</span>
                                </a>        
                            </div>
                       </div>
                   </div>
                </div>
            </>
        )
    }
}