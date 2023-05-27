import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';


import Image from 'next/image'
// var sportsverseLogo = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sportsverse-logo.png";
import sportsverseLogo from "../../public/images/sportsverse-nav-logo.svg"

// var helpLineIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/help-icon.png";
import helpLineIcon from "../../public/images/clarity_help-line.svg"


// var notificationIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/notification-icon.png";
import notificationIcon from "../../public/images/Notification icon.svg"
import profileIcon from "../../public/images/nav-profile-icon.svg"



// var profileIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/profile-icon.png";



// var dollerIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/doller-icon.png";
import moneySendIcon from "../../public/images/money-send.svg"
import moneyReceiveIcon from "../../public/images/money-recive.svg"

var personIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/person-icon-img.png";

var feedbackIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/feedback-icon.png";

var communityIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/community-icon-img.png";

var refferalIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/refferal-icon-img.png";

// import sportsverseLogo from "../../public/images/sportsverse-logo.png"
// import helpLineIcon from "../../public/images/help-icon.png";
// import notificationIcon from "../../public/images/notification-icon.png";
// import profileIcon from "../../public/images/profile-icon.png"
// import dollerIcon from "../../public/images/doller-icon.png";
import { loginUser, storePrivateKey } from './redux/userSlice';
import Link from 'next/link'
import { useEffect, useState } from "react";
// import personIcon from "../../public/images/person-icon-img.png";
// import feedbackIcon from "../../public/images/feedback-icon.png"
// import communityIcon from "../../public/images/community-icon-img.png";
// import refferalIcon from "../../public/images/refferal-icon-img.png"
// import RPC from '../web3RPC.ts';
import RPC from "../web3RPC";
import { Web3Auth } from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";
import { useRouter } from 'next/router';
// import { loginServer, postAvatarURL } from "../services/userService";
// import { loginServer } from "../../services/userService";
import sportsTxt from "../../public/images/SPORTSVERSE.svg"

import faqActive from "../../public/images/faqs-active.svg"

const NavBarComponent = () => {
    const [depositeOpen, setdepositeOpen] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";

    const depositcls = () => {
        setdepositeOpen(false)
        console.log("clicked")
    }




    const clientId =
        "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";

    const [web3auth, setWeb3auth] = useState("");
    const [provider, setProvider] = useState("");
    const [idToken, setidToken] = useState("");
    const [pubKey, setpubKey] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [showlogout, setShowlogout] = useState(false);
    const [openLogout, setopenLogout] = useState(false)
    // const logoutCls = () => {
    //     setopenLogout(false)
    //     console.log("clicked")
    // }

    const logoutCls = () => {
        setopenLogout(false)
        console.log("clicked")
    }


    // const senData = async () => {
    //     const apiURl = "https://backend.sportsverse.cricket/users/login/"
    //     const object = {
    //         publicKey: pubKey,
    //         userName: userInfo.user
    //     }
    // }


    // const login = async () => {
    //     if (!web3auth) {
    //         return;
    //     }
    //     const web3authProvider = await web3auth.connect();
    //     setProvider(web3authProvider);
    // };

    // async function loginServer(idToken, pubKey) {
    //     const response = await fetch(
    //         `https://backend.sportsverse.cricket/users/login`,
    //         {
    //             method: "POST",
    //             headers: new Headers({
    //                 "Content-Type": "application/json",
    //                 Authorization: "Bearer " + idToken,
    //             }),
    //             body: JSON.stringify({ publicKey: pubKey }),
    //         }
    //     );
    //     return await response.json();
    // }
    // useEffect(() => {
    //     loginServer(idToken, pubKey);
    // }, [idToken, pubKey]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getId = useCallback(async () => {
    //     if (!web3auth) {
    //         return;
    //     }
    //     const id = await web3auth.authenticateUser();
    //     setidToken(id.idToken);
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const afterLogin = async () => {
    //     const res = await loginServer(idToken, pubKey);
    //     setUserInfo(res.user);
    //     dispatch(loginUser(res.user));
    //     setShowlogout(true);
    //     // router.push("/dashboardpage");
    //     return true;
    // };

    // const senData = async () =>{
    //   const apiURl = "https://backend.sportsverse.cricket/users/login/"
    //   const object ={
    //     publicKey:pubKey,
    //     userName:userInfo.user
    //   }
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getPrivateKey = useCallback(async () => {
    //     if (!provider) {
    //         console.log("provider not initialized yet");
    //         return;
    //     }
    //     const rpc = new RPC(provider);
    //     const privateKey = await rpc.getPrivateKey();

    //     dispatch(storePrivateKey(privateKey));

    //     return privateKey;
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getPubKey = useCallback(async () => {
    //     if (!web3auth) {
    //         console.log("web3auth not initialized yet");
    //         return;
    //     }
    //     const app_scoped_privkey = await getPrivateKey();
    //     const app_pub_key = getPublic(
    //         Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")
    //     ).toString("hex");
    //     setpubKey(app_pub_key);
    // });



    // useEffect(() => {
    //     const init2 = async () => {
    //         await getId();
    //         await getPubKey();
    //         await getPrivateKey();
    //     };
    //     if (provider) init2();
    // }, [getId, getPrivateKey, getPubKey, provider]);

    // useEffect(() => {
    //     const init2 = async () => {
    //         await getId();
    //         await getPubKey();
    //     };
    //     if (provider) init2();
    // }, [getId, getPubKey, provider]);

    // useEffect(() => {
    //     const init3 = async () => {
    //         await afterLogin();
    //     };
    //     if (idToken && pubKey) {
    //         init3();
    //     }
    // }, [afterLogin, idToken, pubKey]);

    // useEffect(() => {
    //     const init = async () => {
    //         try {
    //             const web3auth = new Web3Auth({
    //                 clientId: clientId,
    //                 chainConfig: {
    //                     chainNamespace: "eip155",
    //                     chainId: "0x89", // hex of 80001, polygon testnet
    //                     rpcTarget:
    //                         "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF",
    //                 },
    //                 authMode: "WALLET",
    //                 uiConfig: {
    //                     theme: "dark",
    //                     loginMethodsOrder: ["facebook", "google"],
    //                     appLogo:
    //                         "https://metalok.io/wp-content/uploads/2022/06/image-1@2x.png", // Your App Logo Here
    //                 },
    //                 defaultLanguage: "en",
    //             });

    //             setWeb3auth(web3auth);

    //             await web3auth.initModal();
    //             if (web3auth.provider) {
    //                 setProvider(web3auth.provider);
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     init();
    // }, []);

    // console.log("web3auth", web3auth)
    // console.log("web3auth-.....", web3auth.logout())


    const logout = () => {
        // if (!web3auth) {
        //     console.log("web3auth not initialized yet");
        //     return;
        // }

        // setProvider(null);
        // setUserInfo(null);
        // setShowlogout(false);
        // await web3auth.logout();
        dispatch(loginUser(null))
        router.push("/")

    };

    return (
        <>
            <nav className="container-fluid nav-main-container">
                <div className='logo-link-container'>
                    <div className='nav-logo-container' onClick={() => router.push("/dashboardpage")}>
                        <Image src={sportsverseLogo} alt="web-app-logo" height={34} width={26} />
                        {/* <h2>sportsverse</h2> */}
                        <Image src={sportsTxt} alt="" height={24} width={109} />
                    </div>
                    <div className='nav-links-container'>
                        <Link href="/dashboardpage" passHref className={router.pathname === '/dashboardpage' ? 'active-link' : 'inactive-link'}>
                            {/* <p>Dashboard</p> */}
                            <p>Dashboard</p>

                        </Link>
                        <Link href="/tradepage" passHref className={router.pathname === '/tradepage' ? 'active-link' : 'inactive-link'}>
                            <p className="nav_links_onhover">Trade</p>

                        </Link>
                        <Link href="/walletpage" passHref className={router.pathname === '/walletpage' ? 'active-link' : 'inactive-link'}>
                            <p className="nav_links_onhover">Wallet</p>

                        </Link>



                        <Link href="portfoliopage" passHref className={router.pathname === '/portfoliopage' ? 'active-link' : 'inactive-link'}>
                            <p className="nav_links_onhover">Portfolio</p>

                        </Link>
                        <Link href="/newspage" passHref className={router.pathname === '/newspage' ? 'active-link' : 'inactive-link'}>
                            <p className="nav_links_onhover">News</p>

                        </Link>
                        {/* {showlogout == false && (<button className="header-login responsive-header-navlinks2" onClick={login}>
                            {" "}
                            SIGN UP{" "}
                        </button>
                        )} */}
                        {/* {showlogout && (<button className="header-login"  >{userInfo?.name}</button>
                        )} */}

                        {/* <button onClick={logout}>logout</button> */}





                    </div>


                </div>
                <div className="profile-notification-container">


                    <div style={{ marginRight: "20px", display: 'flex' }}>
                        <button className="deposit-btn" onClick={() => setdepositeOpen(!depositeOpen)}>
                            <Image src={moneySendIcon} alt="" height={20} width={20} />
                            <span style={{ marginLeft: "1rem" }}> Deposit</span>

                        </button>
                        <button className="deposit-btn" >
                            <Image src={moneyReceiveIcon} alt="" height={20} width={20} />
                            <span style={{ marginLeft: "1rem" }}> Withdraw</span>
                        </button>

                    </div>
                    <div className='icon-container'>
                        <Link href="/faqspage">
                            <Image src={helpLineIcon} alt="" height={30} width={30} />
                        </Link>
                        <Image src={notificationIcon} alt="" height={27} width={36} />
                        <Image src={profileIcon} alt="" height={35} width={35} onClick={() => setopenLogout(!openLogout)} />


                    </div>
                </div>







            </nav>
            <div className="logout-main-con-new" style={{ display: openLogout ? "block" : "none" }} >
                <h3 className='profile-close' onClick={logoutCls}>x</h3>

                <div>
                    <div className="logout-con">
                        <Link href="/profilepage">
                            <Image src={personIcon} alt="" height={20} width={20} />

                            <p>Profile</p>
                        </Link>
                    </div>
                    <div className="logout-con">
                        <Link href="/feedbackpage">
                            <Image src={feedbackIcon} alt="" height={20} width={20} />
                            <p>Feedback & Support</p>
                        </Link>
                    </div>
                    <div className="logout-con">
                        <Link href="/communitypage">
                            <Image src={communityIcon} alt="" height={20} width={20} />
                            <p>Community</p>
                        </Link>
                    </div>
                    <div className="logout-con">
                        <Link href="/refferalspage">
                            <Image src={refferalIcon} alt="" height={20} width={20} />
                            <p>Refferals</p>
                        </Link>
                    </div>
                    <div className="logout-con">
                        <Link href="/faqspage">
                            <Image src={faqActive} alt="" height={20} width={20} />
                            <p>Faqs</p>
                        </Link>
                    </div>
                    <div className="profile-underline"></div>
                    <div className="logout-con">
                        <h3>Terms of Service</h3>
                        <h3>About</h3>
                        <h3 onClick={logout}>Logout</h3>
                    </div>
                </div>
            </div>



            {/* <div className='logout-nav' style={{ display: openLogout ? "block" : "none", }} onClick={logoutCls}></div> */}


            {depositeOpen && (
                <div>
                    <div className='nav-onwrap'>
                        <iframe className="on-wrap-site" src={`https://onramp.money/main/buy/?appId=114893&walletAddress=${userWallet}&network=matic20&coinCode=usdt`}>

                        </iframe>
                        <h1 className='onwrp-close' onClick={depositcls}>x</h1>
                    </div>
                </div>

            )


            }

        </>

    )
}

export default NavBarComponent