
import React from 'react'
import dynamic from 'next/dynamic'

const CandleStick = dynamic(() => import('../components/candleStickChart'), {
    ssr: false
})

const CandleStickPage = () => {
    return (
        <div>
            <CandleStick />

        </div>
    )
}


export default CandleStickPage
