import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

// var personIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/person-icon-img.png";


// var feedbackIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/feedback-icon.png";

// var communityIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/community-icon-img.png";

// var refferalIcon = "https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webapp-images/refferal-icon-img.png";

// import faqIcon from "../../public/images/faqs-icon.svg"

import profileActive from "../../public/images/profile-active-icon.svg"
import feedbackActive from "../../public/images/feedback-active.svg"
import communityActive from '../../public/images/community-active.svg'
import refferalActive from "../../public/images/refferals-active.svg"
import faqActive from "../../public/images/faqs-active.svg"




import profileNotActive from "../../public/images/profile-not-active.svg"
import feedbackNotActive from "../../public/images/feedback-not-active.svg"
import communityNotActive from "../../public/images/community-not-active.svg"
import refferalNotActive from "../../public/images/refferal-not-active.svg"
import faqsNotActive from "../../public/images/faqs-icon-inactive.svg"

const ProfileLinksComponent = () => {
    const [changeLink, setChangeLink] = useState("profile")
    const router = useRouter()

    const profilLinkIcon = router.pathname === '/profilepage' ? profileActive : profileNotActive
    const feedbackLinkIcon = router.pathname === '/feedbackpage' ? feedbackActive : feedbackNotActive
    const communityLinkIcon = router.pathname === '/communitypage' ? communityActive : communityNotActive

    const refferalsLinkIcon = router.pathname === '/refferalspage' ? refferalActive : refferalNotActive
    const fqasLinkIcon = router.pathname === '/faqspage' ? faqActive : faqsNotActive

    // const changeLinkClass = changeLink == "profile" ? "active-link-name" : "not-active-link-name"
    return (
        <div className='refferal-links-con'>
            <div>
                <div className="logout-con">
                    <Link href="/profilepage" passHref className={router.pathname === '/profilepage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={profilLinkIcon} alt="" height={20} width={20} />

                        <h2>Profile</h2>
                    </Link>
                </div>
                <div className="logout-con">
                    <Link href="/feedbackpage" passHref className={router.pathname === '/feedbackpage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={feedbackLinkIcon} alt="" height={20} width={20} />
                        <h2>Feedback & Support</h2>
                    </Link>
                </div>
                <div className="logout-con">
                    <Link href="/communitypage" passHref className={router.pathname === '/communitypage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={communityLinkIcon} alt="" height={20} width={20} />
                        <h2>Community</h2>
                    </Link>
                </div>
                <div className="logout-con">
                    <Link href="/refferalspage" passHref className={router.pathname === '/refferalspage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={refferalsLinkIcon} alt="" height={20} width={20} />
                        <h2>Refferals</h2>
                    </Link>
                </div>
                <div className="logout-con" >
                    <Link href="/faqspage" passHref className={router.pathname === '/faqspage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={fqasLinkIcon} alt="" height={20} width={20} />
                        <h2>FAQs</h2>
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
