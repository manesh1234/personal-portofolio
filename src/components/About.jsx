
import React from 'react'
import styles from '../index.module.css';
import Typewriter from 'typewriter-effect';
import about_img from '../assets/about_img.jpeg';

const About = () => {
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
                    <a href="https://leetcode.com/maneshram/" className={styles.row_1}></a>
                    <a href="https://auth.geeksforgeeks.org/user/maneshram20/practice/" className={styles.row_2}></a>
                </div>
            </div>
        </section>
    )
}

export default About