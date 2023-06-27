import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";



// import wallet from "../../public/images/wallet-money.png";
// import money from "../../public/images/money-add.png";
// import empty from "../../public/images/empty-wallet.png";
// import load1 from "../../public/images/graphload-img.png";
// import load2 from "../../public/images/graphload-img2.png";
// import tsymbal from "../../public/images/tsymbal.png";
import { holdings } from "./redux/userSlice";
// import matic from "../../public/images/matic.png"
// import usdt from "../../public/images/usdt.png";

// https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/tsymbal.png
var tsymbal = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/tsymbal.png";
// var wallet = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/wallet-money.png";
import wallet from "../../public/images/wallet-money.svg"


// var money = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/money-add.png";
// var empty = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/empty-wallet.png";
import money from "../../public/images/money-add.svg"

import empty from "../../public/images/empty-wallet.svg"

var load1 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/graphload-img.png";
var load2 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/graphload-img2.png";
var matic = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/matic.png";
// var usdt = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/usdt.png"
import usdt from "../../public/images/USDT 40-40.svg"

var delhiCapital = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/delhicapital.png";
var chennaiSupers = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/chennaiSuperkings.png";
var rcbs = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rcb logo.png";
var mumbaiIndia = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/mumbaiIndians.png";
var rajasthanRoyals = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rajasthanRoyals.png";
var punjabKings = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/punjabKings.png";
var sunrisers = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/sunrisers.png";
var kkr = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/kkr.png";
// var lk = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/lk.jpg";
import lk from "../../public/images/Frame 35.svg"
var gt = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/gt.png";
import trabdeArrow from "../../public/images/trade-arr.svg"


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
import Web3 from "web3";
import qs from "qs"
import abi from "../../abis/abi.json"
const BigNumber = require('bignumber.js');
import noPLImg from "../../public/images/no-p&l-img.svg"
import noWinImg from "../../public/images/win-teams-line.svg"

const Dashboardcenter = () => {
    const [selectTokenInErr, setSelectTokenInErr] = useState(false)
    const [selectTokenOutErr, setSelectTokenOutErr] = useState(false)
    const [inputAmountErr, setInputAmountErr] = useState(false)
    const [mulDecimalErr, setMulDecimalErr] = useState(false)
    const web3 = new Web3(
        'https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF',
    );


    const userWallet = useSelector((store) => store?.user?.loginInfo?.walletAddress)
    const privateKey = useSelector((store) => store?.user?.privKey)


    const dispatch = useDispatch()
    //tokenFullname
    const [tradeTokenFullName, setTokenFullName] = useState("")
    //tokenIn
    const [tokenIn, setTokenIn] = useState(null);
    const [tokenName, setTokenName] = useState('Select Token');
    const [tokenImage, setTokenImage] = useState('');
    //tokenOut 

    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const [tokenOut, setTokenOut] = useState(null);
    const [tokenOutName, setTokenOutName] = useState('Select Token');
    const [tokenOutImage, setTokenOutImage] = useState('');
    const [inputAmount, setUserInput] = useState('');
    const [amountOut, setAmountOut] = useState("");
    const [amount, setAmount] = useState(0);
    const [trade, setTrade] = useState(null);
    const [recevedInput, setReceivedInput] = useState("")
    //available balances
    const [tokInBalance, setSellTokenBalance] = useState(0);
    const [tokenOutBalance, setBuyTokenBalance] = useState(0);
    const [sellToken, setSellToken] = useState(null);
    const [buyToken, setBuyToken] = useState(null);
    const [checkingOnChange, setCheckingOnChange] = useState(false)

    const USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
    const MATIC = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
    const ALLOWANCE_TRAGET = '0xdef1c0ded9bec7f1a1670819833240f027b25eff';
    const SPORTSVERSE_ADDRESS = '0xFDfDaE4d7f7731A09eD556C0e1F9D3b5C25FEf18';
    const PLATFORM_FEE = '0.01';

    const [sameIn, setSameIn] = useState("in")
    const [sameOut, setSameOut] = useState('out')
    var contract = new web3.eth.Contract(abi, sellToken);








    // token prices
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

    const totalHoldings = (bsvPrice * bsvAmount) + (csvPrice * csvAmount) + (dsvPrice * dsvAmount) + (gsvPrice * gsvAmount) + (hsvPrice * hsvAmount) + (ksvPrice * ksvAmount) + (lsvPrice * lsvAmount) + (msvPrice * msvAmount) + (psvPrice * psvAmount) + (rsvPrice * rsvAmount)
    dispatch(holdings(totalHoldings))




    const getSellTokenBalance = async tokenAddress => {
        if (tokenAddress == '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') {
            let tmp = await web3.eth.getBalance(
                userWallet,
            );
            //  USDT token address

            let balance = web3.utils.fromWei(tmp, 'ether');
            return balance;
        } else {
            let contrct = new web3.eth.Contract(abi, tokenAddress);
            let USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
            //  USDT token address
            var tmp = await contrct.methods
                .balanceOf(userWallet)
                .call({ from: userWallet });
            let balance =
                contrct.options.address == USDT
                    ? web3.utils.fromWei(tmp, 'mwei')
                    : web3.utils.fromWei(tmp, 'ether');
            return balance;
        }
    };

    const getBuyTokenBalance = async tokenAddress => {
        if (tokenAddress == '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') {
            let tmp = await web3.eth.getBalance(
                userWallet,
            );
            //  USDT token address

            let balance = web3.utils.fromWei(tmp, 'ether');
            return balance;
        } else {
            let contrct = new web3.eth.Contract(abi, tokenAddress);
            let USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
            //  USDT token address
            var tmp = await contrct.methods.balanceOf(userWallet).call({ from: userWallet });
            let balance =
                contrct.options.address == USDT
                    ? web3.utils.fromWei(tmp, 'ether')
                    : web3.utils.fromWei(tmp, 'ether');

            return balance;
        }
    };


    // useEffect(() => {
    //     let f = async () => {
    //         setSellTokenBalance(await getSellTokenBalance(tokenIn));
    //     };
    //     f();
    // }, [sellToken]);
    // useEffect(() => {
    //     let f = async () => {
    //         setBuyTokenBalance(await getBuyTokenBalance(tokenOut));
    //     };
    //     f();
    // }, [buyToken]);



    const [opt, setopt] = useState(true)
    const [opt2, setopt2] = useState(true)

    function selectClick() {
        setopt(!opt)
        setopt2(true)

    }
    const setOnClickTwo = () => {
        setopt2(!opt2)
        setopt(true)

    }

    const storeTokenIn = (param1, param2, param3) => {

        setTokenImage(param1)
        setTokenName(param2)
        setTokenIn(param3)
        setSellToken(param3)
        setopt(!opt)

        setSameIn(param2)
        setSelectTokenInErr(false)

    }
    const storeTokenOut = (param1, param2, param3, param4) => {
        setTokenOutImage(param1)
        setTokenOutName(param2)
        setTokenOut(param3)
        setBuyToken(param3)
        setopt2(!opt2)
        setTokenFullName(param4)

        setSameOut(param2)
        setSelectTokenOutErr(false)


    }



    const tokenDetails = [


        {

            id: "0",
            tokenName: 'MATIC',
            tokenImg: matic,
            tokenIn: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            tokenFullName: ""


        },
        ,
        {

            id: "1",
            tokenName: 'USDT',
            tokenImg: usdt,
            tokenIn: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
            tokenFullName: ""


        },
        {

            id: "2",
            tokenName: 'BSVC',
            tokenImg: rcbs,
            tokenIn: '0x9Dbe1a074CF62D3B276EeDD54952d179299a4892',
            tokenFullName: "Royal Challengers Banglore"


        },
        {

            id: "3",
            tokenName: 'CSVC',
            tokenImg: chennaiSupers,
            tokenIn: '0x2328aA62F692Cdb1749ae173A93E89fDEAFeD650',
            tokenFullName: "Chennai Super Kings"



        },
        {

            id: "4",
            tokenName: 'DSVC',
            tokenImg: delhiCapital,
            tokenIn: '0x3EDC3c21E798d0cc2336500871ABEB05e3cB5166',
            tokenFullName: "Delhi Capitals"


        },
        {

            id: "5",
            tokenName: 'GSVC',
            tokenImg: gt,
            tokenIn: '0x4CED951389405dECf9E82efaBA1854e109b93C38',
            tokenFullName: "Gujarat Titans"


        },
        {

            id: "6",
            tokenName: 'HSVC',
            tokenImg: sunrisers,
            tokenIn: '0xB90ED1bd876AB378b001b702b38A73fB39e23D25',
            tokenFullName: "Sunrisers Hyderabad"



        },
        {

            id: "7",
            tokenName: 'KSVC',
            tokenImg: kkr,
            tokenIn: '0xb39370D66472cD8e25E542b7FaE4C641f89d1a3c',
            tokenFullName: "Kolkata Knight Riders"


        },
        {

            id: "8",
            tokenName: 'LSVC',
            tokenImg: lk,
            tokenIn: '0x34141D62B66857d409e3eEfB7C07EB23CF98B06f',
            tokenFullName: "Lucknow Super Giants"


        },
        {

            id: "9",
            tokenName: 'MSVC',
            tokenImg: mumbaiIndia,
            tokenIn: '0x33e5DFe148aCe06A2c9aCee17F59d7AbA07E1DA3',
            tokenFullName: "Mumbai Indians"


        },
        {

            id: "10",
            tokenName: 'PSVC',
            tokenImg: punjabKings,
            tokenIn: '0x6b32f2a2c0484EB7F7f089Dd45CCc33291317ab0',
            tokenFullName: "Punjab Kings"


        },
        {

            id: "11",
            tokenName: 'RSVC',
            tokenImg: rajasthanRoyals,
            tokenIn: '0xeeA6661a8F6D5Bdb83C3BB5CD0684bf8bF841952',
            tokenFullName: "Rajasthan Royals"



        }

    ]













    const handleKeyPress = (event) => {
        const keyCode = event.which || event.keyCode;
        const keyValue = String.fromCharCode(keyCode);
        const regex = /^[0-9\b]+$/; // Regular expression to match only numbers and backspace (\b)

        if (!regex.test(keyValue)) {
            event.preventDefault();
        }
    };


      const [chosentime,setchosentime] = useState(false)


useEffect(()=>{
    if(sameIn==='in' || sameOut==='out' || sameIn===sameOut){
        console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeee if useeffect')
            setchosentime(false)
        }
    else{
            setchosentime(true)
        setTimeout(()=>{
                setchosentime(false)

        },2000)



        }


},[sameIn,sameOut])



    function handleErrors(trade) {
        let message = 'Error: ';
        if (trade.code) {
            if (trade.code == 105) {
                message += trade.values['message'];
            } else {
                switch (trade.code) {
                    case 100:
                        message += 'Validation Failed';
                        break;
                    case 101:
                        message += 'Malformed JSON';
                        break;
                    case 102:
                        message += 'Order submission disabled';
                        break;
                    case 103:
                        message += 'Throttled';
                        break;
                    case 104:
                        message += 'Not Implemented';
                        break;
                    case 105:
                        message += 'Transaction Invalid';
                        break;
                    case 106:
                        message += 'Unable to Submit on Behalf Of Account ';
                        break;
                    case 107:
                        message += 'Invalid API Key';
                        break;
                    case 108:
                        message += 'Service Disabled ';
                        break;
                    case 109:
                        message += 'Insufficient funds for transaction';
                        break;
                    case 110:
                        message += 'Matic selling is not supported';
                        break;
                    case 111:
                        message += 'Gas estimation failed';
                        break;
                    default:
                        message += 'Error fetching exchange qoute';
                }
            }
        }
        alert(message);
        setError(message);
        return message;
    }




    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getQuote() {
        if (tokenIn != null && tokenOut != null && amount != null) {
            // setLoader(true);
            const params = {
                sellToken: sellToken,
                buyToken: buyToken,
                sellAmount: amount,
                feeRecipient: SPORTSVERSE_ADDRESS,
                buyTokenPercentageFee: PLATFORM_FEE,
            };

            const response = await fetch(
                `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`,
            );

            let trade = await response.json();
            // if (amountOut !== "") {
            //     setAmountOut("")
            // }
            const bothInputs = checkingOnChange ? parseFloat(recevedInput) : parseFloat(inputAmount)

            setAmountOut(parseFloat(trade.price * parseFloat(bothInputs)));
            // setLoader(false);
        }
    }


    useEffect(() => {

        const fun = async () => {
            await getQuote();
        };
        if (parseFloat(inputAmount) || checkingOnChange) fun();
        // else {
        //     setAmountOut('');
        // }

    }, [inputAmount, buyToken, sellToken, getQuote, amountOut]);




    useEffect(() => {
        // setLoader(true);
        if (parseFloat(inputAmount) || checkingOnChange) {
            let amt = checkingOnChange ? parseFloat(recevedInput) : parseFloat(inputAmount)
            if (tokenIn == USDT) {
                setAmount(amt * 1e6);
            } else {
                setAmount(amt * 1e18);
            }
            // setLoader(false);
        }
    }, [tokenIn, recevedInput, inputAmount]);

    async function setAllowance() {
        setLoader(true);
        var allowance = await contract.methods
            .allowance(userWallet, ALLOWANCE_TRAGET)
            .call({ from: userWallet });
        var totalSupply = await contract.methods
            .totalSupply()
            .call({ from: userWallet });
        let bnallowance = new BigNumber(allowance);
        let amountallowance = new BigNumber(amount);
        if (bnallowance.comparedTo(amountallowance) != 1) {
            const gasPrice = await web3.eth.getGasPrice().then(response => {
                return response;
            });
            var gasLimit = await contract.methods
                .approve(ALLOWANCE_TRAGET, totalSupply)
                .estimateGas({ from: userWallet });
            var encData = await contract.methods
                .approve(ALLOWANCE_TRAGET, totalSupply)
                .encodeABI();
            const tx = {
                from: userWallet,
                to: sellToken,
                data: encData,
                gas: gasLimit,
                gasPrice: gasPrice,
            };

            const receiptErrHandler = function (data) {
                setError(data);
                console.log('Error data : ', data);
                alert('Gas Error', data.message);
                setLoader(false);
                return data;
            };
            const receiptHandler = function (data) {
                console.log('Allowance updated at TX: ', data.transactionHash);
                setLoader(false);
                return data;
            };

            const signedTx = await web3.eth.accounts.signTransaction(
                tx,
                privateKey,
            );

            console.log(signedTx);

            await web3.eth
                .sendSignedTransaction(signedTx.rawTransaction)
                .on('receipt', receiptHandler)
                .on('error', receiptErrHandler);
            setLoader(false);
            return;
        }
        setLoader(false);
        return;
    }

    const executeTrade = async () => {
        if (sellToken != MATIC) await setAllowance();
        setLoader(true);
        const params = {
            sellToken: sellToken,
            buyToken: buyToken,
            sellAmount: amount,
            takerAddress: userWallet,
            feeRecipient: SPORTSVERSE_ADDRESS,
            buyTokenPercentageFee: PLATFORM_FEE,
        };

        const response = await fetch(
            `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`,
        );

        let trade = await response.json();

        if (trade.code) {
            handleErrors(trade);
            setLoader(false);
            return;
        }

        const gasPrice = await web3.eth.getGasPrice().then(response => {
            return response;
        });

        let estimateGasOption = {
            from: userWallet,
            to: ALLOWANCE_TRAGET,
            data: trade.data,
            ...(sellToken == MATIC && { value: amount }),
        };

        const gasEstimate = await web3.eth
            .estimateGas(estimateGasOption)
            .then(response => {
                return response;
            });

        const tx = {
            from: userWallet,
            to: ALLOWANCE_TRAGET,
            data: trade.data,
            gasLimit: web3.utils.toHex(gasEstimate),
            gasPrice: gasPrice,
            ...(sellToken == MATIC && { value: amount }),
        };

        const signedTx = await web3.eth.accounts.signTransaction(
            tx,
            privateKey,
        );

        const receiptHandler = function (data) {
            console.log('Transaction executed at tx Hash: ', data.transactionHash);
            console.log('Transaction data: ', data);
            alert(
                'Transaction submitted successfully with tx hash: ',
                data.transactionHash,
            );
            setLoader(false);

            return data;
        };
        const receiptErrHandler = function (data) {
            console.log('Error', data);
            alert('Error : ', data.message);
            setLoader(false);
            return data;
        };

        await web3.eth
            .sendSignedTransaction(signedTx.rawTransaction)
            .on('receipt', receiptHandler)
            .on('error', receiptErrHandler);
        setLoader(false);
    }




    const usdtBalance = useSelector((store) => store?.user?.usdtBalance)
    // const maticBalance = useSelector((store) => store?.user?.usdtBalance)



    const onChangeUserInput = (e) => {
        const userInput = e.target.value
        // setUserInput(e.target.value)

        if (tokenName == "Select Token") {
            setSelectTokenInErr(true)
        }
        if (tokenOutName == "Select Token") {
            setSelectTokenOutErr(true)


        }
        const decimalCount = (userInput.split(".")[1] || "").length
        if (decimalCount > 2) {
            setInputAmountErr(true)

        }
        else {
            setInputAmountErr(false)
        }
        // Check if the user input has multiple decimal points
        const hasMultipleDecimalPoints = userInput.split(".").length - 1 > 1;
        if (hasMultipleDecimalPoints) {
            setMulDecimalErr(true);
        }
        else {
            setMulDecimalErr(false)
        }

        // Update the userInput state
        setUserInput(userInput);
        setCheckingOnChange(false)
    }

    const setUserAmountOut = (e) => {

        console.log("amount-changing-input", amountOut)
        if (amountOut) {
            setAmountOut("")
        }

        // if (outValue) {
        //     setAmountOut("")
        // }
        const outValue = e.target.value
        setReceivedInput(outValue)
        setCheckingOnChange(true)
        setAmountOut("")

    }

    return (
        <div style={{ marginTop: "0px" }}>
            <div className="totalamt-section">
                <div className="totalamt-parent">
                    <div className="totalamt-child1">
                        <div className="totalamt-child1-0">
                            <div className="totalamt-subparent1">
                                <div className="totalamt-subparentchild1">
                                    <div className="subparentsubchild1">
                                        <Image
                                            src={wallet}
                                            alt=""
                                            height={20} width={20}
                                            style={{ width: "15px;height:15px" }}
                                        />
                                        <p>Total sportsverse Holdings</p>
                                    </div>
                                    <div className="subparentsubchild2">
                                        <p>₹{isNaN(totalHoldings) ? 0 : totalHoldings}</p>
                                        <p className="totalhold-percent">+9.2%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="totalamt-subparent2">
                                <div className="subparentsubchild3">
                                    <Image
                                        src={money}
                                        alt=""
                                        height={20} width={20}
                                        style={{ width: "15px;height:15px" }}
                                    />
                                    <p>Total Invested</p>
                                </div>
                                <div className="subparentsubchild4">
                                    <p>₹{totalHoldings}</p>
                                    {/* <p>+9.2%</p> */}
                                </div>
                            </div>

                            <div className="totalamt-subparent3">
                                <div className="subparentsubchild5">
                                    <Image
                                        src={empty}
                                        alt=""
                                        height={20} width={20}
                                        style={{ width: "15px;height:15px" }}
                                    />
                                    <p>Wallet Balance</p>
                                </div>
                                <div className="subparentsubchild6">
                                    <p>${totalHoldings}</p>
                                    <p className="w-usdt">USDT</p>
                                    {/* <p>+9.2%</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="totalamt-child1-2">
                            <div className="totalamt-subparent4">
                                <div className="todays-pl">
                                    <p className="today-text" style={{ marginBottom: "0rem" }}>Today’s P&L</p>
                                    <p className="today-amount">₹{totalHoldings}</p>
                                    {totalHoldings == 0 ? (
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <Image src={noPLImg} alt="" height={20} width={300} />
                                            <div className="no-teams-con">
                                                <Image src={noWinImg} alt="" height={20} width={20} style={{ marginTop: "0px", marginBottom: "0px" }} />
                                                <h2>No Coins to display</h2>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Image src={load1} alt="" height={20} width={300} />

                                            <div className="today-team-names">
                                                <p>RSVC, BSVC, HSVC, CSVC, KSVC</p>
                                                <p>MSVC, PSVC</p>
                                            </div>



                                        </>
                                    )}

                                </div>
                            </div>
                            <div className="totalamt-subparent5">
                                <div className="todays-pl">
                                    <p className="today-text">Total P&L</p>
                                    <p className="today-amount">₹{totalHoldings}</p>
                                    {totalHoldings == 0 ? (
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <Image src={noPLImg} alt="" height={20} width={300} />

                                            <div className="no-teams-con">
                                                <Image src={noWinImg} alt="" height={20} width={20} style={{ marginTop: "0px", marginBottom: "0px" }} />
                                                <h2>No Coins to display</h2>
                                            </div>
                                        </div>

                                    ) : (
                                        <>
                                            <Image src={load2} alt="" height={20} width={300} />
                                            <div className="today-team-names">
                                                <p>RSVC, BSVC, HSVC, CSVC, KSVC</p>
                                                <p>MSVC, PSVC</p>
                                            </div>
                                        </>

                                    )}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="totalamt-child2">
                        <div className="quick-trade">
                            <h1 className="quick-trade-heading">Quick Trade</h1>
                            <div className="quick-trade-amt">
                                <p>Enter Amount</p>
                                <h6>Avbl : {usdtBalance} USDT</h6>
                            </div>

                            <div className="quick-trade-child">
                                <div className="quick-trade-subchild">
                                    {/* <Image src={tsymbal} alt="ffgdfdf" height={20} width={20} /> */}


                                    <div className="select-opt" onClick={selectClick}>
                                        <div className="token-out-result">
                                            {tokenImage && <Image src={tokenImage} alt="ffgdfdf" height={25} width={25} />}

                                            <h3 className="token-names-select" style={{ marginLeft: tokenImage ? "-12px" : '0px' }}>{tokenName}</h3>


                                        </div>

                                        <div
                                            style={{
                                                display: opt ? "none" : "block",


                                            }}
                                            className="pop-select"
                                        >
                                            {tokenDetails.map((each, index) => (
                                                <div onClick={() => storeTokenIn(each.tokenImg, each.tokenName, each.tokenIn)} key={index} style={{ paddingLeft: "8px" }} >
                                                    <Image
                                                        src={each.tokenImg}
                                                        alt="ffgdfdf"
                                                        height={20}
                                                        width={20}
                                                        style={{ marginRight: '6px' }}
                                                    />

                                                    {each.tokenName}


                                                </div>

                                            ))}

                                        </div>

                                        <Image style={{ marginTop: "0px" }} src={trabdeArrow} alt="" height={9} width={18} />
                                    </div>
                                </div>
                                <div className="quick-trade-suchild2">
                                    <input type="number" placeholder="0.00" onKeyPress={handleKeyPress} className="token-names-select" value={checkingOnChange ? amountOut ? parseFloat(amountOut).toFixed(3) : "0.00" : inputAmount} onChange={(e) => onChangeUserInput(e)

                                    }
                                    />
                                </div>
                            </div>


                            <div style={{ marginTop: "22px" }}>
                                {inputAmount < 0 && <p style={{ color: "red" }}>Please enter positive value</p>}
                                {/* {inputAmountErr && <p style={{ color: "red" }}>Please enter a valid amount with up to two decimal places</p>} */}
                                {mulDecimalErr && <p style={{ color: "red" }}>Please enter a valid amount with only one decimal point</p>}
                                {selectTokenInErr ? (
                                    <p style={{ color: "red" }}>Please select the token </p>
                                ) : ""}

                                <p className="token-rcv-text">You will Receive</p>



                                <div className="quick-trade-child2">

                                    <div className="quick-trade-subchild">
                                        {/* <Image src={rajasthanRoyals} alt="" height={20} width={20} /> */}
                                        <div className="select-opt" onClick={setOnClickTwo}>
                                            <div className="token-out-result">

                                                {tokenOutImage && <Image src={tokenOutImage} alt="ffgdfdf" height={25} width={25} />}

                                                <h1 className="token-names-select" style={{ marginLeft: tokenOutImage ? "-12px" : '0px' }}>{tokenOutName} <br />
                                                    <p>{tradeTokenFullName}</p></h1>

                                            </div>

                                            <div
                                                style={{
                                                    display: opt2 ? "none" : "block",


                                                }}
                                                className="pop-select"
                                            >
                                                {tokenDetails.map((each, index) => (
                                                    <div onClick={() => storeTokenOut(each.tokenImg, each.tokenName, each.tokenIn, each.tokenFullName)} key={index} style={{ paddingLeft: "8px" }}>
                                                        <Image
                                                            src={each.tokenImg}
                                                            alt="ffgdfdf"
                                                            height={20}
                                                            width={20}
                                                            style={{ marginRight: '6px' }}
                                                        />
                                                        {each.tokenName}
                                                    </div>



                                                ))}


                                            </div>
                                            <Image style={{ marginTop: "0px" }} src={trabdeArrow} alt="" height={9} width={18} />
                                        </div>
                                    </div>
                                    <div className="quick-trade-suchild2">
                                        {/* <input type="text" placeholder="0.00" value={amountOut}
                                    /> */}
                                        <input type="text" value={checkingOnChange ? recevedInput : amountOut ? parseFloat(amountOut).toFixed(3) : "0.00"} placeholder="0.00" className="token-names-select" onChange={(e) => setUserAmountOut(e)} />
                                        {/* <span>{isNaN(parseFloat(amountOut)) ? <input type="text" placeholder="0.00" disabled={true} className="token-names-select" /> : parseFloat(amountOut).toFixed(3)}</span> */}
                                    </div>
                                </div>
                                <div>

                                    {sameIn === sameOut
                                        ? <h6 className="same-teams-chosed">you are chosen the same {sameIn==="MATIC" && sameOut==="MATIC" ? 'MATIC' : ''} {sameIn==='USDT' && sameOut==='USDT' ? 'USDT' : ''} {sameIn!=='MATIC' && sameOut!=='USDT' &&  sameIn===sameOut ? 'Token'  : ''}</h6> : ''

                                    }
                                    {selectTokenOutErr ? (
                                        <p style={{ color: "red" }}>Please select the token </p>
                                    ) : ""}

                                    {chosentime &&
                                        <div>

                                             {sameIn==='in' || sameOut==='out' || sameIn===sameOut ? '' :  <h6 style={{color:'green',textAlign:'center' }}>you are converting from {tokenName} {tokenName==='MATIC' || tokenName==='USDT' ? 'balance' : 'token'} to {tokenOutName} {tokenOutName==='MATIC' || tokenOutName==='USDT' ? 'balance' : 'token'} </h6>} 

                                        </div>
                                    }



                                </div>

                            </div>
                            <button className="continue-btn" onClick={executeTrade}>Continue</button>

                        </div>

                    </div>



                </div>


            </div>






















        </div >


    );
};

export default Dashboardcenter;
