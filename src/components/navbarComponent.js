import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';


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
import { loginUser, user, logoutUser, storePrivateKey } from './redux/userSlice';
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





import profileActive from "../../public/images/profile-active-icon.svg"
import feedbackActive from "../../public/images/feedback-active.svg"
import communityActive from '../../public/images/community-active.svg'
import refferalActive from "../../public/images/refferals-active.svg"
import faqActive from "../../public/images/faqs-active.svg"

import profileNotActive from "../../public/images/profile-not-active.svg"
import feedbackNotActive from "../../public/images/feedback-not-active.svg"
import communityNotActive from "../../public/images/community-not-active.svg"
import refferalNotActive from "../../public/images/refferal-not-active.svg"
import faqsNotActive from "../../public/images/faqs-icon-inactive.svg"


const NavBarComponent = () => {

    const profileimg = useSelector((store) => store?.user?.loginInfo?.profileImage)



    console.log("userinfooooo", profileimg)
    const [depositeOpen, setdepositeOpen] = useState(false)
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const [isFeedbackHovered, setIsFeedbackHovered] = useState(false)
    const [isCommunityHovered, setIsCommunityHovered] = useState(false)
    const [isReferralHovered, setIsReferralHovered] = useState(false)
    const [isTermsHovered, setIsTermsHovered] = useState(false)
    const [isAboutHovered, setIsAboutHovered] = useState(false)
    const [isFaqsHovered, setIsFaqsHovered] = useState(false)

    const dispatch = useDispatch()
    const router = useRouter()

if(depositeOpen==true){
    document.body.style.overflow='hidden'
    document.body.style.height = '100vh'
    console.log("ffffffffffffffffffffffffffffffffffffffffffffffffi")
}
else{
    document.body.style.overflow='auto'
    document.body.style.height = 'auto'
}

    const handleProfileHover = () => {
        setIsProfileHovered(true)

    }
    const handleMouseProfileLeave = () => {
        setIsProfileHovered(false)

    }

    const handleFeedbackHover = () => {
        setIsFeedbackHovered(true)

    }
    const handleMouseFeedbackLeave = () => {
        setIsFeedbackHovered(false)

    }
    const handleCommunityHover = () => {
        setIsCommunityHovered(true)

    }
    const handleMouseCommunityLeave = () => {
        setIsCommunityHovered(false)

    }

    const handleReferralHover = () => {
        setIsReferralHovered(true)

    }
    const handleMouseReferralLeave = () => {
        setIsReferralHovered(false)

    }
    const handleTermsOfServeHover = () => {
        setIsTermsHovered(true)

    }
    const handleMouseTermsOfServiceLeave = () => {
        setIsTermsHovered(false)

    }
    const handleAboutHover = () => {
        setIsAboutHovered(true)

    }
    const handleMouseAboutLeave = () => {
        setIsAboutHovered(false)

    }
    const handleFaqsHovered = () => {
        setIsFaqsHovered(true)

    }
    const handleFaqsLeave = () => {
        setIsFaqsHovered(false)

    }






    const profilLinkIcon = isProfileHovered || router.pathname === '/profilepage' ? profileActive : profileNotActive
    const feedbackLinkIcon = isFeedbackHovered || router.pathname === '/feedbackpage' ? feedbackActive : feedbackNotActive
    const communityLinkIcon = isCommunityHovered || router.pathname === '/communitypage' ? communityActive : communityNotActive
    const refferalsLinkIcon = isReferralHovered || router.pathname === '/refferalspage' ? refferalActive : refferalNotActive
    const fqasLinkIcon = isFaqsHovered || router.pathname === '/faqspage' ? faqActive : faqsNotActive

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

    // const senData = async () => {
    //     const apiURl = "https://backend.sportsverse.cricket/users/login/"
    //     const object = {
    //         publicKey: pubKey,
    //         userName: userInfo.user
    //     }
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

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3Auth({
                    clientId: clientId,
                    chainConfig: {
                        chainNamespace: "eip155",
                        chainId: "0x89", // hex of 80001, polygon testnet
                        rpcTarget:
                            "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF",
                    },
                    authMode: "WALLET",
                    uiConfig: {
                        theme: "dark",
                        loginMethodsOrder: ["facebook", "google"],
                        appLogo:
                            "https://metalok.io/wp-content/uploads/2022/06/image-1@2x.png", // Your App Logo Here
                    },
                    defaultLanguage: "en",
                });

                setWeb3auth(web3auth);

                await web3auth.initModal();
                if (web3auth.provider) {
                    setProvider(web3auth.provider);
                }
            } catch (error) {
                console.error(error);
            }
        };
        init();
    }, []);

    console.log("web3auth", web3auth)


    const logout = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }

        setProvider(null);
        // setUserInfo(null);
        setShowlogout(false);
        await web3auth.logout();
        // dispatch(loginUser())
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
                            <span style={{ marginLeft: "1rem", fontSize: "14px" }}> Deposit</span>

                        </button>
                        <button className="deposit-btn" onClick={() => setdepositeOpen(!depositeOpen)}>
                            <Image src={moneyReceiveIcon} alt="" height={20} width={20} />
                            <span style={{ marginLeft: "1rem", fontSize: "14px" }}> Withdraw</span>
                        </button>

                    </div>
                    <div className='icon-container'>
                        <Link href="/faqspage">
                            <Image src={helpLineIcon} alt="" height={30} width={30} />
                        </Link>
                        <Image src={notificationIcon} alt="" height={27} width={36} />
                        {profileimg
                            ? <Image src={profileimg} style={{ borderRadius: '50%' }} alt="" height={35} width={35} onClick={() => setopenLogout(!openLogout)} />
                            : <Image src={profileIcon} style={{ borderRadius: '50%' }} alt="" height={35} width={35} onClick={() => setopenLogout(!openLogout)} />
                        }

                    </div>
                </div>







            </nav>
            <div className="logout-main-con-new" style={{ display: openLogout ? "block" : "none" }} >
                <h3 className='profile-close' onClick={logoutCls}>x</h3>

                <div>
                    <div className="logout-con" onMouseEnter={handleProfileHover} onMouseLeave={handleMouseProfileLeave}>
                        <Link href="/profilepage" className={router.pathname === '/profilepage' ? 'active-link-name' : "not-active-link-name"}>
                            <Image src={profilLinkIcon} alt="" height={20} width={20} />

                            <p>Profile</p>
                        </Link>
                    </div>
                    <div className="logout-con" onMouseEnter={handleFeedbackHover} onMouseLeave={handleMouseFeedbackLeave}>
                        <Link href="/feedbackpage" className={router.pathname === '/feedbackpage' ? 'active-link-name' : "not-active-link-name"}>
                            <Image src={feedbackLinkIcon} alt="" height={20} width={20} />
                            <p>Feedback & Support</p>
                        </Link>
                    </div>
                    <div className="logout-con" onMouseEnter={handleCommunityHover} onMouseLeave={handleMouseCommunityLeave}>
                        <Link href="/communitypage" className={router.pathname === '/communitypage' ? 'active-link-name' : "not-active-link-name"}>
                            <Image src={communityLinkIcon} alt="" height={20} width={20} />
                            <p>Community</p>
                        </Link>
                    </div>
                    <div className="logout-con" onMouseEnter={handleReferralHover} onMouseLeave={handleMouseReferralLeave}>
                        <Link href="/refferalspage" className={router.pathname === '/refferalspage' ? 'active-link-name' : "not-active-link-name"}>
                            <Image src={refferalsLinkIcon} alt="" height={20} width={20} />
                            <p>Refferals</p>
                        </Link>
                    </div>
                    <div className="logout-con" onMouseEnter={handleFaqsHovered} onMouseLeave={handleFaqsLeave}>
                        <Link href="/faqspage" className={router.pathname === '/faqspage' ? 'active-link-name' : "not-active-link-name"}>
                            <Image src={fqasLinkIcon} alt="" height={20} width={20} />
                            <p>Faqs</p>
                        </Link>
                    </div>
                    <div className="profile-underline"></div>
                    <div className="logout-con2">
                        <h3><a href="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/privacy_policy.pdf" target='_blank' onMouseEnter={handleTermsOfServeHover} onMouseLeave={handleMouseTermsOfServiceLeave}> Terms of Service </a></h3>
                        <h3><a href="https://www.sportsverse.trade/" target='_blank' onMouseEnter={handleAboutHover} onMouseLeave={handleMouseAboutLeave}>About</a></h3>
                        <h3 className='logout-head' onClick={logout}>Logout</h3>
                    </div>
                </div>
            </div>



            {/* <div className='logout-nav' style={{ display: openLogout ? "block" : "none", }} onClick={logoutCls}></div> */}


            {depositeOpen && (
                <div className='onwrap-main'>
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