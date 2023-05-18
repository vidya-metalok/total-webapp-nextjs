import React from 'react'

import Link from 'next/link'
import Image from 'next/image';

var personIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/person-icon-img.png";

var feedbackIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/feedback-icon.png";

var communityIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/community-icon-img.png";

var refferalIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/refferal-icon-img.png";

import faqIcon from "../../public/images/faqs-icon.svg"

const ProfileLinksComponent = () => {
    return (
        <div className='refferal-links-con'>
            <div>
                <div className="logout-con">
                    <Link href="/profilepage">
                        <Image src={personIcon} alt="" height={20} width={20} />

                        <p>Profile</p>
                    </Link>
                </div>
                <div className="logout-con">
                    <Link href="/feedbackpage">
                        <Image src={feedbackIcon} alt="" height={20} width={20} />
                        <p>Feedback & Support</p>
                    </Link>
                </div>
                <div className="logout-con">
                    <Link href="/communitypage">
                        <Image src={communityIcon} alt="" height={20} width={20} />
                        <p>Community</p>
                    </Link>
                </div>
                <div className="logout-con">
                    <Link href="/refferalspage">
                        <Image src={refferalIcon} alt="" height={20} width={20} />
                        <p>Refferals</p>
                    </Link>
                </div>
                <div className="logout-con">
                    <Link href="/faqspage">
                        <Image src={faqIcon} alt="" height={20} width={20} />
                        <p>FAQs</p>
                    </Link>
                </div>
                <div className="profile-underline"></div>
            </div>
            <div className="logout-con">
                <h3>Terms of Service</h3>
                <h3>About</h3>

            </div>





        </div>
    )
}

export default ProfileLinksComponent
