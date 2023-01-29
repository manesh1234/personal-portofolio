import Typewriter from 'typewriter-effect';
import { BsPatchCheckFill } from 'react-icons/bs';
import { ImHtmlFive } from 'react-icons/im';
import { FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiNodedotjs, SiPhp, SiMysql, SiMongodb, SiPython } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const Experience = () => {
    return (
        <section id="experience">
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
            <div className="experience_container">
                <div className="experience_sub">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Reactjs <FaReact className="icons" /></h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>JavaScript <SiJavascript className="icons" /></h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>HTML <ImHtmlFive className="icons" /></h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>CSS <DiCss3 className="icons" /></h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Jquery <SiJquery className="icons" /></h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Bootstrap <FaBootstrap className="icons" /></h4>
                                <small className="text_light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_sub">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>NodeJs <SiNodedotjs className="icons" /></h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>PHP <SiPhp className="icons" /></h4>
                                <small className="text_light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Mysql <SiMysql className="icons" /></h4>
                                <small className="text_light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>mongodb <SiMongodb className="icons" /></h4>
                                <small className="text_light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>JAVA <FaJava className="icons" /></h4>
                                <small className="text_light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details_icon" />
                            <div>
                                <h4>Python <SiPython className="icons" /></h4>
                                <small className="text_light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;