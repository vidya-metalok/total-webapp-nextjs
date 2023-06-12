import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
const LayoutComponent = dynamic(() => import("../components/layoutComponent"), { ssr: false })
const WalletComponent = dynamic(() => import("../components/walletComponent"), { ssr: false })
const WalletPage = () => {
    return (
        <LayoutComponent>
            <WalletComponent />

        </LayoutComponent>
    )
}


export default WalletPage


