import React from 'react';
import githubicon from '../../assets/img/github-icon.svg';
import linkedinicon from '../../assets/img/linkedin-icon.svg';
import instaicon from '../../assets/img/insta-icon.svg';
import spotifyicon from '../../assets/img/spotify-icon.svg';
import discordicon from '../../assets/img/discord-icon.svg';
import "./footer.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="social-icons">
                <a href="https://github.com/waseemnaseeven"><img src={githubicon} alt="github"/></a>
                <a href="#linkedin"><img src={linkedinicon} alt="linkedin"/></a>
                <a href="#instagram"><img src={instaicon} alt="insta"/></a>
                <a href="#spotify"><img src={spotifyicon} alt="spotify"/></a>
                <a href="#discord"><img src={discordicon} alt="discord"/></a>
                <a href="#patreon"><img src={''} alt=""/></a>
            </div>
            <p>
                © Waseem Naseeven {currentYear} - All rights reserved 
            </p>
        </footer>
    )
}

export default Footer;