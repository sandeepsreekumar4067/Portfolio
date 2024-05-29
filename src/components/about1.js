
import React, { useEffect, useRef } from 'react';
import '../style/about1.css';
import childFace from "../assets/childFace.png";

const About = () => {
    const slideContainer1Ref = useRef(null);
    const slideContainer2Ref = useRef(null);
    const popupContainer3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const slideContainers = [slideContainer1Ref, slideContainer2Ref, popupContainer3Ref];

            slideContainers.forEach(containerRef => {
                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    const isVisible = (rect.top >= 0) && (rect.bottom <= window.innerHeight);
                    if (isVisible) {
                        containerRef.current.classList.add('visible');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const openingTag = "<";
    const aboutTag = "About Me";
    const closeTag = "/>";
    return (
        <div className="about-container" id="about">
            <div className="skill-title">
                {openingTag} <span>{aboutTag}</span> {closeTag}
            </div>
            <div className="slide-container-1" ref={slideContainer1Ref}>
            <div className="polygon1">
                    <div className="polygon-about-details-1">
                        <h1>About me</h1>
                        <p>Hello! I'm <span>Sandeep Sreekumar</span>,
                         a passionate and driven <span>Computer Science</span> 
                         student pursuing a B.Tech degree in <span>Computer Science and 
                        Engineering</span>. With a strong foundation in <span>Frontend 
                        development</span>, I specialize in creating dynamic and user-friendly
                         <span>web and mobile applications</span>.</p>
                    </div>
                </div>
            </div>
            <div className="slide-container-2" ref={slideContainer2Ref}>
                <div className="polygon2">
                    <div className="polygon-about-details-2">
                        <h1>Projects & Experience</h1>
                        <p>Throughout my academic journey, I have completed numerous <span>projects</span>, particularly in <span>mobile application development</span>. Here are some highlights:</p>
                        <ul>
                            <li>Developed <span>mobile applications</span> using <span>Flutter</span> and <span>Firebase</span>, showcasing my ability to create seamless and functional <span>user experiences</span>.</li>
                            <li>Built several <span>web applications</span> with <span>React</span>, leveraging my growing knowledge in <span>modern web development</span> practices.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="popup-container-3" ref={popupContainer3Ref}>
            <div className="polygon3">
                    <div className="polygon-about-details-3">
                        <h1>What I Do</h1>
                        <p>My primary focus is on <span>Frontend development</span>, where I excel in designing and implementing <span>intuitive interfaces</span>. However, my expertise isn't <span>limited</span> to the frontend. I have <span>substantial experience</span> in <span>full-stack development</span>, allowing me to manage <span>end-to-end application development</span> processes.</p>
                    </div>
                </div>
                <div className="child">
                    <img src={childFace}  alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default About;
