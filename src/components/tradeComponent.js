import React, { useEffect, useState } from "react";
import Image from "next/image";
// https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sunrisers.png
var bangaloreImage = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/royalChallengersBangalore.png"
// import bangaloreImage from "../../public/images/royalChallengersBangalore.png";
var sunrisersImage = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sunrisers.png"
// import sunrisersImage from "../../public/images/sunrisers.png";
import { useSelector } from "react-redux";
import CandleStickChart from "./candleStickChart";
import BuySellComponent from "./buySellComponent";
import upImg from "../../public/images/uparrow.png"
import downImg from "../../public/images/downarrow.png"
import liveUpdateBar from "../../public/images/live-update-bar.svg"



import { useCallback } from "react";

const TradeComponent = () => {


  const trade_teams = [
    {
      team_img: sunrisersImage,
      team_key: "DSVC",
      holding_val: "$5.54",
      team_name: "Delhi capitals",
      holding_percent: "-0.43%",
    },
    {
      team_img: sunrisersImage,
      team_key: "HSVC",
      hodling_val: "$5.54",
      team_name: "Sunrisers",
      holding_percent: "-0.43%",
    },
    {
      team_img: sunrisersImage,
      hodling_val: "$5.54",
      team_key: "DSVC",
      team_name: "Delhi capitals",
      holding_percent: "-0.43%",
    },
    {
      team_img: sunrisersImage,
      team_key: "DSVC",
      hodling_val: "$5.54",
      team_name: "Delhi capitals",
      holding_percent: "-0.43%",
    },
    {
      team_img: sunrisersImage,
      team_key: "DSVC",
      hodling_val: "$5.54",
      team_name: "Delhi capitals",
      holding_percent: "-0.43%",
    },
    {
      team_img: sunrisersImage,
      team_key: "DSVC",
      hodling_val: "$5.54",
      team_name: "Delhi capitals",
      holding_percent: "-0.43%",
    },
  ];

  const [liveData, setliveData] = useState(null);

  const totalmatches = useSelector((abc) => {
    return abc.priceMatches.matchesList;
  });
  console.log("alllllllll matches", totalmatches);

  const livematch = useCallback(() => {
    totalmatches.map((i) => {
      console.log("Status: - ", i.status);

      // console.log("Status: - ", i)

      if (i.status === "started") {
        console.log("Status : - ", i.status);

        setliveData(i);
      }
    });
  }, [totalmatches]);
  console.log("Status: - ", liveData);

  useEffect(() => {
    livematch();
  }, [livematch]);

  const [batars, setbatars] = useState(false)

  const [bowlingT, setbowlingT] = useState(false)

  const batmensData = () => {
    setbatars(!batars)

    // document.body.style.overflow = 'hidden';

  }
  const closeBatsmendata = () => {
    setbatars(false)
  }
  const filding_team = () => {
    setbowlingT(!bowlingT)

  }

  const scroreClose =() =>{
    setbatars(false)
  }
  return (
    <div style={{padding:"5px"}}>


      <div className="live-score-section">
        <div className="live-location-parent">
          <h3 className="live-location-heading">
            Match 4<br /> Chinna Swamy
          </h3>
          <div className="live-location-img">
            <Image src={sunrisersImage} alt="" height={20} width={20} />
            <h3>vs</h3>
            <Image src={bangaloreImage} alt="" height={20} width={20} />
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

        <div style={{  position: 'absolute',top:"0px",left:'0px',width:'100vw',height:'100vh',display: batars ? 'block' : 'none',zIndex:'25'}} onClick={scroreClose} >
        
        </div>

        <div className="live-update" >
          <div className="live-score">
            <h3>SRH</h3>
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
            <h3 style={{ transform: "rotate(180deg)", position: 'absolute', bottom: '-10px', color: 'black', cursor: 'pointer' }} onClick={batmensData}>
              <Image src={upImg} alt="arrowimg" height={15} width={24} />
            </h3>
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
          <h3>IM VS CSK</h3>
        </div>
      </div>






      {/* live score popup  */}


      <div className="liveplayers-data" style={{ display: batars ? 'block' : 'none' }}>
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
                <p>70</p>
                <p>30</p>
                <p>7</p>
                <p>5</p>
                <p>200.1</p>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex align-items-center justify-content-between px-4">
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
                <p>70</p>
                <p>30</p>
                <p>7</p>
                <p>5</p>
                <p>200.1</p>
              </div>
            </div>
          ))}
        </div>






      </div>




      {/* popup end  */}


      <div className="row">

<div className="buy-sell-container col-lg-6 col-md-6">
  <div>
    <div className="candle-live-score">
      <div className="batting-con">
        <div>
          <Image src={sunrisersImage} alt="" height={60} width={40} />


        </div>
        <div className="batting-text">
          <h3>SRH</h3>
          <h4>Batting</h4>
        </div>

      </div>

      <div className="price-holdings">
        <div className="batting-text">
          <h4>current Hsvc Price</h4>
          <h6>^$250</h6>
        </div>
        <div className="batting-text">
          <h4>Holdings</h4>
          <h5>25($243.3)</h5>
        </div>



      </div>


    </div>
    <div>
      <CandleStickChart />

      <div>
        <BuySellComponent />

      </div>


    </div>
  </div>
</div>



<div className="buy-sell-container col-lg-6 col-md-6" >
  <div>
    <div className="candle-live-score">
      <div className="batting-con">
        <div>
          <Image src={bangaloreImage} alt="" height={40} width={60} />


        </div>
        <div className="batting-text">
          <h3>SRH</h3>
          <h4>Bowling</h4>
        </div>

      </div>

      <div className="price-holdings">
        <div className="batting-text">
          <h4>current Hsvc Price</h4>
          <h6>^$250</h6>
        </div>
        <div className="batting-text">
          <h4>Holdings</h4>
          <h5>25($243.3)</h5>
        </div>



      </div>


    </div>
    <div>

      <CandleStickChart />

      <div>
        <BuySellComponent />

      </div>


    </div>
  </div>
</div>



</div>
<div>

</div>

      <div className="container trade-team-main-section ">
        {trade_teams.map((team_data, index) => (
          <div className="trade-team-parent" key={index}>
            <Image src={team_data.team_img} alt="" height={20} width={20} />

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
      </div>
    </div>
  );
};

export default TradeComponent;
