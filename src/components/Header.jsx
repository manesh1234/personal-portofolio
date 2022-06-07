
import React from 'react'
import styles from '../index.module.css';
import Typewriter from 'typewriter-effect';
import ParticlesBg from 'particles-bg';
import resume from '../assets/manesh_ram_resume.pdf';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsCloudDownloadFill } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa';
import profile_pic from '../assets/profile_pic.jpg';


const Header = () => {
    return (
        <header className={`${styles.header__container}`}>
            <ParticlesBg type="lines" bg={true} />
            <h1 className={styles.text_main}>
                <Typewriter
                    options={{
                        strings: ["Hi, Im Manesh Ram , I am DSA enthusiast using C++", "upcoming Software Engineer and Full Stack Developer", "passion to code with consistency","Good communication and analytical skills"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <div className={styles.resume_links}>
                <a href={resume} download className={styles.btn}><BsCloudDownloadFill style={{ marginRight: 2 + 'em' }} />Download Resume</a>
                <a href="#src_contact__TSyg4" className={`${styles.btn} ${styles.btn_primary}`}>Let's Talk</a>
            </div>
            <div className={styles.header_socials}>
                <a href="https://www.linkedin.com/in/manesh-ram/" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/manesh1234" target="_blank"><BsGithub /></a>
                <a href="https://twitter.com/ManeshRam4" target="_blank"><BsTwitter /></a>
            </div>
            <div className={styles.my_pic}>
                <img src={profile_pic} alt={"profile_pic"}></img>
            </div>
            <div className={styles.scroll_down}>
                <div className={`${styles.box} ${styles.bounce}`}>
                    <a href="#src_contact__TSyg4"><FaAngleDoubleDown /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;