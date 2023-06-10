import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Sidebar from '@/components/sidebarComponent.js'
import { eachTeamDetails } from '@/components/redux/userSlice.js'
const TeamsComponent = dynamic(() => import('../components/teamsComponent.js'), { ssr: false })
const LayoutComponent = dynamic(() => import("../components/layoutComponent.js"), { ssr: false })
const TeamPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const eachToken = router.query

  console.log("EACHPARSE", eachToken?.eachToken)

  useEffect(() => {
    const eachToken = router?.query?.eachToken;

    if (eachToken) {
      try {
        const parsedToken = JSON.parse(eachToken);
        dispatch(eachTeamDetails(parsedToken))

        console.log("EACHPARSE", parsedToken);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
    }
  }, [router.query.eachToken]);









  return (

    <LayoutComponent>

      <TeamsComponent />

    </LayoutComponent>

  )
 

  
} 

    
export { TeamPage as default }