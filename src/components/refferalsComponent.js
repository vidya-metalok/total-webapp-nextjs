import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ProfileLinksComponent from './profileLinksComponent'
import sebastianImg from "../../public/images/sebastian-img.svg"
import natalicImg from "../../public/images/natalie-img.svg"
import serinityImg from "../../public/images/serinity-img.svg"
import jsonImg from "../../public/images/json-img.svg"
import earnTokenImg from "../../public/images/earn-token-img2.svg"
import { user, privKey, idToken, publicKey } from './redux/userSlice';
import { useSelector } from 'react-redux'
import { useCallback } from 'react';


const RefferalsComponent = () => {

  const referralCode = useSelector((store) => store?.user?.loginInfo?.referralCode)
  const userInfo = useSelector((store) => store?.user?.loginInfo)
  const userall = useSelector((store) => store?.user)

  const privKey = useSelector((store) => store?.user?.privKey)
  const idToken = useSelector((store) => store?.user?.idToken)
  const publicKey = useSelector((store) => store?.user?.loginInfo?.publicKey)

  // const publicKey = '0424affb8450aeae8f3a37b57b68126f176d29dbe2623f9621cfbdca0deaa1c683da1c408923864a631d1d065bcfe8ca40232d8982d54641553f037a5e414737f1'
  // const idToken = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRZT2dnXy01RU9FYmxhWS1WVlJZcVZhREFncHRuZktWNDUzNU1aUEMwdzAifQ.eyJpYXQiOjE2ODYxMjk5NDUsImF1ZCI6IkJLX1RYNDhudFVpZXZpVmlMT3k4eHdVaENpcnpUUUkzdUw3TndIc0trWmtfLVI3Wnpwb3hjMldOSkRhdVQzT01ScG9sSTd3bE5SSFVnVDhTRDBoak5ERSIsIm5vbmNlIjoiMDNlN2ZjNDY5YmIwMDM1ZTlhZjZmOGQwNzkxYzZmYTljMWVkZjlmYjRkMGE4MGQwMTlkNTIzNWYxYmU4ZTYxN2ViIiwiaXNzIjoiaHR0cHM6Ly9hcGkub3BlbmxvZ2luLmNvbSIsIndhbGxldHMiOlt7InB1YmxpY19rZXkiOiIwMzI0YWZmYjg0NTBhZWFlOGYzYTM3YjU3YjY4MTI2ZjE3NmQyOWRiZTI2MjNmOTYyMWNmYmRjYTBkZWFhMWM2ODMiLCJ0eXBlIjoid2ViM2F1dGhfYXBwX2tleSIsImN1cnZlIjoic2VjcDI1NmsxIn1dLCJlbWFpbCI6InZpZHlhdmF0aGkxNUBnbWFpbC5jb20iLCJuYW1lIjoidmlkeWEgdmF0aGkiLCJwcm9maWxlSW1hZ2UiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRmandvN0o4SlhmS292aUZUMFN3N3JVTHhBYjFZdklNTEJwSzlnTz1zOTYtYyIsInZlcmlmaWVyIjoidG9ydXMiLCJ2ZXJpZmllcklkIjoidmlkeWF2YXRoaTE1QGdtYWlsLmNvbSIsImFnZ3JlZ2F0ZVZlcmlmaWVyIjoidGtleS1nb29nbGUiLCJleHAiOjE2ODYyMTYzNDV9.RTcaSx5xxdlzBVW3l7_gAAvDDboG5RciDuIg0SLXFJQEFYrIYDMGZFlprUfob3hvHt8a0YI7INU9Re-tXGbOwA'

  const walletId = useSelector((store) => store?.user?.loginInfo?.walletAddress)



  // const [userDetails, setUserDetails] = useState(null);
  const [userCode, setUserCode] = useState(null);
  const [referralList, setReferralList] = useState([]);
  console.log("newRef....", referralList)

  const [refwallet, setrefwallet] = useState()
  const [refname, setrefname] = useState()
  const [refmail, setrefmail] = useState()
  const [reftime, setreftime] = useState()

  const [dataArraylist, setDataArray] = useState([]);

  const [refdata, setrefdata] = useState({ wallet: refwallet, name: refname, mail: refmail, time: reftime })

  useEffect(() => {
    setrefdata({
      wallet: refwallet,
      name: refname,
      mail: refmail,
      time: reftime
    });
    // setDataArray(prevArray => [...prevArray, refdata]);


  }, [refwallet, refname, refmail, reftime]);

  useEffect(() => {

    if (refdata.wallet === undefined) {
      // setDataArray(prevArray => [...prevArray, refdata])
      console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnodata")
    }
    else {
      setDataArray(prevArray => [...prevArray, refdata])
      console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnget data")
    }



  }, [refdata])




  console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", dataArraylist, refdata)


  const timestamp = reftime;

  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleDateString(); // Change the format as per your requirements


  // const parsedObj = JSON.parse(referralList)
  // console.log("obj1...", parsedObj)


  // console.log("userall ", userall)

  // console.log("privkey:",privKey,"idtoken:",idToken,"publickey:", publicKey)



  // console.log("userInfo " , userInfo)
  console.log("referralcode", referralCode)


  const [copyClick, setcopyclick] = useState(false)



  // const refferal = 1234567890;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralCode);
    console.log("wallet address:-", referralCode)
    setcopyclick(true)
    setTimeout(() => {
      setcopyclick(false)
    }, [2000])

  };
  const [social, setsocial] = useState(false)
  const shareClick = () => {
    setsocial(true)
  }

  // ===============================================share function 

  const onSharePress = () => {
    const shareOptions = {
      title: 'Share content',
      text: `Download the application using the referral code "${referralCode}" Check out the link. https://www.sportsverse.trade/`,
      url: 'https://www.sportsverse.trade/',
    };

    if (navigator.share) {
      navigator
        .share(shareOptions)
        .then(() => {
          console.log('Content shared successfully');
        })
        .catch((error) => {
          console.log('Error while sharing content:', error.message);
        });
    } else {
      console.log('Web sharing API not supported');
    }
  };


  //============================================ share end 

  //================================================= refferal list 





  const getReferrals = async (publicKey, idToken) => {

    const apiURL = 'https://backend.sportsverse.cricket/users/referralList/';
    const object = {
      publicKey: publicKey,
    };


    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(object),
      });
      // console.log("response" , response)

      if (!response.ok) {
        throw response;
      }
      const json = await response.json();

      console.log("json", json)
      // const convetedObj = JSON.parse(json.users)
      const listOfUsers = json.users

      const parsearr = JSON.parse(listOfUsers)
      console.log("parseuser.....", parsearr.walletAddress, parsearr, typeof (parsearr))
      console.log("walllettttttttttttttttttttttttttt", parsearr?.walletAddress)
      setrefwallet(parsearr?.walletAddress)
      setrefname(parsearr?.name)
      setrefmail(parsearr?.email)
      setreftime(parsearr?.timestamp)


      const updatedArr = [...parsearr]
      // console.log("update...", updatedArr)




      // console.log("list...", updatedArr)


      setReferralList(parsearr);
      // console.log("user" , typeof(referralList))

    } catch (error) {

      console.log('err', error);

    }


  };

  const getDetails = async (publicKey, idToken) => {
    const apiURL = 'https://backend.sportsverse.cricket/users/details/';
    const object = {
      publicKey: publicKey,
    };


    try {

      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(object),
      });


      if (!response.ok) {
        throw response;
      }
      const json = await response.json();
      setUserCode(json.user);
    } catch (error) {
      error.text().then((errMessage) => {
        console.log(errMessage);
      });
    }
  };



  useEffect(() => {
    getDetails(publicKey, idToken);
    getReferrals(publicKey, idToken);
  }, [publicKey, idToken]);
  console.log('settttttttttttttttt', refwallet, reftime, refmail, refname)


  const dataArray = ['{"walletAddress":"0xe05D666604Ee00fE15AE7856add9c115Fc6ca6BA","email":"badboyscars916@gmail.com","name":"murali manoj","timestamp":1686135450}'];



  // const referrallist2 = [{"walletAddress":"0xe05D666604Ee00fE15AE7856add9c1…om","name":"murali manoj","timestamp":1686135450}];

  // // Accessing the data
  // const firstObject = referrallist2[0];  // Access the first object in the array

  // const walletAddress = firstObject.walletAddress;
  // const email = firstObject.email;
  // const name = firstObject.name;
  // const timestamp = firstObject.timestamp;

  // console.log(walletAddress);
  // console.log(name);
  // console.log(timestamp);
  console.log("listtttttttttttttttttttttttt", referralList.name)

  //   const referrallist2 = ['{"walletAddress":"0xe05D666604Ee00fE15AE7856add9c1…om","name":"murali manoj","timestamp":1686135450}'];

  // // Parsing the JSON string
  // const parsedObject = JSON.parse(referrallist2[0]);

  // // Accessing the data
  // const walletAddress = parsedObject.walletAddress;
  // const email = parsedObject.email;
  // const name = parsedObject.name;
  // const timestamp = parsedObject.timestamp;

  // console.log(walletAddress);
  // console.log(name);
  // console.log(timestamp);


  const Refferallist = ({ refferal }) => {
    const date = new Date(refferal.time * 1000);
    const time = date.toLocaleDateString()


    console.log("nnnnnnnnnnnnnnnnn", refferal, "hlllllllllllllllllllll")
    return (<div >
      <div className='reff-card'>
        <div className='reff-details'>


          <Image src={sebastianImg} alt="" height={"auto"} width={"auto"} />
          <div className='reff-address'>
            <h1 className='reff-name' >{refferal.name}</h1>
            <p className='ref-user'>{refferal.wallet}</p>

          </div>
        </div>
        <div className='reff-email'>
          <p4 className="reff-date">{time}</p4>
          <p3 className="reff-mail">{refferal.mail}</p3>

        </div>

      </div>


    </div>)

  }


  return (
    <div className='background-con'>


      <div className="logout-main-con">
        <ProfileLinksComponent />
        <div className='reff-top-con'>
          <div className='reff-top'>


            <div className="reff-headings">
              <h4>Earn Tokens To your Wallet</h4>
              <p3 className="ref-dec">Check discord/telegram to know about the airdrop rewards</p3>
              <div className='reff-share-con'>
                <div className='reff-copy'>
                  <p2 className="reff-cpy-nbr">{referralCode}</p2>
                  <p4 className="reff-cpy" onClick={handleCopyClick}>{copyClick ? <p style={{ color: 'green' }}>copied</p> : <p>copy</p>}</p4>

                </div>
                <button type="button" className='share-ref-btn' onClick={onSharePress}>SHARE</button>
                {/* <div className='social-share' style={{ display: social ? 'block' : 'none' }}>
                                    <a className='btn btn-outline-primary' href="https://api.whatsapp.com/send?text=<TEXT>%20<URL>" target="_blank">whatsap</a><br />

                                </div> */}

              </div>

            </div>
            <div>
              <Image src={earnTokenImg} alt="" height={"auto"} width={""} />
            </div>


          </div>
          <div className='refferals-list'>
            <h5 className='reff-cpy-nbr'>Your Referral List</h5>
            <div className='list-out'>
              {/* <div className='reff-card'>
                <div className='reff-details'>


                  <Image src={sebastianImg} alt="" height={"auto"} width={"auto"} />
                  <div className='reff-address'>
                    <h1 className='reff-name'>{refname}</h1>
                    <p className='ref-user'>{refwallet}</p>

                  </div>
                </div>
                <div className='reff-email'>
                  <p4 className="reff-date">{formattedDate}</p4>
                  <p3 className="reff-mail">{refmail}</p3>

                </div>

              </div> */}

              {
                dataArraylist.map((each, index) => (

                  <Refferallist key={index} refferal={each} />


                )

                )
              }

              {dataArraylist.length == 0 && <p style={{ color: "white", textAlign: 'center' }}>No referrals Yet</p>}
            </div>



          </div>
        </div>

      </div>


    </div>
  )
}

export default RefferalsComponent
