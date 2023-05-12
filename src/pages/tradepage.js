import React from 'react'
import dynamic from 'next/dynamic'
const TradeComponent = dynamic(() => import("../components/tradeComponent"), { ssr: false })
const NavBarComponent = dynamic(() => import("../components/navbarComponent"), { ssr: false })

const TradePage = () => {
    return (

        <div className='trade-section-main'>
            <NavBarComponent />
            <TradeComponent />


        </div>



    )




}

export default TradePage
