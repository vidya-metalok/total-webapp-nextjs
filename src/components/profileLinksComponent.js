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
    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const [isFeedbackHovered, setIsFeedbackHovered] = useState(false)
    const [isCommunityHovered, setIsCommunityHovered] = useState(false)
    const [isReferralHovered, setIsReferralHovered] = useState(false)
    const [isTermsHovered, setIsTermsHovered] = useState(false)
    const [isAboutHovered, setIsAboutHovered] = useState(false)
    const [isFaqsHovered, setIsFaqsHovered] = useState(false)





    const handleProfileHover = () => {
        setIsProfileHovered(true)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)
        setIsAboutHovered(false)
        setIsReferralHovered(false)
        setIsFaqsHovered(false)

    }
    const handleMouseProfileLeave = () => {
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)
        setIsAboutHovered(false)
        setIsReferralHovered(false)
        setIsFaqsHovered(false)


    }

    const handleFeedbackHover = () => {
        setIsFeedbackHovered(true)
        setIsProfileHovered(false)

        setIsCommunityHovered(false)
        setIsTermsHovered(false)
        setIsAboutHovered(false)
        setIsReferralHovered(false)
        setIsFaqsHovered(false)

    }
    const handleMouseFeedbackLeave = () => {
        setIsFeedbackHovered(false)
        setIsProfileHovered(false)
        setIsCommunityHovered(false)
        setIsReferralHovered(false)
        setIsAboutHovered(false)
        setIsTermsHovered(false)
        setIsFaqsHovered(false)

    }
    const handleCommunityHover = () => {
        setIsCommunityHovered(true)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)

        setIsTermsHovered(false)
        setIsAboutHovered(false)
        setIsReferralHovered(false)
        setIsFaqsHovered(false)

    }
    const handleMouseCommunityLeave = () => {
        setIsCommunityHovered(false)
        setIsFeedbackHovered(false)
        setIsProfileHovered(false)
        setIsReferralHovered(false)
        setIsAboutHovered(false)
        setIsTermsHovered(false)
        setIsFaqsHovered(false)

    }

    const handleReferralHover = () => {
        setIsReferralHovered(true)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)
        setIsAboutHovered(false)

        setIsFaqsHovered(false)

    }
    const handleMouseReferralLeave = () => {
        setIsReferralHovered(false)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)
        setIsAboutHovered(false)

        setIsFaqsHovered(false)


    }
    const handleTermsOfServeHover = () => {
        setIsTermsHovered(true)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)

        setIsAboutHovered(false)
        setIsReferralHovered(false)
        setIsFaqsHovered(false)

    }
    const handleMouseTermsOfServiceLeave = () => {
        setIsTermsHovered(false)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)

        setIsAboutHovered(false)
        setIsReferralHovered(false)
        setIsFaqsHovered(false)

    }
    const handleAboutHover = () => {
        setIsAboutHovered(true)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)

        setIsReferralHovered(false)
        setIsFaqsHovered(false)

    }
    const handleMouseAboutLeave = () => {
        setIsAboutHovered(false)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)

        setIsReferralHovered(false)
        setIsFaqsHovered(false)

    }
    const handleFaqsHovered = () => {
        setIsFaqsHovered(true)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)
        setIsAboutHovered(false)
        setIsReferralHovered(false)


    }
    const handleFaqsLeave = () => {
        setIsFaqsHovered(false)
        setIsProfileHovered(false)
        setIsFeedbackHovered(false)
        setIsCommunityHovered(false)
        setIsTermsHovered(false)
        setIsAboutHovered(false)
        setIsReferralHovered(false)

    }


    const profilLinkIcon = isProfileHovered || router.pathname === '/profilepage' ? profileActive : profileNotActive
    const feedbackLinkIcon = isFeedbackHovered || router.pathname === '/feedbackpage' ? feedbackActive : feedbackNotActive
    const communityLinkIcon = isCommunityHovered || router.pathname === '/communitypage' ? communityActive : communityNotActive

    const refferalsLinkIcon = isReferralHovered || router.pathname === '/refferalspage' ? refferalActive : refferalNotActive
    const fqasLinkIcon = isFaqsHovered || router.pathname === '/faqspage' ? faqActive : faqsNotActive

    // const changeLinkClass = changeLink == "profile" ? "active-link-name" : "not-active-link-name"
    return (
        <div className='refferal-links-con'>
            <div>
                <div className="logout-con" onMouseEnter={handleProfileHover} onMouseLeave={handleMouseProfileLeave}>
                    <Link href="/profilepage" passHref className={router.pathname === '/profilepage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={profilLinkIcon} alt="" height={20} width={20} />

                        <h2>Profile</h2>
                    </Link>
                </div>
                <div className="logout-con" onMouseEnter={handleFeedbackHover} onMouseLeave={handleMouseFeedbackLeave}>
                    <Link href="/feedbackpage" passHref className={router.pathname === '/feedbackpage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={feedbackLinkIcon} alt="" height={20} width={20} />
                        <h2>Feedback & Support</h2>
                    </Link>
                </div>
                <div className="logout-con" onMouseEnter={handleCommunityHover} onMouseLeave={handleMouseCommunityLeave}>
                    <Link href="/communitypage" passHref className={router.pathname === '/communitypage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={communityLinkIcon} alt="" height={20} width={20} />
                        <h2>Community</h2>
                    </Link>
                </div>
                <div className="logout-con" onMouseEnter={handleReferralHover} onMouseLeave={handleMouseReferralLeave}>
                    <Link href="/refferalspage" passHref className={router.pathname === '/refferalspage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={refferalsLinkIcon} alt="" height={20} width={20} />
                        <h2>Refferals</h2>
                    </Link>
                </div>
                <div className="logout-con" onMouseEnter={handleFaqsHovered} onMouseLeave={handleFaqsLeave}>
                    <Link href="/faqspage" passHref className={router.pathname === '/faqspage' ? 'active-link-name' : "not-active-link-name"}>
                        <Image src={fqasLinkIcon} alt="" height={20} width={20} />
                        <h2>FAQs</h2>
                    </Link>
                </div>
                <div className="profile-underline"></div>
            </div>
            <div className="logout-con3">
                <a href='https://metalok-testbucket.s3.ap-south-1.amazonaws.com/privacy_policy.pdf' target='_blank' onMouseEnter={handleTermsOfServeHover} onMouseLeave={handleMouseTermsOfServiceLeave}>Terms of Service</a>
                <a href='https://www.sportsverse.trade/' target='_blank' onMouseEnter={handleAboutHover} onMouseLeave={handleMouseAboutLeave}>About</a>

            </div>





        </div>
    )
}

export default ProfileLinksComponent
