
import React from 'react'
import dynamic from 'next/dynamic'

const NavBarComponent = dynamic(() => import("../components/navbarComponent"), { ssr: false })
const FaqsComponent = dynamic(() => import("../components/faqsComponent"), { ssr: false })

const Faqspage = () => {
    return (
        <div className='trade-section-main'>
            <NavBarComponent />
            <FaqsComponent />

        </div>
    )
}

export default Faqspage
