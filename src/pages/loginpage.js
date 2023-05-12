import React from 'react'
import dynamic from 'next/dynamic'
const LoginComponent = dynamic(() => import("../components/loginComponent"), { ssr: false })
const LoginPage = () => {
    return (
        <LoginComponent />
    )
}

export default LoginPage
