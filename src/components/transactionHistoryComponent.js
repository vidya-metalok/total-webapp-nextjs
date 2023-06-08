import React from 'react'
import settings from "../../public/images/setting-4.png";
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Web3 from "web3";
import qs from "qs";
import abi from "../../abis/abi.json";// import deposit from "../../public/images/Arrow 1.png";
// import withdraw from "../../public/images/arrow2.png";
// import status from "../../public/images/status-img.jpeg";
// var withdraw = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/arrow2.png";
import withdraw from '../../public/images/arrow-2.svg'
var status = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/status-img.jpeg";
// var deposit = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/Arrow 1.png";
import deposit from '../../public/images/arrow-1.svg'

import cskdhoni from "../../public/images/cskdhoni.png";

import hydekohili from "../../public/images/hydekohili.png";
import transSettings from "../../public/images/setting-4.png"
import transArr from "../../public/images/trans-hist-arr.svg"

import {user} from "../components/redux/userSlice"
import { useSelector } from 'react-redux';
import transaction_nodata from '../../public/images/transiction-nodata-img.svg'


const TransactionHistoryComponent = (props) => {
    const { componentName } = props
    const [transactionData, setTransactionData] = useState([]);
    const [transHist, setTransHist] = useState(false)
    
    const walletAddress = useSelector((store)=>store?.user?.loginInfo?.walletAddress)
    console.log("tttttttttttttttttttttttttttttttttuserwallet" , walletAddress)
    // const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";
    const userWallet = walletAddress;

    //   const userWallet = useSelector((store) => store.user.loginInfo.walletAddress);

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
        // let end = start + 40;
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
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var months = [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
        ];
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        var day = date.getDate();
        var formattedDate = month + "/" + day + "/" + year;
        // Will display time in 10:30 format
        var formattedTime = hours + ":" + minutes.substr(-2);

        return (
            <>

                <td>
                    <div className="trans-type-con">
                        {/* <Image
                          src={each["type-url"]}
                          alt=""
                          height={25}
                          width={25}
                          className="type-img"
                        /> */}
                        {/* priyanka added this  from*/}

                        <h3 className="trans-type">
                            {web3.utils.toChecksumAddress(toAddress) == userWallet ? (
                                <Image src={deposit} alt="image" height={28} width={28} className='transaction-send-res' />
                            ) : (
                                <Image src={withdraw} alt="image" height={28} width={28} className='transaction-send-res' />
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

                {/* <td className="price-type">{each["price-type"]}</td> */}

                <td className="token-value">{tokenSymbol}</td>

                <td className="trans-amount"><span>₹</span>{readableValue}</td>

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
        // setLoading(true);
        await fetch(
            `https://api.polygonscan.com/api?module=account&action=tokentx&address=${userWallet}&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=N4TSUTNEH5PWADHEH9HBHAMJ6F5Q81IJNG`
        )
            .then((res) => res.json())
            .then((json) => {
                setTransactionData(json.result);
                // console.log("history : ",json.result);
                // setLoading(false);
            });
    }, []);
    console.log("checkDate...", transactionData)

    useEffect(() => {
        getData();
    }, [getData]);



    const matches = [
        {
            id: "0",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },

        {
            id: "1",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "3",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "4",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "5",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "6",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "7",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "8",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "9",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "10",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "11",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "12",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "13",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "14",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "15",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "16",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "17",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "18",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "19",
            match1Img: cskdhoni,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },
        {
            id: "20",
            match1Img: hydekohili,
            newstitle: "CSK v/s KKR (Yesterday)",
            newscontent: "Chennai Super Kings beat KKR by 2 wickets to claim top spot."
        },

    ];


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





    const histTabClass = historyclick ? "hist-active" : "hist-not-active"
    const newsTabClass = matchpointclick ? "hist-active" : "hist-not-active"
    console.log("activeTabs...", histTabClass, newsTabClass)

    return (

        <>
            {/* <div className="history-titles">
                <div>
                    <h3>Transaction History</h3>
                </div>
                <div className="his-img-con">
                    <Image src={settings} alt="" height={20} width={20} />
                    <p>Token Transaction</p>
                </div>
            </div>
            <div className="transaction-main">

                <div>
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
            </div> */}
            <div className="">

                <div className="transaction-tabs-div">
                    <div onClick={matchClick} style={{ position: 'relative' }}>
                        <h3 className={`${histTabClass}`} style={{ marginLeft: "30px" }}>Transaction History</h3>

                    </div>
                    {componentName == "wallet" && (
                        <>
                            <div className='trans-settings'>
                                <div>

                                    <Image src={transSettings} height={20.24} width="auto" alt="" />
                                </div>
                                <div onClick={() => setTransHist(!transHist)} className='trans-setting-con'>
                                    <div>
                                        <p>Token Transaction</p>

                                    </div>


                                    <div>

                                        <Image src={transArr} alt="" height={15} width={15} />
                                    </div>
                                </div>
                            </div>

                            {transHist && (
                                <div className='trans-list'>
                                    <p4>weekly</p4>
                                    <p4>Monthly</p4>
                                    <p4>Yearly</p4>
                                </div>

                            )}




                        </>

                    )}
                    {componentName !== "wallet" && (
                        <div onClick={matchPointClick} style={{ position: 'relative' }}>
                            <h3 className={`${newsTabClass}`}>Top News</h3>


                        </div>
                    )}
                </div>


                {historyclick && (
                    <div>
                        <div className="transaction-main table-responsive">
                            <div className='' style={{ height: "500px" }}>
                                <table>
                                    <tr className='transaction-header-sticky'>
                                        <th>Transaction Type</th>
                                        <th>Tokens</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                    {transactionData.length===0 ?

                                <div className='no-transiction' style={{display:transactionData.length===0 ? '' : 'none'}}>
                                <Image src={transaction_nodata } alt="img" height="250px" width="300px" />
                                    <h1 style={{color:'white'}}>You don’t have any<br/> transactions Made</h1>
                                </div>
                                  
                                    :
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
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {matchpointclick && componentName !== "wallet"(
                    <div>
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
                        <div>
                            {matches.map((each, index) => (
                                <div key={index} className="topnews-div" style={{ margin: "0.5rem" }}>
                                    {/* <h3>{each.matchName}</h3> */}
                                    <div className="topnews-subdiv">
                                        <Image src={each.match1Img} alt="" className="subdiv-topnew-img" />
                                        <div className="topnews-subdiv-child">
                                            <h4>{each.newstitle}</h4>
                                            <p>{each.newscontent}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                )}








            </div>
        </>
    )
}


export default TransactionHistoryComponent