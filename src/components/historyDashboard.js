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

var status = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/status-img.jpeg";

// var deposit = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/Arrow 1.png";

// import deposit from "../../public/images/Arrow 1.png"
// import withdraw from "../../public/images/arrow2.png"
import withdraw from '../../public/images/arrow-2.svg'
import deposit from '../../public/images/arrow-1.svg'

import cskdhoni from "../../public/images/cskdhoni.png";

import hydekohili from "../../public/images/hydekohili.png";



const HistoryDashboard = () => {
    const [transactionData, setTransactionData] = useState([]);
    const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";

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
        const indreadableVal = readableValue * 82;

        const indRounded = indreadableVal.toFixed(2);

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

                <td >
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

                <td className="dash-token-value">
                    <h4 style={{ color: web3.utils.toChecksumAddress(toAddress) == userWallet ? 'rgb(17,149,97)' : 'rgb(186,55,66)' }}><span>{readableValue}</span> {tokenSymbol}</h4>
                    <h5><span>&#8377;</span>{indRounded}</h5>
                </td>

                {/* <td className="trans-amount">{readableValue}</td> */}

                {/* <td className="trans-date">{formattedDate}</td> */}
                <td className="dash-trans-date">
                    <h3>{formattedDate}</h3>
                    <h3> {formattedTime} </h3>
                </td>

                {/* <td className="trans-status">
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
                </td> */}

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

            <div >
                <div className="transaction-tabs-div ">
                <div onClick={matchClick} style={{ position: 'relative',width:'50%' }}>
                        <h3 className="histTabClass">Transaction History</h3>

                    </div>

                    <div onClick={matchPointClick} style={{ position: 'relative',width:'50%' }} className='d-flex'>
                        <h3 className='newsTabClass'>Top News</h3>
                        <input type="text" className='top-news-input'/> 
                    </div>

                </div>



                <div className='row' style={{padding:"4px 12px"}}>
                    <div className="transaction-main col-6">
                        <div className='table-responsive' >
                            <table>
                                <tr>
                                    <th>Transaction Type</th>
                                    <th>Price</th>
                                    {/* <th>Amount</th> */}
                                    {/* <th>Date</th> */}
                                    <th>Time</th>
                                    {/* <th>Status</th> */}
                                </tr>

                                <tbody>
                                    {transactionData.map((each, index) => (
                                            <tr key={index} style={{borderBottom:"1px solid rgb(57,56,72)"}}>
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



                    <div className='col-6'>

                     <div className='d-flex topnews-scroll' style={{overflow:'auto'}}>
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



                     <div className='d-flex topnews-scroll' style={{overflow:'auto'}}>
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




                </div>












            </div>

        </>
    )
}


export default HistoryDashboard