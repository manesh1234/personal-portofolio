import Typewriter from 'typewriter-effect';
import styles from '../index.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { ImHtmlFive } from 'react-icons/im';
import { FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiNodedotjs, SiPhp, SiMysql, SiMongodb, SiPython } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const Experience = () => {
    return (
        <section id={styles.experience}>
            <h5>My Skills and My Experience</h5>
            <h2>
                <Typewriter
                    options={{
                        strings: ["Always Learning new Technologies", "Primary strength is DSA and competetive coding", "amazing problem solving skills"],
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
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>Reactjs <FaReact className={styles.icons} /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>JavaScript <SiJavascript className={styles.icons} /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>HTML <ImHtmlFive className={styles.icons} /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>CSS <DiCss3 className={styles.icons} /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>Jquery <SiJquery className={styles.icons} /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>Bootstrap <FaBootstrap className={styles.icons} /></h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={styles.experience_sub}>
                    <h3>Backend Development</h3>
                    <div className={styles.experience_content}>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>NodeJs <SiNodedotjs className={styles.icons} /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>PHP <SiPhp className={styles.icons} /></h4>
                                <small className={styles.text_light}>Experienced</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>Mysql <SiMysql className={styles.icons} /></h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>mongodb <SiMongodb className={styles.icons} /></h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>JAVA <FaJava className={styles.icons} /></h4>
                                <small className={styles.text_light}>Intermediate</small>
                            </div>
                        </article>
                        <article className={styles.experience_details}>
                            <BsPatchCheckFill className={styles.experience_details_icon} />
                            <div>
                                <h4>Python <SiPython className={styles.icons} /></h4>
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