import './contact.css';
import {FaMapMarkedAlt,FaEnvelope,FaPhone,FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";


function Contact() {
  return (
    <section>
        <div className='contact-container'>
            <h1>CONTACT ME</h1>

            <div className='contact-card'>

            <div className='contact-info'>
                
                <h2>GET IN TOUCH</h2>
                <p>If you want to get in touch with me, the best way is to send me an email at the below email Id. I check my 
            email regularly, and I'll get back to you as soon as possible.</p>
            
            <div className='box'>
                <div className='info'>
                    <i> <FaMapMarkedAlt/> </i>  <h3> Address </h3></div>
                    <p>No 9, Kamalapattu Street, Pazhaveli, Chengalpattu-603111, Tamil Nadu.</p>
                    </div>

            <div className='box'>
                <div className='info'>
                    <i> <FaEnvelope/> </i>  <h3> Email </h3></div>
                    <p>hemchandargajendran28@gmail.com</p>
                    </div>

            <div className='box'>
                <div className='info'>
                    <i> <FaPhone/> </i>  <h3> Phone </h3></div>
                    <p>+91-638-105-6991</p>
                    </div>

            <div className='social-icons'>
                <ul>
                    <li><a href='https://www.facebook.com/hemchandarpraveen28/' target='_blank'><FaFacebook className="mediaIcons"/></a></li>
                    <li><a href='https://twitter.com/g_hem28' target='_blank'><FaTwitter className="mediaIcons"/></a></li>
                    <li><a href='https://instagram.com/hemchandar28?igshid=ZGUzMzM3NWJiOQ==' target='_blank'><FaInstagram className="mediaIcons"/></a></li>
                    <li><a href='https://www.linkedin.com/in/hemchandar-gajendran-8a65b0252' target='_blank'><FaLinkedin className="mediaIcons"/></a></li>
                    <li><a href='https://github.com/Hemchandar28' target='_blank'><FaGithub className="mediaIcons"/></a></li>
                </ul>
                </div>        

            </div>        
            <div className='message-box'>

                <form>

                    <div className='input-box'>
                        <input type='text' name='name' placeholder='your name' />
                        <input type='number' name='number' placeholder='your number' />
                    </div>

                    <div className='input-box'>
                        <input type='email' name='name' placeholder='your mail' />
                        <input type='text' name='number' placeholder='your subject' />
                    </div>

                    <textarea name="message"  placeholder="your message" id="" cols="30" rows="10" />
                    
                    <input type="submit" value="Send Message" className="btn" />

                </form>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact