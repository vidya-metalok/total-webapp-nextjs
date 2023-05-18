import React from 'react'
import dynamic from 'next/dynamic'

const NavBarComponent = dynamic(() => import("../components/navbarComponent"), { ssr: false })
const CommunityComponent = dynamic(() => import("../components/communityComponent.js"), { ssr: false })

const Communitypage = () => {
    return (
        <div className='trade-section-main'>
            <NavBarComponent />
            <CommunityComponent />

        </div>
    )
}

export default Communitypage
