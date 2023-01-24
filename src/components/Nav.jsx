import { useState } from 'react';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FaBook } from 'react-icons/fa';
import { FcServices } from 'react-icons/fc';
import { BsMessenger } from 'react-icons/bs';
import styles from '../index.module.css';

const Nav = () => {
    const [activeState, setState] = useState('/');
    return (
        <nav>
            <a href="/" onClick={() => setState('/')} className={activeState === '#' ? styles.active : ''} title="home"><AiFillHome /></a>
            <a href="#src_about__WkpXk" onClick={() => setState('#about')} className={activeState === '#about' ? styles.active : ''} title="about"><AiOutlineUser /></a>
            <a href="#src_experience__IBD2j" onClick={() => setState('#experience')} className={activeState === '#experience' ? styles.active : ''} title="experience"><FaBook /></a>
            <a href="#src_projects__2QSnh" onClick={() => setState('#services')} className={activeState === '#projects' ? styles.active : ''} title="projects"><FcServices /></a>
            <a href="#src_contact__RqzIk" onClick={() => setState('#contact')} className={activeState === '#contact' ? styles.active : ''} title="contact"><BsMessenger /></a>
        </nav>
    )
}

export default Nav;