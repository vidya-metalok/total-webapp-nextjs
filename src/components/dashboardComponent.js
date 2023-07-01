
import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LeagueComponent from './leagueComponent'
import LayoutComponent from './layoutComponent';
import WalletComponent from './walletComponent';
import PortFolioComponent from './portfolioComponent';
import TeamsComponent from './teamsComponent';
import Web3 from "web3";
import qs from "qs";
import abi from "../../abis/abi.json";
import { MaticBalance, UsdtBalance } from './redux/userSlice';


const DashboardComponent = () => {
    const dispatch = useDispatch()

    const userWallet = useSelector((store) => store?.user?.loginInfo?.walletAddress)
    // const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";
    const web3 = new Web3(
        "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF"
    );

    const [usdtBalance, setUsdtBalance] = useState(0);
    const [maticBalance, setMaticBalance] = useState(0);


    const getUsdtBalance = async (tokenAddress) => {
        if (tokenAddress) {
            try {
                let contrct = new web3.eth.Contract(abi, tokenAddress);
                let USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
                //  USDT token address
                var tmp = await contrct.methods
                    .balanceOf(userWallet)
                    .call({ from: userWallet });
                let balance =
                    contrct.options.address == USDT
                        ? web3.utils.fromWei(tmp, 'mwei')
                        : web3.utils.fromWei(tmp, 'ether');
                return balance;

            }
            catch (err) {
                console.log("err", err)
            }
        }
        else {
            console.log("error")
        }


    };


    const getMaticBalance = async (tokenAddress) => {
        if (tokenAddress || userWallet) {
            try {
                let tmp = await web3.eth.getBalance(userWallet);
                //  USDT token address

                let balance = web3.utils.fromWei(tmp, 'ether');
                return balance;

            }
            catch (err) {
                console.log("err", err)
            }
        }

    };

    useEffect(() => {
        let f = async () => {
            setUsdtBalance(
                await getUsdtBalance('0xc2132D05D31c914a87C6611C10748AEb04B58e8F'),
            );
            dispatch(UsdtBalance(usdtBalance))
            setMaticBalance(await getMaticBalance());
            dispatch(MaticBalance(maticBalance))

        };
        f();
    });

    console.log("usdtbalance-wallet", usdtBalance)
    console.log("matic-wallet..", maticBalance)





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













