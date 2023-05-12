import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Inter } from 'next/font/google'
import db from "../firestore/fireConfig";

import 'bootstrap/dist/css/bootstrap.min.css';


import { collection, onSnapshot, query, getDocs, getDoc, doc, Query, orderBy } from "firebase/firestore"
import { allPrices, allIplMatches } from "../components/redux/priceAndMatchesSlicer"
import { tokenOneFetch } from "../components/redux/tokenSlicer/tokenOneSlice"

import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

import LoginPage from './loginpage';


const Home = () => {


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

    </>
  )
}
export default Home

