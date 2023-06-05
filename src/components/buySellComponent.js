import React, { useState, useEffect, useCallback } from 'react';

import qs from "qs"
import abi from "../../abis/abi.json"
const BigNumber = require('bignumber.js');

import Web3 from "web3";
import { useSelector } from 'react-redux';




const BuySellComponent = (props) => {
    const { eachTeamName } = props
    console.log("eachProps...", eachTeamName)
    const userWallet = useSelector((store) => store?.user?.loginInfo?.walletAddress)
    const privateKey = useSelector((store) => store?.user?.privKey)





    // const tradeTeamName = eachTeamName?.slice(0, 4)
    // console.log("buy-props..", props, eachTeamName?.slice(0, 4), tradeTeamName)

    const BSVC = "0xb39370D66472cD8e25E542b7FaE4C641f89d1a3c"
    const CSVC = "0xb90ed1bd876ab378b001b702b38a73fb39e23d25"
    const DSVC = "0xb39370d66472cd8e25e542b7fae4c641f89d1a3c"

    const GSVC = "0x34141d62b66857d409e3eefb7c07eb23cf98b06f"

    const HSVC = "0x9dbe1a074cf62d3b276eedd54952d179299a4892"
    const KSVC = "0xeea6661a8f6d5bdb83c3bb5cd0684bf8bf841952"

    const LSVC = "0x3edc3c21e798d0cc2336500871abeb05e3cb5166"
    const MSVC = "0x33e5dfe148ace06a2c9acee17f59d7aba07e1da3"
    const PSVC = "0x6b32f2a2c0484eb7f7f089dd45ccc33291317ab0"
    const RSVC = "0x4ced951389405decf9e82efaba1854e109b93c38"
    const tokenAddressArr = [BSVC, CSVC, DSVC, GSVC, HSVC, KSVC, LSVC, MSVC, PSVC, RSVC]
    const tokenAddStings = ["BSVC", "CSVC", "DSVC", "GSVC", "HSVC", "KSVC", "LSVC", "MSVC", "PSVC", "RSVC"]


    const teamAddIndex = tokenAddStings.findIndex(each => each == eachTeamName)


    console.log("teamAdd..", teamAddIndex)
    const newAddress = tokenAddressArr[teamAddIndex]
    console.log("newlyWalletTokenValue...", newAddress)

    const web3 = new Web3(
        'https://polygon-mainnet.g.alchemy.com/v2/Nk7m4OIjCz5bq189rdj83esGinAAL7MF',
    );

    var contract = new web3.eth.Contract(abi, newAddress);

    const [amount, setAmount] = useState("")
    const [loader, setLoader] = useState(false)

    const USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
    const MATIC = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
    const ALLOWANCE_TRAGET = '0xdef1c0ded9bec7f1a1670819833240f027b25eff';
    const SPORTSVERSE_ADDRESS = '0xFDfDaE4d7f7731A09eD556C0e1F9D3b5C25FEf18';
    const PLATFORM_FEE = '0.01';


    const [battinginput, setInput] = useState("")
    const [error, setError] = useState("")


    const [fildinginput, setfildinginput] = useState(0)
    const [fildInput2, setfildInput2] = useState("")
    const [sellAmount, setsellAmount] = useState("")
    const [selectedBuyTab, setSelectedBuyTab] = useState(true)
    const [selectedSellTab, setselectedSellTab] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const buy_sellincrement = useCallback(() => {
        console.log("battingInput...", battinginput)
        let val = battinginput
        if (val >= 0 || !isNaN(val)) setInput(eval(val + 500.00))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const buy_decrement = useCallback(() => {
        let val = battinginput
        setInput(val - 500.00);
        if (val <= 0 || isNaN(val)) {
            setInput(0);
        }
    })






    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filding_sellincrement = () => {
        let val = fildInput2
        if (val >= 0 || !isNaN(val)) setfildInput2(eval(val + 500.00))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filding_decrement = () => {
        let val = fildinginput
        setfildInput2(val - 500.00);
        if (val <= 0 || isNaN(val)) {
            setfildInput2(0);
        }
    }



    // swap tokens 

    const usdtTokenAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
    // const hsvTokenAddress = '0xB90ED1bd876AB378b001b702b38A73fB39e23D25'



    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getQuote() {

        // setLoader(true);
        const params = {
            sellToken: usdtTokenAddress,
            buyToken: newAddress,
            sellAmount: battinginput,
            feeRecipient: SPORTSVERSE_ADDRESS,
            buyTokenPercentageFee: PLATFORM_FEE,
        };

        const response = await fetch(
            `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`,
        );

        let trade = await response.json();
        setAmount(parseFloat(trade.price * parseFloat(battinginput)));
        console.log("amount.....", amount)
        // setLoader(false);

    }


    useEffect(() => {

        const fun = async () => {
            await getQuote();
        };
        if (parseFloat(battinginput)) fun();
        else {
            setAmount('');
        }

    }, [buy_sellincrement, buy_decrement, battinginput, getQuote]);


    useEffect(() => {
        // setLoader(true);
        if (parseFloat(fildinginput)) {
            let amt = parseFloat(fildinginput);
            // if (battinginput == USDT) {
            setAmount(amt * 1e6);
            // } else {
            //     setAmount(amt * 1e18);
            // }
            // setLoader(false);
        }
    }, [fildinginput]);


    /// for sell quotes 



    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getFildingQuote() {

        // setLoader(true);
        const params = {
            sellToken: usdtTokenAddress,
            buyToken: newAddress,
            sellAmount: battinginput,
            feeRecipient: SPORTSVERSE_ADDRESS,
            buyTokenPercentageFee: PLATFORM_FEE,
        };

        const response = await fetch(
            `https://polygon.api.0x.org/swap/v1/quote?${qs.stringify(params)}`,
        );

        let trade = await response.json();
        setsellAmount(parseFloat(trade.price * parseFloat(battinginput)));
        console.log("amount.....", amount)
        // setLoader(false);

    }


    useEffect(() => {

        const fun = async () => {
            await getFildingQuote();
        };
        if (parseFloat(fildInput2)) fun();
        else {
            setsellAmount('');
        }

    }, [filding_decrement, filding_sellincrement, fildInput2, getFildingQuote]);


    useEffect(() => {
        // setLoader(true);
        if (parseFloat(fildInput2)) {
            let amt = parseFloat(fildInput2);
            // if (battinginput == USDT) {
            setsellAmount(amt * 1e6);
            // } else {
            //     setAmount(amt * 1e18);
            // }
            // setLoader(false);
        }
    }, [fildInput2]);







    const buyAndSellBtnColors = selectedBuyTab ? "#0BBB70" : "#EC3E47"
    const buyHeading = selectedBuyTab ? "buy-heading-active" : "buy-heading"
    const sellHeading = selectedSellTab ? "sell-heading-active" : "sell-heading"



    const onClickSellTab = () => {
        setselectedSellTab(true);
        setSelectedBuyTab(false);
    }
    const onClickBuyTab = () => {
        setSelectedBuyTab(true)
        setselectedSellTab(false)
    }
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
                to: newAddress,
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
        if (eachTeamName != MATIC) await setAllowance();
        setLoader(true);
        const params = {
            sellToken: usdtTokenAddress,
            buyToken: newAddress,
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







    return (
        <div className=' '>
            <div className='buy-sell-section'>
                <div className='buy-sell'>
                    <h1 className={`${buyHeading}`} onClick={onClickBuyTab}>Buy {eachTeamName} </h1>
                    <h3 className={`${sellHeading}`} onClick={onClickSellTab}
                    >  Sell {eachTeamName} </h3>
                </div>
                <div className='tokens-teamname'>
                    <h2 onClick={buy_decrement}>-</h2>
                    <h1>
                        <input type="number" value={battinginput} onChange={(e) => setInput(e.target.value)} placeholder={`Tokens ${eachTeamName}`} />
                    </h1>
                    <h2 onClick={buy_sellincrement}>+</h2>
                </div>
                <div className='tokens-teamname'>
                    <h2 onClick={buy_decrement}>-</h2>
                    <h1>
                        <input type="number" value={amount} placeholder="Amount USDT" />


                    </h1>


                    <h2 onClick={buy_sellincrement}>+</h2>
                </div>
                {selectedBuyTab && <div className="buy-heading" style={{ backgroundColor: buyAndSellBtnColors }} onClick={() => executeTrade()}>
                    Buy <span className='hsvc-heading'>{eachTeamName}</span>
                </div>}


                {selectedSellTab && <div className="buy-heading" style={{ backgroundColor: buyAndSellBtnColors }} onClick={() => executeTrade()}>
                    Sell <span className='hsvc-heading'>{eachTeamName}</span>
                </div>}

            </div>
        </div >
    )
}


export default BuySellComponent
