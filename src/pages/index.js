import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Inter } from 'next/font/google'
import db from "../firestore/fireConfig";
import Web3 from 'web3';
import abi from "../../abis/abi.json"

// import { collection, onSnapshot, query, getDocs, doc, getDoc, orderBy } from "firebase/firestore"
// import { allPrices, allIplMatches } from "../../src/components/redux/priceAndMatchesSlicer"
import firebase from 'firebase/app';

import 'bootstrap/dist/css/bootstrap.min.css';


import { collection, onSnapshot, query, getDocs, getDoc, doc, Query, orderBy } from "firebase/firestore"
import { allPrices, allIplMatches } from "../components/redux/priceAndMatchesSlicer"
import { tokenOneFetch } from "../components/redux/tokenSlicer/tokenOneSlice"

import { useRouter } from 'next/router';

// const inter = Inter({ subsets: ['latin'] })

import LoginPage from './loginpage';
import { tokenTwoFetch } from '@/components/redux/tokenSlicer/tokenTwoSlice';
import { tokenThreeFetch } from '@/components/redux/tokenSlicer/tokenThreeSlice';
import { tokenFourFetch } from '@/components/redux/tokenSlicer/tokenFourSlice';
import { tokenFiveFetch } from '@/components/redux/tokenSlicer/tokenFiveSlice';
import { tokenSixFetch } from '@/components/redux/tokenSlicer/tokenSixSlice';
import { tokenSevenFetch } from '@/components/redux/tokenSlicer/tokenSevenSlice';
import { tokenEightFetch } from '@/components/redux/tokenSlicer/tokenEightSlice';
import { tokenTenFetch } from '@/components/redux/tokenSlicer/tokenTenSlice';
import { tokenNineFetch } from '@/components/redux/tokenSlicer/tokenNineSlice';
// import Feedbackpage from './feedbackpage';
// import CommunityPage from "./communitypage"

// import Faqspage from './faqspage';
// import Refferalspage from "./refferalspage"a

import { LoginAuthenticate } from '../components/loginAuthenticate';
import { bsvFetch } from '@/components/redux/walletSlicer/bsvcSlice';
import { csvFetch } from '@/components/redux/walletSlicer/csvcSlice';
import { dsvFetch } from '@/components/redux/walletSlicer/dsvcSlice';
import { gsvFetch } from '@/components/redux/walletSlicer/gsvcSlice';
import { hsvFetch } from '@/components/redux/walletSlicer/hsvcSlice';
import { ksvFetch } from '@/components/redux/walletSlicer/ksvcSlice';
import { lsvFetch } from '@/components/redux/walletSlicer/lsvcSlice';
import { msvFetch } from '@/components/redux/walletSlicer/msvcSlice';
import { psvFetch } from '@/components/redux/walletSlicer/psvcSlice';
import { rsvFetch } from '@/components/redux/walletSlicer/rsvcSlice';


const Home = (props) => {
  // LoginAuthenticate()
  const router = useRouter()
  const mustafa_wallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D"
  const dispatch = useDispatch()
  const fireUserWallet = useSelector((store) => store?.user?.loginInfo?.walletAddress)
  const web3 = new Web3(
    'https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF',
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWalletBalance = async (tokenAddress, walletAddress) => {
    if (walletAddress) {
      try {
        let contrct = new web3.eth.Contract(abi, tokenAddress);
        const USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'; //  USDT token address
        var tmp = await contrct.methods.balanceOf(walletAddress).call({ from: walletAddress });
        let balance = contrct.options.address == USDT ?
          web3.utils.fromWei(tmp, 'ether') : web3.utils.fromWei(tmp, 'ether');
        return parseFloat(balance).toFixed(3)
      }
      catch (error) {
        // Handle the error gracefully
        console.error('An error occurred during contract interaction:', error);
        // Return a default or fallback value to display in the frontend
        return '';

      }

    }
    else {
      // Handle the case when userWallet is undefined or has an invalid value
      console.error('Invalid user wallet address');
      return 'N/A';
    }


  }


  useEffect(() => {
    const f = async () => {

      let i = await getWalletBalance("0xb39370D66472cD8e25E542b7FaE4C641f89d1a3c", fireUserWallet)
      dispatch(bsvFetch(i))
      let j = await getWalletBalance("0xb90ed1bd876ab378b001b702b38a73fb39e23d25", fireUserWallet)
      dispatch(csvFetch(j))
      let k = await getWalletBalance("0xb39370d66472cd8e25e542b7fae4c641f89d1a3c", fireUserWallet)
      dispatch(dsvFetch(k))
      let l = await getWalletBalance("0x34141d62b66857d409e3eefb7c07eb23cf98b06f", fireUserWallet)
      dispatch(gsvFetch(l))

      let m = await getWalletBalance("0x9dbe1a074cf62d3b276eedd54952d179299a4892", fireUserWallet)
      dispatch(hsvFetch(m))
      let n = await getWalletBalance("0xeea6661a8f6d5bdb83c3bb5cd0684bf8bf841952", fireUserWallet)
      dispatch(ksvFetch(n))
      let x = await getWalletBalance("0x3edc3c21e798d0cc2336500871abeb05e3cb5166", fireUserWallet)
      dispatch(lsvFetch(x))
      let p = await getWalletBalance("0x33e5dfe148ace06a2c9acee17f59d7aba07e1da3", fireUserWallet)
      dispatch(msvFetch(p))

      let q = await getWalletBalance("0x6b32f2a2c0484eb7f7f089dd45ccc33291317ab0", fireUserWallet)
      dispatch(psvFetch(q))
      let z = await getWalletBalance("0x4ced951389405decf9e82efaba1854e109b93c38", fireUserWallet)
      dispatch(rsvFetch(z))

    }
    f()

  }, [dispatch, fireUserWallet, getWalletBalance])
  console.log("main....", props)


  console.log("propsFetch...", props.iplMatches)
  useEffect(() => {
    dispatch(allPrices(props.prices))
    dispatch(allIplMatches(props.iplMatches))
    dispatch(tokenOneFetch(props.BSVC))
    dispatch(tokenTwoFetch(props.CSVC))
    dispatch(tokenThreeFetch(props.DSVC))
    dispatch(tokenFourFetch(props.GSVC))
    dispatch(tokenFiveFetch(props.HSVC))
    dispatch(tokenSixFetch(props.KSVC))
    dispatch(tokenSevenFetch(props.LSVC))
    dispatch(tokenEightFetch(props.MSVC))
    dispatch(tokenNineFetch(props.PSVC))
    dispatch(tokenTenFetch(props.RSVC))

  }, [props])

  return (
    <>


      {/* <button onClick={() => router.push({
        query: {
          sidebarId: "10233"
        }, pathname: "/sidebar"
      })} >Next</button> */}
      {/* <DashBoardPage /> */}
      <LoginPage />
      {/* <CandleStickPage /> */}
      {/* <Feedbackpage /> */}
      {/* <CommunityPage /> */}
      {/* <Faqspage /> */}
      {/* <Refferalspage /> */}

    </>
  )
}
export default Home

export const getServerSideProps = async () => {
  const priceFetch = {
    collectionName: 'Price',
    propName: 'prices',
  };

  const iplMatchesFetch = {
    collectionName: 'IPLMatches',
    propName: 'iplMatches',
  };

  const fetchedData = {};
  const fetchRsvcData = async () => {
    const newRsvcRef = doc(db, "Price", "RSVC");
    const newRsvcSnap = await getDoc(newRsvcRef);
    console.log("newDoc...", newRsvcSnap)

    if (newRsvcSnap.exists()) {
      const newRsvcValue = JSON.parse(JSON.stringify(newRsvcSnap.data()));
      fetchedData["RSVC"] = newRsvcValue


    }
    else {
      console.log("No such document!");

    }

  }

  const fetchPsvcData = async () => {
    const newPsvcRef = doc(db, "Price", "PSVC");
    const newPsvcSnap = await getDoc(newPsvcRef);
    console.log("newDoc...", newPsvcSnap)

    if (newPsvcSnap.exists()) {
      const newPsvcValue = JSON.parse(JSON.stringify(newPsvcSnap.data()));
      fetchedData["PSVC"] = newPsvcValue


    }
    else {
      console.log("No such document!");

    }

  }

  const fetchMsvcData = async () => {
    const newMsvcRef = doc(db, "Price", "MSVC");
    const newMsvcSnap = await getDoc(newMsvcRef);
    console.log("newDoc...", newMsvcSnap)

    if (newMsvcSnap.exists()) {
      const newMsvcValue = JSON.parse(JSON.stringify(newMsvcSnap.data()));
      fetchedData["MSVC"] = newMsvcValue


    }
    else {
      console.log("No such document!");

    }

  }

  const fetchLsvcData = async () => {
    const newLsvcRef = doc(db, "Price", "LSVC");
    const newLsvcSnap = await getDoc(newLsvcRef);
    console.log("newDoc...", newLsvcSnap)

    if (newLsvcSnap.exists()) {
      const newLsvcValue = JSON.parse(JSON.stringify(newLsvcSnap.data()));
      fetchedData["LSVC"] = newLsvcValue


    }
    else {
      console.log("No such document!");

    }

  }

  const fetchKsvcData = async () => {
    const newKsvcRef = doc(db, "Price", "KSVC");
    const newKsvcSnap = await getDoc(newKsvcRef);
    console.log("newDoc...", newKsvcSnap)

    if (newKsvcSnap.exists()) {
      const newKsvcValue = JSON.parse(JSON.stringify(newKsvcSnap.data()));
      fetchedData["KSVC"] = newKsvcValue


    }
    else {
      console.log("No such document!");

    }

  }

  const fetchHsvcData = async () => {
    const newHsvcRef = doc(db, "Price", "HSVC");
    const newHsvcSnap = await getDoc(newHsvcRef);
    console.log("newHoc...", newHsvcSnap)

    if (newHsvcSnap.exists()) {
      const newHsvcValue = JSON.parse(JSON.stringify(newHsvcSnap.data()));
      fetchedData["HSVC"] = newHsvcValue


    }
    else {
      console.log("No such document!");

    }

  }

  const fetchGsvcData = async () => {
    const newGsvcRef = doc(db, "Price", "GSVC");
    const newGsvcSnap = await getDoc(newGsvcRef);
    console.log("newGoc...", newGsvcSnap)

    if (newGsvcSnap.exists()) {
      const newGsvcValue = JSON.parse(JSON.stringify(newGsvcSnap.data()));
      fetchedData["GSVC"] = newGsvcValue


    }
    else {
      console.log("No such document!");

    }

  }
  const fetchDsvcData = async () => {
    const newDsvcRef = doc(db, "Price", "DSVC");
    const newDsvcSnap = await getDoc(newDsvcRef);
    console.log("newDoc...", newDsvcSnap)

    if (newDsvcSnap.exists()) {
      const newDsvcValue = JSON.parse(JSON.stringify(newDsvcSnap.data()));
      fetchedData["DSVC"] = newDsvcValue


    }
    else {
      console.log("No such document!");

    }

  }
  const fetchBsvcData = async () => {
    const newBsvcRef = doc(db, "Price", "BSVC");
    const newBsvcSnap = await getDoc(newBsvcRef);
    console.log("newDoc...", newBsvcSnap);

    if (newBsvcSnap.exists()) {
      const newBsvcValue = JSON.parse(JSON.stringify(newBsvcSnap.data()));
      fetchedData["BSVC"] = newBsvcValue


    }
    else {
      console.log("No such document!");

    }

  }
  const fetchCsvcData = async () => {
    const newDocRef = doc(db, "Price", "CSVC");
    const newDocSnap = await getDoc(newDocRef);
    console.log("newDoc...", newDocSnap)

    if (newDocSnap.exists()) {
      const newCsvcValue = JSON.parse(JSON.stringify(newDocSnap.data()));
      fetchedData["CSVC"] = newCsvcValue


    }
    else {
      console.log("No such document!");

    }

  }
  const fetchPriceData = async () => {
    const colRef = collection(db, priceFetch.collectionName);
    const querySnapshot = await getDocs(colRef);
    const data = querySnapshot.docs.map((doc) => doc.data());

    fetchedData[priceFetch.propName] = JSON.parse(JSON.stringify(data));
  };

  const fetchIplMatchesData = async () => {
    const colRef = collection(db, iplMatchesFetch.collectionName);
    const querySnapshot = await getDocs(query(colRef, orderBy("start_at", "asc")));
    const data = querySnapshot.docs.map((doc) => doc.data());

    fetchedData[iplMatchesFetch.propName] = JSON.parse(JSON.stringify(data));
  };

  await Promise.all([fetchPriceData(), fetchIplMatchesData(), fetchBsvcData(), fetchCsvcData(), fetchDsvcData(), fetchGsvcData(), fetchHsvcData(), fetchKsvcData(), fetchLsvcData(), fetchMsvcData(), fetchPsvcData(), fetchRsvcData()]);

  return { props: fetchedData };
}

