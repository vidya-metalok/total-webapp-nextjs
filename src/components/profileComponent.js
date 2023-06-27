import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import ProfileLinksComponent from './profileLinksComponent'
import Image from 'next/image';

// import faqlogo from '../../public/images/faq-logo.svg'
import userprofile from "../../public/images/user-profile-img.svg";
import editlogo from '../../public/images/edit-logo.svg'
import { useSelector } from 'react-redux';
import RPC from "../web3RPC";
import { Web3Auth } from "@web3auth/web3auth";
import { getPublic } from "@toruslabs/eccrypto";
import { loginUser, logoutUser, storePrivateKey } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { userEdit } from '../components/redux/userSlice'


const ProfileComponent = () => {

    const userInfoDetails = useSelector((store) => store?.user?.loginInfo)
    const profileimg = useSelector((store) => store?.user?.loginInfo?.profileImage)

    const editeddata = useSelector((store) => store?.user?.userEdit)




    const inputRef = useRef(null);

    const userinfoname = userInfoDetails?.name;
    const userFirstName = userinfoname?.split(" ")[0]
    const userSecondName = userinfoname?.split(" ")[1]
    const [userMobile, setUserMobile,] = useState(editeddata?.userMobile)
    const [professEmail, setProfessEmail] = useState(editeddata?.professEmail)
    const [personelEmail, setPersonelEmail] = useState(editeddata?.personelEmail)
    const [userAddress, setuserAddress] = useState(editeddata?.userAddress)
    // console.log("user....", userInfoDetails, userinfoname)
    const router = useRouter()
    const dispatch = useDispatch()
    const [firstName, setfirstName] = useState(editeddata?.firstName)
    const [lastName, setLastName] = useState(editeddata?.lastName)
    const [web3auth, setWeb3auth] = useState("");
    const [provider, setProvider] = useState("");
    const [idToken, setidToken] = useState("");
    const [pubKey, setpubKey] = useState("");
    // const [userInfo, setUserInfo] = useState(null);

    const clientId =
        "BK_TX48ntUieviViLOy8xwUhCirzTQI3uL7NwHsKkZk_-R7Zzpoxc2WNJDauT3OMRpolI7wlNRHUgT8SD0hjNDE";
    const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";
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


    // const profileLogout = useCallback(async () => {
    //     // console.log("logout calling....")
    //     // if (!web3auth) {
    //     //     console.log("web3auth not initialized yet");
    //     //     return;
    //     // }
    //     // await web3auth.logout();
    //     // dispatch(loginUser(null))
    //     // setProvider(null);
    //     router.push("/")




    // });
    const profileLogout = () => {
        dispatch(loginUser(null))
        router.push("/")
    }



    const [useredit, setuseredit] = useState(false)

    const [saveact, setsaveact] = useState(false)
    const [errorfirst,seterrorfirst] = useState('')
    const [errorlast,seterrorlast] = useState('')
    const [errormobile,seterrormobile] = useState('')
    const [errpersonelEmail,seterrpersonelEmail] = useState('')
    const [errProfessEmail,seterrProfessEmail] = useState('')
    const [erruserAddress,seterruserAddress] = useState('')

    const [allerrclr,setallerrclr] = useState('')


    const onClickEditBtn = () => {
        setfirstName(firstName)
        setLastName(lastName)
        setUserMobile(userMobile)
        setPersonelEmail(personelEmail)
        setProfessEmail(professEmail)
        setuserAddress(userAddress)



    if(errorfirst==='' && errorlast==='' && errormobile==='' && errpersonelEmail==='' && errProfessEmail==='' && erruserAddress===''){
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnoo eeeeerrs")
        setallerrclr('')

        setsaveact(true)
        setTimeout(() => {
            setuseredit(!useredit)
            setsaveact(false)

        }, 1500)

        if (useredit === false) {
            inputRef.current?.focus()
  

        }
        else {
            dispatch(userEdit(afteredit))
        }
    }

    else{
        setallerrclr('Please enter all the fields')
    }
        
     


    }

    const [afteredit, setafteredit] = useState({
        firstName: firstName,
        lastName: lastName,
        userMobile: userMobile,
        personelEmail: personelEmail,
        professEmail: professEmail,
        userAddress: userAddress
    })

    

    useEffect(()=>{
        const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ ']+([-'][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailRegex2 = /^[a-zA-Z]([a-zA-Z0-9._%+-]+)@([^\-\_][a-zA-Z0-9.-]+[^\-\_]\.[a-zA-Z]{2,})$/;

        if(firstName===''){
                seterrorfirst('Please enter your first name')

        }
        else if(!nameRegex.test(firstName)){
            seterrorfirst('Please enter valid Name')
        }
        else{
            seterrorfirst('')
        }
        
        
        if(lastName===''){
            seterrorlast('Please enter your last name')
        }
        else if(!nameRegex.test(lastName)){
            seterrorlast('Please enter valid Name')
        }
        
        else{
            seterrorlast('')
        }
        if(userMobile===''){
            seterrormobile('Please enter mobile number')
        }
        else if(userMobile.length!==10){
            seterrormobile('Please enter valid mobile number')
        }
       else{
        seterrormobile('')
       }
         if(personelEmail===""){
            seterrpersonelEmail('Please enter your email')

         }
         else if (!emailRegex.test(personelEmail)) {
            seterrpersonelEmail('Please enter a valid email');
          }
          else if (!emailRegex2.test(personelEmail)) {
            seterrpersonelEmail('Please enter a valid email');
          }
         else{
            seterrpersonelEmail('')
         }
        if(professEmail===''){
            seterrProfessEmail('Please enter your professional email')
        }
        else if (!emailRegex.test(professEmail)) {
            seterrProfessEmail('Please enter a valid email');
          }
          else if (!emailRegex2.test(professEmail)) {
            seterrProfessEmail('Please enter a valid email');
          }
        else{
            seterrProfessEmail('')
        }
       if(userAddress===''){
        seterruserAddress('Please enter your address')
       }
       else if(userAddress.length<5){
        seterruserAddress('Please enter proper address')
       }
       else{
        seterruserAddress('')
       }


    },[firstName,lastName,userMobile,personelEmail,professEmail,userAddress])




    useEffect(() => {
        setafteredit({
            firstName: firstName,
            lastName: lastName,
            userMobile: userMobile,
            personelEmail: personelEmail,
            professEmail: professEmail,
            userAddress: userAddress,
        });


    }, [firstName, lastName, userMobile, personelEmail, professEmail, userAddress,professEmail]);

    console.log("afteredit data", afteredit)


    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", erruserAddress. allerrclr)

    console.log("lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll", userInfoDetails)


    return (
        <div className='background-con'>
            <div className="logout-main-con">
                <ProfileLinksComponent />
                <div className='profile-user-section'>
                    <div className='profile-user-child1'>
                        <div className='d-flex align-items-center gap-5'>
                            {/* <Image className='profile-img' src={userprofile} alt="image" width={146} height={143} /> */}
                            {profileimg ? <Image className='profile-img' src={profileimg} alt="image" width={146} height={143} />
                                        : <Image src={userprofile} style={{ borderRadius: '50%',background:'#232234' }} alt="" width={146} height={143}/>
                            }
                            <div className='user-name-data'>
                                <h2><span style={{marginRight:'7px'}}>{editeddata?.firstName}</span> {editeddata?.lastName}</h2>
                                <h3>Joined 21-10-2021</h3>
                            </div>
                        </div>

                        <button className='edit-btn' onClick={onClickEditBtn}> <Image className='edit-img' src={editlogo} alt="" /> {useredit ? <span>{saveact ? <span>Saved</span> : <span>save</span>}</span> : <span>Edit</span>}</button>
                       
                            <h6 className='allerr-heading'>{allerrclr}</h6>
                        
                    </div>
                    <form className='user-info-form'>
                        <h2 className='mygeneral-info'>My General information</h2>
                        <div className='col-12 d-md-flex gap-4'>
                            <div className='w-100'>
                                <label className='label-name' htmlFor="firstname">First Name</label>
                                <br />
                                {useredit ? <input id="firstname" name="firstname" className='profile-input form-control' type="text" value={firstName} ref={inputRef} onChange={(e) => setfirstName(e.target.value)} placeholder="Kiran" autocomplete="off"/>
                                    : <input id="firstname" name="firstname" className='profile-input form-control' ref={inputRef} type="text" value={firstName} placeholder="Kiran" />}
                                    {useredit === true ? <p style={{color:'red'}}>{errorfirst}</p> :''}
                            </div>

                            <div className='w-100'>
                                <label className='label-name' htmlFor="lastname">Last Name</label>
                                <br />
                                {useredit ? <input id="lastname" name="lastname" className='profile-input form-control' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Sharma" autocomplete="off"/>
                                    : <input id="lastname" name="lastname" className='profile-input form-control' type="text" value={lastName} placeholder="Sharma" />}
                                    {useredit === true ? <p style={{color:'red'}}>{errorlast}</p> : ''}
                            </div>
                        </div>
                        <div className='col-12 d-md-flex gap-4'>
                            <div className='w-100'>
                                <label className='label-name' htmlFor="mobile">Mobile</label>
                                <br />
                                {useredit ? <input id="mobile" name="mobile" className='profile-input form-control' type="number" placeholder='7584684641' value={userMobile} onChange={(e) => setUserMobile(e.target.value)} autocomplete="off"/>
                                    : <input id="mobile" name="mobile" className='profile-input form-control' type="number" placeholder='7584684641' value={userMobile} />}
                                    {useredit === true ? <p style={{color:'red'}}>{errormobile}</p> : ''}
                            </div>
                            <div className='w-100'>
                                <label className='label-name' htmlFor="personalemail">Personal Email</label>
                                <br />
                                {useredit ? <input id="personalemail" name="personalemail" className='profile-input form-control' type="text" value={personelEmail} onChange={(e) => setPersonelEmail(e.target.value)} placeholder="kiran@gmail.com" autocomplete="off"/>
                                    : <input id="personalemail" name="personalemail" className='profile-input form-control' type="text" value={personelEmail} placeholder="kiran@gmail.com" />}
                                    {useredit === true ? <p style={{color:'red'}}>{errpersonelEmail}</p> : ''}
                            </div>
                        </div>
                        <div>
                            <label className='label-name' htmlFor="professionalemail">Professional email</label>
                            <br />
                            {useredit ? <input id="professionalemail" name="professionalemail" className='profile-input form-control' type="text" placeholder='Kiran@vardhaman.org' value={professEmail} onChange={(e) => setProfessEmail(e.target.value)} autocomplete="off"/>
                                : <input id="professionalemail" name="professionalemail" className='profile-input form-control' type="text" placeholder='Kiran@vardhaman.org' value={professEmail} />}
                                {useredit === true ? <p style={{color:'red'}}>{errProfessEmail}</p> : ''}
                        </div>
                        <div>
                            <label className='label-name' htmlFor="address">Address</label>
                            <br />
                            {useredit ? <input id="address" name="address" className='profile-input6 form-control' type="text" placeholder='h.no 3-2, 2nd floor, huda colony, hyderabad' value={userAddress} onChange={(e) => setuserAddress(e.target.value)} autocomplete="off"/>
                                : <input id="address" name="address" className='profile-input6 form-control' type="text" placeholder='h.no 3-2, 2nd floor, huda colony, hyderabad' value={userAddress} />}
                               {useredit === true ? <p style={{color:'red'}}>{erruserAddress}</p> :''}
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
