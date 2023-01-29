import { useState } from 'react';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FaBook } from 'react-icons/fa';
import { FcServices } from 'react-icons/fc';
import { BsMessenger } from 'react-icons/bs';

const Nav = () => {
    const [activeState, setState] = useState('/');
    return (
        <nav>
            <a href="/" onClick={() => setState('/')} className={activeState === '#' ? "active" : ''} title="home"><AiFillHome /></a>
            <a href="#about" onClick={() => setState('#about')} className={activeState === '#about' ? "active": ''} title="about"><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setState('#experience')} className={activeState === '#experience' ? "active" : ''} title="experience"><FaBook /></a>
            <a href="#projects" onClick={() => setState('#services')} className={activeState === '#projects' ? "active" : ''} title="projects"><FcServices /></a>
            <a href="#contact" onClick={() => setState('#contact')} className={activeState === '#contact' ? "active" : ''} title="contact"><BsMessenger /></a>
        </nav>
    )
}

export default Nav;