import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firestore/fireConfig";

// https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sunrisers.png
var bangaloreImage = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/royalChallengersBangalore.png"
// import bangaloreImage from "../../public/images/royalChallengersBangalore.png";
var sunrisersImage = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sunrisers.png"
// import sunrisersImage from "../../public/images/sunrisers.png";
import { useSelector } from "react-redux";
import CandleStickChart from "./candleStickChart";
import BuySellComponent from "./buySellComponent";
// import upImg from "../../public/images/uparrow.png"
import downImg from "../../public/images/downarrow.png"
import liveUpdateBar from "../../public/images/live-update-bar.svg"
import TradeSrhLogo from "../../public/images/pngkit_rcb-logo-svg.svg"
import liveRcbsImg from '../../public/images/live-rcb-img.svg'
import upImg from "../../public/images/uparrow1.svg"




import { useCallback } from "react";
import mumbaiIndia from "../../public/images/mumbai-indians-svg.svg"
import punjabKings from "../../public/images/punjab-kings-svg.svg"
import TransactionHistoryComponent from "./transactionHistoryComponent";


const TradeComponent = () => {



  const [liveData, setliveData] = useState(null);
  const [notinlive, setnotinlive] = useState(true)

  // if (notinlive == true) {
  //   document.body.style.overflow = 'hidden'
  //   document.body.style.height = '100vh'
  // }
  // else {
  //   document.body.style.overflow = 'auto'
  //   document.body.style.height = '100vh'

  // }

  const totalmatches = useSelector((abc) => {
    return abc?.priceMatches?.matchesList;
  });
  console.log("alllllllll matches", totalmatches);

  const livematch = useCallback(() => {
    totalmatches.map((i) => {
      console.log("Status: - ", i.status);

      // console.log("Status: - ", i)

      if (i.status === "not_started") {
        console.log("Status : - ", i.status);

        setliveData(i);
        setnotinlive(true)
      }
    })
  }, [totalmatches]);
  console.log("Status: - ", liveData);

  useEffect(() => {
    livematch();
  }, [livematch]);

  useEffect(() => {
    const liveMatchData = totalmatches?.find((each, index) => each.status === "live")
    console.log("live...", liveMatchData)
    if (liveMatchData) {
      setnotinlive(false)
      console.log("checkLive...", notinlive)
    }

  }, [])

  const liveMatchData = totalmatches?.find((each, index) => each.status === "live")
  console.log("live...", liveMatchData)
  // if (liveMatchData) {
  //   setnotinlive(false)
  //   console.log("checkLive...", notinlive)
  // }


  const teamACode = liveMatchData?.teams["a"].code
  const teamBCode = liveMatchData?.teams["b"].code

  const liveStrings = ["DC", "PBKS", "LSG", "SRH", "RR", "MI", "CSK", "GT", "KKR", "RCB"]

  const newsellStrings = ["DSVC", "PSVC", "LSVC", "HSVC", "RSVC", "MSVC", "CSVC", "GSVC", "KSVC", "BSVC"]


  const teamAIndex = liveStrings.findIndex(each => each == teamACode)
  const teamATokenName = newsellStrings[teamAIndex]

  const teamBIndex = liveStrings.findIndex(each => each == teamBCode)
  const teamBTokenName = newsellStrings[teamBIndex]


  //img url creation 

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
        const imgUrl = await getTeamAImgUrl(liveData?.teams["a"].key);
        setTeamAImgUrl(imgUrl);
      } catch (error) {
        console.error(error); // Log any errors that occur during fetching
      }
    };

    fetchTeamAImgUrl();
  }, [liveMatchData?.teams]);

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
        const imgUrl = await getTeamBImgUrl(liveData?.teams["b"].key);
        console.log("burl...", imgUrl)
        setTeamBImgUrl(imgUrl)
      } catch (error) {
        console.error(error); // Log any errors that occur during fetching
      }
    };

    fetchTeamBImgUrl();
  }, [liveMatchData?.teams]);





  //ended here










  const [batars, setbatars] = useState(false)

  const [bowlingT, setbowlingT] = useState(false)

  const batmensData = () => {
    setbatars(!batars)

    // document.body.style.overflow = 'hidden';

    // document.body.style.overflow = 'hidden'
    // document.body.style.height = '100vh'

  }
  const closeBatsmendata = () => {
    setbatars(false)
    setbatars(false)
    // document.body.style.overflow = 'auto'
    // document.body.style.height = 'auto'


  }
  const filding_team = () => {
    setbowlingT(!bowlingT)

  }

  const scroreClose = () => {
    setbatars(false)
    // document.body.style.overflow = 'auto'
    // document.body.style.height = 'auto'

  }


  console.log("trade...", teamAImgUrl, teamBImgUrl)




  const trade_teams = [
    {
      team_img: mumbaiIndia,
      team_key: teamATokenName,
      Current_Price:'$5,203',
      team_name: "Mumbai Indians",
      holding_percent: "+0.2%",
      Total_Value:'+$5,203USDT'
    },
    {
      team_img: punjabKings,
      team_key: teamBTokenName,
      Current_Price:'$5,203',
      team_name: "Kings XI Punjab",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
    {
      team_img: mumbaiIndia,
      Current_Price:'$5,203',
      team_key: teamATokenName,
      team_name: "Mumbai Indians",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
    {
      team_img: punjabKings,
      team_key: teamBTokenName,
      Current_Price:'$5,203',
      team_name: "Kings XI Punjab",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
    {
      team_img: mumbaiIndia,
      team_key: teamATokenName,
      Current_Price:'$5,203',
      team_name: "Mumbai Indians",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
    {
      team_img: punjabKings,
      team_key: teamBTokenName,
      Current_Price:'$5,203',
      team_name: "Kings XI Punjab",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    }, {
      team_img: mumbaiIndia,
      team_key: teamATokenName,
      Current_Price:'$5,203',
      team_name: "Mumbai Indians",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
    {
      team_img: punjabKings,
      team_key: teamBTokenName,
      Current_Price:'$5,203',
      team_name: "Kings XI Punjab",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
    {
      team_img: mumbaiIndia,
      team_key: teamATokenName,
      Current_Price:'$5,203',
      team_name: "Mumbai Indians",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
    {
      team_img: punjabKings,
      team_key: teamBTokenName,
      Current_Price:'$5,203',
      team_name: "Kings XI Punjab",
      holding_percent: "-0.43%",
      Total_Value:'-$5,203USDT'
    },
  ];
















  return (
    <div style={{ padding: "5px" }}>
      <div className="not-inlive-section" style={{ display: notinlive ? 'block' : 'none' }}>
        <h1>Will be active when match is Live</h1>
      </div>


      <div className="live-score-section">
        <div className="live-location-parent">
          <h3 className="live-location-heading">
            Match 4<br /> Chinna Swamy
          </h3>
          <div className="live-location-img">
            <Image src={teamAImgUrl} alt="" height={39} width={39} />
            <h3>vs</h3>
            <Image src={teamBImgUrl} alt="" height={39} width={39} />
          </div>
        </div>
        <div className="batters-section">
          <h3 className="batters-heading">Batters</h3>
          <div className="">
            <div className="batsmen-name">
              <h3>{liveData?.live?.recent_players?.striker?.name}</h3>
              <h3>
                {" "}
                {liveData?.live?.recent_players?.striker?.stats.runs}(
                {liveData?.live?.recent_players?.striker?.stats.balls})
              </h3>
            </div>
            <div className="batsmen-name">
              <h3>{liveData?.live?.recent_players?.non_striker?.name}</h3>
              <h3>
                {" "}
                {liveData?.live?.recent_players?.non_striker?.stats.runs}(
                {liveData?.live?.recent_players?.non_striker?.stats.balls})
              </h3>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: "0px", left: '0px', width: '100vw', height: '100vh', display: batars ? 'block' : 'none', zIndex: '25' }} onClick={scroreClose} >

        </div>

        <div className="live-update" >
          <div className="live-score">
            <h3>{liveData?.teams["a"].code}</h3>
            <h4>
              <span>{liveData?.live?.score?.runs}</span>/
              <span>{liveData?.live?.score?.wickets}</span>
            </h4>
          </div>
          <div className="d-flex gap-3 live-overs-line">
            <Image src={liveUpdateBar} alt="" height={30} width={30} />

            <div className="live-overs">
              <h3>Overs</h3>
              <h4>
                ({liveData?.live?.score?.overs[0]}.
                {liveData?.live?.score?.overs[1]})
              </h4>
            </div>
            <div className="live-overs">
              <h3>Target</h3>
              {/* <h4>181</h4> */}
            </div>
            {/* <h3 className="live-drop" onClick={batmensData}>
              <Image src={upImg} alt="arrowimg" height={15} width={24} style={{ transform: batars ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </h3> */}
          </div>
        </div>
        <div className="this-over-section">
          <h3 className="this-over-para">This Over</h3>
          <div className="this-over-balls ">
            {/* <h3>2</h3>
                    <h3>4</h3>
                    <h3>6</h3>
                    <h3></h3>
                    <h3></h3>
                    <h3></h3> */}
          </div>
        </div>
        <div className="this-over-bowler">
          <h3>Bowler</h3>
          <h4>
            {" "}
            {liveData?.live?.recent_players?.bowler?.name}{" "}
            {liveData?.live?.recent_players?.bowler?.stats.balls}
          </h4>
        </div>
        <div className="teams-name">
          <h3>{liveData?.teams["a"].code} vs {liveData?.teams["b"].code}</h3>
        </div>
      </div>






      {/* live score popup  */}







      {/* popup end  */}


      <div className="row" style={{ opacity: batars ? '0.1' : '1' }}>

        <div className="buy-sell-container col-lg-6 col-md-6">
          <div>
            <div className="candle-live-score">
              <div className="batting-con">
                <div>
                  <Image src={teamAImgUrl} alt="" height={46} width={61} />



                </div>
                <div className="batting-text">
                  <h3>{liveData?.teams["a"].code}</h3>
                  <h4>Batting</h4>
                </div>

              </div>

              <div className="price-holdings">
                <div className="batting-text">
                  <h4>Current HSVC Price</h4>
                  <h6><span className="currentprice-arr">^</span>$250</h6>
                </div>
                <div className="batting-text">
                  <h4>Holdings</h4>
                  <h5>25 ($243.3)</h5>
                </div>



              </div>


            </div>
            <div>
              <CandleStickChart />

              <div>
                <BuySellComponent eachTeamName={teamATokenName} />

              </div>


            </div>
          </div>
        </div>



        <div className="buy-sell-container col-lg-6 col-md-6" >
          <div>
            <div className="candle-live-score">
              <div className="batting-con">
                <div>
                  <Image src={teamBImgUrl} alt="" height={53} width={34} />


                </div>
                <div className="batting-text">
                  <h3>{liveData?.teams["b"].code}</h3>
                  <h4>Bowling</h4>
                </div>

              </div>

              <div className="price-holdings">
                <div className="batting-text">
                  <h4>Current HSVC Price</h4>
                  <h6><span className="currentprice-arr">^</span>$250</h6>
                </div>
                <div className="batting-text">
                  <h4>Holdings</h4>
                  <h5>25 ($243.3)</h5>
                </div>



              </div>


            </div>
            <div>

              <CandleStickChart />

              <div>
                <BuySellComponent eachTeamName={teamBTokenName} />

              </div>


            </div>
          </div>
        </div>



      </div>
      <div>

      </div>

      {/* <div className="container-fluid trade-team-main-section ">
        {trade_teams.map((team_data, index) => (
          <div className="trade-team-parent" key={index}>
            <Image src={team_data.team_img} alt="" height={36.5} width={36.5} />

            <div className="trade-team-child2">
              <h3>{team_data.team_key}</h3>
              <h4>{team_data.team_name}</h4>
            </div>
            <div className="trade-team-child3">
              <h3>{team_data.hodling_val}</h3>
              <h4>{team_data.holding_percent}</h4>
            </div>
          </div>
        ))}
      </div> */}







      {/* ------------------------------------------------------new added sections  */}

      <div className="live-scoreboard-holdings">
        <div className="liveplayers-data" style={{ display: batars ? 'block' : 'block' }}>

          <div className="badding-team-nm">
            <h1>Sunrisers Hyderabad</h1>
            <div className="d-flex gap-5 align-items-center justify-content-center">
              <h2>
                <span>{liveData?.live?.score?.runs}</span>/
                <span>{liveData?.live?.score?.wickets}</span>(
                {liveData?.live?.score?.overs[0]}.{liveData?.live?.score?.overs[1]})
              </h2>
              <h3 onClick={closeBatsmendata} style={{ cursor: 'pointer', color: 'white' }}>
                <Image src={downImg} alt="arrowimg" />
              </h3>
            </div>
          </div>

          <div className="liveplayers-table" style={{ display: bowlingT ? 'none' : 'block' }}>
            <div className="batsmen-main-div batsmen-border">
              <h1>Batsman</h1>
              <div className="batsmen-table-li batsmen-table-head">
                <p>R</p>
                <p>B</p>
                <p>6s</p>
                <p>4s</p>
                <p>SR</p>
              </div>
            </div>
            {trade_teams.map((each, index) => (
              <div className="batsmen-main-div" key={index}>
                <div className="batsmens-scrore-data">
                  <h1>Abhishek Sharma</h1>
                  <h2>c Warner b Axar</h2>
                </div>
                <div className="batsmen-table-li">
                  <p className="batsmen-table-li-active">70</p>
                  <p>30</p>
                  <p>7</p>
                  <p>5</p>
                  <p>200.1</p>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex align-items-center justify-content-between px-4  royal-border">
            <h1 className="filding-team-name">Royal Challengers Banglore</h1>
            <div className="d-flex gap-5 align-items-center">
              <h1 className="filding-team-score">181/6 (20)</h1>
              <h1 style={{ transform: "rotate(180deg)", cursor: 'pointer', transform: bowlingT ? 'rotate(0deg)' : 'rotate(180deg)' }} onClick={filding_team}>
                <Image src={downImg} alt="arrowimg" />
              </h1>
            </div>

          </div>
          <div className="liveplayers-table" style={{ display: bowlingT ? 'block' : 'none' }}>
            <div className="batsmen-main-div batsmen-border">
              <h1>Batsman</h1>
              <div className="batsmen-table-li batsmen-table-head">
                <p>R</p>
                <p>B</p>
                <p>6s</p>
                <p>4s</p>
                <p>SR</p>
              </div>
            </div>
            {trade_teams.map((each, index) => (
              <div className="batsmen-main-div" key={index}>
                <div className="batsmens-scrore-data">
                  <h1>Denish Karthik</h1>
                  <h2>c Warner b Axar</h2>
                </div>
                <div className="batsmen-table-li">
                  <p className="batsmen-table-li-active">70</p>
                  <p>30</p>
                  <p>7</p>
                  <p>5</p>
                  <p>200.1</p>
                </div>
              </div>
            ))}
          </div>
        </div>

  <div style={{color:'white'}} className="trade-tokens-main"> 
          <div className='sidebar-tocken'>
            {/* <p className='my-tokens-text' onClick={mytokenClick} style={{color:mytokenclick ? "white" : '#5a5967'}}>My Tokens <span className="all-tokens-text"></span></p> */}
            <p className='my-tokens-text' >My Tokens</p>
            <p className='all-tokens-text' >All Tokens</p>
          </div>
          <table>
            <tr className='live-token-headings'>
              <th>Token Name</th>
              <th>Current Price</th>
              <th>24H</th>
              <th>Total Value</th>

            </tr>
            <tbody>
              {trade_teams.map((team_data, index) => (

                <tr key={index} className="trade-tokens">
                  <td className="token-name-column">
                    <Image src={team_data.team_img} alt="" height={36.5} width={36.5} />
                    <div>
                      <h1 className="live-team-kay">{team_data.team_key}</h1>
                      <h3 className="live-team-name">{team_data.team_name}</h3>
                    </div>
                  </td>
                  <td className="live-current-price">
                    <h2>{team_data.Current_Price}</h2>
                  </td>
                  <td className="live-holding-percent">
                   <h2 style={{color:index==0 ? '#0BBB70' : '#EC3E47'}}>{team_data.holding_percent}</h2>
                  </td>
                  <td className="live-total-value">
                 <h2 style={{color:index==0 ? '#0BBB70' : '#EC3E47'}}> {team_data.Total_Value}</h2>
                  </td>

                </tr>


              ))}
            </tbody>


          </table>
        </div>






      </div>
      <TransactionHistoryComponent componentName="wallet" />



    </div>





  );
};

export default TradeComponent;
