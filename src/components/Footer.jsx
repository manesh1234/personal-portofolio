import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <a href="/" className="footer_logo">Manesh Ram</a>
            <ul className="permalinks">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.facebook.com/manish.ram.73744/"><FaFacebookSquare /></a>
                <a href="https://www.instagram.com/call_me_manesh/"><BsInstagram /></a>
                <a href="https://twitter.com/ManeshRam4"><BsTwitter /></a>
            </div>
            <div className="footer_copyright">
                <h3>Made with <span style={{ color: 'red' }}>❤</span> by manesh Ram</h3>
                <div className="copyright-text">
                    Copyrights
                    <div>
                        <BiCopyright className="footer_end_link" /> 2022
                    </div>
                    <a href="https://www.linkedin.com/in/manesh-ram/"><AiOutlineLink className="footer_end_link" />Manesh Ram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;