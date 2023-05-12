
import React from 'react'
import dynamic from 'next/dynamic'
const NavBarComponent = dynamic(() => import('../components/navbarComponent'))

const NavBarPage = () => {
    return (
        <div>
            <NavBarComponent />

        </div>
    )
}

export default NavBarPage
