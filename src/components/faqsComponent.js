import React from 'react'
import ProfileLinksComponent from './profileLinksComponent'
import Accordion from "react-bootstrap/Accordion";

const FaqsComponent = () => {
    return (
        <div className='background-con'>
            <div className="logout-main-con">
                <ProfileLinksComponent />

                <div className="container py-0 py-md-5">
                    <div className="row px-2">
                        <div className="col-lg-12 col--10 m-auto according-faq faq-parent">
                            <h3 className="the-basic-heading text-center py-3">FAQ&apos;s</h3>
                            <p className="the-basic-border-down"></p>
                            <Accordion eventKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="collaps-text faq-para">
                                        What are Fan tokens?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Fan tokens are blockchain secured ERC20 tokens based on
                                        the polygon chain.Sportsverse fantokens represent a
                                        digital asset that facilitates the user to buy/sell/trade
                                        based on the team’s performance in the Sportsverse
                                        marketplace
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="faq-para">
                                    <Accordion.Header>
                                        What is a Digital Wallet? Are they necessary to buy NFTs?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Digital wallet is a software, electronic device or an
                                        online application that enables transactions online.
                                        Digital wallets facilitate secured transactions, valuable
                                        customer insights and access to rewards such as cashback,
                                        coupons and loyalty programs. To have a secure NFT
                                        collection, crypto-supported digital wallets are
                                        necessary. These wallets generate a private key to the
                                        address of the asset ensuring secured, safe and unique
                                        ownership of the asset
                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="2" className="faq-para">
                                    <Accordion.Header>
                                        Which Cryptocurrencies can be used for Trading on
                                        Sportsverse?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        USDT and Matic are the cryptocurrencies which can be used
                                        for trading in Sportsverse platform.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" className="faq-para">
                                    <Accordion.Header>
                                        Are my transactions secured on the Sportsverse Platform?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes! All tokens and transactions on the Sportsverse
                                        platform are reinforced by a secured blockchain supported
                                        Polygon Network. Decentralized, transparent and secured
                                        network is the unique feature of blockchain technology
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4" className="faq-para">
                                    <Accordion.Header>
                                        When will the NFT marketplace open on Sportsverse?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Currently Sportsverse has just launched the fan tokens for
                                        the IPL season. We have in plan to launch an NFT
                                        Marketplace in phase 2 of our product i.e, Sportsverse
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5" className="faq-para">
                                    <Accordion.Header>
                                        Can the Fan Tokens of Sportsverse be considered NFTs? If
                                        not, how do they differ?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Fan tokens on Sportsverse are blockchain secured ERC20
                                        tokens built on Polygon network that can be used to trade
                                        for other tokens or for digital currency. Fan tokens thus
                                        differ from conventional NFTs.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" className="faq-para">
                                    <Accordion.Header>
                                        How to convert my profits on Sportsverse to FIAT currency?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        On the Sportsverse platform, find and click on the
                                        Withdraw option to find a tutorial guide to convert your
                                        profits to FIAT currency.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7" className="faq-para">
                                    <Accordion.Header>
                                        What are the advantages of Staking?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Staking is the process of locking your assets for a set
                                        period as support for the blockchain network. It is highly
                                        advantageous as a source of passive income when your
                                        assets are not active. Another benefit is a chance to
                                        receive voting or governance rights on the platform for
                                        contributing to the strengthening of the blockchain
                                        network.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FaqsComponent
