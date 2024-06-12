import "../style/connect.css"
import instagram from "../assets/instagram.png"
import github from "../assets/languageIcons/github.png"
import linkedin from "../assets/Linkedin.png"
import myPic from "../assets/myPic2.jpg"
import X from "../assets/X.png"
import { useTypewriter } from "react-simple-typewriter"
const Connect = () => {
    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/_.hombre_fuerte._", "_blank");
      };
      const handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/sandeep-sreekumar4067/", "_blank");
      };
      const handleGithubinClick = () => {
        window.open("https://github.com/sandeepsreekumar4067", "_blank");
      };
      const handleTwitterClick = () => {
        window.open("https://x.com/sandeep77368", "_blank");
      };
    const [text] = useTypewriter({
        words:["I am continuously expanding my skill set, currently diving deeper intoweb development and exploring new technologies to stay ahead in the field. My commitment to learning and my enthusiasm for technology drive me to deliver high-quality and innovative solutions ."],
        loop:1,
        typeSpeed:80
    })
    return ( 
        <div className="connect-container" id="connect" >
            <div className="connect-description">
                <h1>Let's <span>Connect</span> Together</h1>
                <p> {text}</p>
            </div>
        <div className="social">
            <div className="social-media-links">
                <h1>You can find me on</h1>
                <div className="link-container">
                    <div className="links" onClick={handleInstagramClick} >
                        <img src={instagram} alt="" />
                        Instagram
                    </div>
                    <div className="links" onClick={handleGithubinClick}>
                        <img src= {github} alt="" />
                        Github
                    </div>
                    <div className="links" onClick={handleLinkedinClick}>
                        <img src={linkedin} alt="" />
                        Linkedin
                    </div>
                    <div className="links" onClick={handleTwitterClick}>
                        <img src={X} alt="" />
                        X.com
                    </div>
                </div>
            </div>
            <div className="profile-pic">
                <div className="image-container">
                    <img src= {myPic} alt="" />
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Connect;