import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Inter } from 'next/font/google'
import db from "../firestore/fireConfig";

import 'bootstrap/dist/css/bootstrap.min.css';


import { collection, onSnapshot, query, getDocs, getDoc, doc, Query, orderBy } from "firebase/firestore"
import { allPrices, allIplMatches } from "../components/redux/priceAndMatchesSlicer"
import { tokenOneFetch } from "../components/redux/tokenSlicer/tokenOneSlice"

import { useRouter } from 'next/router';

// const inter = Inter({ subsets: ['latin'] })

import LoginPage from './loginpage';
// import Feedbackpage from './feedbackpage';
// import CommunityPage from "./communitypage"

// import Faqspage from './faqspage';
// import Refferalspage from "./refferalspage"a


const Home = () => {
  // const router = useRouter()
  // const fireUserWallet = useSelector((store) => store?.user?.loginInfo?.email)
  // console.log("logo...", fireUserWallet)

  // if (fireUserWallet !== "") {
  //   router.push("/dashboardpage")

// }
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



// export const getServerSideProps = () => {
//   if (fireUserWallet) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };

// }
