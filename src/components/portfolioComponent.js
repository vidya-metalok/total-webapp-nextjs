
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { BarController, BarElement, CategoryScale, LinearScale, Title, DoughnutController, ArcElement } from 'chart.js';
// import load1 from "../../public/images/graphload-img.png";
// import load2 from "../../public/images/graphload-img2.png";
// import empty from "../../public/images/empty-wallet.png";
// import wallet from "../../public/images/wallet-money.png";
import delhi from "../../public/images/delhi.png";
import royal from "../../public/images/rajasthanRoyals.png";


// var wallet = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/wallet-money.png";
import wallet from "../../public/images/wallet-money.svg"

// var empty = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/empty-wallet.png";
import empty from "../../public/images/empty-wallet.svg"
var load1 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/graphload-img.png";
var load2 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/graphload-img2.png";


import Image from 'next/image';
import { useSelector } from 'react-redux';
import BarComponent from './barComponent';
import moneyAddedImg from "../../public/images/money-add.svg"
import transArr from "../../public/images/trans-hist-arr.svg"

import noPLImg from "../../public/images/no-p&l-img.svg"
import noWinImg from "../../public/images/win-teams-line.svg"
import noAssetIcon from "../../public/images/no-asset-icon.svg"
import noPieIcon from "../../public/images/no-pie-icon.svg"





Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, DoughnutController, ArcElement);

const PortFolioComponent = () => {
    const [barOpenDropDown, setBarOpenDropDown] = useState(false)
    const [lineOpenDropDown, setLineOpenDropDown] = useState(false)

    const [pieOpenDropDown, setPieOpenDropDown] = useState(false)


    const netHoldings = useSelector((store) => store?.user?.totalHoldings)
    const userLoginInfo = useSelector((store) => store?.user?.loginInfo)
    console.log("nettttholdings", netHoldings)

    // const chartRef = useRef(null);
    // const chartInstanceRef = useRef(null);


    const pieChartRef = useRef(null);
    const pieChartInstanceRef = useRef(null);
    const lineChartRef = useRef(null);
    const lineChartInstanceRef = useRef(null);

    useEffect(() => {
        // if (chartInstanceRef.current) {
        //     chartInstanceRef.current.destroy();
        // }
        if (pieChartInstanceRef.current) {
            pieChartInstanceRef.current.destroy();
        }
        if (lineChartInstanceRef.current) {
            lineChartInstanceRef.current.destroy()
        }

        // bar chart start
        // const chartElement = chartRef.current;
        // const chartContext = chartElement.getContext('2d');
        // chartInstanceRef.current = new Chart(chartContext, {
        //     type: 'bar',
        //     data: {
        //         labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        //         datasets: [
        //             {
        //                 data: [600, -400, 200, -40, -280],
        //                 label: 'Applied',
        //                 borderColor: '#0BBB70',
        //                 backgroundColor: '#0BBB70',
        //                 borderWidth: 2,
        //             },
        //             {
        //                 data: [500, 600, 700, 1000],
        //                 label: 'Accepted',
        //                 borderColor: '#EC3E47',
        //                 backgroundColor: '#EC3E47',
        //                 borderWidth: 2,
        //             },
        //         ],
        //     },
        //     options: {
        //         scales: {
        //             x: {
        //                 barThickness: 30, // adjust spacing between bars on x-axis
        //                 maxBarThickness: 150,
        //                 grid: {
        //                     color: '#383748',
        //                     display: true,
        //                     borderWidth: 2,
        //                 },
        //                 // set maximum width of bars on x-axis
        //             },
        //             y: {
        //                 grid: {
        //                     color: '#383748',
        //                     display: true,
        //                     borderWidth: 2,
        //                 },
        //                 barPercentage: 2.5, // adjust width of bars on y-axis
        //                 categoryPercentage: 1.5, // adjust spacing between bars on y-axis
        //             },
        //         },

        //         plugins: {
        //             legend: {
        //                 position: 'right',
        //                 labels: {
        //                     // reduce the width of labels in pie chart
        //                     text: {
        //                         width: 10,
        //                     },
        //                 },
        //             },
        //         },

        //     },
        // });
        // bar chart end 

        const pieChartElement = pieChartRef?.current;
        const pieChartContext = pieChartElement?.getContext('2d');
        const lineChartElement = lineChartRef?.current;
        const lineChartContext = lineChartElement?.getContext('2d');

        pieChartInstanceRef.current = new Chart(pieChartContext, {
            type: 'doughnut',
            data: {
                labels: dataWithPercentage,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: ["#EA9528", "#8D77F3", "#F34060", "#42D6A4", "#FFB480", "#59ADF6", "#F8F38D", "#08CAD1"],
                    borderColor: ["#EA9528", "#8D77F3", "#F34060", "#42D6A4", "#FFB480", "#59ADF6", "#F8F38D", "#08CAD1"],
                    borderWidth: 1,
                    weight: 30,
                }
                ]
            },


            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1,
                plugins: {
                    legend: {
                        position: 'right',
                        boxWidth: 10,

                    },

                    labels: {
                        boxWidth: 10,
                        usePointStyle: true,
                        generateLabels: function (chart) {
                            const labels = chart.data.labels;
                            const rowCount = Math.ceil(labels.length / 2);
                            const firstColumnLabels = labels.slice(0, rowCount).map(function (label, index) {
                                return {
                                    text: label,
                                    fillStyle: 'black',
                                    boxWidth: 10,
                                    index: index,
                                };
                            });
                            const secondColumnLabels = labels.slice(rowCount).map(function (label, index) {
                                return {
                                    text: label,
                                    fillStyle: 'black',
                                    boxWidth: 10,
                                    index: index + rowCount,
                                };
                            });
                            return firstColumnLabels.concat(secondColumnLabels);
                        },
                    },









                    text: {
                        width: 10,
                    },
                    padding: 10,
                },
            },


        })







        lineChartInstanceRef.current = new Chart(lineChartContext, {
            type: "line",
            data: {
                labels: [null, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"],
                datasets: [
                    {
                        label: "My First Dataset",

                        data: userLoginInfo == null ? [0, 0, 0, 0, 0, 0, 0, 0] : [null, 5000, 6000, 8000, 10000, 7000, 6500, 4000],

                        fill: true,
                        backgroundColor: "rgba(57,57,71,0.7)",
                        borderColor: userLoginInfo == null ? "rgba(255,255,255,0.1)" : "#EA9528",
                        borderCapStyle: "butt",
                        tension: 0.1,
                    },
                ], lineChartRef
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            color: "#9492A0",
                        },
                        grid: {
                            color: "#383748",
                        },
                    },
                    y: {
                        ticks: {
                            color: "#9492A0",
                            callback: function (value, index, values) {
                                return value / 1000 + "k";
                            },
                        },
                        grid: {
                            color: "#383748",
                        },
                    },
                },
            }
        })





    })


    const bsvPrice = useSelector((store) => store.bsvc.bsv)
    const csvPrice = useSelector((store) => store.csvc.csv)
    const dsvPrice = useSelector((store) => store.dsvc.dsv)
    const gsvPrice = useSelector((store) => store.gsvc.gsv)
    const hsvPrice = useSelector((store) => store.hsvc.hsv)
    const ksvPrice = useSelector((store) => store.ksvc.ksv)
    const lsvPrice = useSelector((store) => store.lsvc.lsv)
    const msvPrice = useSelector((store) => store.msvc.msv)
    const psvPrice = useSelector((store) => store.psvc.psv)
    const rsvPrice = useSelector((store) => store.rsvc.rsv)
    // wallet balnces 
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

    const [graphline, setgraphline] = useState(300)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1128) {
                setgraphline(150);
            } else {
                setgraphline(300);
            }
        };
      

        window.addEventListener('resize', handleResize);
  handleResize(); // Call the function immediately

  return () => {
    window.removeEventListener('resize', handleResize);
  };


        




    }, []);
    // console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", graphline)
    const data = useMemo(() =>



        [


            parseFloat(bsvAmount),
            parseFloat(csvAmount),
            parseFloat(dsvAmount),
            parseFloat(gsvAmount),
            parseFloat(hsvAmount),
            parseFloat(ksvAmount),
            parseFloat(lsvAmount),
            parseFloat(msvAmount),
            parseFloat(psvAmount),
            parseFloat(rsvAmount)


        ],


        [

            bsvAmount, csvAmount, dsvAmount, gsvAmount, hsvAmount, ksvAmount, lsvAmount, msvAmount, psvAmount, rsvAmount
        ]




    )

    console.log("datapiechart...", data)

    // const total = useMemo(
    //     () => data.reduce((sum, value) => sum + value, 0),
    //     [data],
    // );

    // const dataWithPercentage = useMemo(
    //     () => data.map(value => (total > 0 ? (value / total) * 100 : 0)),
    //     [data, total],
    // );

    const dataWithPercentage = useMemo(() => {
        const total = data.reduce((acc, curr) => acc + curr, 0);
        return data.map((value) => `${Math.round((value / total) * 100)}%`);
    }, [data]);


    console.log("datPercentage..", dataWithPercentage)


    const tokenAssests = [

        {
            id: "0",
            tokenImg: delhi,
            assetToken: "DSVC",
            tokenColin: "Delhi Sports Verse Coin",
            holdings: "25.12",
            totalValue: "+$5203 USDT",
            invested: "₹25,000",
            hour: "+0.2%",
            currectPrice: "$5,203",
            profit: "+$52.03"

        },
        {
            id: "1",
            tokenImg: royal,
            assetToken: "DSVC",
            tokenColin: "Rajasthan Sports Verse Coin",
            holdings: "25.12",
            totalValue: "+$5203 USDT",
            invested: "₹25,000",
            hour: "+0.2%",
            currectPrice: "$5,203",
            profit: "+$52.03"

        },
        {
            id: "2",
            tokenImg: delhi,
            assetToken: "DSVC",
            tokenColin: "Delhi Sports Verse Coin",
            holdings: "25.12",
            totalValue: "+$5203 USDT",
            invested: "₹25,000",
            hour: "+0.2%",
            currectPrice: "$5,203",
            profit: "+$52.03"

        },
        {
            id: "3",
            tokenImg: royal,
            assetToken: "DSVC",
            tokenColin: "Rajasthan Sports Verse Coin",
            holdings: "25.12",
            totalValue: "+$5203 USDT",
            invested: "₹25,000",
            hour: "+0.2%",
            currectPrice: "$5,203",
            profit: "+$52.03"

        },

    ]







    return (
        <>


            {/* <h1 className="">Bar Chart</h1> */}
            <div className="" style={{ marginTop: "1rem" }}>
                <div className='d-flex'>
                    <div className="totalamt-child1-2 portfolio-coloumn" style={{ width: "40%" }}>
                        <div className="portfolio-totalamt-subparent4" style={{ background: "#2C2B44", width: "100%", paddingLeft: "20px" }}>
                            <div className="todays-pl">
                                <p className="today-text">Total P&L</p>
                                <p className="today-amount">₹{netHoldings}</p>

                                {netHoldings == 0 ? (
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Image src={noPLImg} alt="" height={20} width={graphline} />

                                        <div className="no-teams-con">
                                            <Image src={noWinImg} alt="" height={20} width={20} style={{ marginTop: "0px", marginBottom: "0px" }} />
                                            <h2>No Coins to display</h2>
                                        </div>
                                    </div>

                                ) : (
                                    <>
                                        <Image src={load1} alt="" height={20} width={264} />
                                        <div className="today-team-names-new">
                                            <p>RSVC, BSVC, HSVC, CSVC, KSVC</p>
                                            <p>MSVC, PSVC</p>
                                        </div>
                                    </>


                                )}




                            </div>
                        </div>
                        <div className="portfolio-totalamt-subparent5" style={{ background: "#2C2B44", width: "100%", paddingLeft: "20px" }}>
                            <div className="todays-pl">
                                <p className="today-text">Today&apos;s P&L</p>
                                <p className="today-amount">₹{netHoldings}</p>


                                {netHoldings == 0 ? (
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Image src={noPLImg} alt="" height={20} width={graphline} />

                                        <div className="no-teams-con">
                                            <Image src={noWinImg} alt="" height={20} width={20} style={{ marginTop: "0px", marginBottom: "0px" }} />
                                            <h2>No Coins to display</h2>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Image src={load2} alt="" height={20} width={264} />
                                        <div className="today-team-names-new">
                                            <p>RSVC, BSVC, HSVC, CSVC, KSVC</p>
                                            <p>MSVC, PSVC</p>
                                        </div>

                                    </>



                                )}

                            </div>
                        </div>
                    </div>

                    <div style={{ width: "60%", marginLeft: "10px" }}>
                        <div className='holding-con'>
                            <div className="portfolio-totalamt-subparent3 port-folio-sub-devs" style={{ height: "108px", background: "#2C2B44" }}>
                                <div className="subparentsubchild5">
                                    <Image
                                        src={wallet}
                                        alt=""
                                        height={25} width={25}
                                        style={{ width: "15px;height:15px" }}
                                        className='sub-img'
                                    />
                                    <p>Total sportsverse Holdings</p>
                                </div>
                                <div className="subparentsubchild6">
                                    <p style={{ marginTop: "-12px" }}>{netHoldings}</p>
                                    <p>+9.2%</p>
                                </div>
                            </div>
                            <div className="totalamt-subparent3-2 port-folio-sub-devs" style={{ height: "108px", background: "#2C2B44" }}>
                                <div className="subparentsubchild5">
                                    <Image
                                        src={moneyAddedImg}
                                        alt=""
                                        height={25} width={25}
                                        style={{ width: "15px;height:15px" }}
                                    />
                                    <p>Total Invested</p>
                                </div>
                                <div className="subparentsubchild6">
                                    <p>{netHoldings}</p>
                                    {/* <p>+9.2%</p> */}
                                </div>
                            </div>
                            <div className="wallet-card port-folio-sub-devs" style={{ height: "108px", margin: "2px" }}>
                                <div className="img-con">
                                    <Image src={empty} alt="" height={25} width={25} />

                                    <p>Wallet balance</p>
                                </div>

                                <p>{netHoldings}</p>
                            </div>
                        </div>

                        <div className="bar-chart-con  bar-one" style={{ width: "100%", overflow: "auto" }}>
                            <div className="tocken-bar-head" style={{}}>
                                <h3>Profit & loss analysis breakdown</h3>
                                {/* <div className="token-week">
                    <p>Weekly</p>
                    <Image src={down} alt="" height={10} width={10} />
                  </div> */}

                                <div onClick={() => setBarOpenDropDown(!barOpenDropDown)} className="trans-settings">
                                    <div>
                                        <h6>Weekly</h6>
                                    </div>

                                    <div>
                                        <Image src={transArr} alt="" height={15} width={15} />
                                    </div>

                                </div>
                            </div>
                            {barOpenDropDown && (
                                <div className="chart-hist" >
                                    <p>weekly</p>
                                    <p>monthly</p>
                                    <p>yearly</p>
                                </div>
                            )}
                            {/* <canvas id="myChart" ref={chartRef} />  */}
                            <div style={{ width: "100%" }}>


                                <BarComponent />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className="bar-chart-con bar-two">
                        <h3>Asset Collection</h3>
                        <canvas className='cnava' id="myChart" ref={pieChartRef} />
                    </div>
                </div> */}


                <div className="bar-chart-con bar-two">
                    {/* <h3>Asset Net Worth</h3> */}
                    <div className="tocken-bar-head">
                        <h3>Asset Net Worth </h3>
                        {/* <div className="token-week">
                    <p>Weekly</p>
                    <Image src={down} alt="" height={10} width={10} />
                  </div> */}

                        <div onClick={() => setLineOpenDropDown(!lineOpenDropDown)} className="trans-settings">
                            <div>
                                <h6>Weekly</h6>
                            </div>

                            <div>
                                <Image src={transArr} alt="" height={15} width={15} />
                            </div>

                        </div>
                    </div>
                    {lineOpenDropDown && (
                        <div className="chart-hist" >
                            <p>weekly</p>
                            <p>monthly</p>
                            <p>yearly</p>
                        </div>
                    )}


                    <canvas className='cnava line-canva' id="myChart" ref={lineChartRef} />


                </div>
                <div>
                    <div className="bar-chart-con bar-two piechart">
                        {/* <h3> Asset Allocation</h3> */}
                        <div className="tocken-bar-head">
                            <h3>Asset Allocation</h3>
                            {/* <div className="token-week">
                    <p>Weekly</p>
                    <Image src={down} alt="" height={10} width={10} />
                  </div> */}

                            <div onClick={() => setPieOpenDropDown(!pieOpenDropDown)} className="trans-settings">
                                <div>
                                    <h6>Weekly</h6>
                                </div>

                                <div>
                                    <Image src={transArr} alt="" height={15} width={15} />
                                </div>

                            </div>
                        </div>
                        {pieOpenDropDown && (
                            <div className="chart-hist" >
                                <p>weekly</p>
                                <p>monthly</p>
                                <p>yearly</p>
                            </div>
                        )}
                        <div style={{ height: '350px', padding: "20px" }} >

                            {userLoginInfo == null ? (
                                <div className="no-pie-details-con">
                                    <Image src={noPieIcon} alt="" height="250px" width="300px" />
                                    <div className='no-pie-data'>
                                        <Image src={noAssetIcon} alt="img" height="250px" width="300px" />
                                        <h1 style={{ color: 'white' }}>You don’t have any Assets</h1>
                                    </div>
                                </div>

                            ) : (


                                <div style={{ width: "350px", height: "250px" }}>

                                    <canvas className='cnavass pie-canva' id="myChart" ref={pieChartRef} />
                                </div>


                            )}

                        </div>
                    </div>




                </div>



                <div>
                    <h3 className='asset-head'>Your Assets</h3>
                </div>

                <div className='token-asset-main' style={{ position: 'relative', height: "400px" }}>
                    <table>
                        <tr>
                            <th> Token Name </th>
                            <th> Holdings </th>
                            <th> Token Value </th>
                            <th> Invested</th>
                            <th> 24H </th>
                            <th> Current Price </th>
                            <th> Total P&L </th>
                        </tr>
                        {userLoginInfo == null ? (
                            <div className='no-transiction'>
                                <Image src={noAssetIcon} alt="img" height="250px" width="300px" />
                                <h1 style={{ color: 'white' }}>You don’t have any Assets</h1>
                            </div>
                        ) : (
                            <tbody>
                                {tokenAssests.map((each, index) => (

                                    <tr key={index} className='token-asset-parent'>

                                        <td >
                                            <div className='asset-name'>


                                                <Image src={each.tokenImg} alt="" height={40} width={40} />
                                                <div>
                                                    <h3>{each.assetToken}</h3>
                                                    <p>{each.tokenColin}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='asset-hold'>{each.holdings}</td>
                                        <td className='asset-total'>
                                            {/* {each.totalValue} */}
                                            <span>{each.totalValue.split(' ')[0]}</span>
                                            <span style={{ fontSize: '12px' }}>{each.totalValue.split(' ')[1]}</span>
                                        </td>
                                        <td className='asset-invest'>{each.invested}</td>
                                        <td className='asset-total'>{each.hour}</td>
                                        <td className='asset-invest'>{each.currectPrice}</td>
                                        <td className='asset-total'>{each.profit}</td>
                                    </tr>
                                ))}
                            </tbody>

                        )}

                    </table>

                </div>

            </div >
        </>
    )


}
export default PortFolioComponent

