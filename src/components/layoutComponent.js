import React from 'react'
import NavBarComponent from './navbarComponent';
import Sidebar from './sidebarComponent';

const LayoutComponent = ({ children }) => {
    return (
        <div className='layout-main'>
            <NavBarComponent />
            <div className="layout-body">
                <Sidebar />
                <div className="layout-child">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default LayoutComponent
