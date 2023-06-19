import React, { useCallback, useMemo, useEffect, useState } from "react";
import QuickTradeComponent from "../../src/components/quickTradeComponent";
import { useDispatch, useSelector } from "react-redux";
import BuySellComponent from "./buySellComponent";
// import TransactionHistoryComponent from "./transactionHistoryComponent";
import HistoryDashboard from "./historyDashboard";
import RsvcSellComponent from "./rsvcComponent";
import IplCard from "./iplCardComponent";

const LeagueComponent = () => {
    const iplMatches = useSelector((store) => store?.priceMatches?.matchesList)
    const dispatch = useDispatch()

    const [activeMatches, setactiveMatches] = useState("ipl")


    const totalmatches = useSelector((abc) => {
        return abc.priceMatches.matchesList;
    });

    const matchTab1 = activeMatches === "ipl" ? "ipl-active" : "ipl-not-active"
    const matchTab2 = activeMatches === "t20" ? "ipl-active" : "ipl-not-active"
    const matchTab3 = activeMatches === "asia" ? "ipl-active" : "ipl-not-active"
    // console.log("activematches", activeMatches, matchTab1)





    const [liveMatches, setliveMatches] = useState([])
    const [completedMatches, setCompletedMatches] = useState([]);
    const [notCompletedMatches, setNotCompletedMatches] = useState([]);

    const timestamp = 1684591200;
    const date = new Date(timestamp * 1000);

    // console.log("this is the date " , date);

    // console.log("this is the date" , totalmatches.start_at);
    // const presentday = new Date();
    // console.log("present day  " , presentday)

    // const presentmonth = new Date().getMonth() + 1;
    const presentday = new Date().getDate();
    // console.log("present day thi", presentday)


    useState(() => {
        const inLive = [];
        const completed = [];
        const notCompleted = [];
        totalmatches.forEach(match => {

            const timestamp = match.start_at;
            const livedate = new Date(timestamp * 1000);
            // const month = livedate.getMonth() + 1;
            const day = livedate.getDate();



            if (match.status === 'completed') {
                completed.push(match);
            }
            // else if (day === presentday) {
            //     inLive.push(match);
            // }

            else if (match.status === 'not_started') {               //the ipl api data not available if available use this function
                inLive.push(match);
            }

            else {
                notCompleted.push(match);
            }
        });
        setliveMatches(inLive);
        setCompletedMatches(completed);
        setNotCompletedMatches(notCompleted);
    }, []);
    // console.log("live.....", liveMatches)





    // console.log("completeddd++++++++++++++++++++++++++++++++++++++++++", liveMatches)

    // console.log("notcompleteddd++++++++++++++++++++++++++++++++++++++++++= ",notCompletedMatches)

    const allMatches = [...liveMatches, ...notCompletedMatches, ...completedMatches]

    // console.log("allcompleteddd++++++++++++++++++++++++++++++++++++++++++= ", allMatches)

    // this is the live team code


    const sellLiveObj = iplMatches?.find((each, index) => each.status === "not_started")
    // console.log("objeeeee", sellLiveObj)
    const teamACode = sellLiveObj.teams["a"].code
    const teamBCode = sellLiveObj.teams["b"].code

    const liveStrings = ["DC", "PBKS", "LSG", "SRH", "RR", "MI", "CSK", "GT", "KKR", "RCB"]

    const newsellStrings = ["DSVC", "PSVC", "LSVC", "HSVC", "RSVC", "MSVC", "CSVC", "GSVC", "KSVC", "BSVC"]


    const teamAIndex = liveStrings.findIndex(each => each == teamACode)
    const teamATokenName = newsellStrings[teamAIndex]

    const teamBIndex = liveStrings.findIndex(each => each == teamBCode)
    const teamBTokenName = newsellStrings[teamBIndex]

    // here this will end

















    return (
        <div className="league-main-container">
            <QuickTradeComponent />

            <div className="league-main-section">
                <div className="league-tags-container">
                    <p onClick={() => setactiveMatches("ipl")} className={`${matchTab1}`}>Indian Premier League</p>
                    <p onClick={() => setactiveMatches("t20")} className={`${matchTab2}`}>T20 Worldcup</p>
                    <p onClick={() => setactiveMatches("asia")} className={`${matchTab3}`}>Asia Cup</p>
                </div>
                {

                    activeMatches == "ipl" && (
                        <>
                            <div className="match-card-section">
                                {allMatches.map((each, index) => (
                                    <IplCard key={index} teams={each} />
                                ))}
                            </div>
                            <div className="drop-down-container  d-flex flex-direction-column justify-content-center">
                                <div className="row container-fluid p-0">


                                    <div className="col-12 col-sm-12  col-md-6 col-lg-6 p-0" style={{ borderRight: '5px solid transparent' }}>
                                        <BuySellComponent eachTeamName={teamATokenName} />

                                    </div>
                                    <div className="col-12  col-sm-12 col-md-6 col-lg-6 p-0" style={{ borderLeft: '5px solid transparent' }}>
                                        <BuySellComponent eachTeamName={teamBTokenName} />

                                    </div>
                                </div>
                            </div>
                        </>


                    )
                }

                {

                    activeMatches == "t20" && (
                        <h4 className="t20-desc">
                            T20   Matches coming soon
                        </h4>

                    )
                }

                {

                    activeMatches == "asia" && (
                        <h4 className="t20-desc">
                            Asia Cup Matches  coming soon
                        </h4>

                    )
                }




            </div>

            {/* <TransactionHistoryComponent /> */}
            <HistoryDashboard />
        </div >
    );
};
export default LeagueComponent;