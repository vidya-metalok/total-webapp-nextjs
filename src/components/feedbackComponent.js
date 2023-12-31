import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import ProfileLinksComponent from './profileLinksComponent';
import phoneIcon from "../../public/images/phone-icon.svg";
import ticketIcon from "../../public/images/ticket-icon.svg"
import rateIcon from "../../public/images/rate-icon.svg"
import tweetIcon from "../../public/images/twitter-icon.svg"
import likeIcon from "../../public/images/like-icon.svg"
const FeedbackComponent = () => {
    return (
        <div className='background-con'>

            <div className="logout-main-con">
                <ProfileLinksComponent />
                <div className='feedback-child'>
                    <a href="https://q-r.dev/g/52DH0aoY0kJ" target="_blank" className='feedback-sub-child'>
                        <Image src={phoneIcon} alt="" height={"auto"} width={"auto"} />
                        <div className='feedback-content'>
                            <h2>Request a call back</h2>
                            <p>Leave your number and we&apos;ll call you back.</p>
                        </div>

                    </a>
                    <a href="https://q-r.dev/g/52DH0aoY0kJ" target="_blank" className='feedback-sub-child'>
                        <Image src={ticketIcon} alt="" height={"auto"} width={"auto"} />
                        <div className='feedback-content'>
                            <h2>Raise a ticket</h2>
                            <p>Have any complaint? Just raise a ticket and we&apos;ll help you</p>
                        </div>

                    </a>
                    <a href="https://qr.page/g/1JponpjQmpQ" target="_blank" className='feedback-sub-child'>
                        <Image src={rateIcon} alt="" height={"auto"} width={"auto"} />
                        <div className='feedback-content'>
                            <h2>Rate us on App store</h2>
                            <p>Rate us in app store and play store</p>
                        </div>

                    </a>
                    <a href="https://twitter.com/sportsverse_" target="_blank" className='feedback-sub-child'>
                        <Image src={tweetIcon} alt="" height={"auto"} width={"auto"} />
                        <div className='feedback-content'>
                            <h2>Tweet Us</h2>
                            <p>Reach out to us via twitter</p>
                        </div>

                    </a>
                    <a href="https://q-r.dev/g/52DH0aoY0kJ" target='_blank' className='feedback-sub-child'>
                        <Image src={likeIcon} alt="" height={"auto"} width={"auto"} />
                        <div className='feedback-content'>
                            <h2>Write us a feedback</h2>
                            <p>Your feedback matters and let us grow</p>
                        </div>

                    </a>
                </div>

            </div>
        </div>

    )
}

export default FeedbackComponent
