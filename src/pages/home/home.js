import'./home.css'; 
import image1 from './1000031404-01-01.jpeg.jpg';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {
    return(
        <div className="hoomecontainer">
            <div className="homecard">
                <div className="image">
                    <img className='img1' src={image1} alt='image'/>
                </div>
                <div className="content">
                    <h1>Hi, I Am Hemchandar</h1>
                    <h3>I'm a front-end developer</h3>
                    <h4>Pursuing a role as a Front-End Developer with a passion for creating immersive user experience and to ensure that website visitors can easily interact with the page.</h4>
                    <p><Link to='/about'>About me <span><FaUserCircle/></span></Link></p>
                </div>
            </div>
        </div>
    )
}
export default Home;