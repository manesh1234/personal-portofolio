
import React, { useState } from 'react'
import styles from '../index.module.css';
import Typewriter from 'typewriter-effect';
import about_img from '../assets/about_img.jpeg';
import leetcode from '../assets/leetcode.jpg';
import gfg from '../assets/gfg.png';
import link_img from '../assets/link_img.png';

const About = () => {
    const [activeLeetcodeState, setLeetcodeState] = useState('not active');
    const [activeGfgState, setGfgState] = useState('not active');
    const leetcode_enter = () => {
        setLeetcodeState('active');
    }
    const leetcode_leave = () => {
        setLeetcodeState('not active');
    }
    const gfg_enter = () => {
        setGfgState('active');
    }
    const gfg_leave = () => {
        setGfgState('not active');
    }

    return (
        <section id={styles.about}>
            <h5>Get to know</h5>
            <h2>
                <Typewriter
                    options={{
                        strings: ["About myself and my coding profiles", "I always write optimsed code which use less time and space complexities"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            <div className={styles.image_box}>
                <div className={styles.left}>
                    <img src={about_img} alt="about_img" />
                </div>
                <div className={styles.right}>
                    <a href="https://leetcode.com/maneshram/" > <img width={30} height={170} onMouseEnter={leetcode_enter} onMouseLeave={leetcode_leave} src={activeLeetcodeState === 'not active' ? leetcode : link_img} alt="leetcode" /></a>
                    <a href="https://auth.geeksforgeeks.org/user/maneshram20/practice/" > <img width={30} height={200} onMouseEnter={gfg_enter} onMouseLeave={gfg_leave} src={activeGfgState === 'not active' ? gfg : link_img} alt="gfg" /></a>
                </div>
            </div>
        </section>
    )
}

export default About