import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import livetopimg from '../../public/images/live-topline.png'

import livebottomimg from '../../public/images/live-bottomline.png'

// https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/lk.jpg
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
import liveRiseImg from "../../public/images/live-score-sunrise.svg"
import liveRcbsImg from '../../public/images/live-rcb-img.svg'



const Sidebar = () => {
    const router = useRouter()
    const { query } = router

    const pricesList = useSelector((store) => store.priceMatches.tokenPrices)
    console.log("priceList..", pricesList)
    const iplMatches = useSelector((store) => store.priceMatches.matchesList)

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
    const teamShortNames = ["BSVC(Royal Challengers Bangalore)", "CSVC(Chennai Super Kings)", "DSVC(DelhiCapitals)", "GSVC(Gujarath Titans)", "HSVC(Sunrisers Hyderabad)", "KSVC(Kolkatha Knight Riders)", "LSVC(Lucknow Super Giants)", "MSVC(Mumbai Indians)", "PSVC(Punjab Kings)", "RSVC(Rajasthan Royals)"]


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


    const userWallet = useSelector((store) => store.user.loginInfo)
    const web3 = new Web3(
        'https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF',
    );




    const liveObj = iplMatches.filter((each, index) => each.status === "live")
    console.log("objeeeee", liveObj)


    const [teamAImgUrl, setTeamAImgUrl] = useState("");
    const [teamBImgUrl, setTeamBImgUrl] = useState("");
    console.log("sideTeamA", teamAImgUrl)
    console.log("sideTeamB", teamBImgUrl)



    // Fetches the image URL for team A
    const getTeamAImgUrl = async (key) => {
        const fileRef = ref(storage, `/ipl_team_logo/${key}.png`);
        const url = await getDownloadURL(fileRef);
        console.log("url1...", url);
        return url;
    };

    useEffect(() => {
        const fetchTeamAImgUrl = async () => {
            // console.log("key...", liveObj)

            try {
                const imgUrl = await getTeamAImgUrl(liveObj.teams["a"].key);
                setTeamAImgUrl(imgUrl);
            } catch (error) {
                console.error(error); // Log any errors that occur during fetching
            }
        };

        fetchTeamAImgUrl();
    }, [liveObj]);

    // Fetches the image URL for team B
    const getTeamBImgUrl = async (key) => {
        const fileRef = ref(storage, `/ipl_team_logo/${key}.png`);
        const url = await getDownloadURL(fileRef);
        console.log("url2..", url);
        return url;
    };

    useEffect(() => {
        const fetchTeamBImgUrl = async () => {
            try {
                const imgUrl = await getTeamBImgUrl(liveObj.teams["b"].key);
                setTeamBImgUrl(imgUrl);
            } catch (error) {
                console.error(error); // Log any errors that occur during fetching
            }
        };

        fetchTeamBImgUrl();
    }, [liveObj]);


    const onClickTeam = (eachToken) => {
        // console.log("tokenName, tokenKey...", tokenName, tokenKey)
        router.push({ query: eachToken, pathname: "/teamsPage" })

    }

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

    return (
        <>
            <div className='side-bar-main'>
                <div className="tokens">
                    <>
                        <div className='sidebar-tocken'>
                            {/* <p className='my-tokens-text' onClick={mytokenClick} style={{color:mytokenclick ? "white" : '#5a5967'}}>My Tokens <span className="all-tokens-text"></span></p> */}
                <p className='my-tokens-text' onClick={mytokenClick} style={{color:mytokenclick ? "white" : '#5a5967'}}>My Tokens</p>
                <p className='my-tokens-text' onClick={alltokenClick} style={{color:mytokenclick ? "#5a5967" : ' white'}}>All Tokens</p>
                        </div>


                        {mytokenclick && (
                            <div className='side-tok-height'>
                                <table>
                                    <tbody>
                                        {
                                            newTokenList.map((eachToken, index) => (
                                                <tr className="token-container" key={index} onClick={(each) => onClickTeam(eachToken)} >
                                                    <td>
                                                        <Image src={eachToken.logoUrl} alt="" height={40} width={40} />
                                                    </td>
                                                    <td>
                                                        <h1>${eachToken.price.price}</h1>
                                                    </td>
                                                    <td>
                                                        <p>+{eachToken.wallet}</p>
                                                    </td>
                                                </tr>
                                            )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {alltokenclick && (
                            <div>
                <h3 style={{color:"white"}}>All Token</h3>

                            </div>
                        )}



                    </>
                </div>


                <div className='tokens2' style={{ marginTop: "1rem" }}>
                    <h2 className='main-heading'>Live Score</h2>
                    <div className='score-team'>
                        <Image className='live-topimg' src={livetopimg} alt="" />
                        <div className='d-flex live-sc'>
                            <Image src={sunrisers} alt="" height={30} width={40} />
                            <div className='all-headings'>
                                <h1 >SRH </h1>
                                <h2 className="sub-heading">Batting </h2>
                            </div>
                        </div>
                        <h1 className='vs-heading'>vs</h1>
                        <div className='d-flex justify-content-center'>
                            <Image src={rcbs} alt="" height={30} width={40} />
                            <div className='all-headings'>
                                <h1>RCB</h1>
                                <h2 className='sub-heading'>Bowling </h2>
                            </div>
                        </div>
                        <Image className='live-bottomimg' src={livebottomimg} alt="" />
                    </div>
                    <h1 className='score-value'>123/5<span className="score-points">(16.3)</span></h1>
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
                            <Image src={rcbs} alt="" height={20} width={20} />
                            <h3 className='side-holding'>RSVC</h3>
                            <p className="side-holding">$250</p>
                            <h4 className='lose-or-gain1'>+0.547</h4>
                        </div>
                        <div className='score-team2'>
                            <Image src={sunrisers} alt="" height={20} width={20} />
                            <h3 className='side-holding'>HSVC</h3>
                            <p className='side-holding'>$250</p>
                            <h4 className='lose-or-gain2'>-1.263</h4>
                        </div>
                    </div >

                </div >
            </div>


        </>
    )
}


export default Sidebar

