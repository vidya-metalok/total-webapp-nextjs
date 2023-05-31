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

                        <a href="https://www.facebook.com/sportsverse.trade?mibextid=ZbWKwL" target="_blank"> <Image src={facebookIcon} alt='' height={"auto"} width={"auto"} className='social-commu' /></a>
                       <a href="https://www.instagram.com/sportsverse.trade/" target="_blank"><Image src={instagramIcon} alt="" height={"auto"} width={"auto"} className='social-commu' /></a>
                       <a href="https://twitter.com/sportsverse_" target='_blank'> <Image src={twitterIcon} alt="" height={"auto"} width={"auto"} className='social-commu' /></a>
                        <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A82131455&keywords=sportsverse.trade&origin=RICH_QUERY_SUGGESTION&position=1&searchId=fdb2db8d-f2fd-47e5-bb25-f65fd7bdcd24&sid=Xkn" target="_blank"><Image src={linkedinIcon} alt="" height={"auto"} width={"auto"} className='social-commu' /></a>
                        <a href="https://t.me/+Gq8_Hu_wNaZlOTM1" target='-blank'> <Image src={telgramIcon} alt="" height={"auto"} width={"auto"} className='social-commu' /></a>
                        <a href="https://discord.com/invite/T8J5e2QAVW" target='_blank'><Image src={discordIcon} alt="" height={"auto"} width={"auto"} className='social-commu' /></a>
                        <a href=""><Image src={whatsupIcon} alt="" height={"auto"} width={"auto"} className='social-commu' /></a>
                        <a href=""><Image src={youtubeIcon} alt="" height={"auto"} width={"auto"} className='social-commu' /></a>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CommunityComponent
