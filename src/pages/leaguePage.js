import dynamic from 'next/dynamic'
import React from 'react'
// import SidebarComponent from "../components/sidebarComponent"
const League = dynamic(() => import('../components/leagueComponent.js'), { ssr: false })

const SidebarPage = () => {

    return (
        <div>
          dashboardpage

        </div>
    )
}

export default SidebarPage