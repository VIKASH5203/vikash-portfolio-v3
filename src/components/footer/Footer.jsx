import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Footer.css';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/LinkedInNew.png';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Vikash Kumar</h3>
            <p>Software Developer passionate about creating innovative solutions</p>
          </div>
          
          <div className="footer-center">
            <div className="footer-links">
              <AnchorLink className='anchor-link' offset={30} href='#about'><div>About</div></AnchorLink>
              <AnchorLink className='anchor-link' offset={30} href='#experience'><div>Experience</div></AnchorLink>
              <AnchorLink className='anchor-link' offset={30} href='#projects'><div>Projects</div></AnchorLink>
              <AnchorLink className='anchor-link' offset={30} href='#contact'><div>Contact Me</div></AnchorLink>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-social">
              <a href="https://github.com/VIKASH5203" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/vikash-kumar-965357211/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>Designed & Developed with ❤️ by Vikash Kumar © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
