import dynamic from 'next/dynamic'
import React from 'react'
const SidebarComponent = dynamic(() => import('../components/sidebarComponent.js'), { ssr: false })

const SidebarPage = () => {
    return (
        <div>
            <SidebarComponent />

        </div>
    )
}

export default SidebarPage





