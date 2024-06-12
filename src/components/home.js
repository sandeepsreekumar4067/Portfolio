import "../style/home.css";
import blob from "../assets/blob4.gif";
import progammer from "../assets/transparent-programmer-laptop-man-armchair-work-man-in-armchair-using-laptop-for-workentertainmen661931a65fa392.77797011.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const email = "sandeepsreekumar4067@gmail.com";
    const [text] = useTypewriter({
        words: ["Front-End Developer", "Back-End Developer"],
        loop: false
    });

    const handleMailButtonClick = () => {
        window.location.href = `mailto:${email}`;
    };

    // Split the text to apply custom color to "Developer"
    const splitText = text.split(' ');
    const firstPart = splitText.slice(0, -1).join(' ');
    const lastWord = splitText[splitText.length - 1];

    return (
        <div className="home-component" id="home">
            <div className="home-info-container">
                <div className="name-and-details">
                    <h1>Hey There</h1>
                    <h2>I'm <span className="firstpart">Sandeep Sreekumar</span></h2>
                    <div className="wrapper">
                        <h3>
                            I'm a <span className="firstpart">{firstPart}</span> <span className={lastWord === 'Developer' ? 'white-developer' : ''}>{lastWord}</span>
                        </h3>
                        <Cursor cursorColor="white" cursorStyle="|" />
                    </div>
                </div>
                <div className="download-section">
                    <input className="mail" type="button" value="Mail" onClick={handleMailButtonClick} />
                    <a href="/me.pdf" download className="resume">Resume</a>
                </div>
            </div>
            <div className="blob-and-programmer">
                <div className="blob">
                    <img src={blob} alt="" />
                </div>
                <div className="programmer">
                    <img src={progammer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
