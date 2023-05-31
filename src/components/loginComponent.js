import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Image from "next/image";
// var money = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/login-img4.png"
var loginimg1 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/login-img1.png";
var loginimg2 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/login-img2.png";
var loginimg3 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/login-img3.png";
var loginimg4 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/login-img4.png"
import facebookLogo from "../../public/images/facebook-login.svg"
import googleLogo from "../../public/images/google-login.svg"
import eyeSlash from "../../public/images/EyeSlash-icon.svg"

import eyeopen from "../../public/images/open-eye.svg"




// import loginimg1 from "../../public/images/login-img1.png";
// import loginimg2 from "../../public/images/login-img2.png";
// import loginimg3 from "../../public/images/login-img3.png";
// import loginimg4 from "../../public/images/login-img4.png";

import { loginUser, storePrivateKey } from "./redux/userSlice";

// import RPC from '../web3RPC.ts';
import RPC from "../web3RPC";
import { Web3Auth } from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";

import { useRouter } from "next/router";
// import { loginServer, postAvatarURL } from "../services/userService";
// import { loginServer } from "../../services/userService";

const LoginComponent = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const userInfoDetails = useSelector((store) => store?.user?.loginInfo?.email)
    const info = useSelector((store) => store?.user?.loginInfo)
    console.log("reduxInfo...", info)

    const clientId =
        "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";


    const [showPassword, setShowPassword] = useState(false)
    const [web3auth, setWeb3auth] = useState("");
    const [provider, setProvider] = useState("");
    const [idToken, setidToken] = useState("");
    const [pubKey, setpubKey] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    console.log("userInfo...", userInfo)

    const [showlogout, setShowlogout] = useState(false);


    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [userPassword, setuserPassword] = useState('')

    const [userNameerr, setuserNameerr] = useState('')
    const [emailerr, setemailerr] = useState('')
    const [passworderr, setpassworderr] = useState('')

    const login = async () => {
        if (!web3auth) {
            return;
        }
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
    };

    async function loginServer(idToken, pubKey) {
        const response = await fetch(
            `https://backend.sportsverse.cricket/users/login`,
            {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + idToken,
                }),
                body: JSON.stringify({ publicKey: pubKey }),
            }
        );
        return await response.json();
    }
    useEffect(() => {
        loginServer(idToken, pubKey);
    }, [idToken, pubKey]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getId = useCallback(async () => {
        if (!web3auth) {
            return;
        }
        const id = await web3auth.authenticateUser();
        setidToken(id.idToken);
    });
    console.log("token", idToken)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const afterLogin = async () => {
        const res = await loginServer(idToken, pubKey);
        setUserInfo(res.user);
        dispatch(loginUser(res.user));
        setShowlogout(true);
        // router.push("/dashboardpage");
        return true;
    };

    // const senData = async () =>{
    //   const apiURl = "https://backend.sportsverse.cricket/users/login/"
    //   const object ={
    //     publicKey:pubKey,
    //     userName:userInfo.user
    //   }
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPrivateKey = useCallback(async () => {
        if (!provider) {
            console.log("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const privateKey = await rpc.getPrivateKey();

        dispatch(storePrivateKey(privateKey));

        return privateKey;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPubKey = useCallback(async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const app_scoped_privkey = await getPrivateKey();
        const app_pub_key = getPublic(
            Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")
        ).toString("hex");
        setpubKey(app_pub_key);
    })

    // const logout = async () => {
    //     if (!web3auth) {
    //         console.log("web3auth not initialized yet");
    //         return;
    //     }
    //     await web3auth.logout();
    //     setProvider(null);
    //     setUserInfo(null);
    //     setShowlogout(false);
    // };


    useEffect(() => {
        const init2 = async () => {
            await getId();
            await getPubKey();
            // await getPrivateKey();
        };
        if (provider) init2();
    }, [getId, getPubKey, provider]);

    useEffect(() => {
        const init2 = async () => {
            await getId();
            await getPubKey();
        };
        if (provider) init2();
    }, [getId, getPubKey, provider]);

    useEffect(() => {
        const init3 = async () => {
            // await afterLogin();
        };
        if (idToken && pubKey) {
            init3();
        }
    }, [ idToken, pubKey]);
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

    // useEffect(() => {
    //     console.log(web3auth);
    // }, [web3auth]);

    const images = [loginimg1, loginimg2, loginimg3, loginimg4];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrentImage(currentImage + 1);

            if (currentImage === 3) {
                setCurrentImage(0);
            }
        }, 1000);
        return () => clearInterval(intervel);
    }, [currentImage]);



    const eventLogin = () => {
        setemail(email)

        console.log("clicked")

        if (email === userInfoDetails) {
            router.push("/dashboardpage");
        }
        if (userName == "") {
            setuserNameerr("please enter fullname")

        }
        if (userPassword == "") {
            setpassworderr("please enter password")
        }
        if (email === '') {
            setemailerr('please enter your email')


        }
        if (email !== userInfoDetails) {
            setemailerr("please enter valid email")
        }

        console.log("user email", userInfoDetails)
        console.log("user email", info)


    }

    const setemailAndError = (e) => {
        if (e.target.value !== userInfoDetails) {
            setemailerr("please enter valid email id")
        }
        setemailerr("")
        setemail(e.target.value)
    }

    const setUserAndErrors = (e) => {
        setuserName(e.target.value)
        setuserNameerr("")
    }
    const setuserPasswordAndErr = (e) => {
        setuserPassword(e.target.value)
        setpassworderr("")

    }





    return (
        // <div className="login-con"><button className="login-btn" onClick={login}>Login</button></div>
        //    <div
        //         className="d-flex align-items-center justify-content-center"
        //         style={{ height: "100vh", width: "100vw" }}
        //     >
        //         <div
        //             className="d-flex align-items-center justify-content-center"
        //             style={{ width: "50vw" }}
        //         >
        //             <button className="btn btn-outline-primary" onClick={login}>
        //                 Login
        //             </button>
        //         </div>
        //         <div style={{ width: "50vw" }}>
        //             <div className="login-img-section">
        //                 <Image src={images[currentImage]} alt="img" height={500} width={500} />

        //                 {/* <Image src={loginimg2} alt="img" />
        //           <Image src={loginimg3} alt="img" />
        //           <Image src={loginimg4} alt="img" /> */}
        //             </div>
        //         </div>
        //     </div> 
        <div className="login-bg-con">
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ width: "50vw" }}
            >
                <div className="login-subpart-one">
                    <div className="sub-part-head">
                        <h1>Login</h1>

                    </div>

                    {/* <div className="logo-bars-con">
                        <Image src={googleLogo.src} alt="" height={50} width={250} className="logo-bar" />
                        <Image src={facebookLogo.src} alt="" height={50} width={250} />
                    </div>
                    <h3>-OR-</h3> */}
                    <div className="login-input-main">
                        {/* <div>
                            <input type="text" className="login-input-con" placeholder="Full Name" value={userName} onChange={(e) => { setUserAndErrors(e) }} />
                            <h5 style={{ color: 'red' }}>{userNameerr}</h5>
                        </div> */}
                        <div>
                            <input type="text" className="login-input-con" placeholder="Email Address" value={email} onChange={(e) => setemailAndError(e)} />
                            <h5 style={{ color: 'red' }}>{emailerr}</h5>
                        </div>
                        <div className="login-visible-con">
                            {showPassword ? (
                                <input type="text" placeholder="Password" value={userPassword} onChange={(e) => { setuserPasswordAndErr(e) }} />


                            ) : (
                                <input type="password" placeholder="Password" value={userPassword} onChange={(e) => { setuserPasswordAndErr(e) }} />


                            )}
                            <Image src={showPassword ? eyeopen : eyeSlash} alt="" height={20} width={20} onClick={() => setShowPassword(!showPassword)} />

                        </div>
                        <h5 style={{ color: 'red' }}>{passworderr}</h5>

                    </div>
                    <div>


                        <button className="login-btn" onClick={eventLogin}>
                            Login
                        </button>
                        <div className="account-con">
                            <p className="already-txt">Don &apos;t have an account? </p>
                            <p className="create-login-txt" onClick={login}> Sign up</p>


                        </div>
                    </div>





                </div>



            </div>
            <div style={{ width: "50vw" }}>
                <div className="login-img-section">
                    <Image src={images[currentImage]} alt="img" height={500} width={500} />

                    {/* <Image src={loginimg2} alt="img" />
              <Image src={loginimg3} alt="img" />
              <Image src={loginimg4} alt="img" /> */}
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;