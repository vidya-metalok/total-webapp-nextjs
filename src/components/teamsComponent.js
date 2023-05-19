import React, { useEffect, useState, useRef } from "react";
import { useCallback } from 'react';
import Web3 from "web3";

import Chart from 'chart.js/auto';
import { BarController, BarElement, CategoryScale, LinearScale, Title, DoughnutController, ArcElement } from 'chart.js';
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, DoughnutController, ArcElement);

// import deposit from "../../public/images/Arrow 1.png";
// import withdraw from "../../public/images/arrow2.png";

import deposit from "../../public/images/arrow-1.svg";
import withdraw from "../../public/images/arrow-2.svg";
import status from "../../public/images/status-img.jpeg";

import Image from "next/image";
import Sidebar from "./sidebarComponent";
// var money = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/setting-4.png"


// import rajasthanBanner from "../../public/images/rajsthan-royals_banner.png";


var rajasthanFlag = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/Flag_of_rajasthan.png"


var rajasthanLogo = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rajasthanRoyals.png"

var frameLogo = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/Frame.png"
// var dhoniImg = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/Group 41318.png"
var bengaloreImg = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/royalChallengersBangalore.png"
// var delhi = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/delhi.png"
// var king = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/king.png"
// var down = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/drop-down.png"
var settings = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/setting-4.png"


// import rajasthanFlag from "../../public/images/Flag_of_rajasthan.png";
// import rajasthanLogo from "../../public/images/rajasthanRoyals.png";
// import frameLogo from "../../public/images/Frame.png";
// import dhoniImg from "../../public/images/Group 41318.png";
// import bengaloreImg from "../../public/images/royalChallengersBangalore.png";
import candleStickImg from "../../public/images/candle-stick.jpeg";
import delhi from "../../public/images/delhi.png";
import king from "../../public/images/king.png";
import down from "../../public/images/drop-down.png";
import { useRouter } from "next/router";
import firestore, { getFirestore } from "firebase/firestore";
// import settings from "../../public/images/setting-4.png";


import "firebase/firestore";
import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

var rajasthanBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rajsthan-royals_banner.png"
var rcbBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rcbBanner.png"
var cskBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/cskBanner.png"
var delhiBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/delhiBanner.png"
var gujarathBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/gtBanner.png"
var sunriseBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/hsvBanner.png"
var kkrBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/kkrBanner.png"
var lkBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/lkBanner.png"
var mumbaiBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/mumbaiBanner.png"
var punjabBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/psvBanner.png"
var rsvcBanner = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rrBanner.png";


import dhoniImg from "../../public/images/dhoniImg.svg"
import transArr from "../../public/images/trans-hist-arr.svg"





// import rcbBanner from "../../public/images/rcbBanner.png";
// import cskBanner from "../../public/images/cskBanner.png";
// import delhiBanner from "../../public/images/delhiBanner.png";
// import gujarathBanner from "../../public/images/gtBanner.png";
// import sunriseBanner from "../../public/images/hsvBanner.png";
// import kkrBanner from "../../public/images/kkrBanner.png";
// import lkBanner from "../../public/images/lkBanner.png";
// import mumbaiBanner from "../../public/images/mumbaiBanner.png";
// import punjabBanner from "../../public/images/psvBanner.png";
// import rsvcBanner from "../../public/images/rrBanner.png";

var delhiCapital = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/delhicapital.png";
var chennaiSupers = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/chennaiSuperkings.png";
var rcbs = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rcb logo.png";
var mumbaiIndia = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/mumbaiIndians.png";
var rajasthanRoyals = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rajasthanRoyals.png";
var punjabKings = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/punjabKings.png";
var sunrisers = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sunrisers.png";
var kkr = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/kkr.png";
var lk = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/lk.jpg";
var gt = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/gt.png";



import CandleStickChart from "./candleStickChart";
import BuySellComponent from "./buySellComponent";
import TransactionHistoryComponent from "./transactionHistoryComponent";
import PortFolioComponent from "./portfolioComponent";
import BarComponent from "./barComponent";
import ReverseChart from "./reverseChart";
import { useSelector } from "react-redux";
const TeamsComponent = (props) => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const userLogin = useSelector((store) => store?.user?.loginInfo)
  let str = userLogin?.walletAddress;
  console.log("str...", str, userLogin)
  let len = str?.length;
  let start = Math.floor(len - 7);
  // let end = start + 40;
  let walletaddress = str?.substring(0, 7) + "*****" + str?.substring(start, len);

  console.log("details....", userLogin)
  console.log("teamsComponentProps...", props);
  console.log("propsEachToken...", props.tokenDetails);
  const banner = [
    rcbBanner,
    cskBanner,
    delhiBanner,
    gujarathBanner,
    sunriseBanner,
    kkrBanner,
    lkBanner,
    mumbaiBanner,
    punjabBanner,
    rsvcBanner,
  ];

  const allteamLogo = [
    rcbs,
    chennaiSupers,
    delhiCapital,
    gt,
    sunrisers,
    kkr,
    lk,
    mumbaiIndia,
    punjabKings,
    rajasthanRoyals,



  ]

  const teamsLogo = allteamLogo[props.tokenDetails.id];
  // console.log("lis.....", banner[props.tokenDetails.id]);
  const broadImg = banner[props.tokenDetails.id];
  // console.log("immmmm....", broadImg);

  const { tokenName, tokenKey, teamName, teamShortName } = props.tokenDetails;
  const teams = [
    {
      id: "0",
      teamImg: dhoniImg,
      teamsName: "MS DHONI",
      teamRole: "Batsman",
      teamBest: "Best: 100*",
      teamsSr: "150",
    },

    {
      id: "1",
      teamImg: dhoniImg,
      teamsName: "MS DHONI",
      teamRole: "Batsman",
      teamBest: "Best: 100*",
      teamsSr: "150",
    },
    {
      id: "3",
      teamImg: dhoniImg,
      teamsName: "MS DHONI",
      teamRole: "Batsman",
      teamBest: "Best: 100*",
      teamsSr: "150",
    },
    {
      id: "4",
      teamImg: dhoniImg,
      teamsName: "MS DHONI",
      teamRole: "Batsman",
      teamBest: "Best: 100*",
      teamsSr: "150",
    },
    {
      id: "5",
      teamImg: dhoniImg,
      teamsName: "MS DHONI",
      teamRole: "Batsman",
      teamBest: "Best : 100*",
      teamsSr: "150",
    },
  ];

  const matches = [
    {
      id: "1",
      match1Img: rajasthanLogo,
      match2Img: bengaloreImg,
      matchName: "Match 2",
      matchLost: "by 2 runs"
    },

    {
      id: "2",
      match1Img: rajasthanLogo,
      match2Img: bengaloreImg,
      matchName: "Match 2",
      matchLost: "by 2 runs"
    },
    {
      id: "3",
      match1Img: rajasthanLogo,
      match2Img: bengaloreImg,
      matchName: "Match 2",
      matchLost: "by 2 runs"
    },
    {
      id: "4",
      match1Img: rajasthanLogo,
      match2Img: bengaloreImg,
      matchName: "Match 2",
      matchLost: "by 2 runs"
    },
    {
      id: "5",
      match1Img: rajasthanLogo,
      match2Img: bengaloreImg,
      matchName: "Match 2",
      matchLost: "by 2 runs"
    },
  ];
  const shedule = [
    {
      id: "1",
      match: "50th match - Delhi",
      matchDate: "Sat | 14th Feb",
      match1Img: delhi,
      match2Img: king,
      matchTime: "7:35 PM",
    },

    {
      id: "2",
      match: "50th match - Delhi",
      matchDate: "Sat | 14th Feb",
      match1Img: delhi,
      match2Img: king,
      matchTime: " 7:35 PM",
    },
    {
      id: "3",
      match: "50th match - Delhi",
      matchDate: "Sat | 14th Feb",
      match1Img: delhi,
      match2Img: king,
      matchTime: "7:35 PM",
    },
    {
      id: "4",
      match: "50th match - Delhi",
      matchDate: "Sat | 14th Feb",
      match1Img: delhi,
      match2Img: king,
      matchTime: "7:35 PM",
    },
    {
      id: "5",
      match: "50th match - Delhi",
      matchDate: "Sat | 14th Feb",
      match1Img: delhi,
      match2Img: king,
      matchTime: "7:35 PM",
    },
  ];

  const [matchHistory, setMatchHistory] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const matchHistoryRef = doc(firestore, "IPLStats", tokenKey);
        const unsubscribe = onSnapshot(matchHistoryRef, (doc) => {
          if (doc.exists()) {
            setMatchHistory(doc.data());
            console.log("====================================");
            console.log(doc.data());
            console.log("====================================");
          } else {
            console.log("No matching documents");
          }
        });
        return () => unsubscribe();
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };

    fetchData();
  });

  console.log("matchData....", matchHistory);

  // main div-----------------
  const [historyclick, sethistoryclick] = useState(true);
  const [matchpointclick, setmatchpointclick] = useState(false);

  const matchClick = () => {
    sethistoryclick(true);
    setmatchpointclick(false);
  };

  const matchPointClick = () => {
    sethistoryclick(false);
    setmatchpointclick(true);
  };

  // new added 25-05 ------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const [teamclick, setteamclick] = useState(true);
  const [sheduleclick, setsheduleclick] = useState(false);
  const teamClick = () => {
    setteamclick(true);
    setsheduleclick(false);
  };
  const sheduleClick = () => {
    setteamclick(false);
    setsheduleclick(true);
  };

  const [transactionclick, settransactionclick] = useState(true);
  const [tockenclick, settockenclick] = useState(false);
  const transactionClick = () => {
    settransactionclick(true);
    settockenclick(false);
  };
  const tockenClick = () => {
    settransactionclick(false);
    settockenclick(true);
  };


  const [transactionData, setTransactionData] = useState([]);
  const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";

  const web3 = new Web3(
    "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF"
  );

  const Card = ({
    hash,
    value,
    timeStamp,
    tokenDecimal,
    toAddress,
    tokenSymbol,
  }) => {
    let str = hash;
    let len = str.length;
    let start = Math.floor(len - 7);
    let hashed = str.substring(0, 7) + "**" + str.substring(start, len);

    let readableValue;
    if (tokenDecimal == "18") {
      readableValue = parseFloat(
        web3.utils.fromWei(value.toString(), "ether")
      ).toFixed(2);
    } else {
      readableValue = parseFloat(
        web3.utils.fromWei(value.toString(), "mwei")
      ).toFixed(2);
    }

    let unix_timestamp = timeStamp;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var day = date.getDate();
    var formattedDate = day + "/" + month + "/" + year;
    var formattedTime = hours + ":" + minutes.substr(-2);

    return (
      <>

        <td>
          <div className="trans-type-con">
            <h3 className="trans-type">
              {web3.utils.toChecksumAddress(toAddress) == userWallet ? (
                <Image src={deposit} alt="image" height={28} width={28} className="transaction-send-res" />
              ) : (
                <Image src={withdraw} alt="image" height={28} width={28} className="transaction-send-res" />
              )}
            </h3>

            <div style={{ marginLeft: "1rem" }}>
              <h3 className="trans-type">
                {web3.utils.toChecksumAddress(toAddress) == userWallet
                  ? "Deposited"
                  : "Withdrawal"}
              </h3>
              <p>Tax no : {hashed}</p>
            </div>
          </div>
        </td>

        <td className="price-type">{/* {each["price-type"]} */}</td>

        <td className="token-value">{tokenSymbol}</td>

        <td className="trans-amount">{readableValue}</td>

        <td className="trans-date">{formattedDate}</td>

        <td className="trans-date">{formattedTime}</td>

        <td className="trans-status">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={status}
              alt=""
              height={20}
              width={20}
              style={{ borderRadius: "50%", marginRight: "9px" }}
            />
            <h3 className="completed-text">completed</h3>
          </div>
        </td>
      </>
    );
  };




  const getData = useCallback(async () => {
    await fetch(
      `https://api.polygonscan.com/api?module=account&action=tokentx&address=${userWallet}&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=N4TSUTNEH5PWADHEH9HBHAMJ6F5Q81IJNG`
    )
      .then((res) => res.json())
      .then((json) => {
        setTransactionData(json.result);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  // new added 03-05
  // const config = {
  //   type: 'bar',
  //   data: data,
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Bar Chart'
  //       }
  //     }
  //   },
  // };

  // const DATA_COUNT = 7;
  // const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

  // const labels = Utils.months({count: 7});
  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: Utils.numbers(NUMBER_CFG),
  //       borderColor: Utils.CHART_COLORS.red,
  //       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: Utils.numbers(NUMBER_CFG),
  //       borderColor: Utils.CHART_COLORS.blue,
  //       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
  //     }
  //   ]
  // }; 

  const teamHistTabClass = transactionclick ? "team-hist-active" : "team-hist-not-active"
  const teamPlTabClass = tockenclick ? "team-hist-active" : "team-hist-not-active"




  return (
    <>
      <div className="teams-page-main-con">
        {/* <Sidebar /> */}
        <div className="teams-left-con">
          <div className="teams-banner">
            <Image
              className="banner-img"
              src={broadImg}
              alt=""
              height={300}
              width={600}
            />
            <div className="teams-name-con">
              <Image
                className="banner-logo"
                src={teamsLogo}
                alt=""
                height={40}
                width={40}
                style={{ borderRadius: "50px" }}
              />
              <div className="team-name-details">
                <h3>{teamName}</h3>
                <p>{teamShortName}</p>
              </div>
            </div>
          </div>
          <div className="teams-holdings-con">
            <div className="team-hold-card">
              <div className="teams-hold-details">
                <h3>Token Address</h3>
                <p>{walletaddress}</p>
              </div>
              <Image src={frameLogo} alt="" height={30} width={30} />
            </div>

            <div className="team-holding-value">
              <h3>My Holdings</h3>
              <p>216 Tokens</p>
            </div>

            <div className="team-holding-value">
              <h3>Holdings Value</h3>
              <p className="hodlingval-1">$54,216</p>
            </div>

            <div className="team-holding-value">
              <h3>24 Hour change</h3>
              <p className="hodlingval-1">+2.32%</p>
            </div>
          </div>
          <div>
            <CandleStickChart />
          </div>

          <div className="teams-buysell">
            <BuySellComponent />
          </div>
        </div>

        <div className="teams-right-con">

          <div className="team-matches-hist">
            <div className="d-flex gap-4">
              <h2 onClick={teamClick} style={{ color: teamclick ? "white" : '#5a5967' }}> Teams </h2>
              <h2 onClick={sheduleClick} style={{ color: teamclick ? "#5a5967" : ' white' }}> Shedule</h2>
            </div>

            {teamclick && (
              <div className="teams-right-teams">
                {teams.map((each, index) => (
                  <>
                    <div className="bastman-main-con mb-5" key={index}>
                      <div className="bastman-img-con">
                        <Image src={each.teamImg} alt="" height={50} width={50} />
                        <div className="bastman-details">
                          <h3>{each.teamsName}</h3>
                          <p>{each.teamRole}</p>
                        </div>
                      </div>

                      <div className="bastman-best">
                        <h3>{each.teamBest}</h3>
                        <p>SR : {each.teamsSr}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}

            {sheduleclick && (
              <div>
                <div className="match table-responsive">

                  <table>
                    {shedule.map((each, index) => (
                      <>
                        <div className="match-t-border"></div>
                        <div className="match-t">

                          <h4 colspan="3" className="match-title">{each.match}</h4>

                          <tr>
                            <th>
                              <p className="d-time">{each.matchDate}</p>
                              <p className="d-time"> {each.matchTime}</p>
                            </th>
                            <th>
                              <div className="delhi-c">
                                <Image src={each.match1Img} alt="" height={50} width={50} />
                              </div>
                            </th>
                            <th><div className="verse">VS</div> </th>
                            <th>
                              <div className="delhi-c">
                                <Image src={each.match2Img} alt="" height={60} width={60} />
                              </div>
                            </th>
                          </tr>
                        </div>

                      </>
                    ))}
                  </table>
                </div>
              </div>
            )}
          </div>



          {/* main section ---------------------------------------------------------------------------------------------------- */}
          <div className="team-matches-hist-1">
            <div className="d-flex gap-4">
              <h2 onClick={matchClick} style={{ color: historyclick ? "white" : '#5a5967' }}> Match History</h2>
              <h2 onClick={matchPointClick} style={{ color: historyclick ? "#5a5967" : 'white' }}> Points Table</h2>
            </div>
            {/* <div className="single-team-hist">
                            <div className="single-team-titles">
                                <h3>P</h3>
                                <h3>W</h3>
                                <h3>L</h3>
                                <h3>Pts</h3>
                                <h3>NRR</h3>
                            </div>
                            <div className="single-team-score">
                                <p>{matchHistory.won}</p>
                                <p>{matchHistory.team_code}</p>
                                <p>{matchHistory.played}</p>
                                <p>{matchHistory.won}</p>
                                <p>{matchHistory.lost}</p>
                                <p>{matchHistory.points}</p>
                                <p>{matchHistory.net_run_rate}</p>
                            </div>
                        </div> */}

            {historyclick && (
              <div style={{ marginTop: "1rem " }}>
                {matches.map((each, index) => (
                  <div key={index} className="matches-hist-card">
                    <div>
                      <h3>{each.matchName}</h3>
                    </div>

                    <div className="hist-img-con">
                      <Image
                        src={each.match1Img}
                        alt=""
                        height={30}
                        width={30} style={{ marginRight: "1rem" }}
                      />
                      <h4 className="match-sub-title" style={{ marginRight: "1rem" }}>
                        Vs{" "}

                      </h4>
                      <Image
                        src={each.match2Img}
                        alt=""
                        height={30}
                        width={30}
                        style={{ marginRight: "1rem" }}
                      />
                    </div>
                    <div>
                      {/* <h3>
                        <span className="match-lost-txt">Lost</span>{" "} 
                        {each.matchLost}
                      </h3> */}
                      <h4>
                        Lost
                        <span className="match-lost-txt-1"> {each.matchLost}</span>{" "}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {matchpointclick && (
              <div>
                {/* {matches.map((each, index) => (
                             <div key={index} className="matches-hist-card">
                                 <h3>{each.matchName}</h3>
                                 <div className="hist-img-con">
                                     <Image src={each.match1Img} alt="" height={30} width={30} />
                                     <p>
                                         vs{" "}
                                         <Image
                                             src={each.match2Img}
                                             alt=""
                                             height={30}
                                             width={30}
                                             style={{ marginLeft: "1rem" }}
                                         />
                                     </p>


                                 </div>
                                 <p>
                                     <span className="match-lost-txt">Lost</span> {each.matchLost}
                                 </p>
                             </div>
                         ))} */}

                <div className="single-team-hist">
                  <div className="single-team-titles">
                    <h3>P</h3>
                    <h3>W</h3>
                    <h3>L</h3>
                    <h3>Pts</h3>
                    <h3>NRR</h3>
                  </div>
                  <div className="single-team-score">
                    <p>{matchHistory.won}</p>
                    <p>{matchHistory.team_code}</p>
                    <p>{matchHistory.played}</p>
                    <p>{matchHistory.won}</p>
                    <p>{matchHistory.lost}</p>
                    <p>{matchHistory.points}</p>
                    <p>{matchHistory.net_run_rate}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
      <br />
      <br />


      {/* new added transaction history ----------------------------------------------------------------------------------- */}
      <div className="history-titles">
        <div className="tocken-title">
          <h3 onClick={transactionClick} className={`${teamHistTabClass}`}>Transaction History</h3>
          <h3 onClick={tockenClick} className={`${teamPlTabClass}`}>Token P & L</h3>
        </div>
        {transactionclick && (
          <div className="his-img-con">
            <Image src={settings} alt="" height={20} width={20} />
            <p>Token Transaction</p>
          </div>



        )


        }


      </div>

      {transactionclick && (
        <div className="">
          <div className="transaction-main">
            <div className="t-history table-responsive">
              <table>
                <tr>
                  <th>Transaction Type</th>
                  <th>Type</th>
                  <th>Tokens</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
                <tbody>
                  {transactionData.map((each, index) => (
                    <tr key={index}>
                      <Card
                        hash={each.hash}
                        value={each.value}
                        timeStamp={each.timeStamp}
                        tokenDecimal={each.tokenDecimal}
                        toAddress={each.to}
                        tokenSymbol={each.tokenSymbol}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {tockenclick && (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 tocken-pl">

                <div className="tocken-bar-head">
                  <h3>Token Profit & loss analysis breakdown</h3>
                  {/* <div className="token-week">
                    <p>Weekly</p>
                    <Image src={down} alt="" height={10} width={10} />
                  </div> */}

                  <div onClick={() => setOpenDropDown(!openDropDown)} className="trans-settings">
                    <div>
                      <h6>Weekly</h6>
                    </div>

                    <div>
                      <Image src={transArr} alt="" height={15} width={15} />
                    </div>

                  </div>
                </div>
                {openDropDown && (
                  <div className="chart-hist" >
                    <p>weekly</p>
                    <p>monthly</p>
                    <p>yearly</p>
                  </div>
                )}
                <div className="bar-main">
                  <div className="bar-graph">

                    {/* <ReverseChart/> */}
                    {/* <br/> */}
                    {/* <br/> */}

                    <BarComponent />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div >
      )}

      {/* <PortFolioComponent/> */}



    </>
  );
};

export default TeamsComponent;
