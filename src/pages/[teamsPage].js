import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Sidebar from '@/components/sidebarComponent.js'
const TeamsComponent = dynamic(() => import('../components/teamsComponent.js'), { ssr: false })
const LayoutComponent = dynamic(() => import("../components/layoutComponent.js"), { ssr: false })
const TeamPage = () => {
  const router = useRouter()
  const eachToken = router.query
  const parsedObj = JSON.parse(eachToken?.eachToken)
  console.log("EACHPARSE", eachToken?.eachToken)


  return (

    <LayoutComponent>
      <TeamsComponent tokenDetails={parsedObj} />
    </LayoutComponent>



  )
}

export { TeamPage as default } 
