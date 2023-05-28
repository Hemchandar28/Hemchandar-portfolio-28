import { FaDownload,FaGraduationCap,FaLaptopCode } from "react-icons/fa";
import './about.css';
import resume from "../../assest/HemchandarResume(1).pdf";
import htmlIcon from "../../assest/html.png";
import cssIcon from "../../assest/css.png";
import reactIcon from "../../assest/react.png";
import javascriptIcon from "../../assest/javascript.png";
import bootstrapIcon from "../../assest/bootstrap.png";

function About() {
    return(
        <section className="about-container">
            <h1>ABOUT ME</h1>
            <h2>Personal Info</h2>
            <div className="card1-about">
            <div className="box">
            <h3> Name : <span>  Hemchandar</span> </h3>
            <h3> Age : <span> 23 </span> </h3>
            <h3> Email : <span> hemchandargajendran28@gmail.com </span> </h3>
            <h3>
             Address : <span>
               NO 9, Kamalapattu Street, Pazhaveli, Chengalpattu - 603111 </span>
            </h3>
          </div>
          <div className="box">
            <h3> GitHub : <span> https://github.com/Hemchandar28 </span> </h3>
            <h3> Linkedin : <span> https://www.linkedin.com/in/hemchandar-gajendran-8a65b0252 </span> </h3>
            <h3> Skill : <span> Front-End Developer</span> </h3>
            <h3> Language : <span> Tamil, English</span> </h3>
          </div>
            </div>
            <div className="aboutMeBtn">
          <a href={resume} download="HemchandarResume" target='_blank'  className="btnAbout" >
            Download CV
              <FaDownload className="downloadBtnIcon" />
          </a>
      </div>
           
            <h1>MY SKILLS</h1>
            <div className="card2-about">
          <div className="box">
            <img src={htmlIcon} alt="htmlIcon"/>
            <h3> html </h3>
          </div>
          <div className="box">
            <img src={cssIcon} alt="cssIcon"/>
            <h3> css </h3>
          </div>
          <div className="box">
            <img src={javascriptIcon} alt="javascriptIcon"/>
            <h3> javascript </h3>
          </div>
          <div className="box">
            <img src={bootstrapIcon} alt="bootstrapIcon"/>
            <h3> bootstrap </h3>
          </div>
          <div className="box">
            <img src={reactIcon} alt="reactIcon"/>
            <h3> React </h3>
          </div>
        </div>
            <h1>MY EDUCATION</h1>
            <div className="card3-about">
            <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Jun 2014 - Mar 2015 </span>
            <h3> ICSE 10TH </h3>
            <p> I scored 71% in Indian Certificate Of Secondary Education Board from Seventh-Day Adventist Matric Higher Secondary School Chengalpattu-603111. </p>
          </div>

          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Jun 2016 - Apr 2017 </span>
            <h3> Higher Secondary 12TH </h3>
            <p> I scored 65% in Indian Certificate Of Secondary Education Board from Seventh-Day Adventist Matric Higher Secondary School Chengalpattu-603111.</p>
          </div>

          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Aug 2017 - Mar 2021 </span>
            <h3> B.E (Electrical and Electronics Engineering) </h3>
            <p> I completed my B.E (Electrical and Electronics Engineering) degree with 7.76 CGPA from SRM Valliammai Engineering College, Potheri ,Kattankulathur, Chennai </p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span>Dec 2022 - May 2023 </span>
            <h3> Front-End Developer (Course) </h3>
            <p> I completed my Front-End Developer course for a duration of 5 month from Login360 Velachery, Chennai. </p>
          </div> 
            </div>
        </section>
    )
}
export default About