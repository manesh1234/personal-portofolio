import Typewriter from 'typewriter-effect';
import { FaLink } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
    return (
        <section id="projects">
            <h2>
                <Typewriter
                    options={{
                        strings: ["check all my Live projects", "by clicking u will redirect to website"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            <div className="projects_container">
                <div className="projects_content">
                    <div>
                        <h2 className="content_heading">{"1) Summit Minds internship problem"}</h2>
                        <h4>used the large json data and performed varoius operations to implement the required functionalities</h4>
                        <div className="projects_links">
                            <a href="https://maneshram-summitminds.netlify.app/" target="_blank" rel="noreferrer"><FaLink /></a>
                            <a href="https://github.com/manesh1234/Summit-Minds-InternShip" target="_blank" rel="noreferrer"><BsGithub /></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="content_heading">{"2) Basic Calculator"}</h2>
                        <h4>Basic Calculator that works taking input from user keyboard or even by clicking buttons on UI .</h4>
                        <h4>Done all the required validations like number input,infinity</h4>
                        <div className="projects_links">
                            <a href="https://manesh-calculator.netlify.app//" target="_blank" rel="noreferrer"><FaLink /></a>
                            <a href="https://github.com/manesh1234/Calculator.github.io" target="_blank" rel="noreferrer"><BsGithub /></a>
                        </div>
                    </div>
                </div>
                <div className="projects_content">
                    <div>
                        <h2 className="content_heading">{"3) User Data Collection form using ReactJs"}</h2>
                        <h4>Basic Calculator that works taking input from user keyboard or even by clicking buttons on UI</h4>
                        <h4>used best optimisation methods,state lifting and has a overlay model to display all required validations like age,non empty fields</h4>
                        <div className="projects_links">
                            <a href="https://user-data-form-using-react.netlify.app/" target="_blank" rel="noreferrer"><FaLink /></a>
                            <a href="https://github.com/manesh1234/user-data-form-using-react" target="_blank" rel="noreferrer"><BsGithub /></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="content_heading">{"4) Pig Game"}</h2>
                        <h4>very interesting game for 2 players , please check readme for game T&C</h4>
                        <div className="projects_links">
                            <a href="https://maneshram-pig-game.netlify.app/" target="_blank" rel="noreferrer"><FaLink /></a>
                            <a href="https://github.com/manesh1234/Pig-Game.github.io" target="_blank" rel="noreferrer"><BsGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;