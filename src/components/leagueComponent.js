import React, { useCallback, useMemo, useEffect, useState } from "react";
import Image from "next/image";
import playImage from "../../public/images/Vector (3).png";
import QuickTradeComponent from "../../src/components/quickTradeComponent";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firestore/fireConfig";

import { useDispatch, useSelector } from "react-redux";
import BuySellComponent from "./buySellComponent";
// import TransactionHistoryComponent from "./transactionHistoryComponent";
import HistoryDashboard from "./historyDashboard";
import RsvcSellComponent from "./rsvcComponent";

const LeagueComponent = () => {
    const [activeMatches, setactiveMatches] = useState("ipl")
    const Card = ({ teams }) => {
        const [teamAImgUrl, setTeamAImgUrl] = useState("");
        const [teamBImgUrl, setTeamBImgUrl] = useState("");

        // Fetches the image URL for team A
        const getTeamAImgUrl = async (key) => {
            const fileRef = ref(storage, `/ipl_team_logo/${key}.png`);
            const url = await getDownloadURL(fileRef);
            return url;
        };

        useEffect(() => {
            const fetchTeamAImgUrl = async () => {
                try {
                    const imgUrl = await getTeamAImgUrl(teams.teams["a"].key);
                    setTeamAImgUrl(imgUrl);
                } catch (error) {
                    console.error(error); // Log any errors that occur during fetching
                }
            };

            fetchTeamAImgUrl();
        }, [teams]);

        // Fetches the image URL for team B
        const getTeamBImgUrl = async (key) => {
            const fileRef = ref(storage, `/ipl_team_logo/${key}.png`);
            const url = await getDownloadURL(fileRef);
            return url;
        };

        useEffect(() => {
            const fetchTeamBImgUrl = async () => {
                try {
                    const imgUrl = await getTeamBImgUrl(teams.teams["b"].key);
                    setTeamBImgUrl(imgUrl);
                } catch (error) {
                    console.error(error); // Log any errors that occur during fetching
                }
            };

            fetchTeamBImgUrl();
        }, [teams]);


        console.log("totalmatches...", totalmatches)









        return (
            <div className="match-each-card">


                <div className="league-card ">
                    <div>
                        <button className="league-live-btn">{teams.status}</button>
                        <div className="batches-container">
                            <div>
                                <Image src={teamAImgUrl} alt="image" height={50} width={50} />

                                <p className="total-holding-val">$256.72</p>
                            </div>
                            <p> VS </p>
                            <div>
                                <Image src={teamBImgUrl} alt="image" height={50} width={50} />
                                <p className="teams-holding-val">$58.7</p>
                            </div>
                        </div>
                    </div>
                    <div className="live-score-container">
                        <div>
                            <p>
                                {" "}
                                {teams?.teams?.a?.code} - {teams?.innings?.a_1?.score_str}
                            </p>
                            <p>
                                {" "}
                                {teams?.teams?.b?.code} - {teams?.innings?.b_1?.score_str}
                            </p>
                        </div>
                        <div>
                            <Image src={playImage} alt="image" height={30} width={30} />
                        </div>


                    </div>
                </div>
            </div>
        );
    };

    const totalmatches = useSelector((abc) => {
        return abc.priceMatches.matchesList;
    });

    const matchTab1 = activeMatches === "ipl" ? "ipl-active" : "ipl-not-active"
    const matchTab2 = activeMatches === "t20" ? "ipl-active" : "ipl-not-active"
    const matchTab3 = activeMatches === "asia" ? "ipl-active" : "ipl-not-active"
    console.log("activematches", activeMatches, matchTab1)





    const [liveMatches, setliveMatches] = useState([])
    const [completedMatches, setCompletedMatches] = useState([]);
    const [notCompletedMatches, setNotCompletedMatches] = useState([]);

    useState(() => {
        const inLive = [];
        const completed = [];
        const notCompleted = [];
        totalmatches.forEach(match => {
            if (match.status === 'completed') {
                completed.push(match);
            }
            else if (match.status === 'started') {
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





    // console.log("completeddd++++++++++++++++++++++++++++++++++++++++++= ",completedMatches)

    // console.log("notcompleteddd++++++++++++++++++++++++++++++++++++++++++= ",notCompletedMatches)

    const allMatches = [...liveMatches, ...notCompletedMatches, ...completedMatches]

    console.log("allcompleteddd++++++++++++++++++++++++++++++++++++++++++= ", allMatches)






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
                        <div className="match-card-section">
                            {allMatches.map((each, index) => (
                                <Card key={index} teams={each} />
                            ))}
                        </div>

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
                            AsiaCup Matches  coming soon
                        </h4>

                    )
                }


            </div>
            <div className="drop-down-container  d-flex flex-direction-column">
                <div className="row">


                    <div className="col-12 col-sm-12  col-md-6 col-lg-6">
                        <BuySellComponent />

                    </div>
                    <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                        <RsvcSellComponent />

                    </div>
                </div>
            </div>

            {/* <TransactionHistoryComponent /> */}
            <HistoryDashboard />
        </div >
    );
};
export default LeagueComponent;