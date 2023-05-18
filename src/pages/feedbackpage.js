import React from 'react'
import dynamic from 'next/dynamic'


const FeedbackComponent = dynamic(() => import("../components/feedbackComponent"), { ssr: false })
const NavBarComponent = dynamic(() => import("../components/navbarComponent"), { ssr: false })




const Feedbackpage = () => {
    return (
        <div className='trade-section-main'>
            <NavBarComponent />
            <FeedbackComponent />

        </div>

    )
}


export default Feedbackpage
