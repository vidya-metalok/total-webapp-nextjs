import React from 'react'
import dynamic from 'next/dynamic'
const PortFolioComponent = dynamic(() => import("../components/portfolioComponent"), { ssr: false })
const LayoutComponent = dynamic(() => import("../components/layoutComponent"), { ssr: false })

const PortFolioPage = () => {
    return (
        <LayoutComponent>
            <PortFolioComponent />

        </LayoutComponent>

    )
}

export default PortFolioPage
