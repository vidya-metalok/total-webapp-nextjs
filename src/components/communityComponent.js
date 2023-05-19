import React from 'react'
import Image from 'next/image'
import ProfileLinksComponent from './profileLinksComponent'
import facebookIcon from "../../public/images/facebooks-icon.svg"
import instagramIcon from "../../public/images/instagram-icon.svg"
import twitterIcon from "../../public/images/twitter-icon-1.svg"
import linkedinIcon from "../../public/images/linkedin-icon.svg"
import telgramIcon from "../../public/images/telegram-icon.svg"
import whatsupIcon from "../../public/images/whatsup-icon.svg"
import youtubeIcon from "../../public/images/youtube-icon.svg"
import discordIcon from '../../public/images/discord-img.svg'


const CommunityComponent = () => {
    return (
        <div className='background-con'>
            <div className="logout-main-con">
                <ProfileLinksComponent />
                <div className='community-main'>
                    <h2>Join Our Community!</h2>
                    <p>Connect with us and stay updated on latest technologies and our company news.We stay in touch with the community on major social media & communication channels and are just a click away</p>

                    <div className='commu-icons'>
                        <Image src={facebookIcon} alt='' height={"auto"} width={"auto"} className='social-commu' />
                        <Image src={instagramIcon} alt="" height={"auto"} width={"auto"} className='social-commu' />
                        <Image src={twitterIcon} alt="" height={"auto"} width={"auto"} className='social-commu' />
                        <Image src={linkedinIcon} alt="" height={"auto"} width={"auto"} className='social-commu' />
                        <Image src={telgramIcon} alt="" height={"auto"} width={"auto"} className='social-commu' />
                        <Image src={discordIcon} alt="" height={"auto"} width={"auto"} className='social-commu' />
                        <Image src={whatsupIcon} alt="" height={"auto"} width={"auto"} className='social-commu' />
                        <Image src={youtubeIcon} alt="" height={"auto"} width={"auto"} className='social-commu' />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CommunityComponent
