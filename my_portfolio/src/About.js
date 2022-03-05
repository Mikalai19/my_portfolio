import React, { Component } from 'react';
import './About.css'




class About extends Component {

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="tabs is-right">
                                    <ul>
                                        <li className="is-active"></li>
                                        <li><a href="/"><h1>Home</h1></a></li>
                                        <li><a href="/about"><h1>About</h1></a></li>
                                        <li><a href="/portfolio"><h1>Portfolio</h1></a></li>
                                        <li><a href="/contact"><h1>Contact</h1></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <br /> <br />  <br />  <br />
                <div class="section-light about-me" id="about-me">
                    <div class="container">
                        <div class="column is-12 about-me">
                            <h1 class="title has-text-centered section-title">About Me</h1> <br />
                        </div>
                        <div class="columns is-multiline">
                            <div
                                class="column is-6 has-vertically-aligned-content"
                                data-aos="fade-right"
                            >

                                <br />
                                <p>
                                    I am a Software Engineer with a background in Software Quality Assurance.
                                    Always ready to take on new technology and dig into the details of an issue with enjoy creating new features,
                                    solving problems in the applications I work on and coming up with the most effective solutions.
                                    I recently finished General Assembly's Software Engineering Immersive program
                                    and seek the opportunity to join a high-achieving company as a Software Engineer.


                                </p>
                                <br />
                                <div class="is-divider"></div>

                            </div>
                            <div class="column is-6 right-image " data-aos="fade-left">
                                <div class="card-content skills-content">

                                    <div class="content">

                                        <article class="media">
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>JavaScript:</strong>
                                                        <br />
                                                        <progress class="progress is-primary" value="70" max="100" ></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article class="media">
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>React:</strong>
                                                        <br />
                                                        <progress class="progress is-primary" value="60" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article class="media">
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>Node.js:</strong>
                                                        <br />
                                                        <progress class="progress is-primary" value="75" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article class="media">
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>HTML5/CSS3</strong>
                                                        <br />
                                                        <progress class="progress is-primary" value="60" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article class="media">
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>Databases</strong>
                                                        <br />
                                                        <progress class="progress is-primary" value="70" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="media">
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>Python</strong>
                                                        <br />
                                                        <progress class="progress is-primary" value="70" max="100"></progress>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About;