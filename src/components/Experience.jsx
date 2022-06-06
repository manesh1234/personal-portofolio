
import React from 'react'
import Typewriter from 'typewriter-effect';
import styles from '../index.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { ImHtmlFive } from 'react-icons/im';


function Experience() {
    return (
        <section id={styles.experience}>
            <h5>My Skills and My Experience</h5>
            <h2>
                <Typewriter
                    options={{
                        strings: ["Main strength is DSA and competetive coding", "amazing problem solving skills"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            <div className={styles.experience_container}>
                <div className={styles.experience_sub}>
                    <h3>Frontend Development</h3>
                    <div className={styles.experience_content}>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>Reactjs</h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>HTML <ImHtmlFive /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>CSS</h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>Jquery</h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={styles.experience_sub}>
                    <h3>Backend Development</h3>
                    <div className={styles.experience_content}>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>NodeJs <ImHtmlFive /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>PHP</h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>Mysql</h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>mongodb</h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>JAVA</h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon}/>
                            <div>
                                <h4>Python</h4>
                                <small className={styles.text_light}>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;