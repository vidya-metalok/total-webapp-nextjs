import React from 'react'
import Image from 'next/image'
import ProfileLinksComponent from './profileLinksComponent'
import sebastianImg from "../../public/images/sebastian-img.svg"
import natalicImg from "../../public/images/natalie-img.svg"
import serinityImg from "../../public/images/serinity-img.svg"
import jsonImg from "../../public/images/json-img.svg"
import earnTokenImg from "../../public/images/earn-token-img.svg"
const RefferalsComponent = () => {
    return (
        <div className='background-con'>


            <div className="logout-main-con">
                <ProfileLinksComponent />
                <div className='reff-top-con'>
                    <div className='reff-top'>


                        <div className="reff-headings">
                            <h4>Earn Tokens To your Wallet</h4>
                            <p3 className="ref-dec">Check discord/telegram to know about the airdrop rewards</p3>
                            <div className='reff-share-con'>
                                <div className='reff-copy'>
                                    <p2 className="reff-cpy-nbr">21500212541</p2>
                                    <p4 className="reff-cpy">COPY</p4>

                                </div>
                                <button type="button" className='share-ref-btn'>SHARE</button>

                            </div>

                        </div>
                        <div>
                            <Image src={earnTokenImg} alt="" height={"auto"} width={""} />
                        </div>


                    </div>
                    <div className='refferals-list'>
                        <h5 className='reff-cpy-nbr'>Your Referral List</h5>
                        <div className='list-out'>
                            <div className='reff-card'>
                                <div className='reff-details'>


                                    <Image src={sebastianImg} alt="" height={"auto"} width={"auto"} />
                                    <div className='reff-address'>
                                        <h1 className='reff-name'>Sebastian</h1>
                                        <p className='ref-user'>@username</p>

                                    </div>
                                </div>
                                <div className='reff-email'>
                                    <p4 className="reff-date">26/10/2023</p4>
                                    <p3 className="reff-mail">sebastian343@gmail.com</p3>

                                </div>

                            </div>

                            <div className='reff-card'>
                                <div className='reff-details'>


                                    <Image src={natalicImg} alt="" height={"auto"} width={"auto"} />
                                    <div className='reff-address'>
                                        <h1 className='reff-name'>Natalie</h1>
                                        <p className='ref-user'>@username</p>

                                    </div>
                                </div>
                                <div className='reff-email'>
                                    <p4 className="reff-date">5/10/2023</p4>
                                    <p3 className="reff-mail">Natalie343@gmail.com</p3>

                                </div>

                            </div>


                            <div className='reff-card'>
                                <div className='reff-details'>


                                    <Image src={serinityImg} alt="" height={"auto"} width={"auto"} />
                                    <div className='reff-address'>
                                        <h1 className='reff-name'>Serenity</h1>
                                        <p className='ref-user'>@username</p>

                                    </div>
                                </div>
                                <div className='reff-email'>
                                    <p4 className="reff-date">26/10/2023</p4>
                                    <p3 className="reff-mail">sebastian343@gmail.com</p3>

                                </div>

                            </div>

                            <div className='reff-card'>
                                <div className='reff-details'>


                                    <Image src={jsonImg} alt="" height={"auto"} width={"auto"} />
                                    <div className='reff-address'>
                                        <h1 className='reff-name'>Jason</h1>
                                        <p className='ref-user'>@username</p>

                                    </div>
                                </div>
                                <div className='reff-email'>
                                    <p4 className="reff-date">26/10/2023</p4>
                                    <p3 className="reff-mail">sebastian343@gmail.com</p3>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default RefferalsComponent
