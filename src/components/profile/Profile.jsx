import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ProfileImage from '../../assets/Profile-image.svg';
import Resume from '../../assets/Vikash_Kumar_Resume.pdf'; 
import './Profile.css'

const Profile = () => {

  const handleDownload = () => {
    alert("Note: This resume may not be up to date. Please contact me for the latest version.");
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Vikash_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <div id="profile" className="profile">
      <img src={ProfileImage} alt="Test SVG" width="400" height="400" />
      <h2><span>I'm Vikash Kumar,</span></h2>
      <div class="content">
        <h1 class="title">the Full-Stack Developer
          <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
          </div>
        </h1>
        <p class="subtitle">Focused on building scalable, reliable applications with clean, efficient code. With 2+ years of experience working with cross-functional teams, delivering solutions that meet business goals and enhance user experience.</p>
      </div>
      <div className="profile-action">
        <AnchorLink className='anchor-link' offset={30} href='#contact'><div className="profile-connect">Contact Me</div></AnchorLink>
        <div className="profile-resume" onClick={handleDownload}>Download Resume</div>
      </div>
    </div>
  )
}

export default Profile