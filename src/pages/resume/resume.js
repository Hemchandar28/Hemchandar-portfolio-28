import './resume.css';
import resumeimg from '../../assest/HemchandarResume (3).jpg';
import resume from "../../assest/HemchandarResume(1).pdf";
import { FaDownload } from "react-icons/fa";

function Resume() {
    return(
        <div className='resume-container'>
            <div className='resume-card'>
                <h1>MY RESUME</h1>
                <div className='image'>
                <img src={resumeimg} alt='resume' /></div>
                <div className='button'>
                    <a href={resume} download="HemchandarResume" className="btnAbout" >
                        Download CV <FaDownload className="downloadBtnIcon" /></a>
                </div>
            </div>
        </div>
    )
}

export default Resume;