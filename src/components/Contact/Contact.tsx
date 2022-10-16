import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return ( 
        <div className="contactPage">
            <img src="grid.png" alt="" className="gridBG" />
            <h1 data-aos="fade-down">About the Author</h1>
            <div className="info">
            <img src="profile.jpeg" alt="profile" />
            <div >
                <h3>&emsp;Hello my name is Arnel Jan Sarmiento! <span>
                A coffee enthusiast and Computer Science student at the
                University of the Philippines Mindanao. I believe
                in the power of learning and teamwork. I am actively looking for
                opportunities to collaborate and create meaningful projects in tech.
                </span></h3>
                <div className="social-buttons">
                    <a href="mailto:rneljan@gmail.com" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--mail" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.facebook.com/Arnel.Jansarmiento.2003/" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.linkedin.com/in/ArJSarmiento/" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/ArJSarmiento/" target="_blank" rel="noreferrer" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Contact;