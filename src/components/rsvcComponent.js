import React, { useState, useEffect, useCallback } from 'react';

import qs from "qs"


const RsvcSellComponent = () => {

    const [amount, setAmount] = useState("")
    const USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
    const MATIC = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
    const ALLOWANCE_TRAGET = '0xdef1c0ded9bec7f1a1670819833240f027b25eff';
    const SPORTSVERSE_ADDRESS = '0xFDfDaE4d7f7731A09eD556C0e1F9D3b5C25FEf18';
    const PLATFORM_FEE = '0.01';


    const [battinginput, setInput] = useState("")

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
    const hsvTokenAddress = '0xB90ED1bd876AB378b001b702b38A73fB39e23D25'



    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getQuote() {

        // setLoader(true);
        const params = {
            sellToken: usdtTokenAddress,
            buyToken: hsvTokenAddress,
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
            buyToken: hsvTokenAddress,
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






    return (
        <div className=' '>
            <div className='buy-sell-section'>
                <div className='buy-sell'>
                    <h1 className={`${buyHeading}`} onClick={onClickBuyTab}>Buy RSVC </h1>
                    <h3 className={`${sellHeading}`} onClick={onClickSellTab}
                    >Sell RSVC </h3>
                </div>
                <div className='tokens-teamname'>
                    <h2 onClick={buy_decrement}>-</h2>
                    <h1>
                        <input type="number" value={battinginput} onChange={(e) => setInput(e.target.value)} placeholder="Tokens RSVC" />
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
                {selectedBuyTab && <div className="buy-heading" style={{ backgroundColor: buyAndSellBtnColors }}>
                    Buy RSVC
                </div>}


                {selectedSellTab && <div className="buy-heading" style={{ backgroundColor: buyAndSellBtnColors }}>
                    Sell RSVC
                </div>}

            </div>
        </div>
    )
}


export default RsvcSellComponent
