import "../style/home.css"
import blob from "../assets/blob3.gif"
import progammer from "../assets/transparent-programmer-laptop-man-armchair-work-man-in-armchair-using-laptop-for-workentertainmen661931a65fa392.77797011.png"
const Home = () => {
    return ( 
        <div className="home-component">
            <div className="home-info-container">
                <div className="name-and-details">
                    <h1>Hey There</h1>
                    <h2>I'm <span>Sandeep Sreekumar</span></h2>
                    <h3>I'm a <span>Front-End</span> Developer</h3>
                </div>
                <div className="download-section">
                    <input className="mail" type="button" value="Mail" />
                    <input className="resume" type="button" value="Resume" />
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
}
 
export default Home;