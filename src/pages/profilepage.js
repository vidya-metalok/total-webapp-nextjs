

import React from 'react'
import dynamic from 'next/dynamic'
const NavBarComponent = dynamic(() => import("../components/navbarComponent"), { ssr: false })
const ProfileComponent = dynamic(() => import("../components/profileComponent"), { ssr: false })


const profilepage = () => {
    return (
        <div className='trade-section-main'>
            <NavBarComponent />
            <ProfileComponent />

        </div>
    )
}

export default profilepage
