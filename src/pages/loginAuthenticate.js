
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export const LoginAuthenticate = () => {
    const router = useRouter();
    const fireUserWallet = useSelector((store) => store?.user?.loginInfo)


    useEffect(() => {

        console.log("logo...", fireUserWallet)


        if (fireUserWallet) {
            router.replace("/dashboardpage")
        }
    }, [])
    return null
}


