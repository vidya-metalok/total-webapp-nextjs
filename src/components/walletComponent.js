import React, { useCallback } from "react";
import Image from "next/image";

// import tsymbal from "../../public/images/tsymbal.png";
// import rrlogo from "../../public/images/rrimg-logo.png";
// import wallet from "../../public/images/wallet-money.png";
// import deposit from "../../public/images/Arrow 1.png";
// import frame from "../../public/images/Frame.png";
// import withdraw from "../../public/images/arrow2.png";
// import status from "../../public/images/status-img.jpeg";
import { holdings } from "./redux/userSlice";


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




var tsymbal = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/tsymbal.png";
// var wallet = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/wallet-money.png";
import wallet from "../../public/images/wallet-money.svg"
import money from "../../public/images/money-add.svg"
import empty from "../../public/images/empty-wallet.svg"
// var money = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/money-add.png";
// var empty = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/empty-wallet.png";
// var load1 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/graphload-img.png";
// var load2 = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/graphload-img2.png";
var matic = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/matic.png";
var usdt = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/usdt.png";
// https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rrimg-logo.png


// import tsymbal from "../../public/images/tsymbal.png";
// import rrlogo from "../../public/images/rrimg-logo.png";
// import wallet from "../../public/images/wallet-money.png";
// import deposit from "../../public/images/Arrow 1.png";
// import frame from "../../public/images/Frame.png";
// import withdraw from "../../public/images/arrow2.png";
// import status from "../../public/images/status-img.jpeg";

var withdraw = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/arrow2.png";
var status = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/status-img.jpeg";
var deposit = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/Arrow 1.png";
var frame = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/Frame.png";
var rrlogo = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/rrimg-logo.png";




// import matic from "../../public/images/matic.png";
// import usdt from "../../public/images/usdt.png";
// import delhiCapital from "../../public/images/delhicapital.png";
// import chennaiSupers from "../../public/images/chennaiSuperkings.png";
// import rcbs from "../../public/images/rcb logo.png";
// import mumbaiIndia from "../../public/images/mumbaiIndians.png";
// import rajasthanRoyals from "../../public/images/rajasthanRoyals.png";
// import punjabKings from "../../public/images/punjabKings.png";
// import sunrisers from "../../public/images/sunrisers.png";
// import kkr from "../../public/images/kkr.png";
// import lk from "../../public/images/lk.jpg";
// import gt from "../../public/images/gt.png";


import trabdeArrow from "../../public/images/trade-arr.svg"

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";

import Web3 from "web3";
import qs from "qs";
import abi from "../../abis/abi.json";
const BigNumber = require("bignumber.js");
import walletHrLine from "../../public/images/wallet-hr-line.svg"

import TransactionHistoryComponent from "./transactionHistoryComponent";
import { userEdit, loginUser } from '../components/redux/userSlice'


const WalletComponent = () => {

    const [sameIn, setSameIn] = useState("in")
    const [sameOut, setSameOut] = useState('out')
    const [selectTokenInErr, setSelectTokenInErr] = useState(false)
    const [selectTokenOutErr, setSelectTokenOutErr] = useState(false)
    const [inputAmountErr, setInputAmountErr] = useState(false)
    const [mulDecimalErr, setMulDecimalErr] = useState(false)
    const editeddata = useSelector((store) => store?.user?.userEdit)

    const userWallet = useSelector((store) => store?.user?.loginInfo?.walletAddress)
    // const userWallet = "0xa9f729E5437806248210eCbe3e3c7dE80542b28D";

    const [copyClick, setcopyclick] = useState(false)



    let str = userWallet;
    let len = str?.length;
    let start = Math.floor(len - 7);
    // let end = start + 40;
    let walletaddress = str?.substring(0, 7) + "....." + str?.substring(start, len);



    const handleCopyClick = () => {
        navigator.clipboard.writeText(userWallet);
        console.log("wallet address", userWallet)
        setcopyclick(true)
        setTimeout(() => {
            setcopyclick(false)
        }, [1000])



    };




    //   const userWallet = useSelector((store) => store.user.loginInfo.walletAddress);

    const privateKey = useSelector((store) => store.user.privKey);

    console.log("priiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", privateKey)
    const firstSix = privateKey.substring(0, 6);
    const lastSix = privateKey.substring(privateKey.length - 6);
    const obfuscatedMiddle = "............";

    const newVariable = `${firstSix}${obfuscatedMiddle}${lastSix}`;



    // let pristr = privateKey;
    // let prilen = pristr?.length;
    // let pristart = Math.floor(len - 7);
    // // let end = start + 40;
    // let privkey = pristr?.substring(0, 7) + "....." + pristr?.substring(pristart, len);


    // console.log("pppppppppppppppppppppppp", privkey)


    const userName = useSelector((store) => store.user.loginInfo?.name);
    const web3 = new Web3(
        "https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF"
    );






    console.log("privateKey--", privateKey);

    console.log("username:- ", userName);

    const dispatch = useDispatch();
    //tokenIn
    const [tokenIn, setTokenIn] = useState(null);
    const [tokenName, setTokenName] = useState("Select Token");
    const [tokenImage, setTokenImage] = useState("");
    //tokenOut

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const [tokenOut, setTokenOut] = useState(null);
    const [tokenOutName, setTokenOutName] = useState("Select Token");
    const [tokenOutImage, setTokenOutImage] = useState("");
    const [inputAmount, setUserInput] = useState('');
    const [amountOut, setAmountOut] = useState(0);
    const [amount, setAmount] = useState(0);
    const [trade, setTrade] = useState(null);
    //available balances
    const [tokInBalance, setSellTokenBalance] = useState(0);
    const [tokenOutBalance, setBuyTokenBalance] = useState(0);
    const [sellToken, setSellToken] = useState(null);
    const [buyToken, setBuyToken] = useState(null);

    const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
    const MATIC = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    const ALLOWANCE_TRAGET = "0xdef1c0ded9bec7f1a1670819833240f027b25eff";
    const SPORTSVERSE_ADDRESS = "0xFDfDaE4d7f7731A09eD556C0e1F9D3b5C25FEf18";
    const PLATFORM_FEE = "0.01";
    var contract = new web3.eth.Contract(abi, USDT);


    // token prices
    const bsvPrice = useSelector((store) => store.bsvc.bsv);
    const csvPrice = useSelector((store) => store.csvc.csv);
    const dsvPrice = useSelector((store) => store.dsvc.dsv);
    const gsvPrice = useSelector((store) => store.gsvc.gsv);
    const hsvPrice = useSelector((store) => store.hsvc.hsv);
    const ksvPrice = useSelector((store) => store.ksvc.ksv);
    const lsvPrice = useSelector((store) => store.lsvc.lsv);
    const msvPrice = useSelector((store) => store.msvc.msv);
    const psvPrice = useSelector((store) => store.psvc.psv);
    const rsvPrice = useSelector((store) => store.rsvc.rsv);
    // wallet balnces
    const bsvAmount = useSelector((store) => store.tokenOneSlice.tokenOne.price);
    const csvAmount = useSelector((store) => store.tokenTwoSlice.tokenTwo.price);
    const dsvAmount = useSelector(
        (store) => store.tokenThreeSlice.tokenThree.price
    );
    const gsvAmount = useSelector(
        (store) => store.tokenFourSlice.tokenFour.price
    );
    const hsvAmount = useSelector(
        (store) => store.tokenFiveSlice.tokenFive.price
    );
    const ksvAmount = useSelector((store) => store.tokenSixSlice.tokenSix.price);
    const lsvAmount = useSelector(
        (store) => store.tokenSevenSlice.tokenSeven.price
    );
    const msvAmount = useSelector(
        (store) => store.tokenEightSlice.tokenEight.price
    );
    const psvAmount = useSelector(
        (store) => store.tokenNineSlice.tokenNine.price
    );
    const rsvAmount = useSelector((store) => store?.tokenTenSlice?.tokenTen?.price);

    const totalHoldings =
        bsvPrice * bsvAmount +
        csvPrice * csvAmount +
        dsvPrice * dsvAmount +
        gsvPrice * gsvAmount +
        hsvPrice * hsvAmount +
        ksvPrice * ksvAmount +
        lsvPrice * lsvAmount +
        msvPrice * msvAmount +
        psvPrice * psvAmount +
        rsvPrice * rsvAmount;
    dispatch(holdings(totalHoldings));

    const [opt, setopt] = useState(true);
    const [opt2, setopt2] = useState(true);

    function selectClick() {
        setopt(!opt)
        setopt2(true)

    }
    const setOnClickTwo = () => {
        setopt2(!opt2)
        setopt(true)

    }

    const storeTokenIn = (param1, param2, param3) => {
        setTokenImage(param1);
        setTokenName(param2);
        setTokenIn(param3);
        setSellToken(param3);
        setopt(!opt);
        setSameIn(param2)
        setSelectTokenInErr(false)
    };
    const storeTokenOut = (param1, param2, param3) => {
        setTokenOutImage(param1);
        setTokenOutName(param2);
        setTokenOut(param3);
        setBuyToken(param3);
        setopt2(!opt2);
        setSameOut(param2)
        setSelectTokenOutErr(false)
    };

    const tokenDetails = [
        {
            id: "0",
            tokenName: "MATIC",
            tokenImg: matic,
            tokenIn: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        },
        ,
        {
            id: "1",
            tokenName: "USDT",
            tokenImg: usdt,
            tokenIn: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        },
        {
            id: "2",
            tokenName: "BSVC",
            tokenImg: rcbs,
            tokenIn: "0x9Dbe1a074CF62D3B276EeDD54952d179299a4892",
        },
        {
            id: "3",
            tokenName: "CSVC",
            tokenImg: chennaiSupers,
            tokenIn: "0x2328aA62F692Cdb1749ae173A93E89fDEAFeD650",
        },
        {
            id: "4",
            tokenName: "DSVC",
            tokenImg: delhiCapital,
            tokenIn: "0x3EDC3c21E798d0cc2336500871ABEB05e3cB5166",
        },
        {
            id: "5",
            tokenName: "GSVC",
            tokenImg: gt,
            tokenIn: "0x4CED951389405dECf9E82efaBA1854e109b93C38",
        },
        {
            id: "6",
            tokenName: "HSVC",
            tokenImg: sunrisers,
            tokenIn: "0xB90ED1bd876AB378b001b702b38A73fB39e23D25",
        },
        {
            id: "7",
            tokenName: "KSVC",
            tokenImg: kkr,
            tokenIn: "0xb39370D66472cD8e25E542b7FaE4C641f89d1a3c",
        },
        {
            id: "8",
            tokenName: "LSVC",
            tokenImg: lk,
            tokenIn: "0x34141D62B66857d409e3eEfB7C07EB23CF98B06f",
        },
        {
            id: "9",
            tokenName: "MSVC",
            tokenImg: mumbaiIndia,
            tokenIn: "0x33e5DFe148aCe06A2c9aCee17F59d7AbA07E1DA3",
        },
        {
            id: "10",
            tokenName: "PSVC",
            tokenImg: punjabKings,
            tokenIn: "0x6b32f2a2c0484EB7F7f089Dd45CCc33291317ab0",
        },
        {
            id: "11",
            tokenName: "RSVC",
            tokenImg: rajasthanRoyals,
            tokenIn: "0xeeA6661a8F6D5Bdb83C3BB5CD0684bf8bF841952",
        },
    ];

    function handleErrors(trade) {
        let message = "Error: ";
        if (trade.code) {
            if (trade.code == 105) {
                message += trade.values["message"];
            } else {
                switch (trade.code) {
                    case 100:
                        message += "Validation Failed";
                        break;
                    case 101:
                        message += "Malformed JSON";
                        break;
                    case 102:
                        message += "Order submission disabled";
                        break;
                    case 103:
                        message += "Throttled";
                        break;
                    case 104:
                        message += "Not Implemented";
                        break;
                    case 105:
                        message += "Transaction Invalid";
                        break;
                    case 106:
                        message += "Unable to Submit on Behalf Of Account ";
                        break;
                    case 107:
                        message += "Invalid API Key";
                        break;
                    case 108:
                        message += "Service Disabled ";
                        break;
                    case 109:
                        message += "Insufficient funds for transaction";
                        break;
                    case 110:
                        message += "Matic selling is not supported";
                        break;
                    case 111:
                        message += "Gas estimation failed";
                        break;
                    default:
                        message += "Error fetching exchange qoute";
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
                `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`
            );

            let trade = await response.json();
            setAmountOut(parseFloat(trade.price * parseFloat(inputAmount)));
            // setLoader(false);
        }
    }

    useEffect(() => {
        const fun = async () => {
            await getQuote();
        };
        if (parseFloat(inputAmount)) fun();
        else {
            setAmountOut("");
        }
    }, [inputAmount, buyToken, sellToken, getQuote]);

    useEffect(() => {
        // setLoader(true);
        if (parseFloat(inputAmount)) {
            let amt = parseFloat(inputAmount);
            if (tokenIn == USDT) {
                setAmount(amt * 1e6);
            } else {
                setAmount(amt * 1e18);
            }
            // setLoader(false);
        }
    }, [inputAmount, tokenIn]);

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
            const gasPrice = await web3.eth.getGasPrice().then((response) => {
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
                console.log("Error data : ", data);
                alert("Gas Error", data.message);
                setLoader(false);
                return data;
            };
            const receiptHandler = function (data) {
                console.log("Allowance updated at TX: ", data.transactionHash);
                setLoader(false);
                return data;
            };

            const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

            console.log(signedTx);

            await web3.eth
                .sendSignedTransaction(signedTx.rawTransaction)
                .on("receipt", receiptHandler)
                .on("error", receiptErrHandler);
            setLoader(false);
            return;
        }
        setLoader(false);
        return;
    }

    const buyExecuteTrade = async () => {
        if (sellToken != MATIC) await setAllowance();
        setLoader(true);
        const params = {
            sellToken: buyToken,
            buyToken: USDT,
            sellAmount: amount,
            takerAddress: userWallet,
            feeRecipient: SPORTSVERSE_ADDRESS,
            buyTokenPercentageFee: PLATFORM_FEE,
        };

        const response = await fetch(
            `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`
        );

        let trade = await response.json();

        if (trade.code) {
            handleErrors(trade);
            setLoader(false);
            return;
        }

        const gasPrice = await web3.eth.getGasPrice().then((response) => {
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
            .then((response) => {
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

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

        const receiptHandler = function (data) {
            console.log("Transaction executed at tx Hash: ", data.transactionHash);
            console.log("Transaction data: ", data);
            alert(
                "Transaction submitted successfully with tx hash: ",
                data.transactionHash
            );
            setLoader(false);

            return data;
        };
        const receiptErrHandler = function (data) {
            console.log("Error", data);
            alert("Error : ", data.message);
            setLoader(false);
            return data;
        };

        await web3.eth
            .sendSignedTransaction(signedTx.rawTransaction)
            .on("receipt", receiptHandler)
            .on("error", receiptErrHandler);
        setLoader(false);
    };


    const sellExecuteTrade = async () => {
        if (buyToken != MATIC) await setAllowance();
        setLoader(true);
        const params = {
            sellToken: USDT,
            buyToken: sellToken,
            sellAmount: amount,
            takerAddress: userWallet,
            feeRecipient: SPORTSVERSE_ADDRESS,
            buyTokenPercentageFee: PLATFORM_FEE,
        };

        const response = await fetch(
            `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`
        );

        let trade = await response.json();

        if (trade.code) {
            handleErrors(trade);
            setLoader(false);
            return;
        }

        const gasPrice = await web3.eth.getGasPrice().then((response) => {
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
            .then((response) => {
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

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

        const receiptHandler = function (data) {
            console.log("Transaction executed at tx Hash: ", data.transactionHash);
            console.log("Transaction data: ", data);
            alert(
                "Transaction submitted successfully with tx hash: ",
                data.transactionHash
            );
            setLoader(false);

            return data;
        };
        const receiptErrHandler = function (data) {
            console.log("Error", data);
            alert("Error : ", data.message);
            setLoader(false);
            return data;
        };

        await web3.eth
            .sendSignedTransaction(signedTx.rawTransaction)
            .on("receipt", receiptHandler)
            .on("error", receiptErrHandler);
        setLoader(false);
    };

    const historyList = [
        {
            id: 1,
            "trans-type": "deposited",
            "type-url": deposit,
            "tax-no": "12345678907",
            "price-type": "FIAT to USDT",
            tokens: "+$5203USDT",
            amount: "₹25,000",
            date: "12/20/2022",
            time: "23:20",
            status: "completed",
            "status-logo": status,
        },

        {
            id: 1,
            "trans-type": "withdrawal",
            "type-url": withdraw,
            "tax-no": "12345678907",
            "price-type": "FIAT to USDT",
            tokens: "-$5203USDT",
            amount: "₹25,000",
            date: "12/20/2022",
            time: "23:20",
            status: "completed",
            "status-logo": status,
        },
        {
            id: 1,
            "trans-type": "withdrawal",
            "type-url": withdraw,
            "tax-no": "12345678907",
            "price-type": "FIAT to USDT",
            tokens: "-$5203USDT",
            amount: "₹25,000",
            date: "12/20/2022",
            time: "23:20",
            status: "completed",
            "status-logo": status,
        },
        {
            id: 1,
            "trans-type": "deposited",
            "type-url": deposit,
            "tax-no": "12345678907",
            "price-type": "FIAT to USDT",
            tokens: "+$5203USDT",
            amount: "₹25,000",
            date: "12/20/2022",
            time: "23:20",
            status: "completed",
            "status-logo": status,
        },
        {
            id: 1,
            "trans-type": "deposited",
            "type-url": deposit,
            "tax-no": "12345678907",
            "price-type": "FIAT to USDT",
            tokens: "+$5203USDT",
            amount: "₹25,000",
            date: "12/20/2022",
            time: "23:20",
            status: "completed",
            "status-logo": status,
        },
    ];

    //   let readableValue;
    //   if (tokenDecimal == '18') {
    //     readableValue = parseFloat(
    //       web3.utils.fromWei(value.toString(), 'ether'),
    //     ).toFixed(2);
    //   } else {
    //     readableValue = parseFloat(
    //       web3.utils.fromWei(value.toString(), 'mwei'),
    //     ).toFixed(2);}

    const usdtBalance = useSelector((store) => store?.user?.usdtBalance)
    const maticBalance = useSelector((store) => store?.user?.usdtBalance)

    const onChangeUserInput = (e) => {
        const userInput = e.target.value
        // setUserInput(e.target.value)
        if (tokenName == "Select Token") {
            setSelectTokenInErr(true)
        }
        if (tokenOutName == "Select Token") {
            setSelectTokenOutErr(true)


        }
        const hasMultipleDecimalPoints = userInput.split(".").length - 1 > 1;
        if (hasMultipleDecimalPoints) {
            setMulDecimalErr(true);
        }
        else {
            setMulDecimalErr(false)
        }
        const decimalCount = (userInput.split(".")[1] || "").length
        if (decimalCount > 2) {
            setInputAmountErr(true)

        }
        else {
            setInputAmountErr(false)
        }
        // Check if the user input has multiple decimal points


        // Update the userInput state
        setUserInput(userInput);

    }



    return (
        <div className="wallet-main-con">
            <div className="details-balance-con">
                <div style={{ width: '30%' }}>
                    <div className="wallet-card t-wallet" style={{ width: "100%" }}>
                        <div className="img-con">
                            <Image src={wallet} alt="" height={25} width={25} />
                            <p>Total sportsverse Holdings</p>
                        </div>
                        <p><span>₹</span>{totalHoldings}</p>
                        {/* <h3>+9.2%</h3> */}
                    </div>
                    <div className="wallet-card-new wallet t-wallet">
                        <div className="img-con">
                            <Image src={money} alt="" height={25} width={25} />

                            <p>Total Wallet balance</p>
                        </div>
                        <h2><span>$</span>{parseFloat(usdtBalance)?.toFixed(6)}</h2>
                    </div>
                    <div className="wallet-card-new wallet t-wallet">
                        <div className="img-con">
                            <Image src={empty} alt="" height={25} width={25} />

                            <p> Total MATIC balance</p>
                        </div>
                        <h2>{parseFloat(maticBalance)?.toFixed(6)}</h2>
                    </div>
                    <div className="wallet-card-2 wallet t-wallet">
                        <div>
                            <p>Wallet Address</p>
                            <h3>{walletaddress}</h3>
                        </div>
                        <div onClick={handleCopyClick} style={{ position: 'relative' }} >
                            <Image style={{ transform: copyClick ? 'scale(0.8)' : 'scale(1)', transition: 'all .2s ease', cursor: 'pointer' }} src={frame} height={29} width={29} alt="frame" />
                            <h3 className="copied-display" style={{ display: copyClick ? "block" : "none" }}>copied</h3>

                        </div>
                    </div>
                </div>
                <div className="buy-sell-main-con">
                    <div className="text-card">
                        <p>PrivateKey:  {newVariable}
                        </p>
                        <button className="key-btn">Key</button>
                    </div>

                    <div className="wallet-child2">
                        <div className="quick-new-trade">
                            <h1 className="quick">Buy/Sell token</h1>
                            <div className="total-wallet-info">


                                <div className="wallet-buy">


                                    <div className="quick-trade-amt">
                                        <p className="amount"> Enter Amount</p>
                                        <p className="amount">Avbl : {usdtBalance} USDT</p>
                                    </div>



                                    <div className="quick-trade-child">
                                        <div className="quick-trade-subchild">
                                            {/* <Image src={tsymbal} alt="ffgdfdf" height={20} width={20} /> */}

                                            <div onClick={selectClick} className="select-token">
                                                {tokenImage && <Image src={tokenImage} alt="ffgdfdf" height={20} width={20} />}

                                                <span style={{ margin: '0px 25px 0px 6px' }}> {tokenName}</span>

                                            </div>

                                            <div
                                                style={{
                                                    display: opt ? "none" : "block",
                                                    // position: "absolute",
                                                    // background: "grey",
                                                    // marginTop: "30px",
                                                }}
                                                className="pop-select"
                                            >
                                                {tokenDetails.map((each, index) => (
                                                    <div
                                                        onClick={() =>
                                                            storeTokenIn(
                                                                each.tokenImg,
                                                                each.tokenName,
                                                                each.tokenIn
                                                            )
                                                        }
                                                        key={index}
                                                    >
                                                        <Image
                                                            src={each.tokenImg}
                                                            alt="ffgdfdf"
                                                            height={20}
                                                            width={20}
                                                        />
                                                        {each.tokenName}
                                                    </div>
                                                ))}
                                            </div>
                                            <Image onClick={selectClick} style={{ marginTop: "0px", marginLeft: '4px', cursor: "pointer" }} src={trabdeArrow} alt="" height={10} width={10} />

                                            {/* <select className="dropdown-trade">
                                        <option value="volvo"> USDT</option>
                                        <option value="saab">2</option>
                                        <option value="opel">3</option>
                                        <option value="audi">4</option>
                                        <option value="audi">5</option>
                                        <option value="audi">6</option>
                                    </select> */}
                                        </div>

                                        <div className="quick-trade-suchild2">
                                            <input className="amt-out-show"
                                                type="number"
                                                placeholder="0.00"
                                                value={inputAmount}
                                                onChange={(e) => onChangeUserInput(e)}
                                            />
                                        </div>
                                    </div>
                                    <h1 className="onw-quial">1 RSVC = 21.02 USDT</h1>

                                    {inputAmount < 0 && <p style={{ color: "red" }}>Please enter positive value</p>}
                                    {inputAmountErr && <p style={{ color: "red" }}>Please enter a valid amount with up to two decimal places</p>}
                                    {mulDecimalErr && <p style={{ color: "red" }}>Please enter a valid amount with only one decimal point</p>}
                                    {selectTokenInErr ? (
                                        <p style={{ color: "red" }}>Please select token </p>
                                    ) : ""}

                                    <h1 className="will-receive-heading">You will Receive</h1>



                                    <div className="quick-trade-child2">
                                        <div className="quick-trade-subchild">
                                            {/* <Image src={rrlogo} alt="" height={20} width={20}/> */}

                                            <div onClick={setOnClickTwo} className="select-token">
                                                {tokenOutImage && <Image src={tokenOutImage} alt="" height={20} width={20} />}
                                                <span style={{ margin: '0px 25px 0px 11px' }}>{tokenOutName}</span>

                                            </div>
                                            <div
                                                style={{
                                                    display: opt2 ? "none" : "block",

                                                }}
                                                className="pop-select"
                                            >
                                                {tokenDetails.map((each, index) => (
                                                    <div
                                                        onClick={() =>
                                                            storeTokenOut(
                                                                each.tokenImg,
                                                                each.tokenName,
                                                                each.tokenIn
                                                            )
                                                        }
                                                        key={index}
                                                    >
                                                        <Image
                                                            src={each.tokenImg}
                                                            alt="ffgdfdf"
                                                            height={20}
                                                            width={20}
                                                        />
                                                        {each.tokenName}
                                                    </div>
                                                ))}
                                            </div>
                                            <Image onClick={setOnClickTwo} style={{ marginTop: "0px", marginLeft: '4px', cursor: "pointer" }} src={trabdeArrow} alt="" height={10} width={10} />

                                        </div>


                                        <div className="quick-trade-suchild2">
                                            {/* <input type="text" placeholder="0.00" value={amountOut}
                                    /> */}
                                            <p className="amt-out-show">
                                                {isNaN(parseFloat(amountOut)) ? (
                                                    <p >0.00</p>
                                                ) : (
                                                    parseFloat(amountOut).toFixed(3)
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="onw-quial">1 RSVC = 21.02 USDT</h3>
                                    {sameIn === sameOut
                                        ? <h6 className="same-teams-chosed">you are choosed same teams</h6> : ''

                                    }
                                    {selectTokenOutErr ? (
                                        <p style={{ color: "red" }}>Please select token </p>
                                    ) : ""}





                                    <div className="btn-containers">
                                        <button className="buy-btn" onClick={() => buyExecuteTrade()}>BUY</button>
                                        <button className="sell-btn" onClick={() => sellExecuteTrade()}>SELL</button>
                                    </div>
                                </div>
                                <div className="wallet-center-border"></div>
                                <div className="trade-details">
                                    {/* <div>
                                        <Image src={walletHrLine} height={"auto"} width={"auto"} alt="" />
                                    </div> */}

                                    <div className="wallet-details-con">
                                        <div className="wallet-info">
                                            <h3>Wallet Name</h3>
                                            <p style={{ textAlign: "left" }}>{editeddata?.firstName} {editeddata?.lastName}</p>
                                        </div>
                                        <div className="wallet-info">
                                            <h3>Tokens you will receive</h3>
                                            <p>35.23 RSVC</p>
                                        </div>
                                        <div className="wallet-info">
                                            <h3>Gas fee</h3>
                                            <p>
                                                <span style={{ width: '86px', marginRight: '6px' }}>0.02 Matic</span> <span>($0.02)</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TransactionHistoryComponent componentName="wallet" />

        </div>
    );
};

export default WalletComponent;