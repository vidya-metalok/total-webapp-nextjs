
import React, { use, useEffect } from 'react'
import LeagueComponent from './leagueComponent'
import LayoutComponent from './layoutComponent';
import WalletComponent from './walletComponent';
import PortFolioComponent from './portfolioComponent';
import TeamsComponent from './teamsComponent';

const DashboardComponent = () => {

    return (
        <>

            {/* <NavBarComponent />
            <div style={{ display: 'flex', marginTop: "2rem" }}>
                <Sidebar />
                <div style={{ marginLeft: "1rem" }}>
                    <LeagueComponent />
                </div>

            </div> */}
            <LayoutComponent>
                <LeagueComponent />
                {/* <WalletComponent /> */}
                {/* <PortFolioComponent /> */}
                {/* <TeamsComponent /> */}
            </LayoutComponent>
        </>
    )
}
export default DashboardComponent













