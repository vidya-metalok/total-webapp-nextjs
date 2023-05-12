import React, { useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
const QuickTradeComponent = dynamic(() => import('../components/navbarComponent'), { ssr: false });


const QuickTradePage = () => {

    return (
        <div>
            <QuickTradeComponent />

        </div>
    )
}

export default QuickTradePage




