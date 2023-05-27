import React, { useState, useEffect, useCallback, useMemo } from 'react'
import ProfileLinksComponent from './profileLinksComponent'
import Image from 'next/image';

// import faqlogo from '../../public/images/faq-logo.svg'
import userprofile from "../../public/images/user-profile-img.svg";
import editlogo from '../../public/images/edit-logo.svg'
import { useSelector } from 'react-redux';
import RPC from "../web3RPC";
import { Web3Auth } from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";
import { loginUser, storePrivateKey } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';


const ProfileComponent = () => {

    const userInfoDetails = useSelector((store) => store?.user?.loginInfo)
    const userinfoname = userInfoDetails?.name;
    const userFirstName = userinfoname?.split(" ")[0]
    const userSecondName = userinfoname?.split(" ")[1]
    const [userMobile, setUserMobile,] = useState(null)
    const [professEmail, setProfessEmail] = useState(null)
    const [personelEmail, setPersonelEmail] = useState(userInfoDetails?.email)
    const [userAddress, setuserAddress] = useState(null)
    console.log("user....", userInfoDetails, userinfoname)
    const router = useRouter()
    const dispatch = useDispatch()
    const [firstName, setfirstName] = useState(userFirstName)
    const [lastName, setLastName] = useState(userSecondName)
    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState("");
    // const [idToken, setidToken] = useState("");
    // const [pubKey, setpubKey] = useState("");
    // const [userInfo, setUserInfo] = useState(null);

    // const clientId =
    //     "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";
    // const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";
    // console.log("fitsr, lastnames...", firstName, lastName)

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


    // const logout = useCallback(async () => {
    //     console.log("logout calling....")
    //     if (!web3auth) {
    //         console.log("web3auth not initialized yet");
    //         return;
    //     }
    //     await web3auth.logout();
    //     dispatch(loginUser(null))
    //     router.push("/loginpage")
    //     setProvider(null);



    // }, [dispatch, web3auth, router]);

    const profileLogout = () => {
        router.push("/")
    }

    const onClickEditBtn = () => {
        setfirstName(firstName)
        setLastName(lastName)
        setUserMobile(userMobile)
        setPersonelEmail(personelEmail)
        setProfessEmail(professEmail)
        setuserAddress(userAddress)

    }

    return (
        <div className='background-con'>
            <div className="logout-main-con">
                <ProfileLinksComponent />
                <div className='profile-user-section'>
                    <div className='profile-user-child1'>
                        <Image className='profile-img' src={userprofile} alt="image" width={146} height={143} />
                        <div className='user-name-data'>
                            <h2>{userInfoDetails?.name}</h2>
                            <h3>Joined 21-10-2021</h3>
                        </div>
                        <button className='edit-btn' onClick={() => onClickEditBtn()}> <Image className='edit-img' src={editlogo} alt="" /> Edit</button>
                    </div>
                    <form className='user-info-form'>
                        <h2 className='mygeneral-info'>My General information</h2>
                        <div className='col-12 d-md-flex gap-4'>
                            <div className='w-100'>
                                <label className='label-name' htmlFor="">firstName</label>
                                <br />
                                <input className='profile-input form-control' type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                            </div>

                            <div className='w-100'>
                                <label className='label-name' htmlFor="firstname">lastName</label>
                                <br />
                                <input className='profile-input form-control' id="firstname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className='col-12 d-md-flex gap-4'>
                            <div className='w-100'>
                                <label className='label-name' htmlFor="">Mobile</label>
                                <br />
                                <input className='profile-input form-control' type="text" placeholder='7584684641' value={userMobile} onChange={(e) => setUserMobile(e.target.value)} />
                            </div>
                            <div className='w-100'>
                                <label className='label-name' htmlFor="">Personal Email</label>
                                <br />
                                <input className='profile-input form-control' type="text" value={personelEmail} onChange={(e) => setPersonelEmail(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label className='label-name' htmlFor="">Professional email</label>
                            <br />
                            <input className='profile-input form-control' type="text" placeholder='Kiran@vardhaman.org' value={professEmail} onChange={(e) => setProfessEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className='label-name' htmlFor="">Address</label>
                            <br />
                            <input className='profile-input6 form-control' type="text" placeholder='h.no 2132133, 2nd floor, huda colony, hyderabad' value={userAddress} onChange={(e) => setuserAddress(e.target.value)} />

                        </div>
                    </form>
                    <div className='text-end'>
                        <button className='logout-btn' onClick={profileLogout}>Logout</button>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default ProfileComponent
