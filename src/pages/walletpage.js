import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
const LayoutComponent = dynamic(() => import("../components/layoutComponent"), { ssr: false })
const WalletComponent = dynamic(() => import("../components/walletComponent"), { ssr: false })
const WalletPage = () => {
    // const fireUserWallet = useSelector((store) => store?.user?.loginInfo?.walletAddress)
    // const router = useRouter()

    // useEffect(() => {
    //     if (fireUserWallet) {
    //         router.push("/walletpage")
    //     }


    // }, [fireUserWallet, router])
    return (
        <LayoutComponent>
            <WalletComponent />

        </LayoutComponent>
    )
}


export default WalletPage


