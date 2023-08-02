import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import livetopimg from '../../public/images/live-topline.png'

import livebottomimg from '../../public/images/live-bottomline.png'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firestore/fireConfig";

// https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/lk.jpg
// var delhiCapital = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/delhicapital.png";
// var chennaiSupers = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/chennaiSuperkings.png";
// var rcbs = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rcb logo.png";
// var mumbaiIndia = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/mumbaiIndians.png";
// var rajasthanRoyals = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rajasthanRoyals.png";
// var punjabKings = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/punjabKings.png";
// var sunrisers = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sunrisers.png";
// var kkr = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/kkr.png";
// var lk = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/lk.jpg";
// var gt = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/gt.png";


import delhiCapital from "../../public/images/delhi-capitals-svg.svg"
import chennaiSupers from "../../public/images/chennai-super-kings-svg.svg"
import rcbs from "../../public/images/live-rcb-img.svg"
import mumbaiIndia from "../../public/images/mumbai-indians-svg.svg"
import rajasthanRoyals from "../../public/images/rajasthan-royals-svg.svg"
import punjabKings from "../../public/images/punjab-kings-svg.svg"
import sunrisers from "../../public/images/live-score-sunrise.svg";
import kkr from "../../public/images/kkr-svg.svg"
// import lk from "../../public/images/lk-svg.svg"
import lk from "../../public/images/Frame 35.svg"
import gt from "../../public/images/gt-svg.svg"

// import delhiCapital from "../../public/images/delhicapital.png"
// import chennaiSupers from "../../public/images/chennaiSuperkings.png";
// import rcbs from "../../public/images/rcb logo.png";
// import mumbaiIndia from "../../public/images/mumbaiIndians.png"
// import rajasthanRoyals from "../../public/images/rajasthanRoyals.png";
// import punjabKings from "../../public/images/punjabKings.png";
// import sunrisers from "../../public/images/sunrisers.png";
// import kkr from "../../public/images/kkr.png";
// import lk from "../../public/images/lk.jpg";
// import gt from "../../public/images/gt.png";
import { useRouter } from 'next/router';
import Web3 from 'web3';
import abi from "../../abis/abi.json"
import { useSelector } from 'react-redux';
// import liveRiseImg from "../../public/images/live-score-sunrise.svg"
// import liveRcbsImg from '../../public/images/live-rcb-img.svg'


import noTokenImg from "../../public/images/no-tabler_coins.svg"
import Link from 'next/link';



const Sidebar = () => {
    const router = useRouter()
    const { query } = router
    const [notInLive, setNotInLive] = useState(true)
    const [myTokenList, setMyTokenList] = useState([])




    // const teamALiveImg = useSelector((store) => store?.user?.liveTeamAImgUrl)
    // const teamBLiveImg = useSelector((store) => store?.user?.liveTeamBImgUrl)
    // console.log("reduxLiveImg....", teamALiveImg, teamBLiveImg)

    const pricesList = useSelector((store) => store?.priceMatches?.tokenPrices)
    console.log("priceList..", pricesList)
    const iplMatches = useSelector((store) => store?.priceMatches?.matchesList)

    const bsvAmount = useSelector((store) => store.tokenOneSlice.tokenOne.price)
    const csvAmount = useSelector((store) => store.tokenTwoSlice.tokenTwo.price)
    const dsvAmount = useSelector((store) => store.tokenThreeSlice.tokenThree.price)
    const gsvAmount = useSelector((store) => store.tokenFourSlice.tokenFour.price)
    const hsvAmount = useSelector((store) => store.tokenFiveSlice.tokenFive.price)
    const ksvAmount = useSelector((store) => store.tokenSixSlice.tokenSix.price)
    const lsvAmount = useSelector((store) => store.tokenSevenSlice.tokenSeven.price)
    const msvAmount = useSelector((store) => store.tokenEightSlice.tokenEight.price)
    const psvAmount = useSelector((store) => store.tokenNineSlice.tokenNine.price)
    const rsvAmount = useSelector((store) => store.tokenTenSlice.tokenTen.price)
    const amountArray = [bsvAmount, csvAmount, dsvAmount, gsvAmount, hsvAmount, hsvAmount, ksvAmount, lsvAmount, msvAmount, psvAmount, rsvAmount]
    const logosArray = [rcbs, chennaiSupers, delhiCapital, gt, sunrisers, kkr, lk, mumbaiIndia, punjabKings, rajasthanRoyals]
    const tokenNames = ["BSVC", "CSVC", "DSVC", "GSVC", "HSVC", "KSVC", "LSVC", "MSVC", "PSVC", "RSVC"]
    const tokenKeys = ["rcb", "csk", "dc", "gt", "srh", "kkr", "lsg", "mi", "pbks", "rr"]
    const teamNames = ["Royal Challengers Bangalore", "ChennaiSuper Kings", "Delhi Capital", "Gujarath Titans", "Sunrisers Hyderabad", "Kolkatha Knight Riders", "Lucknow Super Giants", "Mumbai Indians", "Punjab Kings", "Rajasthan Royals"]
    const teamShortNames = ["BSVC(Bangalore Sports Verse Coin)", "CSVC(Chennai Sports Verse Coin)", "DSVC(Delhi Sports Verse Coin)", "GSVC(Gujarath Sports Verse Coin)", "HSVC(Hyderabad Sports Verse Coin)", "KSVC(Kolkatha Sports Verse Coin)", "LSVC(Lucknow Sports Verse Coin)", "MSVC(Mumbai Sports Verse Coin)", "PSVC(Punjab Sports Verse Coin)", "RSVC(Rajasthan Sports Verse Coin)"]


    const newTokenList = pricesList.map((each, index) => {
        const tokenObj = {
            id: index,
            price: each,
            wallet: amountArray[index],
            logoUrl: logosArray[index],
            bannerImg: kkr,

            tokenName: tokenNames[index],
            tokenKey: tokenKeys[index],
            teamName: teamNames[index],
            teamShortName: teamShortNames[index]
        }


        return tokenObj
    })
    console.log("newTokenList....", newTokenList)


    const userWallet = useSelector((store) => store?.user?.loginInfo)
    const web3 = new Web3(
        'https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF',
    );




    const sideLiveObj = iplMatches?.find((each, index) => each.status === "live")
    // console.log("side..objeeeee", sideLiveObj)

    useEffect(() => {
        const sideLiveObjMatch = iplMatches?.find((each, index) => each.status === "live")
        console.log("side..objeeeee", sideLiveObjMatch)
        if (sideLiveObj) {
            setNotInLive(false)


        }
        else {
            setNotInLive(true)
        }

    }, [iplMatches, sideLiveObj, notInLive])


    const [teamAImgUrl, setTeamAImgUrl] = useState("");
    const [teamBImgUrl, setTeamBImgUrl] = useState("");
    console.log("sideTeamA", teamAImgUrl)
    console.log("sideTeamB", teamBImgUrl)

    const getTeamAImgUrl = async (key) => {
        console.log("a...calling...")
        const fileRef = ref(storage, `/ipl_team_logo/${key}.png`);
        console.log("ref....", fileRef)
        const url = await getDownloadURL(fileRef);
        return url;
    };

    useEffect(() => {
        const fetchTeamAImgUrl = async () => {
            try {
                const imgUrl = await getTeamAImgUrl(sideLiveObj?.teams["a"].key);
                setTeamAImgUrl(imgUrl);
            } catch (error) {
                console.error(error); // Log any errors that occur during fetching
            }
        };

        fetchTeamAImgUrl();
    }, []);

    console.log("aImg", teamAImgUrl)

    // Fetches the image URL for team B
    const getTeamBImgUrl = async (key) => {
        const fileRef = ref(storage, `/ipl_team_logo/${key}.png`);
        const url = await getDownloadURL(fileRef);
        return url;
    };

    useEffect(() => {
        const fetchTeamBImgUrl = async () => {
            try {
                const imgUrl = await getTeamBImgUrl(sideLiveObj?.teams["b"].key);
                console.log("burl...", imgUrl)
                setTeamBImgUrl(imgUrl)
            } catch (error) {
                console.error(error); // Log any errors that occur during fetching
            }
        };

        fetchTeamBImgUrl();
    }, []);


    // const onClickTeam = (eachToken) => {
    //     // console.log("tokenName, tokenKey...", tokenName, tokenKey)
    //     router.push({ query: eachToken, pathname: "/teamsPage" })

    // }

    // new added 08-05
    const [mytokenclick, setmytokenclick] = useState(true);
    const [alltokenclick, setalltokenclick] = useState(false);
    const mytokenClick = () => {
        setmytokenclick(true);
        setalltokenclick(false);
    };
    const alltokenClick = () => {
        setmytokenclick(false);
        setalltokenclick(true);
    };

    console.log("a,bimages..", teamAImgUrl, teamBImgUrl)
    return (
        <>
            <div className='side-bar-main'>
                <div className="tokens">
                    <>
                        <div className='sidebar-tocken'>
                            {/* <p className='my-tokens-text' onClick={mytokenClick} style={{color:mytokenclick ? "white" : '#5a5967'}}>My Tokens <span className="all-tokens-text"></span></p> */}
                            <p className='my-tokens-text' onClick={mytokenClick} style={{ color: mytokenclick ? "white" : '#5a5967' }}>My Tokens</p>
                            <p className='all-tokens-text' onClick={alltokenClick} style={{ color: mytokenclick ? "#5a5967" : ' white' }}>All Tokens</p>
                        </div>


                        {mytokenclick && (
                            <p style={{ color: "white" }}>My Tokens</p>

                            // <>


                            //     {newTokenList.length == 0 ? (

                            //         <div className='no-hist-con'>
                            //             <Image src={noTokenImg} alt="" height={20} width={20} />
                            //             <h1 style={{ color: 'red' }}>You don’t have any tokens to display</h1>
                            //         </div>
                            //     ) : (

                            //         <div className='side-tok-height'>
                            //             <table>
                            //                 <tbody>
                            //                     {
                            //                         newTokenList.map((eachToken, index) => (
                            //                             <Link href={{ pathname: "/teamspage", query: { eachToken: JSON.stringify(eachToken) } }} as="/teamspage" key={index}>

                            //                                 <tr className="token-container" key={index}>
                            //                                     <td>
                            //                                         <Image src={eachToken?.logoUrl} alt="" height={40} width={40} />
                            //                                     </td>
                            //                                     <td>
                            //                                         <h1>${eachToken?.price?.price}</h1>
                            //                                     </td>
                            //                                     <td>
                            //                                         {eachToken?.wallet >= 0
                            //                                             ? <p>+{eachToken?.wallet}</p>
                            //                                             : <p style={{ color: 'red' }}>-{eachToken?.wallet}</p>}
                            //                                     </td>
                            //                                 </tr>
                            //                             </Link>
                            //                         ))}
                            //                 </tbody>
                            //             </table>
                            //         </div>

                            //     )}





                            // </>


                        )}

                        {alltokenclick && (
                            <>


                                {newTokenList.length == 0 ? (

                                    <div className='no-hist-con'>
                                        <Image src={noTokenImg} alt="" height={20} width={20} />
                                        <h1 style={{ color: 'red' }}>You don’t have any tokens to display</h1>
                                    </div>
                                ) : (

                                    <div className='side-tok-height'>
                                        <table>
                                            <tbody>
                                                {
                                                    newTokenList.map((eachToken, index) => (
                                                        // <Link href={{ pathname: `/teamspage/${eachToken?.tokenName}`, query: { eachToken: JSON.stringify(eachToken) } }} as={`/teamspage/${eachToken?.tokenName}`} key={index}>

                                                        <Link href={{ pathname: `/teamspage/${eachToken?.tokenName}`, query: { eachToken: JSON.stringify(eachToken) } }} as={`/teamspage/${eachToken?.tokenName}`} key={index}>

                                                            <tr className="token-container" key={index}>
                                                                <td>
                                                                    <Image src={eachToken?.logoUrl} alt="" height={40} width={40} />
                                                                </td>
                                                                <td>
                                                                    <h1>${eachToken?.price?.price}</h1>
                                                                </td>
                                                                <td>
                                                                    {eachToken?.wallet >= 0
                                                                        ? <p>+{eachToken?.wallet}</p>
                                                                        : <p style={{ color: 'red' }}>-{eachToken?.wallet}</p>}
                                                                </td>
                                                            </tr>
                                                        </Link>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>

                                )}





                            </>
                        )}



                    </>
                </div>


                <div className='tokens2' style={{ marginTop: "1rem" }}>
                    {notInLive && (
                        <div className="side-bar-live-section" >
                            <h1>Will be active when <br /> match is Live</h1>
                        </div>


                    )}


                    <div>
                        <h2 className='main-heading'>Live Score</h2>
                        <div className='score-team'>
                            {/* <Image className='live-topimg' src={teamALiveImg} alt="" height={30} width={30} /> */}
                            {/* <Image className='live-topimg' src={teamALiveImg} alt="" height={30} width={30} /> */}
                            <Image className='live-topimg' src={livetopimg} alt="" />
                            <div className='d-flex live-sc'>
                                <Image src={teamAImgUrl} alt="" height={30} width={40} />
                                <div className='all-headings'>
                                    <h1 >{sideLiveObj?.teams["a"].code} </h1>
                                    <h2 className="sub-heading">Batting </h2>
                                </div>
                            </div>
                            <div>
                                <h1 className='vs-heading'>vs</h1>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Image src={teamBImgUrl} alt="" height={30} width={40} />
                                <div className='all-headings'>
                                    <h1>{sideLiveObj?.teams["b"].code} </h1>
                                    <h2 className='sub-heading'>Bowling </h2>
                                </div>
                            </div>
                            {/* <Image className='live-bottomimg' src={teamBLiveImg} alt="" height={30} width={30} /> */}
                            <Image className='live-bottomimg' src={livebottomimg} alt="" />
                        </div>
                        <h1 className='score-value'>{sideLiveObj?.innings?.a_1?.score_str?.split(" ")?.slice(0, 1)}<span className="score-points">({sideLiveObj?.innings?.a_1?.score_str?.split(" ")?.slice(2)})</span></h1>
                        <p className='this-over-heading'  >This over</p>
                        <div className='numbers-bar'>
                            <p>2</p>
                            <p>4</p>
                            <p>6</p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className='side-live-batsmen'>
                            <div className='side-live-bat-bow'>
                                <h1 className='batter'>Batters</h1>
                                <h2 className='bowler'>Bowler</h2>
                            </div>
                            <div className='side-live-bat-bow'>
                                <div className='side-live-batsmens-name'>
                                    <div className='side-live-batsmens1'>
                                        <h1>Kane Williamson</h1>
                                        <h2> 45(20)</h2>
                                    </div>
                                    <div className='side-live-batsmens1'>
                                        <h1>Abishek Sharma</h1>
                                        <h2>12(10)</h2>
                                    </div>
                                </div>
                                <div className='side-livebowler-name'>
                                    <h1>Siraj 20(3.2)</h1>
                                </div>
                            </div>
                        </div>
                        <div className='sidebar-buysell'>
                            <div className="score-team2">
                                <Image src={teamAImgUrl} alt="" height={20} width={20} />
                                <h3 className='side-holding side-holding-text' >{sideLiveObj?.teams["a"]?.code}</h3>
                                <p className="side-holding">$250</p>
                                <h4 className='lose-or-gain1'>+0.547</h4>
                            </div>
                            <div className='score-team2'>
                                <Image src={teamBImgUrl} alt="" height={20} width={20} />
                                <h3 className='side-holding side-holding-text'>{sideLiveObj?.teams["b"]?.code}</h3>
                                <p className='side-holding'>$250</p>
                                <h4 className='lose-or-gain2'>-1.263</h4>
                            </div>
                        </div >



                    </div>




                </div >
            </div>


        </>
    )
}


export default Sidebar

