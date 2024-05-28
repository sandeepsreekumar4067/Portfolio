import "../style/about1.css"
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
                        <p>Hello! I'm <span>Sandeep Sreekumar</span>, a passionate and driven <span>Computer Science</span> student pursuing a B.Tech degree in <span>Computer Science and Engineering</span>. With a strong foundation in <span>Frontend development</span>, I specialize in creating dynamic and user-friendly <span>web and mobile applications</span>.</p>
                    </div>
                </div>
            </div>
            <div className="slide-container-2">

            </div>
            <div className="popup-container-3">

            </div>
        </div>
     );
}
 
export default About;