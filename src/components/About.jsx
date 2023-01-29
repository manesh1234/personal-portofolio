import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import leetcode from '../assets/leetcode.jpg';
import gfg from '../assets/gfg.png';
import link_img from '../assets/link_img.png';

const About = () => {
    const [activeLeetcodeState, setLeetcodeState] = useState(false);
    const [activeGfgState, setGfgState] = useState(false);

    return (
        <section id="about">
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
            <div className="image_box">
                <a className="img" href="https://leetcode.com/maneshram/" target="_blank" rel="noreferrer"> <img width={30} height={170} onMouseEnter={() => setLeetcodeState(true)} onMouseLeave={() => setLeetcodeState(false)} src={activeLeetcodeState === false ? leetcode : link_img} alt="leetcode" /></a>
                <a className="img" href="https://auth.geeksforgeeks.org/user/maneshram20/practice/" target="_blank" rel="noreferrer"> <img width={30} height={200} onMouseEnter={() => setGfgState(true)} onMouseLeave={() => setGfgState(false)} src={activeGfgState === false ? gfg : link_img} alt="gfg" /></a>
            </div>
        </section>
    )
}

export default About