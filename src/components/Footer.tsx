import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer id="footer">
      <div>  
        <p>Keep in touch</p>
        <p>|</p>
        <a href="https://github.com/marinolb" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/marinolb/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:marinolb92@gmail.com" aria-label="Email"><EmailIcon /></a>
      </div>
    </footer>
  );
}

export default Footer;