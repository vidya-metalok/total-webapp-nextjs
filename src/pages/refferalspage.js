import React from 'react'
import dynamic from 'next/dynamic'

const NavBarComponent = dynamic(() => import("../components/navbarComponent"), { ssr: false })
const RefferalsComponent = dynamic(() => import("../components/refferalsComponent"), { ssr: false })

const Refferalspage = () => {
    return (
        <div className='trade-section-main'>
            <NavBarComponent />
            <RefferalsComponent />

        </div>
    )
}

export default Refferalspage
