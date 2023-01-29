import Typewriter from 'typewriter-effect';
import ParticlesBg from 'particles-bg';
import resume from '../assets/manesh_ram_resume.pdf';
import { BsLinkedin, BsGithub, BsTwitter, BsCloudDownloadFill } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa';
import profile_pic from '../assets/profile_pic.jpg';

const Header = () => {
    return (
        <header className="header__container">
            <ParticlesBg type="lines" bg={true} />
            <h1 className="text_main">
                <Typewriter
                    options={{
                        strings: ["Hi, Im Manesh Ram , I am DSA enthusiast using C++", "upcoming Software Engineer and Full Stack Developer", "passion to code with consistency", "Good communication and analytical skills"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <div className="resume_links">
                <a href={resume} download className="btn"><BsCloudDownloadFill className="download_icon" />Download Resume</a>
                <a href="#contact" className="btn btn_primary">Let's Talk</a>
            </div>
            <div className="header_socials">
                <a href="https://www.linkedin.com/in/manesh-ram/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/manesh1234" target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href="https://twitter.com/ManeshRam4" target="_blank" rel="noreferrer"><BsTwitter /></a>
            </div>
            <div className="my_pic">
                <img src={profile_pic} alt="profile_pic"></img>
            </div>
            <div className="scroll_down">
                <div className="box bounce">
                    <a href="#contact"><FaAngleDoubleDown /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;