import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Image from "next/image";
import Web3 from "web3";
import qs from "qs"
import abi from "../../abis/abi.json"
const BigNumber = require('bignumber.js');
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firestore/fireConfig";
import playImage from "../../public/images/Vector (3).png";




const IplCard = ({ teams }) => {
    const iplMatches = useSelector((store) => store?.priceMatches?.matchesList)

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
                const imgUrl = await getTeamAImgUrl(teams?.teams["a"].key);
                setTeamAImgUrl(imgUrl);
            } catch (error) {
                console.error(error); // Log any errors that occur during fetching
            }
        };

        fetchTeamAImgUrl();
    }, [teams, iplMatches, teamAImgUrl]);

    // Fetches the image URL for team B
    const getTeamBImgUrl = async (key) => {
        const fileRef = ref(storage, `/ipl_team_logo/${key}.png`);
        const url = await getDownloadURL(fileRef);
        return url;
    };

    useEffect(() => {
        const fetchTeamBImgUrl = async () => {
            try {
                const imgUrl = await getTeamBImgUrl(teams?.teams["b"].key);
                setTeamBImgUrl(imgUrl);
            } catch (error) {
                console.error(error); // Log any errors that occur during fetching
            }
        };

        fetchTeamBImgUrl();
    }, [teams, teamBImgUrl, iplMatches]);


    // console.log("totalmatches...", totalmatches)


    // console.log("wwwwwwwwwwwwwwwwwwwwww", teams?.start_at)

    const startedTime = teams?.start_at

    const timestamp = startedTime * 1000; // Convert timestamp to milliseconds
    const date = new Date(timestamp);



    const weekday = date.toLocaleString('en-US', { weekday: 'short' });
    const year = date.toLocaleString('en-US', { year: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.toLocaleString('en-US', { day: 'numeric' });

    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleString('en-US', timeOptions);


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
                        <p>{teams?.status === "not_started" ?
                            <p>{weekday} | {day}<sup>th</sup> <span>{month}</span><br />
                                <span>{formattedTime}</span>

                            </p>
                            : <p>{teams?.teams?.a?.code} - {teams?.innings?.a_1?.score_str}</p>

                        }
                        </p>
                        <p>



                            {teams?.status === "not_started" ?
                                ''
                                : <p>{teams?.teams?.b?.code} - {teams?.innings?.b_1?.score_str}</p>

                            }
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

export default IplCard