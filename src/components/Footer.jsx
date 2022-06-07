
import React from 'react'
import styles from '../index.module.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer>
            <a href="#" className={styles.footer_logo}>Manesh Ram</a>
            <ul className={styles.permalinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#src_about__9gcjy">About</a></li>
                <li><a href="#src_experience__XpwW+">Experience</a></li>
                <li><a href="#src_projects__vV-IJ">Projects</a></li>
                <li><a href="#src_contact__JnrQG">Contact</a></li>
            </ul>
            <div className={styles.footer_socials}>
                <a href="https://www.facebook.com/manish.ram.73744/"><FaFacebookSquare /></a>
                <a href="https://www.instagram.com/call_me_manesh/"><BsInstagram /></a>
                <a href="https://twitter.com/ManeshRam4"><BsTwitter /></a>
            </div>
            <div className={styles.footer_copyright}>
                <h3>Made with <span style={{ color: 'red' }}>❤</span> by manesh Ram</h3>
                <h4>Copyrights <BiCopyright className={styles.footer_end_link}/> 2022 <a href="https://www.linkedin.com/in/manesh-ram/"><AiOutlineLink className={styles.footer_end_link}/>Manesh Ram</a> </h4>
            </div>
        </footer>
    )
}

export default Footer;