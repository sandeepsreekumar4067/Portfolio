import "../style/about1.css"
import childFace from "../assets/childFace.png"
const About = () => {
    const openingTag = "<"
    const aboutTag ="About me"
    const closeTag = "/>"
    return ( 
        <div className="about-container">
            <div className="skill-title">
                {openingTag} <span>{aboutTag}</span> {closeTag}
            </div>
            <div className="slide-container-1">
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
            <div className="slide-container-2">
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
            <div className="popup-container-3">
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