import React from 'react'
import ProfileImage from '../../assets/Profile-image.svg'; 
import './About.css'

function About() {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h2><span>About</span> Me</h2>
            <img src="" alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={ProfileImage} alt="" width="300" height="300"/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Software Engineer at Amdocs with expertise in fullstack Java and React development. Demonstrated success in improving user experience through innovative application design and strong collaboration skills. Proficient in debugging large applications and troubleshooting to maintain efficient workflows and deliver robust solutions.</p>
                    <p>Committed to delivering high-quality solutions that drive project success.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>JAVA</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Spring Framework</p><hr style={{width:"55%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1000+</h1>
                <p>DSA Problems Solved</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Happy Clients</p>
            </div>

        </div>
    </div>
  )
}

export default About